import { Card, Button } from 'react-bootstrap';

function Orchid({ flower }) {
    return (
        <Card className="h-100 shadow-sm text-start">
            <Card.Img variant="top" src={flower.avatar} alt={flower.name} style={{ objectFit: 'cover', height: '250px' }} />
            <Card.Body>
                <Card.Title>{flower.name}</Card.Title>
                <Card.Text>
                    {flower.category}
                </Card.Text>
                <Button variant="primary">
                    Detail
                </Button>
            </Card.Body>
        </Card>
    )
}

export default Orchid