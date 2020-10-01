import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TeamMember from "./TeamMember";

interface Picture {
  url: string;
  name: string;
}

export interface TeamMember {
  id: string;
  fullname: string;
  shortcut: string;
  order: number;
  picture: Picture;
}

interface TeamProps {
  teamMembers: TeamMember[];
}

function Team({ teamMembers }: TeamProps) {
  return (
    <Container>
      <Row>
        <Col>
          <h2>Team</h2>
        </Col>
      </Row>
      <Row>
        {teamMembers.map((member, key) => {
          return (
            <Col
              key={key}
              sm={12}
              md={6}
              lg={4}
              className={`order-${member.order}`}
            >
              <TeamMember member={member} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Team;
