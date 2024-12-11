// src/pages/LeaderboardPage.tsx
import React, { useState, useEffect } from 'react'

// Example dish type
interface Dish {
  id: number
  name: string
  imageUrl: string
  votes: number
}

const LeaderboardPage: React.FC = () => {
  const [dishes, setDishes] = useState<Dish[]>([])

  useEffect(() => {
    // Fetch leaderboard data from the server
    fetch('/api/leaderboard')
      .then(response => response.json())
      .then(data => {
        // Sort dishes by votes in descending order
        const sortedDishes = data.sort((a: Dish, b: Dish) => b.votes - a.votes)
        setDishes(sortedDishes)
      })
      .catch(error => console.error('Error fetching leaderboard data:', error))
  }, [])

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Leaderboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dishes.map((dish, index) => (
          <div key={dish.id} className="bg-white rounded shadow-md p-4">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold">#{index + 1}</span>
              <span className="text-lg font-bold text-gray-700">{dish.votes} Votes</span>
            </div>
            <img src={dish.imageUrl} alt={dish.name} className="w-full h-48 object-cover rounded mt-2 mb-4" />
            <h2 className="text-xl font-bold">{dish.name}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LeaderboardPage
