import { Form, Col, Row, Container, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('calllll')
  };
  return (
    <Container>
      <Row>
        <Col>
          <Row>
            <div className='d-flex align-items-center justify-content-center'>
              <Card style={{ width: 400 }}>
                <Card.Body>
                  <h2 className='text-center mb-4'>Login to Daily Self Account</h2>
                  <Form onSubmit={(e) => handleSubmit(e)}>
                    <Form.Group controlId='formEmail'>
                      <Form.Label> Email Address </Form.Label>
                      <Form.Control
                        value={props.email}
                        onChange={(e) => console.log(e.target.value)}
                        type='email'
                        placeholder='example@kth.se'
                        required
                      />
                    </Form.Group>
                    <Form.Group controlId='formPassword'>
                      <Form.Label> Password </Form.Label>
                      <Form.Control
                        value={props.password}
                        onChange={(e) => console.log(e.target.value)}
                        type='password'
                        placeholder='Password'
                        required
                      />
                    </Form.Group>
                    <Button
                      type='submit'
                      variant='success'
                      className='mt-3 w-100'>
                      Login
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
