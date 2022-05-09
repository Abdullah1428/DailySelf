import { useRef, useState } from 'react';
import { useAuth } from '../context/authContext';

import { Container, Form, Button, Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AlertModal from '../components/AlertModal';

const Register = () => {
  
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()

  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const { signup } = useAuth()

  async function handleSubmit(e) {
    e.preventDefault();

    if(passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('passwords do not match!')
    }

    try {
      setError('')
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
    } catch (error) {
      setError('failed to create an account!')
    }

    setLoading(false)
  }

  return (
   
    <Container>
    <AlertModal
        show={error !== ''}
        onHide={() => setError('')}
        title={'Register Error'}
        message={error}
    />
      <Row>
        <Col>
          <Row>
            <div className='d-flex align-items-center justify-content-center'>
              <Card style={{ width: 400 }}>
                <Card.Body>
                  <h2 className='text-center mb-4'> Make a Daily Self Account </h2>
                  <Form onSubmit={(e) => handleSubmit(e)}>
                    <Form.Group id='email'>
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        // value={email}
                        // onChange={(e) => console.log(e.target.value)}
                        ref={emailRef}
                        type='email'
                        placeholder='example@kth.se'
                        required
                      />
                    </Form.Group>
                    <div className='p-1' />
                    <Form.Group id='password'>
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        // value={password}
                        // onChange={(e) => console.log(e.target.value)}
                        ref={passwordRef}
                        type='password'
                        placeholder='Enter password'
                        required
                      />
                    </Form.Group>
                    <div className='p-1' />
                    {/* fix for warning on console = controlId should not be the same. */}
                    <Form.Group id='password-confirm'>
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control
                        // value={confirmPassword}
                        // onChange={(e) => console.log(e.target.value)}
                        ref={passwordConfirmRef}
                        type='password'
                        placeholder='Confirm password'
                      />
                    </Form.Group>
                    <div className='p-1' />
                    <Button
                      disabled={loading}
                      type='submit'
                      variant='success'
                      className='mt-3 w-100'>
                      Register
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </div>
          </Row>
          <div className='w-100 text-center mt-2'>
            Already have an account? <Link to='/login'>Login</Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
