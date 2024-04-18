const recipes = document.querySelectorAll(".recipe");

recipes.forEach(recipe => {
  const info = recipe.querySelector(".info");

  recipe.addEventListener("mouseover", () => {
    info.classList.add("infoReveal");
  });
  recipe.addEventListener("mouseout", () => {
    info.classList.remove("infoReveal");
  });
});
