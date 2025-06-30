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
      backgroundColor: "red"
    }}>
      <h2 style = {{
        fontFamily: "Arial, sans-serif",
        fontSize: "2.5rem",
        fontWeight: "bold",
        color: "White",
      }}>Contact Us!</h2>
      <Button 
        style={{
          fontFamily: "comicsans, comic-sans-ms, sans-serif",
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "white",
          backgroundColor: "#F0F0F0",
          padding: "10px 20px",
          borderRadius: "5px",
          border: "none",
          cursor: "pointer"
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
