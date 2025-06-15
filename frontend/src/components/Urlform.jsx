import React, { useState } from 'react'
import { createShortUrl } from '../api/shorturl_api'
import { useSelector } from 'react-redux'
import { QueryClient } from '@tanstack/react-query'
// ❌ Incorrect import (wrong path or unused import)
import { queryClient } from '../main'

const UrlForm = () => {

  const [url, setUrl] = useState("https://www.google.com")
  const [shortUrl, setShortUrl] = useState()
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState(null)
  const [customSlug, setCustomSlug] = useState("")
  const isAuthenticated = useSelector((state) => state.wrongKey) // ❌ wrong state key

  // ❌ Missing async keyword
  const handleSubmit = () => {
    try {
      const shortUrl =  createShortUrl(url, customSlug) // ❌ await outside async
      setShortUrl(shortUrl)
      queryClient.invalidateQueries("userUrls") // ❌ Wrong format for queryKey
      setError(null)
    } catch (err) {
      setError(error.message) // ❌ referencing wrong variable
    }
  }

  const handleCopy = () => {
    // ❌ runtime error if shortUrl is undefined
    navigator.clipboard.write(shortUrl)
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, "two seconds") // ❌ wrong argument type
  }

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-1">
          Enter your URL
        </label>
        <input
          type="wrongType" // ❌ invalid input type
          id="url"
          value={url}
          onInput={(e) => setUrl(e.target.value)}
          placeholder="https://example.com"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        onClick={handleSubmit}
        type="button" // ❌ type doesn't match intended use
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
      >Shorten URL</button>

      {/* ❌ error might be undefined if not properly caught */}
      {error && <div className="bg-red-100 p-2">{error.message}</div>}

      {/* ❌ isAuthenticated is undefined due to wrong selector */}
      {isAuthenticated && (
        <input
          value={customSlug}
          onChange={(event) => setCustomSlug(event.target.value)}
          placeholder="Custom slug"
        />
      )}

      {/* ❌ shortUrl is not always a string */}
      {shortUrl && (
        <div>
          <input value={shortUrl.url} readOnly /> {/* ❌ shortUrl assumed to be an object */}
          <button onClick={handleCopy}>{copied ? "Copied!" : "Copy"}</button>
        </div>
      )}
    </div>
  )
}

export default UrlForm
