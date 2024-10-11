import React, { useState, useEffect } from "react";
import Modal from './component/Modal.js'; // Import the modal component
import './App.css'; // Import CSS for styling

function App() {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch("/students.json")
      .then(response => response.json())
      .then(data => setStudents(data))
      .catch(error => console.error("Error fetching student data:", error));
  }, []);

  const handleParticipationClick = (student) => {
    setSelectedStudent(student);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedStudent(null);
  };

  return (
    <div className="students-container">
      {students.map((student, index) => (
        <div key={index} className="student-card">
          <div className="student-header">
            <h2 className="student-name">{student.name}</h2>
            <span className={`student-status ${student.paymentStatus.toLowerCase()}`}>
              {student.paymentStatus}
            </span>
          </div>
          <div className="student-body">
            <p><strong>Phone Number:</strong> {student.phoneNumber}</p>
            <p><strong>Roll Number:</strong> {student.rollNumber}</p>
            <p><strong>PID:</strong> {student.pid}</p>
            <p><strong>Hall:</strong> {student.hall}</p>
            <button onClick={() => handleParticipationClick(student)} className="shadow__btn">
              Participation
            </button>
          </div>
        </div>
      ))}

      {isModalOpen && (
        <Modal student={selectedStudent} onClose={closeModal} />
      )}
    </div>
  );
}

export default App;
