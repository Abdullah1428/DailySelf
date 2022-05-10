import axios from 'axios';
import { useState, useRef, useEffect } from 'react';

import { Col, Form, Button } from 'react-bootstrap';

import { useNavigate } from 'react-router-dom';

const Entry = () => {
  const commentRef = useRef();
  const [emotion, setEmotion] = useState('');

  const [data, setData] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {

    e.preventDefault(); 

    if (commentRef.current.value.length < 10) {
      alert('Please enter proper text!')
      return;
    }

    if (emotion === '') {
      alert('Please select your emotion for the day!')
      return;
    }
    
    let apiUrl = 'http://localhost:80/ibm';

    const body = { text: commentRef.current.value };

    try {
      const res = await axios.post(apiUrl, body)  

      setData(res.data)

    } catch (error) {
      console.log(error)
      return;
    }
    
  };


  useEffect(() => {
    if (data !== null) {
      navigate('/result', {state: { data, text: commentRef.current.value, emoji: emotion }})
    }
  },[data])

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
              <span onClick={() => setEmotion('anger')} className='emotion1'>{emotion === 'anger' ? '😡' : '😶'}</span>
              <span onClick={() => setEmotion('disgust')} className='emotion2'>{emotion === 'disgust' ? '🥴' : '😶'}</span>
              <span onClick={() => setEmotion('fear')} className='emotion3'>{emotion === 'fear' ? '😨' : '😶'}</span>
              <span onClick={() => setEmotion('sad')} className='emotion4'>{emotion === 'sad' ? '☹️' : '😶'}</span>
              <span onClick={() => setEmotion('joy')} className='emotion5'>{emotion === 'joy' ? '😄' : '😶'}</span>
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
