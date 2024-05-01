import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Timer from './Timer';

function App() {

  const [numTimers, setNumTimers] = useState(1);
  const [timers, setTimers] = useState([]);


  const handleDelete = (index) => {
    const newTimers = [...timers];
    newTimers.splice(index, 1);
    setTimers(newTimers);
  };

  const handleEdit = (index, newTime) => {
    const newTimers = [...timers];
    newTimers[index] = { time: newTime };
    setTimers(newTimers);
  };

  const addTimer = () => {
    setNumTimers(numTimers + 1);
  };

  const handleAddTimerButtonClick = () => {
    setTimers([...timers, { time: 0 }]);
  };

  return (
    <div className="App">
      <p>21BCP224 : Mihir bhalghami</p>

      <div>
        <label htmlFor="numTimers">Number of Timers:</label>
        <input
          type="number"
          id="numTimers"
          value={numTimers}
          onChange={(e) => setNumTimers(parseInt(e.target.value))}
        />
        <button onClick={() => setTimers(new Array(numTimers).fill({ time: 0 }))}>
          Create Timers
        </button>
      </div>
      <button onClick={addTimer}>Add Timer</button>


      {timers.map((timer, index) => (
        <Timer
          key={index}
          time={timer.time}
          onDelete={() => handleDelete(index)}
          onEdit={(newTime) => handleEdit(index, newTime)}
        />
      ))}
    </div>
  );
}

export default App;
