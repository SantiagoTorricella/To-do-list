const createProject = (projectName) => {
  this.name = projectName;
  this.projectTasks = [];
  return { name, projectTasks };
};

export default createProject;
