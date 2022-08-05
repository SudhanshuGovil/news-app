import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";

const NewsHead = ({ key, index, title, desc, url }) => (
  <div className="container">
    <Accordion>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey={index}>
            <b>{index + 1}.</b> {title}
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey={index}>
          <Card.Body>
            {desc}{" "}
            <a target="blank" href={url}>
              click here
            </a>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  </div>
);

export default NewsHead;
