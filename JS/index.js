const bestSellerArr = [
    {
        rating: "★4.5",
        favorite_div: `<i class="fa-solid fa-scale-unbalanced"></i> <i class="fa-regular fa-heart"></i>`,
        productCode: "Product code: 10501",
        image: "./Assets/great_deals_1-removebg-preview.png",
        title: "Sauvignon blanc",
        country: "Spain",
        type: "White",
        price: "$120",
    }, 
    {
        rating: "★4.7",
        favorite_div: `<i class="fa-solid fa-scale-unbalanced"></i> <i class="fa-regular fa-heart"></i>`,
        productCode: "Product code: 10502",
        image: "./Assets/great_deals_2-removebg-preview.png",
        title: "Riesling",
        country: "Italy",
        type: "White",
        price: "$100",
    }, 
    {
        rating: "★4.2",
        favorite_div: `<i class="fa-solid fa-scale-unbalanced"></i> <i class="fa-regular fa-heart"></i>`,
        productCode: "Product code: 10503",
        image: "./Assets/great_deals_3-removebg-preview.png",
        title: "Gewürztraminer",
        country: "France",
        type: "White",
        price: "$180",
    }, 
    {
        rating: "★4.8",
        favorite_div: `<i class="fa-solid fa-scale-unbalanced"></i> <i class="fa-regular fa-heart"></i>`,
        productCode: "Product code: 10504",
        image: "./Assets/great_deals_4-removebg-preview.png",
        title: "Champagne",
        country: "England",
        type: "Sparkling",
        price: "$250",
    }
];

const greatDealsArr = [
    {
        rating: "★4.1",
        favorite_div: `<i class="fa-solid fa-scale-unbalanced"></i> <i class="fa-regular fa-heart"></i>`,
        productCode: "Product code: 10505",
        image: "./Assets/great_deals_1__1_-removebg-preview.png",
        title: "Sauvignon blanc",
        country: "Spain",
        type: "White",
        price: "$99.99",
    }, 
    {
        rating: "★4.4",
        favorite_div: `<i class="fa-solid fa-scale-unbalanced"></i> <i class="fa-regular fa-heart"></i>`,
        productCode: "Product code: 10506",
        image: "./Assets/great_deals_2__1_-removebg-preview.png",
        title: "Riesling",
        country: "Italy",
        type: "White",
        price: "$87",
    }, 
    {
        rating: "★4.9",
        favorite_div: `<i class="fa-solid fa-scale-unbalanced"></i> <i class="fa-regular fa-heart"></i>`,
        productCode: "Product code: 10507",
        image: "./Assets/great_deals_3__1_-removebg-preview.png",
        title: "Gewürztraminer",
        country: "France",
        type: "White",
        price: "$99",
    }, 
    {
        rating: "★5.0",
        favorite_div: `<i class="fa-solid fa-scale-unbalanced"></i> <i class="fa-regular fa-heart"></i>`,
        productCode: "Product code: 10508",
        image: "./Assets/great_deals_4__1_-removebg-preview.png",
        title: "Champagne",
        country: "England",
        type: "Sparkling",
        price: "$80",
    }
];

let append = () =>{
    let main = document.getElementById("options-append");
    main.innerHTML = "";
    let option1 = document.getElementById("option1");
    option1.style.opacity = "0.5";
    option1.style.cursor = "pointer";
    option1.style.textDecoration = "none";
    let option3 = document.getElementById("option3");
    option3.style.opacity = "0.5";
    option3.style.cursor = "pointer";
    option3.style.textDecoration = "none";
    let option4 = document.getElementById("option4");
    option4.style.opacity = "0.5";
    option4.style.cursor = "pointer";
    option4.style.textDecoration = "none";
    document.getElementById("option1").addEventListener("mouseover", mouseOver);
    document.getElementById("option1").addEventListener("mouseout", mouseOut);
    document.getElementById("option2").addEventListener("mouseout", mouseOut2);
    document.getElementById("option3").addEventListener("mouseover", mouseOver3);
    document.getElementById("option3").addEventListener("mouseout", mouseOut3);
    document.getElementById("option4").addEventListener("mouseover", mouseOver4);
    document.getElementById("option4").addEventListener("mouseout", mouseOut4);

    let option2 = document.getElementById("option2");
    option2.style.opacity = "1";
    option2.style.textDecoration = "underline";
    option2.style.transition = "0.5s";


    function mouseOver() {
        document.getElementById("option1").style.opacity = "1";
        document.getElementById("option1").style.transition = "0.5s";
    }
    
    function mouseOver3() {
        document.getElementById("option3").style.opacity = "1";
        document.getElementById("option3").style.transition = "0.5s";
    }
    
    function mouseOver4() {
        document.getElementById("option4").style.opacity = "1";
        document.getElementById("option4").style.transition = "0.5s";
    }
    
    function mouseOut(){
        document.getElementById("option1").style.opacity = "0.5";
        document.getElementById("option1").style.transition = "0.5s";
    }

    function mouseOut2(){
        document.getElementById("option2").style.opacity = "1";
    }
    
    function mouseOut3() {
        document.getElementById("option3").style.opacity = "0.5";
        document.getElementById("option3").style.transition = "0.5s";
    }
    
    function mouseOut4() {
        document.getElementById("option4").style.opacity = "0.5";
        document.getElementById("option4").style.transition = "0.5s";
    }


    bestSellerArr.map(function(elem){
        let rating = document.createElement("div");
        rating.setAttribute("class", "rating");

        let rating_div = document.createElement("div");
        rating_div.setAttribute("class", "rating_div");

        let p = document.createElement("p");
        p.textContent = elem.rating;

        let favorite_div = document.createElement("div");
        favorite_div.innerHTML = elem.favorite_div;
        rating_div.append(p, favorite_div);

        let productCode = document.createElement("p");
        productCode.textContent = elem.productCode;
        productCode.setAttribute("class", "product-code");
        rating.append(rating_div, productCode);
        
        let mainDiv = document.createElement("div");
        mainDiv.setAttribute("class", "mainDiv");
        let div = document.createElement("div");
        div.setAttribute("class", "special-items");
        
        let img = document.createElement("img");
        img.src = elem.image;

        div.append(img);
        mainDiv.appendChild(div);

        let appendedDiv = document.createElement("div");
        appendedDiv.append(rating, mainDiv);
        appendedDiv.setAttribute("class", "appended-items");
        
        main.append(appendedDiv);
    })
}


let appendGreatDeals = () =>{
    let main = document.getElementById("options-append");
    main.innerHTML = "";
    let option2 = document.getElementById("option2");
    option2.style.opacity = "0.5";
    option2.style.cursor = "pointer";
    option2.style.textDecoration = "none";
    let option3 = document.getElementById("option3");
    option3.style.opacity = "0.5";
    option3.style.cursor = "pointer";
    option3.style.textDecoration = "none";
    let option4 = document.getElementById("option4");
    option4.style.opacity = "0.5";
    option4.style.cursor = "pointer";
    option4.style.textDecoration = "none";
    document.getElementById("option1").addEventListener("mouseout", mouseOut1);
    document.getElementById("option2").addEventListener("mouseover", mouseOver);
    document.getElementById("option2").addEventListener("mouseout", mouseOut);
    document.getElementById("option3").addEventListener("mouseover", mouseOver3);
    document.getElementById("option3").addEventListener("mouseout", mouseOut3);
    document.getElementById("option4").addEventListener("mouseover", mouseOver4);
    document.getElementById("option4").addEventListener("mouseout", mouseOut4);

    let option1 = document.getElementById("option1");
    option1.style.opacity = "1";
    option1.style.textDecoration = "underline";
    option1.style.transition = "0.5s";


    function mouseOver() {
        document.getElementById("option2").style.opacity = "1";
        document.getElementById("option2").style.transition = "0.5s";
    }
    
    function mouseOver3() {
        document.getElementById("option3").style.opacity = "1";
        document.getElementById("option3").style.transition = "0.5s";
    }
    
    function mouseOver4() {
        document.getElementById("option4").style.opacity = "1";
        document.getElementById("option4").style.transition = "0.5s";
    }
    
    function mouseOut1(){
        document.getElementById("option1").style.opacity = "1";
    }
    
    function mouseOut(){
        document.getElementById("option2").style.opacity = "0.5";
        document.getElementById("option2").style.transition = "0.5s";
    }
    
    function mouseOut3() {
        document.getElementById("option3").style.opacity = "0.5";
        document.getElementById("option3").style.transition = "0.5s";
    }
    
    function mouseOut4() {
        document.getElementById("option4").style.opacity = "0.5";
        document.getElementById("option4").style.transition = "0.5s";
    }


    greatDealsArr.map(function(elem){
        let rating = document.createElement("div");
        rating.setAttribute("class", "rating");

        let rating_div = document.createElement("div");
        rating_div.setAttribute("class", "rating_div");

        let p = document.createElement("p");
        p.textContent = elem.rating;

        let favorite_div = document.createElement("div");
        favorite_div.innerHTML = elem.favorite_div;
        rating_div.append(p, favorite_div);

        let productCode = document.createElement("p");
        productCode.textContent = elem.productCode;
        productCode.setAttribute("class", "product-code");
        rating.append(rating_div, productCode);
        
        let mainDiv = document.createElement("div");
        mainDiv.setAttribute("class", "mainDiv");
        let div = document.createElement("div");
        div.setAttribute("class", "special-items");
        
        let img = document.createElement("img");
        img.src = elem.image;

        div.append(img);
        mainDiv.appendChild(div);

        let appendedDiv = document.createElement("div");
        appendedDiv.append(rating, mainDiv);
        appendedDiv.setAttribute("class", "appended-items");
        
        main.append(appendedDiv);
    })
}