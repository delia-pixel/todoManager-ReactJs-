import React from "react";

function Input({ label, textarea, ...props }) {
    const classes =
      "w-full p-1 border-b-2 rounded-sm bg-stone-200 border-stone-300 text-stone-600 focus:outline-none focus:border-stone-600";
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-stone-500 text-sm font-bold uppercase">
        {label}
      </label>
      {textarea ? (
        <textarea className={classes} {...props}></textarea>
      ) : (
        <input type="text" className={classes} {...props} />
      )}
    </p>
  );
}

export default Input;
