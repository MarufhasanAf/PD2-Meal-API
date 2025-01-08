const searchByName = () => {
  const search = document.getElementById("search").value;
  const container = document.getElementById("cart-main-container");
  container.innerHTML = "";
  const details = document.getElementById("details-container");
  details.innerHTML = "";
  details.style.display = "none";
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.meals) {
        displayData(data);
      } else {
        container.innerHTML = "<p>No meals found. Try another search.</p>";
      }
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
};

const displayData = (data) => {
  data.meals.forEach((element) => {
    const container = document.getElementById("cart-main-container");

    const div = document.createElement("div");
    div.classList.add("card-container");
    const imgLink = element.strMealThumb;
    div.innerHTML = `
    <img class="card-img" src="${imgLink}">
    <h3 class="product-title">${element.strMeal}</h3>
    
    `;
    container.appendChild(div);
    div.addEventListener("click", () => {
      const details = document.getElementById("details-container");
      details.innerHTML = "";
      details.style.display = "block";
      fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${element.idMeal}`
      )
        .then((res) => res.json())
        .then((data) => {
          const div2 = document.createElement("div");
          div2.innerHTML = `
          <img class="card-img" src="${imgLink}">
          <h3 class="product-title">${element.strMeal}</h3>
          <h3>Ingredient</h3>
          <ul>
            <li>${data.meals[0].strIngredient1}</li>
            <li>${data.meals[0].strIngredient2}</li>
            <li>${data.meals[0].strIngredient3}</li>
            <li>${data.meals[0].strIngredient4}</li>
            <li>${data.meals[0].strIngredient5}</li>
            <li>${data.meals[0].strIngredient6}</li>
            <li>${data.meals[0].strIngredient7}</li>
            <li>${data.meals[0].strIngredient8}</li>
            <li>${data.meals[0].strIngredient9}</li>
 
          </ul>
        `;
          details.appendChild(div2);
        });
    });
  });
};
