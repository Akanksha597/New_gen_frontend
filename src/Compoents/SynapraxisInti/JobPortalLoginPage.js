"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const AUTH_URL = process.env.NEXT_PUBLIC_AUTH_URL || "http://localhost:1002/api/v1/qa/auth/sign-in";
// const AUTH_URL = process.env.NEXT_PUBLIC_AUTH_URL || "https://api-gateway.synapraxis.com/api/v1/qa/auth/sign-in";

export default function JobPortalLoginPage() {
  const router = useRouter();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch(AUTH_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-synapraxis-environment": "dev",
        },
        body: JSON.stringify({ userName, password }),
      });

      const data = await res.json();

      if (!res.ok || data?.authDetails?.valid !== true) {
        throw new Error(data?.object?.message || "Login failed");
      }

      const token = data?.authDetails?.token;
      const apiKey = data?.authDetails?.apiKey;

      if (!token || !apiKey) {
        throw new Error("Token / apiKey missing in response");
      }

      localStorage.setItem("SYNAPRAxis_TOKEN", token);
      localStorage.setItem("SYNAPRAxis_API_KEY", apiKey);
      localStorage.setItem("SYNAPRAxis_AUTH", JSON.stringify(data?.authDetails));

    //   router.push("https://jobs.newgensoftech.com/vulture-industries/master-dashboard");
      router.push("http://localhost:4200/vulture-industries/master-dashboard");
    } catch (err) {
      setError(err?.message || "Something went wrong");
      router.push("https://newgensoftech.com/JobPortal");
    } finally {
      setLoading(false);
      router.push("https://newgensoftech.com/JobPortal");
    }
  }

  return (
    <div style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: 16 }}>
      <div style={{ width: "100%", maxWidth: 420, border: "1px solid #ddd", borderRadius: 12, padding: 20 }}>
        <h1 style={{ fontSize: 22, fontWeight: 700, marginBottom: 6 }}>Synapraxis Login</h1>
        <p style={{ marginTop: 0, color: "#666", marginBottom: 16 }}>
          Sign in to continue
        </p>

        <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12 }}>
          <div style={{ display: "grid", gap: 6 }}>
            <label>User Name</label>
            <input
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="email / username"
              style={{ padding: 10, borderRadius: 10, border: "1px solid #ccc" }}
              required
            />
          </div>

          <div style={{ display: "grid", gap: 6 }}>
            <label>Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="password"
              style={{ padding: 10, borderRadius: 10, border: "1px solid #ccc" }}
              required
            />
          </div>

          {error ? (
            <div style={{ color: "crimson", fontSize: 14 }}>{error}</div>
          ) : null}

          <button
            type="submit"
            disabled={loading}
            style={{
              padding: 12,
              borderRadius: 10,
              border: "none",
              cursor: loading ? "not-allowed" : "pointer",
              fontWeight: 700,
            }}
          >
            {loading ? "Signing in..." : "Login"}
          </button>

          <button
            type="button"
            onClick={() => {
              localStorage.removeItem("SYNAPRAxis_TOKEN");
              localStorage.removeItem("SYNAPRAxis_API_KEY");
              localStorage.removeItem("SYNAPRAxis_AUTH");
              alert("Cleared local tokens");
            }}
            style={{ padding: 10, borderRadius: 10, border: "1px solid #ccc", background: "transparent" }}
          >
            Clear Tokens
          </button>
        </form>
      </div>
    </div>
  );
}
