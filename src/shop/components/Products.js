import{ Card,Container,Row,Col }from 'react-bootstrap';

export default function Products ({products}) {
  
  return (
  <Container fluid>
    <Row className="justify-content-md-center">
      { products.map( product => 
        <Col md='auto'>
            <Card style={{ width: '18rem' }} className="card">
              <Card.Img  key={product.id}  variant="top" src={product.location} />
              <Card.Body>
              <Card.Text>
                <pre>
                {product.typeClothe}{'\n'}
                {product.price}rsd
                </pre>
              </Card.Text>
              </Card.Body>
            </Card>
        </Col>
      )
      }
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