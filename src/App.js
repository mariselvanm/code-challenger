import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import CodeChallenger from './containers/CodeChallenger';
import { ToastContainer, toast } from 'react-toastify';
// minified version is also included
import 'react-toastify/dist/ReactToastify.min.css';

toast.configure();

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <CodeChallenger />
        <ToastContainer autoClose={2000} />
      </div>
    </BrowserRouter>
  );
}

export default App;
