import React, { useState } from 'react';
import './Timer.css';

const Timer = ({ onDelete, onEdit }) => {
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(0);
  const [timerId, setTimerId] = useState(null);

  const startTimer = () => {
    setIsActive(true);
    setTimerId(setInterval(() => setTime(prevTime => prevTime + 1), 1000));
  };

  const stopTimer = () => {
    setIsActive(false);
    clearInterval(timerId);
  };

  const deleteTimer = () => {
    clearInterval(timerId);
    onDelete();
  };

  const editTimer = () => {
    clearInterval(timerId);
    onEdit(time);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className={`timer ${isActive ? 'active' : ''}`}>
      <div className="time">{formatTime(time)}</div>
      <div className="buttons">
        {!isActive && <button onClick={startTimer}>Start</button>}
        <button onClick={deleteTimer}>Delete</button>
        <button onClick={editTimer}>Edit</button>
      </div>
    </div>
  );
};

export default Timer;
