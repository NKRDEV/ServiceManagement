import React,{ useState } from "react";
import axios from "axios";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
        try {
      const response = await axios.post(
        "http://127.0.0.1:8000/users/login",
        {
          email: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Response:", response.data);

    } catch (error) {
      console.error("Status Code:", error.response.status);
    }
  };

  return (

      <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 class="mt-10 text-left font-serif text-2xl  text-gray-900">Login to your Account</h2>
        </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form action="#" onSubmit={handleLogin} method="POST" class="space-y-6">
          <div>
            <label for="email" class="text-neutral-800 font-medium text-sm ">Email address</label>
            <div class="mt-2">
              <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required class="block w-full rounded-md bg-violet-200 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="text-neutral-800 font-medium text-sm">Password</label>
              <div class="text-sm">
                <a href="#" class="font-semibold text-indigo-400 hover:text-indigo-300">Forgot password?</a>
              </div>
            </div>
            <div class="mt-2">
              <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required class="block w-full rounded-md bg-violet-200 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
            </div>
          </div>

          <div>
            <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Login</button>
          </div>
        </form>

      </div>
    </div>

  );
}
export default Login