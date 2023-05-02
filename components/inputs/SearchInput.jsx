'use client'
import React from 'react'

const SearchInput = ({ name, onChange, placeholder = '' }) => {
  return (
    <input
      type="text"
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      className="p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border outline-none border-gray-300 focus:ring-1 focus:ring-blue-400 focus:border-blue-400"
    />
  )
}

export default SearchInput
