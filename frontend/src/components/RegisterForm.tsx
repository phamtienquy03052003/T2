import { useState } from "react";
import Header from "./Header";

interface RegisterFormProps {
  onSubmit: (data: { username: string; email: string; password: string }) => void;
}

export default function RegisterForm({ onSubmit }: RegisterFormProps) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-fuchsia-500">
      <Header />
      <div className="flex items-center justify-center mt-12">
        <div className="w-full max-w-md bg-white rounded-lg shadow-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Register
          </h2>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit({ username, email, password });
            }}
            className="space-y-6"
          >
            <div>
              <input
                type="text"
                placeholder="Username"
                className="w-full border-b-2 border-gray-300 focus:border-pink-500 outline-none py-2 text-gray-700"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full border-b-2 border-gray-300 focus:border-pink-500 outline-none py-2 text-gray-700"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full border-b-2 border-gray-300 focus:border-pink-500 outline-none py-2 text-gray-700"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-md bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold hover:opacity-90 transition"
            >
              Sign Up
            </button>
          </form>

          <div className="my-6 text-center text-gray-500 text-sm">
            or Connect With Social Media
          </div>

          <div className="space-y-3">
            <button className="w-full flex items-center justify-center gap-2 bg-sky-500 text-white py-2 rounded-md hover:bg-sky-600 transition">
              Sign in with Twitter
            </button>
            <button className="w-full flex items-center justify-center gap-2 bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800 transition">
              Sign in with Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
