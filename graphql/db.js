export const Peopels = [
  { id: 1, name: "yang", age: 12, gender: "femail" },
  { id: 2, name: "ke", age: 18, gender: "mail" },
  { id: 3, name: "yp", age: 2, gender: "femail" },
  { id: 4, name: "sema", age: 32, gender: "mail" },
];

export const getById = (id) => Peopels.filter((li) => id === li.id)[0];
