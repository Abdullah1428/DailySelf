import { useRef, useState } from 'react';
import { useAuth } from '../context/authContext';

import { Form, Col, Row, Container, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AlertModal from '../components/AlertModal';

import { useNavigate } from 'react-router-dom';

const Login = () => {

  const emailRef = useRef()
  const passwordRef = useRef()

  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const { login } = useAuth()

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('')
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      navigate('/')
    } catch (error) {
      setError('failed to sign in!')
    }
    setLoading(false)
  }
  
  return (
    <Container>
      <AlertModal
        show={error !== ''}
        onHide={() => setError('')}
        title={'Login'}
        message={error}
      />
      <Row>
        <Col>
          <Row>
            <div className='d-flex align-items-center justify-content-center'>
              <Card style={{ width: 400 }}>
                <Card.Body>
                  <h2 className='text-center mb-4'>Log In to Daily Self Account</h2>
                  <Form onSubmit={(e) => handleSubmit(e)}>
                    <Form.Group id='email'>
                      <Form.Label> Email Address </Form.Label>
                      <Form.Control
                        // value={props.email}
                        // onChange={(e) => console.log(e.target.value)}
                        ref={emailRef}
                        type='email'
                        placeholder='example@kth.se'
                        required
                      />
                    </Form.Group>
                    <Form.Group id='password'>
                      <Form.Label> Password </Form.Label>
                      <Form.Control
                        // value={props.password}
                        // onChange={(e) => console.log(e.target.value)}
                        ref={passwordRef}
                        type='password'
                        placeholder='Password'
                        required
                      />
                    </Form.Group>
                    <Button
                      disabled={loading}
                      type='submit'
                      variant='success'
                      className='mt-3 w-100'>
                      Log In
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </div>
          </Row>
          <Row>
            <div className='w-100 mt-2 text-center'>
              <Link to='/reset'>Forgot password?</Link>
            </div>
          </Row>
          <Row>
            <div className='w-100 text-center mt-2'>
              Don't have an account? <Link to='/register'>Register</Link>
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
