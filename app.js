const hamburger = document.querySelector(".hamburger");
const divs = document.querySelectorAll(".hamburger div");
const dropdownContainer = document.createElement("div");
const navlinks = document.querySelector('.navlinks')
dropdownContainer.classList.add("dropdown-content");
const menuItems = ["Home", "Menu", "About Us", "Services"];
menuItems.forEach(itemText => {
    const menuItem = document.createElement("a");
    menuItem.href = "#";
    menuItem.textContent = itemText;
    dropdownContainer.appendChild(menuItem);
});
hamburger.addEventListener("click", () => {
    divs.forEach(div => div.classList.toggle("open"));
    dropdownContainer.classList.toggle("show");
    navlinks.classList.toggle('sarath')
});

document.addEventListener("DOMContentLoaded", function () {
    const showFormButton = document.getElementById("showFormButton");
    const formContainer = document.getElementById("formContainer");
    showFormButton.addEventListener("click", function () {
        formContainer.classList.remove("hidden");
    });
    const myForm = document.getElementById("myForm");
    myForm.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Form submitted successfully!");
        formContainer.classList.toggle("hidden");
    });
});


let bitCoinBtn = document.querySelector("#bitCoin")
let ethereumEle = document.querySelector("#ethereum")
let xrpEle = document.querySelector("#xrp")
let bCost = document.querySelector("#bitCoinCost")
let eCost = document.querySelector("#ethereumCost")
let xCost = document.querySelector("#xmrCost")
let coinBox = document.querySelector("#coinBox")
let totalBtn = document.querySelector("#total")
let totalCost = document.querySelector("#totalCost")
let gst = 0.18
let coinsArray = []
bitCoinBtn.addEventListener("click", () => {
    console.log(bitCoinBtn.textContent)
    let coin1 = document.createElement("div")
    coin1.classList.add("coinBox")
    let coinOneInput = document.createElement("input")
    coinOneInput.classList.add("inputStyle")
    coinOneInput.value = bitCoinBtn.textContent
    coin1.appendChild(coinOneInput)
    let coinOneCost = document.createElement("input")
    coinOneCost.classList.add("inputStyle")
    coinOneCost.value = bCost.textContent
    coin1.appendChild(coinOneCost)
    coinsArray.push(bCost.textContent)
    coinBox.appendChild(coin1)
});
ethereumEle.addEventListener("click", () => {
    console.log(ethereumEle.text)
    let coin2 = document.createElement("div")
    coin2.classList.add("coinBox")
    let coinTwoInput = document.createElement("input")
    coinTwoInput.classList.add("inputStyle")
    coinTwoInput.value = ethereumEle.textContent
    coin2.appendChild(coinTwoInput)
    let coinTwoCost = document.createElement("input")
    coinTwoCost.classList.add("inputStyle")
    coinTwoCost.value = eCost.textContent
    coin2.appendChild(coinTwoCost)
    coinsArray.push(eCost.textContent)
    console.log(coinsArray)
    coinBox.appendChild(coin2)
});
xrpEle.addEventListener("click", () => {
    console.log(xrpEle.text)
    let coin3 = document.createElement("div")
    coin3.classList.add("coinBox")
    let coinThreeInput = document.createElement("input")
    coinThreeInput.classList.add("inputStyle")
    coinThreeInput.value = xrpEle.textContent
    coin3.appendChild(coinThreeInput)
    let coinThreeCost = document.createElement("input")
    coinThreeCost.classList.add("inputStyle")
    coinThreeCost.value = xCost.textContent
    coin3.appendChild(coinThreeCost)
    coinsArray.push(xCost.textContent)
    coinBox.appendChild(coin3)
    console.log(coinsArray)
});
totalBtn.addEventListener("click", () => {
    let totalSum = coinsArray.reduce((accumulator, currentValue) => accumulator + parseInt(currentValue), 0);

    totalCost.value = totalSum + totalSum * gst
});