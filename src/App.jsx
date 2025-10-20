import "./App.css";

function App() {
  return (
    <main className="min-h-screen bg-slate-50 flex justify-center items-center p-4 font-sans">
      {/* Container Start */}
      <div className="w-full max-w-sm">

        {/* Logo Start */}
        <div className="flex justify-center items-baseline font-poppins tracking-wider text-teal-600 text-4xl mb-12">
          <span className="font-bold">FINE</span>
          <span className="font-normal">bank</span>
          <span className="font-bold">.IO</span>
        </div>

        {/* Form Section */}
        <div>
          <form action="#" onSubmit={(e) => e.preventDefault()}>
            
            {/* Email Input Field */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="py-3 px-4 text-sm rounded-md w-full bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="hello@example.com"
                name="email"
                id="email"
              />
            </div>

            {/* Password Input Field */}
            <div className="mb-5">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                className="py-3 px-4 text-sm rounded-md w-full bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="************"
                name="password"
                id="password"
              />
            </div>

            {/* "Keep me signed in" Checkbox */}
            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                className="h-4 w-4 accent-teal-600 border-gray-300 rounded focus:ring-teal-500"
                name="status"
                id="status"
              />
              <label htmlFor="status" className="text-sm text-gray-700 ml-2">
                Keep me signed in
              </label>
            </div>

            {/* Login Button */}
            <button
              className="h-12 w-full rounded-md text-sm font-semibold bg-teal-500 text-white hover:bg-teal-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>

        {/* Divider "or sign in with" */}
        <div className="my-8 flex items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="flex-shrink mx-4 text-gray-500 text-xs">or sign in with</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Sign in with Google Button */}
        <div className="mb-8">
          <button
            className="h-12 flex items-center justify-center rounded-md text-sm w-full bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
            type="button"
          >
            <svg
              className="h-5 w-5 mr-3"
              xmlns="http://www.w.org/2000/svg"
              viewBox="0 0 48 48"
            >
              <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
              <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
              <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
              <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571l6.19,5.238C41.38,36.162,44,30.638,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
            </svg>
            <span>Continue with Google</span>
          </button>
        </div>

        {/* Create an account link */}
        <div className="text-center">
          <a href="#" className="text-teal-600 text-sm font-bold hover:underline">
            Create an account
          </a>
        </div>
        
      </div>
    </main>
  );
}

export default App;