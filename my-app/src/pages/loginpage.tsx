import React, { useState } from 'react'
import FormInput from '../components/forminput'

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState({ email: '', password: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  
 

  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <FormInput label="Email" type="email" name="email" value={formData.email} onChange={handleChange} />
        <FormInput label="Password" type="password" name="password" value={formData.password} onChange={handleChange} />
        <button type="submit" className="bg-blue-500 text-white w-full py-2 rounded mt-4 hover:bg-blue-600">
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginPage
