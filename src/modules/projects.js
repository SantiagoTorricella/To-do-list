const createProject = (projectName) => {
  globalThis.name = projectName;
  globalThis.projectTasks = [];
  return { projectName, projectTasks };
};

export default createProject;
