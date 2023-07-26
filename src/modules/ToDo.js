const createToDo = (name, description, date, project) => {
  globalThis.name = name;
  globalThis.description = description;
  globalThis.date = date;
  globalThis.taskProject = project;

  return { name, description, date, taskProject };
};

export { createToDo };
