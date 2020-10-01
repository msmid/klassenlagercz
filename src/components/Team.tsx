import React from "react";
import { useQuery } from "@apollo/client";
import { Container, Row, Col } from "react-bootstrap";
import { GET_TEAM_MEMBERS_WITH_PICTURES } from "../graphql/queries";
import TeamMember from "./TeamMember";

interface Props {}

const Team: React.FC<Props> = () => {
  const { loading, error, data } = useQuery(GET_TEAM_MEMBERS_WITH_PICTURES);

  return (
    <Container>
      <Row>
        <Col>
          <h2>Team</h2>
        </Col>
      </Row>
      <Row>
        {data?.teamMembers.map((member, key) => {
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
};

export default Team;
