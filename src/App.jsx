import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProject from "./components/NoProject";
import Sidebar from "./components/sidebar";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects:[]
  });


  const handleCreateProject = () => {
    setProjectState((prev) => {
      return {...prev,
      selectedProjectId:null}
    })
  };

  const handleAddProject = (projectData) => {
    const newProject = {
      ...projectData,
      id: Math.random()
    }

    setProjectState((prev) => {
      return {
        ...prev,
        projects: [...prev.projects, newProject],
        selectedProjectId:undefined
      }
    })
  }

  let content;

  if (projectState.selectedProjectId === undefined) {
    content = <NoProject onClickCreate={handleCreateProject} />;
  } else if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} />;
  }

  console.log(projectState);

  return (
    <main className="h-screen mt-8 flex gap-8">
      <Sidebar onClickCreate={handleCreateProject} />
      {content}
    </main>
  );
}

export default App;
