import React from 'react'
import { useNavigate } from 'react-router-dom'
import ChallengeForm from '../components/ChallengeForm'

const CreateChallengePage: React.FC = () => {
  const navigate = useNavigate()

  const handleChallengeSubmit = (data: { title: string; description: string; theme: string; startDate: string; endDate: string }) => {
    console.log('Challenge created:', data)
    navigate('/dashboard')
  }

  return (
    <div className="flex items-center justify-center h-screen bg-amber-50">
      <div className="w-full max-w-md p-8 bg-white border border-black rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-black mb-6">Create a New Challenge</h2>
        <ChallengeForm onSubmit={handleChallengeSubmit} />
      </div>
    </div>
  )
}

export default CreateChallengePage
