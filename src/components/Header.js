import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, Navbar, Image} from 'react-bootstrap';


const Header = () => {
  
  return (
      <Navbar
        style={{ backgroundColor: '#ffa500' }}
        expand='lg'
        collapseOnSelect
        className='px-2'>
          <>
          <LinkContainer to={'/'}>
            <Navbar.Brand>
              {/* <Image src='/assets/DailySelf.png' width='50' height="50" /> */}
              <span>Daily Self</span>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse className='justify-content-end'>
            <Nav className='ml-auto'>
              <Nav>
                <LinkContainer to='/'>
                  <Nav.Link>
                    <i className='fas fa-home'></i> Home
                  </Nav.Link>
                </LinkContainer>
              </Nav>
              
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <i className='fas fa-user'></i> Login
                  </Nav.Link>
                </LinkContainer>
             
            </Nav>
          </Navbar.Collapse>
          </>
      </Navbar>
    
  );
};

export default Header;
