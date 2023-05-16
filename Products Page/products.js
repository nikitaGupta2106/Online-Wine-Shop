// ----------------------------------------------------------------------------------Fetching Data
main();

function main() {
    let url = `https://wine-api.onrender.com/wines`;
    let data = getData(url);
}
async function getData(url) {
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data);
        displayData(data);
    } catch (error) {
        console.log(error)
    }
}

// ----------------------------------------------------------------------------------Displaying Data
function displayData(data) {
    let divContainer = document.getElementById("div2");
    divContainer.innerHTML = ""
    console.log(data.length);
    if (data.length === 0) {
        let div = document.createElement("div");
        div.setAttribute("class","awesomeDiv")
        let sorry = document.createElement("h4");
        sorry.innerText="No products found!!😭"
        div.append(sorry)
        divContainer.append(div)
    } else {
        data.forEach((wine) => {
            let div = document.createElement("div");

            let card1 = document.createElement("div");
            card1.setAttribute("class", "card1");
            let rating = document.createElement("p");
            rating.innerText = "★ " + wine.rating;
            let favBtn = document.createElement("button");
            favBtn.innerHTML = `<i class="fa-regular fa-heart"></i>`;
            card1.append(rating, favBtn)


            let card2 = document.createElement("div");
            card2.setAttribute("class", "card2");
            let img = document.createElement("img");
            img.src = wine.image_url;
            let name = document.createElement("h4");
            name.innerText = wine.name;
            card2.append(img, name);

            let card3 = document.createElement("div");
            card3.setAttribute("class", "card3");
            let country = document.createElement("p");
            country.innerText = wine.country;
            let type = document.createElement("p");
            type.innerText = wine.type;
            card3.append(country, type);

            let card4 = document.createElement("div");
            card4.setAttribute("class", "card4");
            let price = document.createElement("p");
            price.innerText = "$" + wine.price;
            let addBtn = document.createElement("button");
            addBtn.innerText = "+"
            card4.append(price, addBtn);


            div.append(card1, card2, card3, card4);
            divContainer.append(div);
        })
    }
}

// ---------------------------------------------------Toggling filter "+" and "-" signs and siplaying data
const toggleButtons = document.querySelectorAll('.sub-filters > div[id^="toggle"]');
toggleButtons.forEach(button => {
    button.addEventListener('click', function () {
        const options = this.parentElement.nextElementSibling;

        options.style.display = options.style.display === 'none' ? 'block' : 'none';
        this.innerText = options.style.display === 'none' ? '+' : '-';
    });
});




const checkboxes = document.querySelectorAll('input[type="checkbox"]');

// Add event listener to each checkbox
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            const url = checkbox.getAttribute('data-url');
            getData(url);
        }else{
            main();
        }
    });
});















// var priceCheckbox= document.getElementById("price-options");
// // Get the price options div
// // const priceOptionsDiv = document.getElementById('price-options');

// // Get all the checkboxes within the div
// const priceCheckboxes = priceCheckbox.querySelectorAll('input[type="checkbox"]');

// // Add event listener to each checkbox
// checkboxes.forEach((checkbox) => {
//   checkbox.addEventListener('change', handleCheckboxChange);
// });

// // Event handler function for checkbox change event
// function handleCheckboxChange(event) {
//   // Check if the checkbox is selected
//   if (event.target.checked) {
//     // Get the inner text of the selected checkbox
//     const selectedPriceRange = event.target.nextSibling.textContent.trim();

//     // Log the selected price range
//     console.log(selectedPriceRange);
//   }
// }

// function handleCheckboxClick(checkbox) {
//     var label = checkbox.nextElementSibling;
//     console.log("Hi " + label.innerText);
// }