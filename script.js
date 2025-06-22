const breakfast = document.getElementById("breakfast")
const lunch= document.getElementById("lunch")
const dinner = document.getElementById("dinner")


const meals = {

  breakfast: [
    {
        food: "breakfast",
      name: "Pancakes",
      img: "images/pancake.gif",
      reason: "Soft and sweet — perfect energy booster for mornings."
    },
    {
        food: "breakfast",
      name: "Bread and Tea",
      img: "images/bread-and-tea 1.png",
      reason: "Simple, fast, and warm — easy on the stomach."
    },
    {
        food: "breakfast",
      name: "Indomie and Eggs",
      img: "images/noodles 1.png",
      reason: "Quick and satisfying with a protein boost."
    }
  ],
  lunch: [
    {
        food: "lunch",
      name: "Fried Rice",
      img: "images/fried rice 1.png",
      reason: "Colorful, tasty, and loaded with veggies and meat."
    },
    {
        food: "lunch",
      name: "Jollof Rice",
      img: "images/lunchsug.gif",
      reason: "A classic Nigerian favorite, spicy and satisfying."
    },
    {
        food: "lunch",
      name: "White Rice and Curry Stew",
      img: "images/rice-and curry 1.png",
      reason: "Light, flavorful, and balanced."
    }
  ],
  dinner: [
    {
      food: "dinner",
      name: "Beans and Plantain",
      img: "images/beans-and-plaintain 1.png",
      reason: "Filling and great for digestion overnight."
    },
    {
      food: "dinner",
      name: "Spaghetti",
      img: "images/spagetti.png",
      reason: "Simple, light, and perfect for a calm evening meal."
    },
    {
      food: "dinner",
      name: "Yam Porridge",
      img: "images/yam-porridge 1.png",
      reason: "Warm, hearty, and comforting for dinner."
    }
  ],
 
}

function pickmeal() {
    const home = document.getElementById("home");
    const result = document.getElementById("result");

    const checkedInput = document.querySelector('[type="checkbox"]:checked');
    if(!checkedInput){
        window.alert(`chose a meal`)
    }

        home.style.display = "none";
        result.style.display = "flex";

        const mealType = checkedInput.value;
        const meal = meals[mealType];
        const randomMeal = Math.floor(Math.random()* meal.length);
        const pickedmeal = meal[randomMeal];
    
        showMeal(pickedmeal);
}

function showMeal(meal){
    const result = document.getElementById("result");
    const resultHeading = document.getElementById("result-heading");
    const foodMeal = document.getElementById("food-meal");
    const foodImg = document.querySelector(".div2 img");
    const foodReason = document.querySelector(".div2 h3");




    resultHeading.textContent =`Here's your ${meal.food} suggestion!`;
    foodMeal.textContent =`${meal.name}`;
    foodImg.src = meal.img;
    foodReason.textContent = meal.reason;

    
}

function home(){
    const home = document.getElementById("home");
    const result = document.getElementById("result");

    home.style.display = "flex";
    result.style.display = "none";

}