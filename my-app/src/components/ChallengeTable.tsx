// src/components/ChallengeTable.tsx
import React from 'react'

interface Challenge {
  id: string
  name: string
  description: string
  theme: string
}

const challenges: Challenge[] = [
  { id: '1', name: 'Pasta Challenge', description: 'Create the best pasta dish.', theme: 'Italian' },
  
]

const ChallengeTable: React.FC = () => {
  return (
    <div className="space-y-6">
      {challenges.map((challenge) => (
        <div key={challenge.id} className="p-4 border border-black rounded-lg bg-white">
          <h3 className="text-xl font-semibold mb-2">{challenge.name}</h3>
          <p className="mb-2">{challenge.description}</p>
          <p className="mb-4 text-gray-600">Theme: {challenge.theme}</p>
        </div>
      ))}
    </div>
  )
}

export default ChallengeTable
