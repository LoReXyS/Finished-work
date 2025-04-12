const scientists = [
  {
    name: "Albert",
    surname: "Einstein",
    born: 1879,
    dead: 1955,
    id: 1,
    url: "./imgs/AlbertEinsteinHead.jpg",
  },
  {
    name: "Isaac",
    surname: "Newton",
    born: 1643,
    dead: 1727,
    id: 2,
    url: "./imgs/GodfreyKnellerIsaacNewton.jpg",
  },
  {
    name: "Galileo",
    surname: "Galilei",
    born: 1564,
    dead: 1642,
    id: 3,
    url: "./imgs/Galileo",
  },
  {
    name: "Marie",
    surname: "Curie",
    born: 1867,
    dead: 1934,
    id: 4,
    url: "./imgs/MarieCuriec",
  },
  {
    name: "Johannes",
    surname: "Kepler",
    born: 1571,
    dead: 1630,
    id: 5,
    url: "./imgs/Kepler",
  },
  {
    name: "Nicolaus",
    surname: "Copernicus",
    born: 1473,
    dead: 1543,
    id: 6,
    url: "/imgs/NicolausCopernicus",
  },
  {
    name: "Max",
    surname: "Planck",
    born: 1858,
    dead: 1947,
    id: 7,
    url: "/imgs/MaxPlanck",
  },
  {
    name: "Katherine",
    surname: "Blodgett",
    born: 1898,
    dead: 1979,
    id: 8,
    url: "/imgs/Blodgett",
  },
  {
    name: "Ada",
    surname: "Lovelace",
    born: 1815,
    dead: 1852,
    id: 9,
    url: "/imgs/Lovelace",
  },
  {
    name: "Sarah E.",
    surname: "Goode",
    born: 1855,
    dead: 1905,
    id: 10,
    url: "/imgs/Sarah E",
  },
  {
    name: "Lise",
    surname: "Meitner",
    born: 1878,
    dead: 1968,
    id: 11,
    url: "/imgs/Meitner",
  },
  {
    name: "Hanna",
    surname: "Hammarström",
    born: 1829,
    dead: 1909,
    id: 12,
    url: "/imgs/Hammarström",
  },
];
//19 ст
// let scientistsNot19th = scientists.filter(
//   (scientist) => scientist.born >= 1801
// );
// Сума років
let ageSum = scientists.reduce((sum, scientists) => {
  return sum + (scientists.born - scientists.dead);
});

// відсортувати прожитих років
// let sortedByAge = scientists.sort(
//   (a, b) => a.dead - a.born - (b.dead - b.born)
// );
// Фільтруємо вчених, прізвище яких починається на "С"
// const scientistsWithC = scientists.filter(
//   (scientist) => scientist.surname[0] === "C"
// );

// Енштейн народився
// let albertEinsteinWasBorn = scientists.find((element) => element.born);
//Знайти вчених в яких співпадають перші літери
// const filteredScientists = scientists.filter(
//   (scientist) => scientist.name[0] === scientist.surname[0]
// );

//родився найпізніше
// let youngestScientist = scientists[0];
// for (let i = 1; i < scientists.length; i++) {
//   if (scientists[i].born > youngestScientist.born) {
//     youngestScientist = scientists[i];
//   }
// }
// Фільтруємо вчених ім'я яких не починається на "А"
// const updatedScientists = scientists.filter(
//   (scientist) => scientist.name[0] !== "A"
// );

//
const scientistItemList = document.querySelectorAll(".item-list");
//
const scientistswasborn = document.getElementById("1");
scientistswasborn.addEventListener("click", (event) => {
  let scientistsNot19th = scientists.filter(
    (scientist) => scientist.born >= 1801
  );
  scientistItemList.forEach((element, idx) => {
    if (scientistsNot19th[idx]) {
      element.textContent = `${scientistsNot19th[idx].name} ${scientistsNot19th[idx].surname}`;
    }
  });
});

// const sorfOfNames = document.getElementById("2");
// sorfOfNames.addEventListener("click", (event) => {
//   const filteredScientists = scientists.sort((a, b) => {
//     if (a.name < b.name) {
//       return -1;
//     }
//     if (a.name > b.name) {
//       return 1;
//     }
//     return 0;
//   });

//   if (filteredScientists[idx]) {
//     element.textContent = `${filteredScientists[idx].name} ${filteredScientists[idx].surname}`;
//   }
// });
const sorfOfNames = document.getElementById("2");
sorfOfNames.addEventListener("click", (event) => {
  const filteredScientists = scientists.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  scientistItemList.forEach((element, idx) => {
    if (filteredScientists[idx]) {
      element.textContent = `${filteredScientists[idx].name} ${filteredScientists[idx].surname}`;
    }
  });
  // if (albertEinsteinWasBorn && scientistItemList.length > 0) {
  //   scientistItemList[0].style.backgroundImage = `url("${albertEinsteinWasBorn.url}")`;
  // }
  let albertEinsteinWasBorn = scientists.find(
    (scientist) => scientist.surname === "Einstein"
  );

  // if (albertEinsteinWasBorn && scientistItemList.length > 0) {
  //   scientistItemList[0].style.backgroundImage = `url("${albertEinsteinWasBorn.url}")`;
  // }
});
//
const sortOfDaysGone = document.getElementById("3");
sortOfDaysGone.addEventListener("click", (event) => {
  let sortedByAge = scientists.sort(
    (a, b) => a.dead - a.born - (b.dead - b.born)
  );
  scientistItemList.forEach((element, idx) => {
    if (sortedByAge[idx]) {
      element.textContent = `${sortedByAge[idx].name} ${sortedByAge[idx].surname}`;
    }
  });
});
const wasBornLeiter = document.getElementById("4");
wasBornLeiter.addEventListener("click", () => {
  scientistItemList.forEach((element) => {
    element.textContent = "";
  });
  let youngestScientist = scientists.reduce(
    (youngest, scientist) =>
      scientist.born > youngest.born ? scientist : youngest,
    scientists[0]
  );

  if (scientistItemList.length > 0) {
    scientistItemList[0].textContent = `${youngestScientist.name} ${youngestScientist.surname}`;
  }
});

const einsteinBorn = document.getElementById("5");

einsteinBorn.addEventListener("click", () => {
  scientistItemList.forEach((element) => {
    element.textContent = "";
  });
  let albertEinsteinWasBorn = scientists.find(
    (scientist) => scientist.surname === "Einstein"
  );

  // if (albertEinsteinWasBorn && scientistItemList.length > 0) {
  //   scientistItemList[0].style.backgroundImage = `url("${albertEinsteinWasBorn.url}")`;
  // }
});

const secondNameC = document.getElementById("6");
secondNameC.addEventListener("click", (event) => {
  scientistItemList.forEach((element) => {
    element.textContent = "";
  });
  const scientistsWithC = scientists.filter(
    (scientist) => scientist.surname[0] === "C"
  );
  scientistItemList.forEach((element, idx) => {
    if (scientistsWithC[idx]) {
      element.textContent = `${scientistsWithC[idx].name} ${scientistsWithC[idx].surname}`;
    }
  });
});
const filterOfNamesA = document.getElementById("7");
filterOfNamesA.addEventListener("click", (event) => {
  const updatedScientists = scientists.filter(
    (scientist) => scientist.name[0] !== "A"
  );
  scientistItemList.forEach((element) => {
    element.textContent = "";
  });
  scientistItemList.forEach((element, idx) => {
    if (updatedScientists[idx]) {
      element.textContent = `${updatedScientists[idx].name} ${updatedScientists[idx].surname}`;
    }
  });
});
const findTheScientistsHadLife = document.getElementById("8");
findTheScientistsHadLife.addEventListener("click", (event) => {});
const firstLetter = document.getElementById("9");
firstLetter.addEventListener("click", (event) => {
  console.log();
});

const namesFirstLetter = document.getElementById("9");

namesFirstLetter.addEventListener("click", () => {
  const filteredScientists = scientists.filter(
    (scientist) =>
      scientist.name[0].toUpperCase() === scientist.surname[0].toUpperCase()
  );

  scientistItemList.forEach((element) => {
    element.textContent = "";
  });

  scientistItemList.forEach((element, idx) => {
    if (filteredScientists[idx]) {
      element.textContent = `${filteredScientists[idx].name} ${filteredScientists[idx].surname}`;
    }
  });
});
// модалка
let buttonForModal = document.querySelector(".forAnModal");
buttonForModal.addEventListener("click", (event) => {
  event.preventDefault();
  modal.style.display = "block";
});
let closeModal = document.getElementById("modal_close");
closeModal.addEventListener("click", (event) => {
  event.preventDefault();
  modal.style.display = "none";
});
let modalBackgroung = document.getElementById("modal_backgroung");

// modalBackgroung.onclick = closeModal.onclick = closeModal;
modalBackgroung.addEventListener("click", (event) => {
  modal.style.display = "none";
});
