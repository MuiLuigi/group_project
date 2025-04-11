
// This is for the food Recipe select option
const recipes = {
pasta: {      
    title: "Creamy Garlic Pasta",
    ingredients: [
        "200g spaghetti",
        "2 tbsp butter",
        "3 cloves garlic (minced)",
        "1 cup heavy cream",
        "1/2 cup grated Parmesan",
        "Salt & pepper to taste",
        "Chopped parsley for garnish"
      ],
      instructions: "Boil pasta until al dente. In a pan, melt butter, sauté garlic, add cream and cheese. Mix pasta into sauce, season, and serve with parsley."
    },
    tacos: {
      title: "Beef Tacos",
      ingredients: [
        "500g ground beef",
        "1 onion (chopped)",
        "2 cloves garlic (minced)",
        "Taco seasoning",
        "Taco shells",
        "Lettuce, tomato, cheese, and salsa for topping"
      ],
      instructions: "Cook beef with onion and garlic. Add taco seasoning and simmer. Fill taco shells with meat and toppings. Serve hot."
    },
    salad: {
      title: "Avocado Salad",
      ingredients: [
        "2 avocados (diced)",
        "1 cucumber (sliced)",
        "Cherry tomatoes",
        "1/4 red onion (sliced)",
        "Olive oil, lemon juice, salt & pepper"
      ],
      instructions: "Combine all ingredients in a bowl. Drizzle with olive oil and lemon juice. Toss gently and serve fresh."
    }
  };


  const selector = document.getElementById("recipeSelector");
  const display = document.getElementById("recipeDisplay");

  selector.addEventListener("change", () => {
    const selected = selector.value;
    if (recipes[selected]) {
      const recipe = recipes[selected];
      display.innerHTML = `
        <div class="recipe-title">${recipe.title}</div>
        <div class="ingredients">
          <strong>Ingredients:</strong>
          <ul>${recipe.ingredients.map(item => `<li>${item}</li>`).join('')}</ul>
        </div>
        <div class="instructions">
          <strong>Instructions:</strong>
          <p>${recipe.instructions}</p>
        </div>
      `;
      display.style.display = "block";
    } else {
      display.style.display = "none";
    }
  });
