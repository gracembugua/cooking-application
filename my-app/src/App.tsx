// src/App.tsx
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/loginpage'
import SignupPage from './pages/signuppage'
import DashboardPage from './pages/DashboardPage'
import CreateChallengePage from './pages/CreateChallengePage'
import DishSubmissionPage from './pages/DishSubmissionPage'
import VotingPage from './pages/VotingPage'
import LeaderboardPage from './pages/LeaderboardPage'
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignupPage />} /> {/* Default page is Signup */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/create-challenge" element={<CreateChallengePage />} />
        <Route path="/submit-dish" element={<DishSubmissionPage />} />
        <Route path="/vote" element={<VotingPage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        
      </Routes>
    </Router>
  )
}

export default App
