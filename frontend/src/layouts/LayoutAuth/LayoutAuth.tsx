import React, { ReactNode } from 'react';

interface LayoutAuthProps {
    children: ReactNode;
}

const LayoutAuth: React.FC<LayoutAuthProps> = ({ children }) => {
    return (
    <div className='flex flex-col justify-center lg:flex-row gap-10 lg:gap-0 w-screen min-h-screen bg-gray-100'>
        {children}
    </div>
  )
}

export default LayoutAuth