import Dropdown from 'react-bootstrap/Dropdown';

export default function Header () {
    return (
    <div style={{ display: 'block', 
        width: 700, 
        padding: 30 }} className='container'>
    <Dropdown>
      <Dropdown.Toggle variant="success">Menu</Dropdown.Toggle>
      <Dropdown.Menu>
      <Dropdown.Item href="#">clothes woman</Dropdown.Item>
      <Dropdown.Item href="#">clothes man </Dropdown.Item>
      <Dropdown.Item href="#">ceramics</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
);
    };
    // <>
    // <h1>Naslov,meni,korpa</h1>
    // <div className="dropdown">
    // <button className="btn-link link-dark dropdown-toggle" type="button" data-bs-toggle ="dropdown">MENU</button>
    // <ul className="dropdown-menu">
    //   <li><Link to=''>HTML</Link></li>
    //   <li><Link to=''>CSS</Link></li>
    //   <li><Link to=''>JavaScript</Link></li>
    // </ul>
    // </div>
    // </>
    // )