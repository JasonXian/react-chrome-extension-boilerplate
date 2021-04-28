import React from 'react'
import ReactDOM from 'react-dom'
import 'tailwindcss/tailwind.css'
import './popup.css'

const App: React.FC<{}> = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <div className="max-w-lg bg-white shadow-md rounded-lg overflow-hidden mx-auto">
        <div className="py-4 px-8 mt-3">
          <div className="flex flex-col mb-8">
            <h2 className="text-gray-700 font-semibold text-2xl tracking-wide mb-2">
              React Chrome Extension
            </h2>
            <p className="text-gray-500 text-base">
              With TypeScript and Tailwind CSS support!
            </p>
          </div>
          <div className="bg-gray-100 rounded-lg">
            <div className="py-4 px-4">
              <div className="flex flex-col">
                <h4 className="text-lg font-semibold mb-3">Some box</h4>
                <div className="flex flex-col text-sm text-gray-500">
                  <span className="mb-1">With lots of</span>
                  <span className="mb-1">Interesting text!</span>
                  <span className="mb-1">To read</span>
                </div>
              </div>
            </div>
          </div>
          <div className="py-4">
            <a
              href="#"
              className="block tracking-widest uppercase text-center shadow bg-indigo-600 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded"
            >
              Sample Button
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

const root = document.createElement('div')
document.body.appendChild(root)
ReactDOM.render(<App />, root)
