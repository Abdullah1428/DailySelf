import { useRef, useState } from 'react'
import { useAuth } from '../context/authContext';

import { Container, Form, Button, Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import AlertModal from '../components/AlertModal';
import Message from '../components/Message';

const ResetPassword = (props) => {

  const emailRef = useRef()

  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const { resetPassword } = useAuth()
  
  async function handleSubmit (e) {
    e.preventDefault();

    try {
      setMessage('')
      setError('')
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage('Check your inbox for further instructions!')
    } catch (error) {
      setError('Failed to reset password')
    }

    setLoading(false)

  };
  return (
    <Container className='py-5'>
      <AlertModal
        show={message.length > 0}
        onHide={() => setMessage('')}
        title={'Reset Password'}
        message={message}
      />
      {error && error.length > 0 && (
        <Message variant={'danger'} hide={() => setError('')}>{error}</Message>
      )}
      <Row>
        <Col>
          <Row>
            <div className='d-flex align-items-center justify-content-center'>
              <Card style={{ width: 400 }}>
                <Card.Body>
                  <h2 className='text-center mb-4'> Reset Password </h2>
                  <Form onSubmit={(e) => handleSubmit(e)}>
                    <Form.Group id='email'>
                      <Form.Label>Enter your email</Form.Label>
                      <Form.Control
                        ref={emailRef}
                        type='email'
                        placeholder='email@kth.se'
                        required
                      />
                    </Form.Group>
                    <Button
                      disabled={loading}
                      variant='success'
                      type='submit'
                      className='mt-3 w-100'>
                      Reset Password
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </div>
          </Row>
          <Row>
            <div className='w-100 mt-2 text-center'>
              <Link to='/login'>Log In</Link>
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ResetPassword;
