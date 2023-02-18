const input = document.getElementById("inputTag");
const imageName = document.getElementById("imageName")
const loaderContainer = document.querySelector('.loader-container');

input.addEventListener("click", ()=>{
    let inputImage = document.querySelector("input[type=file]").files[0];

    imageName.innerText = inputImage.name;
});

window.addEventListener('load', () => {
    loaderContainer.classList.add('loader-container-hidden');
});