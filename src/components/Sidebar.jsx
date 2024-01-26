import React from "react";
import Button from "./Button";

function Sidebar({onClickCreate}) {
  return (
    <aside className="bg-stone-900 w-1/5 h-full rounded-r-lg text-stone-50 px-8 py-16">
      <h2 className="uppercase text-2xl text-stone-200 font-bold py-8 mx-6">
        Your projects
      </h2>

      <div className="mx-6">
        <Button onClick={onClickCreate}>+ Add Project</Button>
        

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
