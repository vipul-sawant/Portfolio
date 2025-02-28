import React from "react";
import { Container, Card } from "react-bootstrap";
import "./Education.css"; // Import custom styles

const Education = () => {
  return (
    <Container className="education-section">
      <h2 className="education-title">Education</h2>
      
      <Card className="education-card">
        <Card.Body>
          <h5 className="degree">BScIT - Mumbai University</h5>
          <p className="duration">2017 – 2020</p>
          <p className="details">CGPI: 6.88</p>
        </Card.Body>
      </Card>

      <Card className="education-card">
        <Card.Body>
          <h5 className="degree">HSC - Maharashtra State Board</h5>
          <p className="duration">2015 – 2017</p>
          <p className="details">Stream: Science | Percentage: 59.23%</p>
        </Card.Body>
      </Card>

      <Card className="education-card">
        <Card.Body>
          <h5 className="degree">SSC - Maharashtra State Board</h5>
          <p className="duration">2002 – 2015</p>
          <p className="details">Percentage: 77.2%</p>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Education;
