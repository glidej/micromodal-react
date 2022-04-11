import React, { useState } from 'react';
import { Modal } from './components/Modal';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  }
  
  return (
    <main>
      <button onClick={() => setIsOpen(true)}>Open the modal</button>

      <Modal 
        modalId="coolModal" 
        title="Test Modal" 
        isOpen={isOpen}
        onClose={onClose}
      >
        <p>Some cool modal content</p>
      </Modal>
    </main>
  );
}

export default App;