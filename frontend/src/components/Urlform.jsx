import React from 'react'
import { useState } from 'react';

const Urlform = () => {
  const [url, setUrl] = useState("https://www.google.com");
  const [shortUrl, setShortUrl] = useState();

  const handleSubmit =async (event) => {
const data = await axios.post("http://localhost:3000/api/create",{url})
event.preventDefault();
setShortUrl(data.data);
  }
  return (
    <div>
      <div 
     className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
        <div className="bg-white shadow-xl rounded-xl p-8 max-w-md w-full">
          <h1 className="text-2xl font-bold text-center mb-6 text-indigo-600">🔗 URL Shortener</h1>

          <form className="space-y-4">
            <input
              type="url"
              value={url}
              onChange={(event) => setUrl(event.target.value)}
              placeholder="Enter your long URL here"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />

            <button
            onClick={()=> handleSubmit(event)}
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
            >
              Shorten URL
            </button>
          </form>

          {shortUrl && (
          <div className="mt-6 text-center">
            <p className="text-gray-700">Short URL:</p>
            <a
              href={shortUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 font-semibold underline"
            >
              {shortUrl}
            </a>
          </div>
        )}
        </div>
      </div>
    </div>
  )
}

export default Urlform
  // 2.30 MIN 