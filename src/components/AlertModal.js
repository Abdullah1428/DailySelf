import { Modal, Button } from 'react-bootstrap';

const AlertModal = (props) => {
  return (
    <Modal
      show={props.show}
      onHide={() => props.onHide()}
      size='md'
      aria-labelledby='contained-modal-title-vcenter'
      centered>
      <Modal.Header closeButton>
        <Modal.Title>
          {props.variant === 'success' ? (
            <i className='fas fa-check-circle text-success'></i>
          ) : (
            <i className='fas fa-exclamation-circle text-danger'></i>
          )}
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{props.message}</p>
      </Modal.Body>

      {props.out && (
        <Modal.Footer>
          <Button onClick={() => props.cancel()} variant='secondary'>
            NO
          </Button>

          <Button onClick={() => props.logout()} variant='danger'>
            YES
          </Button>
        </Modal.Footer>
      )}
    </Modal>
  );
};

export default AlertModal;
