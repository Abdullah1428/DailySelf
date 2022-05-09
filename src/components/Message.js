import React from 'react';

import { Alert } from 'react-bootstrap';

const Message = ({ variant, hide, children }) => {
  return (
    <Alert className='text-center text-danger' variant={variant}>
      {children}
      <i
        onClick={() => hide()}
        style={{ position: 'absolute', right: 10, cursor: 'pointer' }}
        className='far fa-times-circle fa-2x'></i>
    </Alert>
  );
};

Message.defaultProps = {
  variant: 'info',
};

export default Message;
