import React, { ChangeEventHandler } from 'react'

type InputTypes = 'text' | 'password' | 'email';

const Input: React.FC<{type: InputTypes, name: string, onChange: ChangeEventHandler, value: string, placeholder: string}> = ({type, name, onChange, value, placeholder}) => {
  return (
    <input 
        className='border-2 outline-none p-2 rounded-lg' 
        type={type} 
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
    />
  )
}

export default Input