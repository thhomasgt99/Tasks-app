import React from 'react';
import ReactDOM from 'react-dom';
import './EditPortal.css';

function EditPortal({ children }) {
  return ReactDOM.createPortal(
    <div className="EditBackground">
      {children}
    </div>,
    document.getElementById('edit')
  );
}

export { EditPortal };