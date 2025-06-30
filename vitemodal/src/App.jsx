import { useState } from 'react'
import './App.css'
import Modal from './modal.jsx'
import Button from './Button.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <main style={{
      display: "flex",
      flexDirection: "column", 
      justifyContent: "center", 
      alignItems: "center",
      minHeight: "100vh",
      backgroundColor: "White"
    }}>
     
      <Button 
        style={{
          fontFamily: "Eudoxus Sans, Arial, sans-serif",
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "White",
          backgroundColor: "#F9830B",
          padding: "15px 25px",
          borderRadius: "28px",
          border: "none",
          cursor: "pointer",
          outline: "none",
          boxShadow: "none"
        }}
        onClick={() => setIsModalOpen(true)}
      >
        Request Demo
      </Button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {/* Modal content here */}
      </Modal>
    </main>
  )
}

export default App
