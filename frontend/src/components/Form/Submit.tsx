import React from 'react'

const Submit: React.FC<{text: string, onClick: any}> = ({text, onClick }) => {
  return (
    <button 
        type='submit'
        onClick={onClick}
        className='outline-none bg-blue-500 p-2 rounded-lg text-white' 
    >
        {text}
    </button>
  )
}

export default Submit