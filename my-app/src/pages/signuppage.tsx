// src/pages/SignupPage.tsx
import React, { useState } from 'react'
import { Link } from 'react-router-dom' // Import Link from react-router-dom
import FormInput from '../components/forminput'

const SignupPage: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.password === formData.confirmPassword) {
      console.log('Signup data:', formData)
    } else {
      alert('Passwords do not match')
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <FormInput label="Email" type="email" name="email" value={formData.email} onChange={handleChange} />
        <FormInput label="Password" type="password" name="password" value={formData.password} onChange={handleChange} />
        <FormInput label="Confirm Password" type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
        <button type="submit" className="bg-green-500 text-white w-full py-2 rounded mt-4 hover:bg-green-600">
          Sign Up
        </button>
        <p className="text-center text-sm mt-4">
          Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Log in</Link>
        </p>
      </form>
    </div>
  )
}

export default SignupPage
