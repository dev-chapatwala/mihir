import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Timer from './Timer';

function App() {

  const [timers, setTimers] = useState([2]);

  const handleDelete = (index) => {
    const newTimers = [...timers];
    newTimers.splice(index, 1);
    setTimers(newTimers);
  };

  const handleEdit = (index, newTime) => {
    const newTimers = [...timers];
    newTimers[index].time = newTime;
    setTimers(newTimers);
  };

  const addTimer = () => {
    setTimers([...timers, { time: 0 }]);
  };


  return (
    <div className="App">
      <p>check text</p>
      {timers.map((timer, index) => (
        <Timer
          key={index}
          onDelete={() => handleDelete(index)}
          onEdit={(newTime) => handleEdit(index, newTime)}
        />
      ))}
    </div>
  );
}

export default App;
