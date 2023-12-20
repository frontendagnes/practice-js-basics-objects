const user = {
  firstName: "Adam",
  lastName: "Nowak",
  born: {
    day: "19",
    month: "12",
    year: "1985",
  },
};

user.getBorn = function () {
  const now = new Date();
  const day = now.getDate();
  const month = now.getMonth() + 1;

  const today = `${day}.${month}`;
  console.log("today: ", today);

  const bornDay = this.born.day;
  const bornMonth = this.born.month;
  const bornDate = `${bornDay}.${bornMonth}`;
  console.log("born date: ", bornDate);

  if (today === bornDate) {
    return "Dziś są Twoje urodziny!";
  } else {
    return "Nie masz dzisiaj urodzin!";
  }
};

console.log(user.getBorn());

// function isBirthday() {
//   const now = new Date();
//   const day = now.getDate();
//   const month = now.getMonth() + 1;

//   const today = `${day}.${month}`;
//   console.log("today: ", today);

//   const bornDay = user.born.day;
//   const bornMonth = user.born.month;

//   const bornDate = `${bornDay}.${bornMonth}`;
//   console.log("born date: ", bornDate);

//   if (today === bornDate) {
//     return ("Dziś są Twoje urodziny!");
//   } else {
//     return("Nie masz dzisiaj urodzin!");
//   }
// }

// console.log(isBirthday());
