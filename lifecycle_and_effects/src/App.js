import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Timer from './Timer';
import ChatRoomApp from './ChatServer';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/chat" element={<ChatRoomApp />} />
      </Routes>
    </div>
  );
}

export default App;
