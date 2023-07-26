const createProject = (projectName) => {
  globalThis.name = projectName;
  globalThis.projectTasks = [];
  return { name, projectTasks };
};

export default createProject;
