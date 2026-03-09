// "use client";

// import React, { useState, useEffect } from "react";
// import { useSearchParams } from "next/navigation";
// import { Container, Row, Col, Form, Button, Card, Spinner } from "react-bootstrap";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Image from "next/image";
// export default function EnrollmentForm() {
//   const searchParams = useSearchParams();
//   const batchId = searchParams.get("batchId");

//   const [formData, setFormData] = useState({
//     studentName: "",
//     whatsappNumber: "",
//     email: "",
//     mobile: "",
//     panNumber: "",
//     passoutYear: "",
//     qualification: "",
//     batchName: "",
//     fees: "",
//     installmentType: "First Installment",
//     adhaarNumber: "",
//     referenceSource: "",
//     branch: "",
//     workingStatus: "",
//     instructorName: "",
//     timeSlot: "",
//     termsAccepted: false,
//   });

//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);

//   // Fetch batch details
//   useEffect(() => {
//     if (!batchId) return;

//     const fetchBatchDetails = async () => {
//       try {
//         const res = await fetch(`http://localhost:5016/api/v1/courses/${batchId}`);
//         const data = await res.json();
//         if (data.success && data.data) {
//           const batch = data.data;
//           setFormData((prev) => ({
//             ...prev,
//             batchName: batch.courseName,
//             fees: batch.fee,
//             instructorName: batch.instructorName || "",
//             timeSlot: batch.timeSlot || "",
//           }));
//         } else {
//           toast.error("Failed to fetch batch details");
//         }
//       } catch (err) {
//         console.error(err);
//         toast.error("Error fetching batch details");
//       }
//     };

//     fetchBatchDetails();
//   }, [batchId]);

//   // Validation
//   const validate = () => {
//     const newErrors = {};
//     if (!formData.studentName) newErrors.studentName = "Student name is required";
//     if (!formData.whatsappNumber) newErrors.whatsappNumber = "WhatsApp number is required";
//     else if (!/^\d{10}$/.test(formData.whatsappNumber)) newErrors.whatsappNumber = "Must be 10 digits";
//     if (!formData.email) newErrors.email = "Email is required";
//     else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
//     if (!formData.mobile) newErrors.mobile = "Mobile number is required";
//     else if (!/^\d{10}$/.test(formData.mobile)) newErrors.mobile = "Mobile number must be 10 digits";
//     if (!formData.panNumber) newErrors.panNumber = "PAN number is required";
//     else if (!/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(formData.panNumber)) newErrors.panNumber = "Invalid PAN format";
//     if (!formData.passoutYear) newErrors.passoutYear = "Passout year is required";
//     if (!formData.qualification) newErrors.qualification = "Qualification is required";
//     if (!formData.adhaarNumber) newErrors.adhaarNumber = "Aadhaar number is required";
//     else if (!/^\d{12}$/.test(formData.adhaarNumber)) newErrors.adhaarNumber = "Aadhaar must be 12 digits";
//     if (!formData.referenceSource) newErrors.referenceSource = "Reference source is required";
//     if (!formData.branch) newErrors.branch = "Branch is required";
//     if (!formData.workingStatus) newErrors.workingStatus = "Working status is required";
//     if (!formData.termsAccepted) newErrors.termsAccepted = "You must accept terms";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validate()) {
//       toast.error("Please fix the errors in the form.");
//       return;
//     }

//     setLoading(true);
//     try {
//       const payload = { ...formData, batch: batchId };
//       const res = await fetch("http://localhost:5016/api/v1/Registration", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });
//       const data = await res.json();

//       if (data.success) {
//         toast.success("Enrollment submitted successfully!");
//         setFormData({
//           studentName: "",
//           whatsappNumber: "",
//           email: "",
//           mobile: "",
//           panNumber: "",
//           passoutYear: "",
//           qualification: "",
//           batchName: formData.batchName,
//           fees: formData.fees,
//           installmentType: "First Installment",
//           adhaarNumber: "",
//           referenceSource: "",
//           branch: "",
//           workingStatus: "",
//           instructorName: formData.instructorName,
//           timeSlot: formData.timeSlot,
//           termsAccepted: false,
//         });
//         setErrors({});
//       } else {
//         toast.error(data.message || "Failed to submit enrollment");
//       }
//     } catch (err) {
//       console.error(err);
//       toast.error("Something went wrong while submitting the form");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Container className="my-5">
//       <Card className="shadow-lg rounded-4 border-0 overflow-hidden">
//         <Row className="g-0">
//           {/* Left Section */}
//           <Col
//             md={4}
//             className="p-3 text-white d-flex flex-column"
//             style={{ background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)" }}
//           >
//             <div className="text-center mb-4">
//               <Image
//                 src="/Assests/logo/NEWGEN-Softech-Logo.png"
//                 alt="Velocity Logo"
//                 width={200}      // Adjust width as needed
//                 height={80}      // Adjust height as needed
//                 className="mb-3"
//                 style={{ maxHeight: "80px", width: "auto" }}
//               />
//             </div>
//             <div style={{ fontSize: "0.9rem", lineHeight: "1.6" }}>
//               <p><b>BATCH NAME:</b> {formData.batchName}</p>
//               <p><b>TECHNOLOGY:</b> {formData.batchName}</p>
//               <p><b>Batch Timing:</b> {formData.timeSlot}</p>
//               <p><b>Faculty Name:</b> {formData.instructorName}</p>
//               <p><b>Organizer:</b> Velocity Corporate Training Center, Pune</p>
//               <p>
//                 <b>CONTACT US:</b><br />
//                 EMAIL: support@vctcpune.co.in<br />
//                 MOBILE: +91 8669059498 / 9322077876
//               </p>
//             </div>
//           </Col>

//           {/* Right Section */}
//           <Col md={8} className="p-3">
//             <h4 className="mb-4 text-center text-primary fw-bold">Enrollment Form</h4>
//             <Form onSubmit={handleSubmit}>
//               <Row className="mb-3">
//                 <Col md={6} className="mb-4 mb-md-0">
//                   <Form.Group controlId="studentName">
//                     <Form.Label>STUDENT FULL NAME: *</Form.Label>
//                     <Form.Control
//                       type="text"
//                       placeholder="STUDENT FULL NAME"
//                       name="studentName"
//                       value={formData.studentName}
//                       onChange={handleChange}
//                       className={`shadow-sm rounded-pill ${errors.studentName ? "is-invalid" : ""}`}
//                     />
//                     <div className="invalid-feedback">{errors.studentName}</div>
//                   </Form.Group>
//                 </Col>
//                 <Col md={6}>
//                   <Form.Group controlId="whatsappNumber">
//                     <Form.Label>STUDENT WHATSAPP NUMBER: *</Form.Label>
//                     <Form.Control
//                       type="text"
//                       placeholder="STUDENT WHATSAPP NUMBER"
//                       name="whatsappNumber"
//                       value={formData.whatsappNumber}
//                       onChange={handleChange}
//                       className={`shadow-sm rounded-pill ${errors.whatsappNumber ? "is-invalid" : ""}`}
//                     />
//                     <div className="invalid-feedback">{errors.whatsappNumber}</div>
//                   </Form.Group>
//                 </Col>
//               </Row>

//               <Row className="mb-3">
//                 <Col md={6}>
//                   <Form.Group controlId="email">
//                     <Form.Label>Email: *</Form.Label>
//                     <Form.Control
//                       type="email"
//                       placeholder="Enter email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       className={`shadow-sm rounded-pill ${errors.email ? "is-invalid" : ""}`}
//                     />
//                     <div className="invalid-feedback">{errors.email}</div>
//                   </Form.Group>
//                 </Col>
//                 <Col md={6}>
//                   <Form.Group controlId="mobile">
//                     <Form.Label>Mobile Number: *</Form.Label>
//                     <Form.Control
//                       type="text"
//                       placeholder="Enter mobile number"
//                       name="mobile"
//                       value={formData.mobile}
//                       onChange={handleChange}
//                       className={`shadow-sm rounded-pill ${errors.mobile ? "is-invalid" : ""}`}
//                     />
//                     <div className="invalid-feedback">{errors.mobile}</div>
//                   </Form.Group>
//                 </Col>
//               </Row>

//               <Row className="mb-3">
//                 <Col md={6}>
//                   <Form.Group controlId="panNumber">
//                     <Form.Label>PAN NUMBER: *</Form.Label>
//                     <Form.Control
//                       type="text"
//                       placeholder="PAN NUMBER"
//                       name="panNumber"
//                       value={formData.panNumber}
//                       onChange={handleChange}
//                       className={`shadow-sm rounded-pill ${errors.panNumber ? "is-invalid" : ""}`}
//                     />
//                     <div className="invalid-feedback">{errors.panNumber}</div>
//                   </Form.Group>
//                 </Col>
//                 <Col md={6}>
//                   <Form.Group controlId="passoutYear">
//                     <Form.Label>PASSOUT YEAR: *</Form.Label>
//                     <Form.Control
//                       type="text"
//                       placeholder="PASSOUT YEAR"
//                       name="passoutYear"
//                       value={formData.passoutYear}
//                       onChange={handleChange}
//                       className={`shadow-sm rounded-pill ${errors.passoutYear ? "is-invalid" : ""}`}
//                     />
//                     <div className="invalid-feedback">{errors.passoutYear}</div>
//                   </Form.Group>
//                 </Col>
//               </Row>

//               <Row className="mb-3">
//                 <Col md={6}>
//                   <Form.Group controlId="qualification">
//                     <Form.Label>Qualification: *</Form.Label>
//                     <Form.Control
//                       type="text"
//                       placeholder="Qualification"
//                       name="qualification"
//                       value={formData.qualification}
//                       onChange={handleChange}
//                       className={`shadow-sm rounded-pill ${errors.qualification ? "is-invalid" : ""}`}
//                     />
//                     <div className="invalid-feedback">{errors.qualification}</div>
//                   </Form.Group>
//                 </Col>
//                 <Col md={6}>
//                   <Form.Group controlId="batchName">
//                     <Form.Label>Batch Name:</Form.Label>
//                     <Form.Control type="text" value={formData.batchName} readOnly className="shadow-sm rounded-pill bg-light" />
//                   </Form.Group>
//                 </Col>
//               </Row>

//               <Row className="mb-3">
//                 <Col md={6}>
//                   <Form.Group controlId="adhaarNumber">
//                     <Form.Label>ADHAAR NUMBER: *</Form.Label>
//                     <Form.Control
//                       type="text"
//                       placeholder="ADHAAR NUMBER"
//                       name="adhaarNumber"
//                       value={formData.adhaarNumber}
//                       onChange={handleChange}
//                       className={`shadow-sm rounded-pill ${errors.adhaarNumber ? "is-invalid" : ""}`}
//                     />
//                     <div className="invalid-feedback">{errors.adhaarNumber}</div>
//                   </Form.Group>
//                 </Col>
//                 <Col md={6}>
//                   <Form.Group controlId="referenceSource">
//                     <Form.Label>Source of Reference: *</Form.Label>
//                     <Form.Select
//                       name="referenceSource"
//                       value={formData.referenceSource}
//                       onChange={handleChange}
//                       className={`shadow-sm rounded-pill ${errors.referenceSource ? "is-invalid" : ""}`}
//                     >
//                       <option value="">-- Select --</option>
//                       <option value="Friend">Friend</option>
//                       <option value="Social Media">Social Media</option>
//                       <option value="College">College</option>
//                       <option value="Other">Other</option>
//                     </Form.Select>
//                     <div className="invalid-feedback">{errors.referenceSource}</div>
//                   </Form.Group>
//                 </Col>
//               </Row>

//               <Row className="mb-3">
//                 <Col md={6}>
//                   <Form.Group controlId="branch">
//                     <Form.Label>Visited/Enquired Branch: *</Form.Label>
//                     <Form.Select
//                       name="branch"
//                       value={formData.branch}
//                       onChange={handleChange}
//                       className={`shadow-sm rounded-pill ${errors.branch ? "is-invalid" : ""}`}
//                     >
//                       <option value="">-- Select --</option>
//                       <option value="Pune">Pune</option>
//                       <option value="Mumbai">Mumbai</option>
//                     </Form.Select>
//                     <div className="invalid-feedback">{errors.branch}</div>
//                   </Form.Group>
//                 </Col>
//                 <Col md={6}>
//                   <Form.Group controlId="workingStatus">
//                     <Form.Label>Working Status: *</Form.Label>
//                     <Form.Select
//                       name="workingStatus"
//                       value={formData.workingStatus}
//                       onChange={handleChange}
//                       className={`shadow-sm rounded-pill ${errors.workingStatus ? "is-invalid" : ""}`}
//                     >
//                       <option value="">-- Select --</option>
//                       <option value="Student">Student</option>
//                       <option value="Working Professional">Working Professional</option>
//                     </Form.Select>
//                     <div className="invalid-feedback">{errors.workingStatus}</div>
//                   </Form.Group>
//                 </Col>
//               </Row>

//               <Form.Group className="mb-4" controlId="terms">
//                 <Form.Check
//                   type="checkbox"
//                   label="I accept Terms & Conditions"
//                   name="termsAccepted"
//                   checked={formData.termsAccepted}
//                   onChange={handleChange}
//                   className={`${errors.termsAccepted ? "is-invalid" : ""}`}
//                 />
//                 <div className="invalid-feedback">{errors.termsAccepted}</div>
//               </Form.Group>

//               <div className="d-flex justify-content-between align-items-center">
//                 <h5 className="text-success fw-bold">INR {formData.fees}</h5>
//                 <Button
//                   type="submit"
//                   disabled={loading}
//                   className="btn btn-gradient px-4 py-2 fw-bold"
//                   style={{
//                     background: "linear-gradient(135deg, #ff6a00 0%, #ee0979 100%)",
//                     border: "none",
//                     color: "#fff",
//                     borderRadius: "50px",
//                   }}
//                 >
//                   {loading ? <Spinner animation="border" size="sm" /> : "Pay Now"}
//                 </Button>
//               </div>
//             </Form>
//           </Col>
//         </Row>
//       </Card>
//     </Container>
//   );
// }




// "use client";

// import React, { useState, useEffect } from "react";
// import { useSearchParams } from "next/navigation";
// import { Container, Row, Col, Form, Button, Card, Spinner } from "react-bootstrap";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Image from "next/image";

// // ✅ Your Razorpay Key
// const RAZORPAY_KEY_ID = "rzp_test_Ruf0W3aMXvn0k0"; // 🔁 Replace with your Razorpay key

// export default function EnrollmentForm() {
//   const searchParams = useSearchParams();
//   const batchId = searchParams.get("batchId");

//   const [formData, setFormData] = useState({
//     studentName: "",
//     whatsappNumber: "",
//     email: "",
//     mobile: "",
//     panNumber: "",
//     passoutYear: "",
//     qualification: "",
//     batchName: "",
//     fees: "",
//     installmentType: "First Installment",
//     adhaarNumber: "",
//     referenceSource: "",
//     branch: "",
//     workingStatus: "",
//     instructorName: "",
//     timeSlot: "",
//     termsAccepted: false,
//   });

//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);

//   // ✅ Load Razorpay script
//   const loadRazorpayScript = () => {
//     return new Promise((resolve) => {
//       const script = document.createElement("script");
//       script.src = "https://checkout.razorpay.com/v1/checkout.js";
//       script.onload = () => resolve(true);
//       script.onerror = () => resolve(false);
//       document.body.appendChild(script);
//     });
//   };

//   // ✅ Fetch batch details
//   useEffect(() => {
//     if (!batchId) return;
//     const fetchBatchDetails = async () => {
//       try {
//         const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/courses/${batchId}`);
//         const data = await res.json();
//         if (data.success && data.data) {
//           const batch = data.data;
//           setFormData((prev) => ({
//             ...prev,
//             batchName: batch.courseName,
//             fees: batch.fee,
//             instructorName: batch.instructorName || "",
//             timeSlot: batch.timeSlot || "",
//           }));
//         } else {
//           toast.error("Failed to fetch batch details");
//         }
//       } catch (err) {
//         console.error(err);
//         toast.error("Error fetching batch details");
//       }
//     };
//     fetchBatchDetails();
//   }, [batchId]);

//   // ✅ Validation
//   const validate = () => {
//     const newErrors = {};
//     if (!formData.studentName) newErrors.studentName = "Student name is required";
//     if (!formData.whatsappNumber) newErrors.whatsappNumber = "WhatsApp number is required";
//     else if (!/^\d{10}$/.test(formData.whatsappNumber)) newErrors.whatsappNumber = "Must be 10 digits";
//     if (!formData.email) newErrors.email = "Email is required";
//     else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
//     if (!formData.mobile) newErrors.mobile = "Mobile number is required";
//     else if (!/^\d{10}$/.test(formData.mobile)) newErrors.mobile = "Mobile must be 10 digits";
//     if (!formData.panNumber) newErrors.panNumber = "PAN number is required";
//     else if (!/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(formData.panNumber)) newErrors.panNumber = "Invalid PAN format";
//     if (!formData.passoutYear) newErrors.passoutYear = "Passout year is required";
//     if (!formData.qualification) newErrors.qualification = "Qualification is required";
//     if (!formData.adhaarNumber) newErrors.adhaarNumber = "Aadhaar number is required";
//     else if (!/^\d{12}$/.test(formData.adhaarNumber)) newErrors.adhaarNumber = "Aadhaar must be 12 digits";
//     if (!formData.referenceSource) newErrors.referenceSource = "Reference source is required";
//     if (!formData.branch) newErrors.branch = "Branch is required";
//     if (!formData.workingStatus) newErrors.workingStatus = "Working status is required";
//     if (!formData.termsAccepted) newErrors.termsAccepted = "You must accept terms";
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
//   };

//   // ✅ Razorpay Payment Integration
//   const handlePayment = async (amount, registrationData) => {
//     const res = await loadRazorpayScript();
//     if (!res) {
//       toast.error("Razorpay SDK failed to load. Check your internet connection.");
//       return;
//     }

//     const options = {
//       key: RAZORPAY_KEY_ID,
//       amount: amount * 100, // Razorpay works in paise
//       currency: "INR",
//       name: "Newgen SoftTech Training Center",
//       description: `Enrollment Payment - ${formData.batchName}`,
//       image: "/Assests/logo/NEWGEN-Softech-Logo.png",
//       handler: async function (response) {
//         toast.success("Payment successful!");
//         console.log("Razorpay response:", response);

//         // Optional: send payment confirmation to backend
//         await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/payment/verify`, {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             ...registrationData,
//             razorpay_payment_id: response.razorpay_payment_id,
//           }),
//         });
//       },
//       prefill: {
//         name: formData.studentName,
//         email: formData.email,
//         contact: formData.mobile,
//       },
//       theme: { color: "#6a11cb" },
//     };

//     const paymentObject = new window.Razorpay(options);
//     paymentObject.open();
//   };

//   // ✅ Submit Enrollment and trigger Razorpay
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validate()) {
//       toast.error("Please fix the errors in the form.");
//       return;
//     }

//     setLoading(true);
//     try {
//       const payload = { ...formData, batch: batchId };
//       const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/Registration`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });
//       const data = await res.json();

//       if (data.success) {
//         toast.success("Enrollment submitted successfully! Redirecting to payment...");

//         // Trigger Razorpay Payment
//         await handlePayment(formData.fees, payload);

//         // Reset form
//         setFormData({
//           ...formData,
//           studentName: "",
//           whatsappNumber: "",
//           email: "",
//           mobile: "",
//           panNumber: "",
//           passoutYear: "",
//           qualification: "",
//           adhaarNumber: "",
//           referenceSource: "",
//           branch: "",
//           workingStatus: "",
//           termsAccepted: false,
//         });
//         setErrors({});
//       } else {
//         toast.error(data.message || "Failed to submit enrollment");
//       }
//     } catch (err) {
//       console.error(err);
//       toast.error("Something went wrong while submitting the form");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Container className="my-5">
//       <Card className="shadow-lg rounded-4 border-0 overflow-hidden">
//         <Row className="g-0">
//           {/* ✅ Left Section */}
//           <Col
//             md={4}
//             className="p-3 text-white d-flex flex-column"
//             style={{ background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)" }}
//           >
//             <div className="text-center mb-4">
//               <Image
//                 src="/Assests/logo/NEWGEN-Softech-Logo.png"
//                 alt="Newgen SoftTech Logo"
//                 width={200}
//                 height={80}
//                 className="mb-3"
//                 style={{ maxHeight: "80px", width: "auto" }}
//               />
//             </div>
//             <div style={{ fontSize: "0.9rem", lineHeight: "1.6" }}>
//               <p><b>BATCH NAME:</b> {formData.batchName}</p>
//               <p><b>TECHNOLOGY:</b> {formData.batchName}</p>
//               <p><b>Batch Timing:</b> {formData.timeSlot}</p>
//               <p><b>Faculty Name:</b> {formData.instructorName}</p>
//               <p><b>Organizer:</b> Newgen SoftTech Training Center, Pune</p>
//               <p>
//                 <b>CONTACT US:</b><br />
//                 EMAIL: support@Softgenpune.co.in<br />
//                 MOBILE: +91 8669059498 / 9322077876
//               </p>
//             </div>
//           </Col>

//           {/* ✅ Right Section */}
//           <Col md={8} className="p-3">
//             <h4 className="mb-4 text-center text-primary fw-bold">Enrollment Form</h4>
//             <Form onSubmit={handleSubmit}>
              
//               <Row className="mb-3">
//                 <Col md={6} className="mb-4 mb-md-0">
//                   <Form.Group controlId="studentName">
//                     <Form.Label>STUDENT FULL NAME: *</Form.Label>
//                     <Form.Control
//                       type="text"
//                       placeholder="STUDENT FULL NAME"
//                       name="studentName"
//                       value={formData.studentName}
//                       onChange={handleChange}
//                       className={`shadow-sm rounded-pill ${errors.studentName ? "is-invalid" : ""}`}
//                     />
//                     <div className="invalid-feedback">{errors.studentName}</div>
//                   </Form.Group>
//                 </Col>
//                 <Col md={6}>
//                   <Form.Group controlId="whatsappNumber">
//                     <Form.Label>STUDENT WHATSAPP NUMBER: *</Form.Label>
//                     <Form.Control
//                       type="text"
//                       placeholder="STUDENT WHATSAPP NUMBER"
//                       name="whatsappNumber"
//                       value={formData.whatsappNumber}
//                       onChange={handleChange}
//                       className={`shadow-sm rounded-pill ${errors.whatsappNumber ? "is-invalid" : ""}`}
//                     />
//                     <div className="invalid-feedback">{errors.whatsappNumber}</div>
//                   </Form.Group>
//                 </Col>
//               </Row>

//               <Row className="mb-3">
//                 <Col md={6}>
//                   <Form.Group controlId="email">
//                     <Form.Label>Email: *</Form.Label>
//                     <Form.Control
//                       type="email"
//                       placeholder="Enter email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       className={`shadow-sm rounded-pill ${errors.email ? "is-invalid" : ""}`}
//                     />
//                     <div className="invalid-feedback">{errors.email}</div>
//                   </Form.Group>
//                 </Col>
//                 <Col md={6}>
//                   <Form.Group controlId="mobile">
//                     <Form.Label>Mobile Number: *</Form.Label>
//                     <Form.Control
//                       type="text"
//                       placeholder="Enter mobile number"
//                       name="mobile"
//                       value={formData.mobile}
//                       onChange={handleChange}
//                       className={`shadow-sm rounded-pill ${errors.mobile ? "is-invalid" : ""}`}
//                     />
//                     <div className="invalid-feedback">{errors.mobile}</div>
//                   </Form.Group>
//                 </Col>
//               </Row>

//               <Row className="mb-3">
//                 <Col md={6}>
//                   <Form.Group controlId="panNumber">
//                     <Form.Label>PAN NUMBER: *</Form.Label>
//                     <Form.Control
//                       type="text"
//                       placeholder="PAN NUMBER"
//                       name="panNumber"
//                       value={formData.panNumber}
//                       onChange={handleChange}
//                       className={`shadow-sm rounded-pill ${errors.panNumber ? "is-invalid" : ""}`}
//                     />
//                     <div className="invalid-feedback">{errors.panNumber}</div>
//                   </Form.Group>
//                 </Col>
//                 <Col md={6}>
//                   <Form.Group controlId="passoutYear">
//                     <Form.Label>PASSOUT YEAR: *</Form.Label>
//                     <Form.Control
//                       type="text"
//                       placeholder="PASSOUT YEAR"
//                       name="passoutYear"
//                       value={formData.passoutYear}
//                       onChange={handleChange}
//                       className={`shadow-sm rounded-pill ${errors.passoutYear ? "is-invalid" : ""}`}
//                     />
//                     <div className="invalid-feedback">{errors.passoutYear}</div>
//                   </Form.Group>
//                 </Col>
//               </Row>

//               <Row className="mb-3">
//                 <Col md={6}>
//                   <Form.Group controlId="qualification">
//                     <Form.Label>Qualification: *</Form.Label>
//                     <Form.Control
//                       type="text"
//                       placeholder="Qualification"
//                       name="qualification"
//                       value={formData.qualification}
//                       onChange={handleChange}
//                       className={`shadow-sm rounded-pill ${errors.qualification ? "is-invalid" : ""}`}
//                     />
//                     <div className="invalid-feedback">{errors.qualification}</div>
//                   </Form.Group>
//                 </Col>
//                 <Col md={6}>
//                   <Form.Group controlId="batchName">
//                     <Form.Label>Batch Name:</Form.Label>
//                     <Form.Control type="text" value={formData.batchName} readOnly className="shadow-sm rounded-pill bg-light" />
//                   </Form.Group>
//                 </Col>
//               </Row>

//               <Row className="mb-3">
//                 <Col md={6}>
//                   <Form.Group controlId="adhaarNumber">
//                     <Form.Label>ADHAAR NUMBER: *</Form.Label>
//                     <Form.Control
//                       type="text"
//                       placeholder="ADHAAR NUMBER"
//                       name="adhaarNumber"
//                       value={formData.adhaarNumber}
//                       onChange={handleChange}
//                       className={`shadow-sm rounded-pill ${errors.adhaarNumber ? "is-invalid" : ""}`}
//                     />
//                     <div className="invalid-feedback">{errors.adhaarNumber}</div>
//                   </Form.Group>
//                 </Col>
//                 <Col md={6}>
//                   <Form.Group controlId="referenceSource">
//                     <Form.Label>Source of Reference: *</Form.Label>
//                     <Form.Select
//                       name="referenceSource"
//                       value={formData.referenceSource}
//                       onChange={handleChange}
//                       className={`shadow-sm rounded-pill ${errors.referenceSource ? "is-invalid" : ""}`}
//                     >
//                       <option value="">-- Select --</option>
//                       <option value="Friend">Friend</option>
//                       <option value="Social Media">Social Media</option>
//                       <option value="College">College</option>
//                       <option value="Other">Other</option>
//                     </Form.Select>
//                     <div className="invalid-feedback">{errors.referenceSource}</div>
//                   </Form.Group>
//                 </Col>
//               </Row>

//               <Row className="mb-3">
//                 <Col md={6}>
//                   <Form.Group controlId="branch">
//                     <Form.Label>Visited/Enquired Branch: *</Form.Label>
//                     <Form.Select
//                       name="branch"
//                       value={formData.branch}
//                       onChange={handleChange}
//                       className={`shadow-sm rounded-pill ${errors.branch ? "is-invalid" : ""}`}
//                     >
//                       <option value="">-- Select --</option>
//                       <option value="Pune">Pune</option>
//                       <option value="Mumbai">Mumbai</option>
//                     </Form.Select>
//                     <div className="invalid-feedback">{errors.branch}</div>
//                   </Form.Group>
//                 </Col>
//                 <Col md={6}>
//                   <Form.Group controlId="workingStatus">
//                     <Form.Label>Working Status: *</Form.Label>
//                     <Form.Select
//                       name="workingStatus"
//                       value={formData.workingStatus}
//                       onChange={handleChange}
//                       className={`shadow-sm rounded-pill ${errors.workingStatus ? "is-invalid" : ""}`}
//                     >
//                       <option value="">-- Select --</option>
//                       <option value="Student">Student</option>
//                       <option value="Working Professional">Working Professional</option>
//                     </Form.Select>
//                     <div className="invalid-feedback">{errors.workingStatus}</div>
//                   </Form.Group>
//                 </Col>
//               </Row>

//               <Form.Group className="mb-4" controlId="terms">
//                 <Form.Check
//                   type="checkbox"
//                   label="I accept Terms & Conditions"
//                   name="termsAccepted"
//                   checked={formData.termsAccepted}
//                   onChange={handleChange}
//                   className={`${errors.termsAccepted ? "is-invalid" : ""}`}
//                 />
//                 <div className="invalid-feedback">{errors.termsAccepted}</div>
//               </Form.Group>

//               {/* <div className="d-flex justify-content-between align-items-center">
//                 <h5 className="text-success fw-bold">INR {formData.fees}</h5>
//                 <Button
//                   type="submit"
//                   disabled={loading}
//                   className="btn btn-gradient px-4 py-2 fw-bold"
//                   style={{
//                     background: "linear-gradient(135deg, #ff6a00 0%, #ee0979 100%)",
//                     border: "none",
//                     color: "#fff",
//                     borderRadius: "50px",
//                   }}
//                 >
//                   {loading ? <Spinner animation="border" size="sm" /> : "Pay Now"}
//                 </Button>
//               </div> */}
            
//               <div className="d-flex justify-content-between align-items-center mt-4">
//                 <h5 className="text-success fw-bold">INR {formData.fees}</h5>
//                 <Button
//                   type="submit"
//                   disabled={loading}
//                   className="btn btn-gradient px-4 py-2 fw-bold"
//                   style={{
//                     background: "linear-gradient(90deg, #060607ff, #a31d28)",
                    
//                     border: "none",
//                     color: "#fff",
//                     borderRadius: "50px",
//                   }}
//                 >
//                   {loading ? <Spinner animation="border" size="sm" /> : "Pay Now"}
//                 </Button>
//               </div>
//             </Form>
//           </Col>
//         </Row>
//       </Card>
//     </Container>
//   );
// }













"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Container, Row, Col, Form, Button, Card, Spinner } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";

// ✅ Your Razorpay Key
const RAZORPAY_KEY_ID = "rzp_test_Ruf0W3aMXvn0k0"; // 🔁 Replace with your Razorpay key

export default function EnrollmentForm() {
  const searchParams = useSearchParams();
  const batchId = searchParams.get("batchId");

  const [formData, setFormData] = useState({
    studentName: "",
    whatsappNumber: "",
    email: "",
    mobile: "",
    panNumber: "",
    passoutYear: "",
    qualification: "",
    batchName: "",
    fees: "",
    paymentAmount: "", // ✅ User can enter this
    installmentType: "First Installment",
    adhaarNumber: "",
    referenceSource: "",
    branch: "",
    workingStatus: "",
    instructorName: "",
    timeSlot: "",
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // ✅ Load Razorpay script
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  // ✅ Fetch batch details
  useEffect(() => {
    if (!batchId) return;
    const fetchBatchDetails = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/courses/${batchId}`);
        const data = await res.json();
        if (data.success && data.data) {
          const batch = data.data;
          setFormData((prev) => ({
            ...prev,
            batchName: batch.courseName,
            fees: batch.fee,
            paymentAmount: batch.fee, // default to full fee
            instructorName: batch.instructorName || "",
            timeSlot: batch.timeSlot || "",
          }));
        } else {
          toast.error("Failed to fetch batch details");
        }
      } catch (err) {
        console.error(err);
        toast.error("Error fetching batch details");
      }
    };
    fetchBatchDetails();
  }, [batchId]);

  // ✅ Validation
  const validate = () => {
    const newErrors = {};
    if (!formData.studentName) newErrors.studentName = "Student name is required";
    if (!formData.whatsappNumber) newErrors.whatsappNumber = "WhatsApp number is required";
    else if (!/^\d{10}$/.test(formData.whatsappNumber)) newErrors.whatsappNumber = "Must be 10 digits";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.mobile) newErrors.mobile = "Mobile number is required";
    else if (!/^\d{10}$/.test(formData.mobile)) newErrors.mobile = "Mobile must be 10 digits";
    // if (!formData.panNumber) newErrors.panNumber = "PAN number is required";
    // else if (!/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(formData.panNumber)) newErrors.panNumber = "Invalid PAN format";
    if (!formData.passoutYear) newErrors.passoutYear = "Passout year is required";
    if (!formData.qualification) newErrors.qualification = "Qualification is required";
    // if (!formData.adhaarNumber) newErrors.adhaarNumber = "Aadhaar number is required";
    // else if (!/^\d{12}$/.test(formData.adhaarNumber)) newErrors.adhaarNumber = "Aadhaar must be 12 digits";
    // if (!formData.referenceSource) newErrors.referenceSource = "Reference source is required";
    // if (!formData.branch) newErrors.branch = "Branch is required";
    // if (!formData.workingStatus) newErrors.workingStatus = "Working status is required";
    if (!formData.termsAccepted) newErrors.termsAccepted = "You must accept terms";
    
    // ✅ Payment amount validation
    if (!formData.paymentAmount || Number(formData.paymentAmount) <= 0) {
      newErrors.paymentAmount = "Enter a valid payment amount";
    } else if (Number(formData.paymentAmount) > Number(formData.fees)) {
      newErrors.paymentAmount = "Amount cannot exceed total fees";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  // ✅ Razorpay Payment Integration
  const handlePayment = async (amount, registrationData) => {
    const res = await loadRazorpayScript();
    if (!res) {
      toast.error("Razorpay SDK failed to load. Check your internet connection.");
      return;
    }

    const options = {
      key: RAZORPAY_KEY_ID,
      amount: amount * 100, // Razorpay works in paise
      currency: "INR",
      name: "Newgen SoftTech Training Center",
      description: `Enrollment Payment - ${formData.batchName}`,
      image: "/Assests/logo/NEWGEN-Softech-Logo.png",
      handler: async function (response) {
        toast.success("Payment successful!");
        console.log("Razorpay response:", response);

        // Optional: send payment confirmation to backend
        await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/payment/verify`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...registrationData,
            razorpay_payment_id: response.razorpay_payment_id,
          }),
        });
      },
      prefill: {
        name: formData.studentName,
        email: formData.email,
        contact: formData.mobile,
      },
      theme: { color: "#6a11cb" },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  // ✅ Submit Enrollment and trigger Razorpay
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      toast.error("Please fix the errors in the form.");
      return;
    }

    setLoading(true);
    try {
      const payload = { ...formData, batch: batchId };
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/Registration`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (data.success) {
        toast.success("Enrollment submitted successfully! Redirecting to payment...");

        // Trigger Razorpay Payment using user-entered amount
        await handlePayment(Number(formData.paymentAmount), payload);

        // Reset form
        setFormData({
          ...formData,
          studentName: "",
          whatsappNumber: "",
          email: "",
          mobile: "",
          panNumber: "",
          passoutYear: "",
          qualification: "",
          adhaarNumber: "",
          referenceSource: "",
          branch: "",
          workingStatus: false,
          termsAccepted: false,
          paymentAmount: formData.fees, // reset to default
        });
        setErrors({});
      } else {
        toast.error(data.message || "Failed to submit enrollment");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong while submitting the form");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="my-5">
      <Card className="shadow-lg rounded-4 border-0 overflow-hidden">
        <Row className="g-0">
          {/* Left Section */}
          <Col
            md={4}
            className="p-3 text-white d-flex flex-column"
            style={{ background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)" }}
          >
            <div className="text-center mb-4">
              <Image
                src="/Assests/logo/NEWGEN-Softech-Logo.png"
                alt="Newgen SoftTech Logo"
                width={200}
                height={80}
                className="mb-3"
                style={{ maxHeight: "80px", width: "auto" }}
              />
            </div>
            <div style={{ fontSize: "0.9rem", lineHeight: "1.6" }}>
              <p><b>BATCH NAME:</b> {formData.batchName}</p>
              <p><b>TECHNOLOGY:</b> {formData.batchName}</p>
              <p><b>Batch Timing:</b> {formData.timeSlot}</p>
              <p><b>Faculty Name:</b> {formData.instructorName}</p>
              <p><b>Organizer:</b> Newgen SoftTech Training Center, Pune</p>
              <p>
                <b>CONTACT US:</b><br />
                EMAIL: support@Softgenpune.co.in<br />
                MOBILE: +91 8669059498 / 9322077876
              </p>
            </div>
          </Col>

          {/* Right Section */}
          <Col md={8} className="p-3">
            <h4 className="mb-4 text-center text-primary fw-bold">Enrollment Form</h4>
            <Form onSubmit={handleSubmit}>

                <Row className="mb-3">
                <Col md={6} className="mb-4 mb-md-0">
                  <Form.Group controlId="studentName">
                    <Form.Label>STUDENT FULL NAME: *</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="STUDENT FULL NAME"
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleChange}
                      className={`shadow-sm rounded-pill ${errors.studentName ? "is-invalid" : ""}`}
                    />
                    <div className="invalid-feedback">{errors.studentName}</div>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="whatsappNumber">
                    <Form.Label>STUDENT WHATSAPP NUMBER: *</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="STUDENT WHATSAPP NUMBER"
                      name="whatsappNumber"
                      value={formData.whatsappNumber}
                      onChange={handleChange}
                      className={`shadow-sm rounded-pill ${errors.whatsappNumber ? "is-invalid" : ""}`}
                    />
                    <div className="invalid-feedback">{errors.whatsappNumber}</div>
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group controlId="email">
                    <Form.Label>Email: *</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`shadow-sm rounded-pill ${errors.email ? "is-invalid" : ""}`}
                    />
                    <div className="invalid-feedback">{errors.email}</div>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="mobile">
                    <Form.Label>Mobile Number: *</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter mobile number"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      className={`shadow-sm rounded-pill ${errors.mobile ? "is-invalid" : ""}`}
                    />
                    <div className="invalid-feedback">{errors.mobile}</div>
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                {/* <Col md={6}>
                  <Form.Group controlId="panNumber">
                    <Form.Label>PAN NUMBER: *</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="PAN NUMBER"
                      name="panNumber"
                      value={formData.panNumber}
                      onChange={handleChange}
                      className={`shadow-sm rounded-pill ${errors.panNumber ? "is-invalid" : ""}`}
                    />
                    <div className="invalid-feedback">{errors.panNumber}</div>
                  </Form.Group>
                </Col> */}

                <Col md={6}>
                  <Form.Group controlId="qualification">
                    <Form.Label>Qualification: *</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Qualification"
                      name="qualification"
                      value={formData.qualification}
                      onChange={handleChange}
                      className={`shadow-sm rounded-pill ${errors.qualification ? "is-invalid" : ""}`}
                    />
                    <div className="invalid-feedback">{errors.qualification}</div>
                  </Form.Group>
                </Col>
              
                <Col md={6}>
                  <Form.Group controlId="passoutYear">
                    <Form.Label>PASSOUT YEAR: *</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="PASSOUT YEAR"
                      name="passoutYear"
                      value={formData.passoutYear}
                      onChange={handleChange}
                      className={`shadow-sm rounded-pill ${errors.passoutYear ? "is-invalid" : ""}`}
                    />
                    <div className="invalid-feedback">{errors.passoutYear}</div>
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                {/* <Col md={6}>
                  <Form.Group controlId="qualification">
                    <Form.Label>Qualification: *</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Qualification"
                      name="qualification"
                      value={formData.qualification}
                      onChange={handleChange}
                      className={`shadow-sm rounded-pill ${errors.qualification ? "is-invalid" : ""}`}
                    />
                    <div className="invalid-feedback">{errors.qualification}</div>
                  </Form.Group>
                </Col> */}
                <Col md={6}>
                  <Form.Group controlId="batchName">
                    <Form.Label>Batch Name:</Form.Label>
                    <Form.Control type="text" value={formData.batchName} readOnly className="shadow-sm rounded-pill bg-light" />
                  </Form.Group>
                </Col>
                   <Col md={6}>
                  <Form.Group controlId="referenceSource">
                    <Form.Label>Source of Reference: *</Form.Label>
                    <Form.Select
                      name="referenceSource"
                      value={formData.referenceSource}
                      onChange={handleChange}
                      className={`shadow-sm rounded-pill ${errors.referenceSource ? "is-invalid" : ""}`}
                    >
                      <option value="">-- Select --</option>
                      <option value="Friend">Friend</option>
                      <option value="Social Media">Social Media</option>
                      <option value="College">College</option>
                      <option value="Other">Other</option>
                    </Form.Select>
                    <div className="invalid-feedback">{errors.referenceSource}</div>
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                {/* <Col md={6}>
                  <Form.Group controlId="adhaarNumber">
                    <Form.Label>ADHAAR NUMBER: *</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="ADHAAR NUMBER"
                      name="adhaarNumber"
                      value={formData.adhaarNumber}
                      onChange={handleChange}
                      className={`shadow-sm rounded-pill ${errors.adhaarNumber ? "is-invalid" : ""}`}
                    />
                    <div className="invalid-feedback">{errors.adhaarNumber}</div>
                  </Form.Group>
                </Col> */}
                {/* <Col md={6}>
                  <Form.Group controlId="referenceSource">
                    <Form.Label>Source of Reference: *</Form.Label>
                    <Form.Select
                      name="referenceSource"
                      value={formData.referenceSource}
                      onChange={handleChange}
                      className={`shadow-sm rounded-pill ${errors.referenceSource ? "is-invalid" : ""}`}
                    >
                      <option value="">-- Select --</option>
                      <option value="Friend">Friend</option>
                      <option value="Social Media">Social Media</option>
                      <option value="College">College</option>
                      <option value="Other">Other</option>
                    </Form.Select>
                    <div className="invalid-feedback">{errors.referenceSource}</div>
                  </Form.Group>
                </Col> */}
              </Row>

              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group controlId="branch">
                    <Form.Label>Visited/Enquired Branch: *</Form.Label>
                    <Form.Select
                      name="branch"
                      value={formData.branch}
                      onChange={handleChange}
                      className={`shadow-sm rounded-pill ${errors.branch ? "is-invalid" : ""}`}
                    >
                      <option value="">-- Select --</option>
                      <option value="Pune">Pune</option>
                      <option value="Mumbai">Mumbai</option>
                    </Form.Select>
                    <div className="invalid-feedback">{errors.branch}</div>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="workingStatus">
                    <Form.Label>Working Status: *</Form.Label>
                    <Form.Select
                      name="workingStatus"
                      value={formData.workingStatus}
                      onChange={handleChange}
                      className={`shadow-sm rounded-pill ${errors.workingStatus ? "is-invalid" : ""}`}
                    >
                      <option value="">-- Select --</option>
                      <option value="Student">Student</option>
                      <option value="Working Professional">Working Professional</option>
                    </Form.Select>
                    <div className="invalid-feedback">{errors.workingStatus}</div>
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-4" controlId="terms">
                <Form.Check
                  type="checkbox"
                  label="I accept Terms & Conditions"
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={handleChange}
                  className={`${errors.termsAccepted ? "is-invalid" : ""}`}
                />
                <div className="invalid-feedback">{errors.termsAccepted}</div>
              </Form.Group>

              {/* <div className="d-flex justify-content-between align-items-center">
                <h5 className="text-success fw-bold">INR {formData.fees}</h5>
                <Button
                  type="submit"
                  disabled={loading}
                  className="btn btn-gradient px-4 py-2 fw-bold"
                  style={{
                    background: "linear-gradient(135deg, #ff6a00 0%, #ee0979 100%)",
                    border: "none",
                    color: "#fff",
                    borderRadius: "50px",
                  }}
                >
                  {loading ? <Spinner animation="border" size="sm" /> : "Pay Now"}
                </Button>
              </div> */}
            
          

              {/* ✅ Payment Amount */}
           <Row className="mb-3">
  <Col md={6}>
    <Form.Group controlId="paymentAmount">
      <Form.Label>Amount to Pay (INR) *</Form.Label>
      <Form.Control
        type="number"
        name="paymentAmount"
        value={formData.paymentAmount || ""}
        onChange={(e) => {
          const value = e.target.value;
          // Allow only numbers >= 0 and <= max fees
          if (value === "" || (/^\d+$/.test(value) && +value <= formData.fees)) {
            handleChange(e);
          }
        }}
        placeholder={`Max: ${formData.fees}`}
        className={`shadow-sm rounded-pill ${errors.paymentAmount ? "is-invalid" : ""}`}
        min={0}
        max={formData.fees}
      />
      <div className="invalid-feedback">{errors.paymentAmount}</div>
      <small className="text-muted">Total Fee: INR {formData.fees}</small>
    </Form.Group>
  </Col>
</Row>


              {/* Submit Button */}
              <div className="d-flex justify-content-between align-items-center mt-4">
                <h5 className="text-success fw-bold">INR {formData.paymentAmount || formData.fees}</h5>
                <Button
                  type="submit"
                  disabled={loading}
                  className="btn btn-gradient px-4 py-2 fw-bold"
                  style={{
                    background: "linear-gradient(90deg, #060607ff, #a31d28)",
                    border: "none",
                    color: "#fff",
                    borderRadius: "50px",
                  }}
                >
                  {loading ? <Spinner animation="border" size="sm" /> : "Pay Now"}
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}
