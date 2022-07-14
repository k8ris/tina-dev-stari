import{ Card,Container,Row,Col }from 'react-bootstrap';

export default function Products ({products}) {
  
  return (
  <Container fluid>
    <Row className="justify-content-md-center">
      { products.map( product => 
        <Col md='auto' key={product.id} >
            <Card style={{ width: '18rem' }} className="card">
              <Card.Img variant="top" src={product.location} />
              <Card.Body>
              <Card.Text>
                {product.typeClothe}{'\n'}
                {product.price}rsd
              </Card.Text>
              <div>
                <form>
                <label>
                size:
                <select>
                  <option value="grapefruit">s</option>
                  <option value="lime">m</option>
                  <option value="coconut">l</option>
                </select>
                </label>
                  <input type="submit" value="purchase" />
                </form>
              </div>
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