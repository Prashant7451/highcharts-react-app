import React from 'react';
import RegistrationChart from './RegistrationChart';

function App() {
  
  const registrationData = [
    [Date.UTC(2023, 8, 1), 10],
    [Date.UTC(2023, 8, 2), 15],
    [Date.UTC(2023, 8, 3), 8],
    [Date.UTC(2023, 8, 4), 12],
    
  ];

  return (
    <div className="App">
      <RegistrationChart data={registrationData} />
    </div>
  );
}

export default App;
