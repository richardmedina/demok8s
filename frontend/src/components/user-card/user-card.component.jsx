import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const UserCard = ( { user }) => (
  <Card style={{ width: '18rem', display: 'inline-block'}}>
    <Card.Img variant="top" src={user.gotchiUrl} />
    <Card.Body>
      <Card.Title>{`${user.firstName} ${user.lastName}`}</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
);

export default UserCard;