import{ Card,Container,Row,Col }from 'react-bootstrap';

export default function Products () {
    return (
    <Container fluid>
      <Row className="justify-content-md-center">
          <Col md='auto'>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src='/imgFullSize/img1.png' />
                <Card.Body>
                <Card.Text>
                  jjjjjjjlllllllll
                  kkkkkkkkkkkkkkk
                </Card.Text>
                </Card.Body>
              </Card>
          </Col>
      </Row>
    </Container>
            
    )
}