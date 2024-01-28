import React, { useState } from 'react'

function NewTask({onCreateTask}) {
    const [enteredTask, setEnteredTask] = useState('');
    const handleTask = (event) => {
        setEnteredTask(event.target.value)
    }

    const handleSave = () => {
        if (enteredTask.trim() === '') {
            return;
        }
        onCreateTask(enteredTask);
        setEnteredTask('');
   }
  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm"
        onChange={handleTask}
        value={enteredTask}
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleSave}
      >
        Add task
      </button>
    </div>
  );
}

export default NewTask
