// Modal.js
import React from 'react';
import './Modal.css'; // Import styling for the modal

const Modal = ({ student, onClose }) => {
  if (!student) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <h2>{student.name}'s Participation Details</h2>
        <p><strong>GL Participated:</strong> {student.glParticipated}</p>
        <p><strong>Events Participated:</strong></p>
        <ul>
          {student.eventsParticipated.map((event, index) => (
            <li key={index}>{event}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Modal;
