import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layouts/Layout'
import HomePage from './pages/HomePage';
import ReportPage from './pages/ReportPage';

function App() {

  return (
    <>
    <Router>
      <Layout title='Home'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/reports" element={<ReportPage />} />
        </Routes>
      </Layout>
    </Router>
    </>
  )
}

export default App
