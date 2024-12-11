// src/pages/DashboardPage.tsx
import React from 'react'
import { Link } from 'react-router-dom'
import ChallengeTable from '../components/ChallengeTable'

const DashboardPage: React.FC = () => {
  return (
    <div className="w-full bg-amber-50 min-h-screen flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold text-black text-center mb-8">Cooking Challenge Dashboard</h1>

      <div className="flex justify-center space-x-5 mb-8">
        <Link to="/create-challenge" className="bg-blue-500 text-black px-6 py-3 rounded hover:bg-black-600">
          Create New Challenge
        </Link>
        
        <Link to="/submit-dish" className="bg-blue-500 text-black px-6 py-3 rounded hover:bg-black-600">
          Submit a Dish
        </Link>

        <Link to="/vote" className="bg-blue-500 text-black px-6 py-3 rounded hover:bg-black-600">
          Vote for Dishes
        </Link>

        <Link to="/leaderboard" className="bg-blue-500 text-black px-6 py-3 rounded hover:bg-black-600">
          View Leaderboard
        </Link>
      </div>

      <div className="bg-white border-2 border-black rounded-lg p-4">
        <ChallengeTable />
      </div>1
    </div>
  )
}

export default DashboardPage
