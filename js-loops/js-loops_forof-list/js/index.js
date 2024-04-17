console.clear();

const main = document.querySelector('[data-js="main"]');

// Create a list from an array

const ol = document.createElement("ol");
main.append(ol);

const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "PHP",
  "Ruby",
];
for (const programs of programmingLanguages) {
  console.log(programs);

  const list = document.createElement("li");
  list.textContent = programs;
  ol.append(list);
}

// --v-- write/change code here --v--

// --^-- write/change code here --^--
