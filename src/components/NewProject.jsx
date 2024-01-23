import React from 'react';
import Input from './Input';

function NewProject() {
  return (
    <div className="mt-16 w-[32rem]">
      <menu className="flex flex-row items-center justify-end gap-4">
        <li>
          <button className=" hover:text-stone-700">Cancel</button>
        </li>
        <li>
          <button className="bg-stone-800 hover:bg-stone-950 text-slate-200 px-4 py-1 rounded-md">
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input label="Title" />

        <Input label="Description" textarea />

        <Input label="Due Date" />
      </div>
    </div>
  );
}

export default NewProject