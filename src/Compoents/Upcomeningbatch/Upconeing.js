"use client";

import { useEffect, useState } from "react";
import {
  Container,
  Table,
  Badge,
  Button,
  Spinner,
  Row,
  Col,
  Card,
} from "react-bootstrap";
import { FaClock } from "react-icons/fa";
import { useRouter } from "next/navigation";
import styles from "../../app/Styles/Upcomeingbantch.module.css";

export default function UpcomingBatches() {
  const [upcomingBatches, setUpcomingBatches] = useState([]);
  const [trendingBatches, setTrendingBatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchBatches = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/courses`);
        const data = await res.json();

        if (data.success && data.data) {
          const batchesArray = Array.isArray(data.data)
            ? data.data
            : [data.data];

          // Separate filtering for clarity
          const upcoming = batchesArray.filter((b) => b.isUpcomingBatch);
          const trending = batchesArray.filter((b) => b.isTrending);

          setUpcomingBatches(upcoming);
          setTrendingBatches(trending);
        }
      } catch (error) {
        console.error("Error fetching batches:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBatches();
  }, []);

  if (loading)
    return (
      <div className="text-center py-5">
        <Spinner animation="border" />
      </div>
    );

  if (upcomingBatches.length === 0 && trendingBatches.length === 0)
    return <p className="text-center py-5">No upcoming or trending batches available.</p>;

  // ✅ Reusable Table Component
  const renderTable = (batches) => (
    <Table striped bordered hover responsive className={styles.batchTable}>
      <thead>
        <tr>
          <th>Course Name</th>
          <th>Instructor</th>
          <th>Time Slot</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Mode</th>
          <th>Fee</th>
          <th>Seats Available</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {batches.map((batch) => (
          <tr key={batch._id}>
            <td>{batch.courseName}</td>
            <td>{batch.instructorName}</td>
            <td>
              <FaClock className={styles.icon} /> {batch.timeSlot}
            </td>
            <td>{new Date(batch.startDate).toLocaleDateString()}</td>
            <td>{new Date(batch.endDate).toLocaleDateString()}</td>
            <td>
              <Badge bg={batch.mode === "Online" ? "success" : "warning"}>
                {batch.mode}
              </Badge>
            </td>
            <td>₹{batch.fee}</td>
            <td>{batch.seatsAvailable}</td>
            <td>
              <Button
                className={styles.enrollBtn}
                onClick={() =>
                  router.push(`/AdmissionForm/?batchId=${batch._id}`)
                }
              >
                Enroll Now
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );

  // ✅ Reusable Card Layout (for mobile)
  const renderCards = (batches) => (
    <Row>
      {batches.map((batch) => (
        <Col xs={12} key={batch._id} className="mb-3">
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>{batch.courseName}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Instructor: {batch.instructorName}
              </Card.Subtitle>
              <p className="mb-1">
                <FaClock /> {batch.timeSlot}
              </p>
              <p className="mb-1">
                Start: {new Date(batch.startDate).toLocaleDateString()}
              </p>
              <p className="mb-1">
                End: {new Date(batch.endDate).toLocaleDateString()}
              </p>
              <p className="mb-1">
                Mode:{" "}
                <Badge bg={batch.mode === "Online" ? "success" : "warning"}>
                  {batch.mode}
                </Badge>
              </p>
              <p className="mb-1">Fee: ₹{batch.fee}</p>
              <p className="mb-3">Seats: {batch.seatsAvailable}</p>
              <Button
                className={styles.enrollBtn}
                onClick={() =>
                  router.push(`/AdmissionForm/?batchId=${batch._id}`)
                }
                style={{ width: "100%" }}
              >
                Enroll Now
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );

  return (
    <Container className={`py-5 ${styles.container}`}>
      {/* ------------------- UPCOMING BATCHES ------------------- */}
      {upcomingBatches.length > 0 && (
        <>
          <h2 className={`${styles.heading} text-center mb-4`}>
            Upcoming Batches
          </h2>

          {/* Desktop Table */}
          <div className="d-none d-md-block">{renderTable(upcomingBatches)}</div>

          {/* Mobile Cards */}
          <div className="d-block d-md-none">{renderCards(upcomingBatches)}</div>
        </>
      )}

      {/* ------------------- TRENDING BATCHES ------------------- */}
   
    </Container>
  );
}
