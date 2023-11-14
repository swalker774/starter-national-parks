const descriptions = document.querySelectorAll(".description-display");
for (let desc of descriptions.values()) {
  let content = desc.innerText;
  if (content.length > 250) {
    content = content.slice(0, 250);
    content = content + `<a href="#">...</a>`
  }
  desc.inner = content
  console.log(content);
}

const ratings = document.querySelectorAll(".rating-display .value");
for (let rating of ratings) {
  let ratingValue = parseFloat(rating.innerText);

  if (ratingValue > 4.7) {
    rating.classList.add("high-rating");
    rating.classList.remove("value");
  }
}

const parks = document.querySelectorAll(".park-display")
const numberParks = parks.length
const newElement = document.createElement("div")
newElement.innerText = `${numberParks} exciting parks to visit`
newElement.classList.add("header-statement")
const header = document.querySelector("header")
header.appendChild(newElement)

// Get the parent element of all parks
const main1 = document.querySelector("main");

// Select a single park
const park = main.querySelector(".park-display");

// Remove that park
main.removeChild(park);

// Function 1: addHeadings
function addHeadings() {
  const articles = document.querySelectorAll("article");
 articles.forEach(article => {
   const heading = document.createElement("h2");
   heading.textContent = article.textContent;
   article.innerHTML = ""; 
   article.appendChild(heading);
 });
}


// Function 2: styleTutorialsAndArticles
function styleTutorialsAndArticles() {
const articles = document.querySelectorAll("article");
 articles.forEach(article => {
   if (article.textContent.includes('Tutorial')) {
     article.classList.add("tutorial");
     article.classList.remove("article");
   } else {
     article.classList.add("article");
     article.classList.remove("tutorial");
   }
 });
}


// Function 3: separateAllTutorials
function separateAllTutorials() {
  const articlesSection = document.querySelector(".articles");
  const container = document.querySelector(".container");
  const tutorials = Array.from(articlesSection.querySelectorAll("article.tutorial"));
  if (tutorials.length > 0) {
    const tutorialsSection = document.createElement("section");
    tutorialsSection.classList.add("tutorials");
    tutorials.forEach(tutorial => {
      tutorialsSection.appendChild(tutorial);
    });
    container.appendChild(tutorialsSection);
  }
}





// EVENTS





const firstBtn = document.querySelector("button")
firstBtn.addEventListener("click", (event) => {
  console.log("You clicked the button", event)
})



// function to handle the ratingSorter click
const ratingSorterClickHandler = (event) => {
  event.preventDefault();

  // 1.  get the main element
  const main = document.querySelector("main");

  // 2. get the list of parks
  const parksList = main.querySelectorAll(".park-display");

  // 3. empty the main
  main.innerHTML = "";

  // 4. create an array
  const parksArray = Array.from(parksList);

  // 5. sort the array
  parksArray.sort(sortByRating);

  // 6. Insert each park into the DOM
  parksArray.forEach((park) => {
    main.appendChild(park);
  });
};

// the point where all the code starts
const main = () => {
  // select the nameSorter link
  const nameSorter = document.querySelector("#name-sorter");

  // add an event listener
  nameSorter.addEventListener("click", nameSorterClickHandler);

  // select the ratingSorter link
  const ratingSorter = document.querySelector("#rating-sorter");

  // add an event listener
  ratingSorter.addEventListener("click", ratingSorterClickHandler);

  // select all the buttons for all the parks
  const allBtns = document.querySelectorAll(".rate-button");

  // iterate the list of buttons and add an event handler to each
  allBtns.forEach((btn) => {
    btn.addEventListener("click", favoriteButtonClickHandler);
  });
};

// Add event listener for DOMContentLoaded
window.addEventListener("DOMContentLoaded", main);









