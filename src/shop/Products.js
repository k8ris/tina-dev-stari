import{ Card,Container,Row,Col }from 'react-bootstrap';

export default function Products () {
    return (
            <Container fluid>
               <Row className="justify-content-md-center">
                <Col md='auto'>
                  <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="/img/img1.png" />
                  <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                  </Card.Text>
                 </Card.Body>
                 </Card>
           </Col>
           </Row>
        </Container>
            
    )
}