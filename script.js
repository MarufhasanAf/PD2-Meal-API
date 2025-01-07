const searchByName = () => {
  const search = document.getElementById("search").value;
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    .then((res) => res.json())
    .then((data) => {
      data.meals.forEach((element) => {
        console.log(element);
      });
    });
};
