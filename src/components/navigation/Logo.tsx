import React from 'react';
import { Link } from 'react-router-dom';

export function Logo() 
{
  return (
<Link to="/" className="flex items-center space-x-2 group h-16"> {/* Fixed height container */}
  <img 
    src="/elements/home/logo/nav-logo.png"
    alt="Dental World Logo"
    className="h-[300px] w-[300px] object-contain" // Adjust these values as needed
  />
</Link>

  );
}