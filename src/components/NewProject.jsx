import React, { useRef } from "react";
import Input from "./Input";
import { Ref } from "react";

function NewProject({ onAdd }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const handleSave = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;
    // Validation
    onAdd({
      enteredTitle,
      enteredDescription,
      enteredDueDate,
    });
  };


  return (
    <div className="mt-16 w-[32rem]">
      <menu className="flex flex-row items-center justify-end gap-4">
        <li>
          <button className=" hover:text-stone-700">Cancel</button>
        </li>
        <li>
          <button className="bg-stone-800 hover:bg-stone-950 text-slate-200 px-4 py-1 rounded-md" onClick={handleSave}>
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input type="text" ref={title} label="Title" />

        <Input ref={description} label="Description" textarea />

        <Input type="date" ref={dueDate} label="Due Date" />
      </div>
    </div>
  );
}

export default NewProject;
