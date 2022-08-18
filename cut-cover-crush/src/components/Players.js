import Card from 'react-bootstrap/Card';

export default function Players(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{props.player}: {props.choice}</Card.Title>
      </Card.Body>
    </Card>
  );
}