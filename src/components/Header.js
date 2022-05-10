import React, {useState} from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, Navbar, NavDropdown} from 'react-bootstrap';

import { useAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';
import AlertModal from './AlertModal';

const Header = () => {

  const {currentUser, logout} = useAuth()
  
  const navigate = useNavigate();

  const [showLogoutAlert, setShowLogoutAlert] = useState(false);
  const [showLogoutErrorAlert, setShowLogoutErrorAlert] = useState(false);

  const handleLogoutHanlder = async () => {

    setShowLogoutAlert(false);

    try {
      await logout();
      navigate('/login');
    } catch (error) {
      setShowLogoutErrorAlert(true);
    }
  };
  
  return (
      <Navbar
        style={{ backgroundColor: '#44a340' }}
        expand='lg'
        collapseOnSelect
        className='px-2'>
          <>
          <AlertModal
        show={showLogoutAlert}
        onHide={() => setShowLogoutAlert(false)}
        title={'Logout'}
        message={'Are you sure you want to logout?'}
        out={true}
        logout={() => handleLogoutHanlder()}
        cancel={() => setShowLogoutAlert(false)}
      />
      <AlertModal
        show={showLogoutErrorAlert}
        onHide={() => setShowLogoutErrorAlert(false)}
        title={'Logout'}
        message={'Error in logging out!'}
      />
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
                <LinkContainer to='/entry'>
                  <Nav.Link>
                  <i className="fas fa-solid fa-plus"></i> Entry
                  </Nav.Link>
                </LinkContainer>
              </Nav>
              
              {currentUser ? (
                <NavDropdown
                  title={
                    <span>
                      <i className='fas fa-user'></i>
                      {currentUser.email.split('@')[0]}
                    </span>
                  }
                  id='username'>
                  <NavDropdown.Item onClick={() => setShowLogoutAlert(true)}>
                    <i className='fas fa-sign-out-alt'></i> Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <i className='fas fa-user'></i> Login
                  </Nav.Link>
                </LinkContainer>
              )}  
            </Nav>
          </Navbar.Collapse>
          </>
      </Navbar>
    
  );
};

export default Header;
