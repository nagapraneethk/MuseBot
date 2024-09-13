import EventDashboard from './components/MainChat/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<EventDashboard />} />
        </Routes>
      </Router>

    </>
  )
}

export default App