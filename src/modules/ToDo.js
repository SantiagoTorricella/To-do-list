const createToDo = (name, description, date) => {
  globalThis.name = name;
  globalThis.description = description;
  globalThis.date = date;
  return { name, description, date };
};

export { createToDo };
