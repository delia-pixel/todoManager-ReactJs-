import React, { useRef } from "react";
import Input from "./Input";
import { Ref } from "react";
import Modal from "./Modal";

function NewProject({ onAdd, onCancel }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const modalRef = useRef();

  const handleSave = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      dueDate=== ""
    ) {
      modalRef.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  };

  return (
    <>
      <Modal ref={modalRef} caption="Close">
        <h2 className="font-bold text-xl text-stone-700 my-4">Invalid Input</h2>
        <p className="mb-4 text-stone-600">
          Oops ... looks like you forgot to enter a value.
        </p>
        <p className="mb-4 text-stone-600">
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>
      <div className="mt-16 w-[32rem]">
        <menu className="flex flex-row items-center justify-end gap-4">
          <li>
            <button className="hover:text-stone-700" onClick={onCancel}>Cancel</button>
          </li>
          <li>
            <button
              className="bg-stone-800 hover:bg-stone-950 text-slate-200 px-4 py-1 rounded-md"
              onClick={handleSave}
            >
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
    </>
  );
}

export default NewProject;
