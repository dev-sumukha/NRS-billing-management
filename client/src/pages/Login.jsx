import axios from "axios";
import React, { useContext, useState } from 'react'
import userContext from "../store/UserContext"
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const navigate = useNavigate()
  const { storeTokenInLS } = useContext(userContext)

  function handleInput(e) {
    let name = e.target.name
    let value = e.target.value

    setUser({
      ...user,
      [name]: value
    })
    console.log(user);
  }

  async function handleSubmit(e) {
    e.preventDefault()
    
    try {
      const res = await axios.post('http://localhost:3000/api/auth/login', user)
      if (res) {
        storeTokenInLS(res.data.token)  // Assuming your backend returns a token
        navigate('/pass')  // Redirect after successful login
      }
    } catch (error) {
      alert('Something went wrong')
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      {/* Login Card */}
      <div className="w-full max-w-md p-8 bg-white border border-gray-200 rounded-lg shadow-md">
        {/* Logo and Welcome */}
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold" style={{ color: "#4E45E5" }}>
            NRS
          </h1>
        </div>

        {/* Login Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              value={user.email}
              className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              style={{ borderColor: "#4E45E5" }}
              onChange={handleInput}
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="••••••••••"
              value={user.password}
              className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              style={{ borderColor: "#4E45E5" }}
              autoComplete="off"
              onChange={handleInput}
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 text-white rounded-lg hover:bg-indigo-700 focus:outline-none"
            style={{ backgroundColor: "#4E45E5" }}
          >
            Login
          </button>
        </form>
        
        {/* Footer */}
        <div className="mt-6 text-sm text-center text-gray-400">
          Developed with ❤️ by Sumukha Sureban.
        </div>
      </div>
    </div>
  );
};

export default Login;
