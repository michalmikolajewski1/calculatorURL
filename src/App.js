import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

const Add = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const x = parseFloat(params.get('x'));
  const y = parseFloat(params.get('y'));
  const result = x + y;

  return <h2>Wynik dodawania: {result}</h2>;
};

const Sub = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const x = parseFloat(params.get('x'));
  const y = parseFloat(params.get('y'));
  const result = x - y;

  return <h2>Wynik odejmowania: {result}</h2>;
};

const Mul = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const x = parseFloat(params.get('x'));
  const y = parseFloat(params.get('y'));
  const result = x * y;

  return <h2>Wynik mnożenia: {result}</h2>;
};

const Div = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const x = parseFloat(params.get('x'));
  const y = parseFloat(params.get('y'));
  const result = x / y;

  return <h2>Wynik dzielenia: {result}</h2>;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/add" element={<Add />} />
        <Route path="/sub" element={<Sub />} />
        <Route path="/mul" element={<Mul />} />
        <Route path="/div" element={<Div />} />
      </Routes>
    </Router>
  );
}

export default App;
