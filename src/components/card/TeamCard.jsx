import { Card } from "react-bootstrap";

export const TeamCard = (props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Header>{props.title}</Card.Header>
      <Card.Body>
        <Card.Text>{props.text}</Card.Text>
      </Card.Body>
    </Card>
  );
};
