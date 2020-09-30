import React from "react";
import { useQuery } from "@apollo/client";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { GET_ACTIVITIES } from "../graphql/queries";
import TimelineItem from "./TimelineItem";
import _ from "lodash";
import dayjs from "dayjs";

interface Props {}

const Timeline: React.FC<Props> = () => {
  const { loading, error, data } = useQuery(GET_ACTIVITIES);

  let timeline = data?.activities;
  let timelineKeys = null;

  if (timeline) {
    timeline = timeline
      .slice()
      .sort((a, b) => new Date(a.program.day) - new Date(b.program.day));
    timeline = _.groupBy(timeline, "program.day");
    timelineKeys = Object.keys(timeline);
  }

  const sortByDatetime = (a, b) => {
    return new Date(a.datetime) - new Date(b.datetime);
  };

  return (
    <Container>
      {loading ? (
        <Spinner animation="border" />
      ) : (
        <>
          <Row>
            <Col>
              <h2>Timeline</h2>
            </Col>
          </Row>
          {timelineKeys?.map((day, key) => {
            return (
              <Row key={key} className="pb-5">
                <Col sm={12}>
                  <h3 className="text-primary mb-3">
                    {dayjs(day).format("dddd")}
                  </h3>
                </Col>
                <Col sm={12}>
                  <Row>
                    {timeline[day].sort(sortByDatetime).map((item, key) => {
                      return (
                        <Col key={key} sm={12}>
                          <TimelineItem
                            item={item}
                            last={key === timeline[day].length - 1}
                          />
                        </Col>
                      );
                    })}
                  </Row>
                </Col>
              </Row>
            );
          })}
        </>
      )}
    </Container>
  );
};

export default Timeline;
