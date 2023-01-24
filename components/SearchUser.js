import React from 'react'

export default function SearchUser() {
  return (
    <div>
      <div className='border-2 border-black'>
        <div className='text-center text-xl font-medium'>Search User</div>
        <div>
            <input type="text"/>
            <button>Search</button>
        </div>
      </div>
    </div>
  )
}
