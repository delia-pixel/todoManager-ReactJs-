import React from "react";

function Sidebar() {
  return (
    <aside className="bg-stone-900 w-1/5 h-full rounded-r-lg text-stone-50 px-8 py-16">
      <h2 className="uppercase text-2xl text-stone-200 font-bold py-8 mx-6">
        Your projects
      </h2>

      <div className="mx-6">
        <button className="text-stone-400 bg-stone-700 text-lg px-4 py-2 rounded-md hover:bg-stone-600 hover:text-stone-100">
          + Add Project
        </button>
        
          <ul className="">
            <li>
              <a href="">Learning React</a>
            </li>
            <li>
              <a href="">Mastering React</a>
            </li>
          </ul>
        
      </div>
    </aside>
  );
}

export default Sidebar;
