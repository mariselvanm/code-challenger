import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import CodeChallenger from './containers/CodeChallenger';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <CodeChallenger />
      </div>
    </BrowserRouter>
  );
}

export default App;
