import './App.css';
import Stars from './components/Stars';

function App() {
  return (
    <div className="app">
      <Stars count={1} />
      <Stars count={7} />
      <Stars count={254} />
      <Stars count={5} />
      <Stars count={0} />
      <Stars count={1.567} />
      <Stars count={2.45} />
      <Stars count={6} />
      <Stars count={3} />
      <Stars count={'erq'} />
      <Stars count={4} />
      <Stars count={-4} />
    </div>
  );
}

export default App;
