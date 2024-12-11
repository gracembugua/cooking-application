// src/components/ChallengeForm.tsx
import React, { useState } from 'react'

interface ChallengeFormProps {
  onSubmit: (data: { title: string; description: string; theme: string; startDate: string; endDate: string }) => void
}

const ChallengeForm: React.FC<ChallengeFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    theme: '',
    startDate: '',
    endDate: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="title" className="block text-sm font-semibold text-gray-700">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Challenge Title"
          required
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-semibold text-gray-700">Description</label>
        <textarea
          name="description"
          id="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Challenge Description"
          required
        />
      </div>

      <div>
        <label htmlFor="theme" className="block text-sm font-semibold text-gray-700">Theme</label>
        <input
          type="text"
          name="theme"
          id="theme"
          value={formData.theme}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Challenge Theme"
          required
        />
      </div>

      <div>
        <label htmlFor="startDate" className="block text-sm font-semibold text-gray-700">Start Date</label>
        <input
          type="date"
          name="startDate"
          id="startDate"
          value={formData.startDate}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>

      <div>
        <label htmlFor="endDate" className="block text-sm font-semibold text-gray-700">End Date</label>
        <input
          type="date"
          name="endDate"
          id="endDate"
          value={formData.endDate}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>

      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
        Create Challenge
      </button>
    </form>
  )
}

export default ChallengeForm
