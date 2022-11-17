// Fie urmatorul array:
const employees = [
  {
    name: "Duroaia Dan",
    position: "UI/UX",
    salary: 4500,
  },
  {
    name: "Trifanov Aurelia",
    position: "Software Developer",
    salary: 6800,
  },
  {
    name: "Popescu Emilia",
    position: "Product Manager",
    salary: 4000,
  },
];

// 1. Creeaza doua functii:
// 1.1. setEmployees - primeste ca parametru un array de angajati si adauga array-ul respectiv in localStorage, sub cheia "employees". Nu returneaza nimic.

const setEmployees = (arrayEmployees) => {
  localStorage.setItem("employees", JSON.stringify(arrayEmployees));
};

// 1.2. getEmployees - nu primeste niciun parametru. Extrage din local storage valoarea cheii "employees" si o returneaza, ca array.

const getEmployees = () => {
  return JSON.parse(localStorage.getItem("employees"));
};

// 2. Folosind functiile de mai sus, realizeaza urmatoarele operatii:
// 2.1. Adauga array-ul employees in localStorage.
setEmployees(employees);
// 2.2. Extrage angajatii din localStorage.
console.log(getEmployees());
// 2.3 Parcurge angajatii si afiseaza la consola unmatorul mesaj:
// Angajatul {name}, {position}, are salariul de {salary}.

employees.forEach((employee) =>
  console.log(
    `Angajatul ${employee.name}, ${employee.position}, are salariul de ${employee.salary}.`
  )
);
