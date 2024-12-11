import React, { useState } from 'react'

interface DishFormData {
  image: File | null
  description: string
  recipe: string
}

const DishSubmissionPage: React.FC = () => {
  const [formData, setFormData] = useState<DishFormData>({
    image: null,
    description: '',
    recipe: ''
  })

  const [imagePreview, setImagePreview] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setFormData((prevData) => ({
        ...prevData,
        image: file
      }))

      const fileReader = new FileReader()
      fileReader.onloadend = () => {
        setImagePreview(fileReader.result as string)
      }
      fileReader.readAsDataURL(file)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Dish Submission:', formData)
    alert('Dish submitted successfully!')
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-amber-50">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md border border-black">
        <h2 className="text-2xl font-bold text-center text-black mb-6">Submit Your Dish</h2>
        
        {}
        <div className="mb-4 w-full">
          <input 
            type="file" 
            accept="image/*" 
            id="dishPhoto"
            onChange={handleFileChange} 
            className="hidden"
          />
          <label 
            htmlFor="dishPhoto" 
            className="w-full p-2 border border-black rounded bg-white text-black cursor-pointer hover:bg-gray-200"
          >
            select a dish  photo
          </label>
        </div>

        {}
        {imagePreview && (
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-black mb-2">Chosen Dish Photo:</h3>
            <img 
              src={imagePreview} 
              alt="Dish Preview" 
              className="w-full h-auto border border-black rounded" 
            />
          </div>
        )}

        {}
        <textarea
          name="description"
          placeholder="Dish Description"
          value={formData.description}
          onChange={handleChange}
          className="border border-black p-2 mb-4 w-full rounded bg-white text-black"
        />

        <textarea
          name="recipe"
          placeholder="Recipe Details"
          value={formData.recipe}
          onChange={handleChange}
          className="border border-black p-2 mb-4 w-full rounded bg-white text-black"
        />

        {}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600">
          Submit Dish
        </button>
      </form>
    </div>
  )
}

export default DishSubmissionPage
