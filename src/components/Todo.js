import { useState } from 'react';
import Backdrop from './Backdrop';
import Modal from './Modal';

function Todo(props) {
  const [modalOpen, setModalOpen] = useState(false);

  function handleDelete() {
    setModalOpen(true);
  }

  function handleClose() {
    setModalOpen(false);
  }

  return (
    <div className='card'>
      <h2>{props.text}</h2>
      <div className='actions'>
        <button className='btn' onClick={handleDelete}>
          Delete
        </button>
      </div>
      {modalOpen && <Modal onClose={handleClose} />}
      {modalOpen && <Backdrop onClose={handleClose} />}
    </div>
  );
}

export default Todo;
