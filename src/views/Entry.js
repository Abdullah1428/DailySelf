import { useState, useRef } from 'react';

import { Col, Form, Button } from 'react-bootstrap';

const Entry = () => {
  const commentRef = useRef();
  const [emotion, setEmotion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();  
  };

  return (
    <Col md={6}>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group id='comment'>
          <Form.Label>HOW ARE YOU FEELING TODAY?</Form.Label>
          <Form.Control
            as='textarea'
            rows='6'
            required
            placeholder='Write your text here...'
            ref={commentRef}
          />
        </Form.Group>
        <Form.Group className='mt-4'>
          <Form.Label>
            Select an emoji to describe your mood for today.
          </Form.Label>
            <div className='emotion'>
              <span onClick={() => setEmotion('anger')} className='emotion1'>😶</span>
              <span onClick={() => setEmotion('disgust')} className='emotion2'>😶</span>
              <span onClick={() => setEmotion('fear')} className='emotion3'>😶</span>
              <span onClick={() => setEmotion('sad')} className='emotion4'>😶</span>
              <span onClick={() => setEmotion('joy')} className='emotion5'>😶</span>
            </div>
            <div>
              <span
                style={{ position: 'absolute', marginLeft: 20, fontSize: 25 }}>
                Anger
              </span>
              <span
                style={{ position: 'absolute', marginLeft: 130, fontSize: 25 }}>
                Disgust
              </span>
              <span
                style={{ position: 'absolute', marginLeft: 270, fontSize: 25 }}>
                Fear
              </span>
              <span
                style={{ position: 'absolute', marginLeft: 400, fontSize: 25 }}>
                Sad
              </span>
              <span
                style={{ position: 'absolute', marginLeft: 500, fontSize: 25 }}>
                Joyful
              </span>
            </div>
        </Form.Group>
        <Button style={{ marginTop: 50 }} type='submit' variant='success'>
          Add Entry
        </Button>
      </Form>
    </Col>
  );
};

export default Entry;
