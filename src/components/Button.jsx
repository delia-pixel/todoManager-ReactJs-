import React from 'react'

function Button({ children, ...props }) {
    

  return (
    <button className="text-stone-400 bg-stone-700 text-lg px-4 py-2 rounded-md hover:bg-stone-600 hover:text-stone-100" {...props} >
      {children}
    </button>
  );
}

export default Button
