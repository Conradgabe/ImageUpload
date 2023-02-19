const input = document.getElementById("inputTag");
const imageName = document.getElementById("imageName")
const loaderContainer = document.querySelector('.loader-container');
const buttonObject  = document.getElementById("button")


//image loader
window.addEventListener('load', () => {
    loaderContainer.classList.add('loader-container-hidden');
});

// image loader function 11
function LoaderFunction() {
    buttonObject.addEventListener('click', () => {
        loaderContainer.classList.add('loader-container-show');
    });
};


// Copy to clipboard function
function CopyToClipboard() {
    const copyText = document.getElementById("copy-holder");

    copyText.select();
    copyText.setSelectionRange(0, 99999);
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    alert("Copied the text: " + copyText.value);
  } 


// display images
function displayImages() {
    let images = ""
    imagesArray.forEach((image, index) => {
      images += `<div class="image">
                  <img id="imgjv" src="${URL.createObjectURL(image)}" alt="image">
                  <span onclick="deleteImage(${index})">&times;</span>
                </div>`
    })
    output.innerHTML = images
  }

// drag and drop function
const inputDiv = document.querySelector(".images")
const output = document.querySelector("output")
let imagesArray = []

// to drop image
inputDiv.addEventListener("drop", (e) => {
    e.preventDefault()
    const files = e.dataTransfer.files
    for (let i = 0; i < files.length; i++) {
        // to check the authenticity of the image
        if (!files[i].type.match("image")) continue

        // to check if no two file are the same
        if (imagesArray.every(image => image.name !== files[i].name))
            imagesArray.push(files[i])
    }
    displayImages()
});

// image click to upload
input.addEventListener("change", ()=>{
    let inputImage = document.querySelector("input[type=file]").files[0];
    imageName.innerText = inputImage.name;

    const files = input.files
    for (let i = 0; i < files.length; i++) {
        imagesArray.push(files[i])
    }
    displayImages()
});

// delete uploaded images
function deleteImage(index) {
    imagesArray.splice(index, 1)
    displayImages()
  }