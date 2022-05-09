import { Container, Form, Button, Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = (props) => {
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
                  <h2 className='text-center mb-4'> Make a Daily Self Account </h2>
                  <Form onSubmit={(e) => handleSubmit(e)}>
                    <Form.Group controlId='formGroupEmail'>
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        value={props.email}
                        onChange={(e) => console.log(e.target.value)}
                        type='email'
                        placeholder='example@kth.se'
                        required
                      />
                    </Form.Group>
                    <div className='p-1' />
                    <Form.Group controlId='formGroupPassword'>
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        value={props.password}
                        onChange={(e) => console.log(e.target.value)}
                        type='password'
                        placeholder='Enter password'
                        required
                      />
                    </Form.Group>
                    <div className='p-1' />
                    {/* fix for warning on console = controlId should not be the same. */}
                    <Form.Group controlId='formGroupConfirmPassword'>
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control
                        value={props.confirmPassword}
                        onChange={(e) => console.log(e.target.value)}
                        type='password'
                        placeholder='Confirm password'
                      />
                    </Form.Group>
                    <div className='p-1' />
                    <Button
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
