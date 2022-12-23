const carsBlock = document.querySelector(".cars_block");
const BASE_URL = "http://localhost:8080";
const loadData = async () => {
    const responseCars = await fetch(BASE_URL + "/cars");
    const cars = await responseCars.json();

    carsBlock.innerHTML = "";
    for (const car of cars) {
        carsBlock.innerHTML += `
        <li>${car.model}</li>
        
    `;
    }
};
loadData();
