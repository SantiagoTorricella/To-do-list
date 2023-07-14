const createTask = (name, description, date, project) => {
  this.name = name;
  this.description = description;
  this.project = project;
  this.date = date;
  return { name, date };
};
