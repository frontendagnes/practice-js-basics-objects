const calendarJS = {
  ES1: "1997-06",
  ES2: "1998-06",
  ES3: "1999-12",
  ES4: null,
  ES5: "2009-12",
  ES6: "2015-06",
  ES7: "2016-06",
  ES8: "2017-06",
  ES9: "2018-06",
};

for (const item in calendarJS) {
  if (calendarJS[item] === null) {
    console.log(`${item} nie zostało wydane`);
  } else {
    console.log(`${item} zostało wydane w terminie ${calendarJS[item]}`);
  }
}