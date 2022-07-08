import { Navbar,Nav,Container,Offcanvas} from 'react-bootstrap';


export default function Header () {
    return (
        <Navbar expand={false} className="mb-3">
         <Container fluid>
           {/* Navbar.text for bag count */}
              <Nav.Link href="#action1" className='text-dark'>BAG <Navbar.Text>0</Navbar.Text></Nav.Link>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} />
            <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${false}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
            placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}> Shop </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3 ">
                <Nav.Link className='text-black-50' href="#action1">clothes woman</Nav.Link>
                <Nav.Link className='text-black-50' href="#action2">clothes man</Nav.Link>
                <Nav.Link className='text-black-50' href="#action2">ceramics</Nav.Link>
                <Nav.Link className='text-black-50' shref="#action2">work on paper</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
);
    };
