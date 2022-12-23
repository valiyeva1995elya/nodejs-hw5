const carsBlock = document.querySelector(".cars_block");
const createCarBtn = document.querySelector("#create_car_btn")

const BASE_URL = "http://localhost:8080";
const loadData = async () => {
    const responseCars = await fetch(BASE_URL + "/cars");
    const cars = await responseCars.json();

    carsBlock.innerHTML = "";
    for (const car of cars) {
        carsBlock.innerHTML += `
        <input value = "${car.model}">
        <button onclick="putCar(${car.id})">Save</button>
        <button onclick="deleteCar(${car.id})">Delete</button> <br>
    `;
    }
};
loadData();


createCarBtn.addEventListener("click", () => {
    const newCarModel = document.querySelector("#new_car_model").value;
    const payload = {
        model: newCarModel,
    };
    fetch(BASE_URL + "/cars", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "post",
        body: JSON.stringify(payload)
    })
        .then(() => loadData())
        .catch(() => alert("Car create error"));
})

const deleteCar = id => {
    fetch(BASE_URL + "/cars/" + id, { method: "delete" })
        .then(() => loadData())
        .catch(() => alert("Car delete error"));
}
const putCar = id => {
    fetch(BASE_URL + "/cars/" + id, { method: "put" })
        .then(() => loadData())
        .catch(() => alert("Ok"));
}