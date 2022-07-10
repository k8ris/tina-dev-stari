import{ Card,Container,Row,Col }from 'react-bootstrap';

export default function Products ({productsImage}) {
  console.log(productsImage);
  return (
  <Container fluid>
    <Row className="justify-content-md-center">
      { productsImage.map( e => 
        <Col md='auto'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={e.location} />
              <Card.Body>
              <Card.Text>
                <pre>
                {e.typeClothe}{'\n'}
                price:{e.price}rsd
                </pre>
              </Card.Text>
              </Card.Body>
            </Card>
        </Col>
      )};
    </Row>
  </Container>          
  )
}
// return (
//   <Col md='auto'>
//       <Card style={{ width: '18rem' }}>
//         <Card.Img variant="top" src={productsImage.location} />
//         <Card.Body>
//         <Card.Text>
//           {productsImage.typeClothe}
//           {productsImage.price}
//         </Card.Text>
//         </Card.Body>
//       </Card>
//   </Col>           
// )
// }