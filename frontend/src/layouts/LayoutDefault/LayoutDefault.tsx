import React, { ReactNode } from 'react';

interface LayoutDefaultProps {
    children: ReactNode;
}

const LayoutDefault: React.FC<LayoutDefaultProps> = ({ children }) => {
    return (
    <div>
        {children}
    </div>
  )
}

export default LayoutDefault