const { searchAlumniByName } = require("./app/api/searchAlumni");

const getData = async () => {
  const data = await searchAlumniByName("阮文栋", 1);
  data.list.forEach(element => {
    console.log(element);
  });
  
};

getData()
