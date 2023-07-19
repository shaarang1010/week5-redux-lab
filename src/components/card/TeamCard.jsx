import { Card } from "react-bootstrap";

export const TeamCard = (props) => {
  return (
    <Card style={{ width: "30rem" }}>
      <Card.Header>{props.title}</Card.Header>
      <Card.Body>{props.children}</Card.Body>
    </Card>
  );
};
