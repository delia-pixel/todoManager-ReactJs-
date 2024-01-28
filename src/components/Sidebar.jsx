import React from "react";
import Button from "./Button";

function Sidebar({
  onClickCreate,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className="bg-stone-900 w-1/5 h-full rounded-r-lg text-stone-50 px-8 py-16">
      <h2 className="uppercase text-2xl text-stone-200 font-bold py-8 mx-6">
        Your projects
      </h2>

      <div className="mx-6">
        <Button onClick={onClickCreate}>+ Add Project</Button>

        <ul className="list-none mt-8">
          {projects.map((project) => {
            let cssClasses =
              "hover:bg-stone-800 text-left w-full py-1 px-1 my-1";
            if (project.id === selectedProjectId) {
              cssClasses += "bg-stone-800 text-stone-200";
            } else {
              cssClasses += "text-stone-400";
            }
            return (
              <li key={project.id}>
                <button
                  className={cssClasses}
                  onClick={() => onSelectProject(project.id)}
                >
                  {project.title}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
