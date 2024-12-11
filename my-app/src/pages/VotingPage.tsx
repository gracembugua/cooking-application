
import React, { useState } from 'react'

interface Dish {
  id: number
  name: string
  description: string
  recipe: string
  imageUrl: string
  votes: number
}

const VotingPage: React.FC = () => {
  const [dishes, setDishes] = useState<Dish[]>([
    {
      id: 1,
      name: "Best Pasta Dish",
      description: "Delicious pasta with homemade sauce.",
      recipe: "Ingredients and instructions here...",
      imageUrl: "path/to/image1.jpg",
      votes: 10
    },
    {
      id: 2,
      name: "Vegan Desserts",
      description: "A mouth-watering vegan chocolate cake.",
      recipe: "Ingredients and instructions here...",
      imageUrl: "path/to/image2.jpg",
      votes: 5
    }
  ])

  const handleVote = (dishId: number) => {
    setDishes((prevDishes) =>
      prevDishes.map((dish) =>
        dish.id === dishId ? { ...dish, votes: dish.votes + 1 } : dish
      )
    )
    
    fetch(`/api/vote/${dishId}`, {
      method: 'POST'
    }).then(response => {
      if (response.ok) {
        alert("Vote counted!")
      } else {
        alert("Failed to submit vote.")
      }
    })
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Vote for Your Favorite Dish</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dishes.map((dish) => (
          <div key={dish.id} className="bg-white rounded shadow-md p-4">
            <img src={dish.imageUrl} alt={dish.name} className="w-full h-48 object-cover rounded mb-4" />
            <h2 className="text-2xl font-bold mb-2">{dish.name}</h2>
            <p className="mb-4">{dish.description}</p>
            <p className="text-sm text-gray-500 mb-4">{dish.recipe}</p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold">Votes: {dish.votes}</span>
              <button
                onClick={() => handleVote(dish.id)}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Vote
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default VotingPage
