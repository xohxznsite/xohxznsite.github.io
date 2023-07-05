
function imageChange(img) {
        var fullImage = document.getElementById("img-content");
        
        // Remover la clase 'active' de todas las imágenes
        var images = document.getElementsByClassName("row-img")[0].getElementsByTagName("img");
        for (var i = 0; i < images.length; i++) {
            images[i].classList.remove("active");
        }
        
        // Agregar la clase 'active' a la imagen clickeada
        img.classList.add("active");
        
        fullImage.src = img.src;
    }
    var buttons = document.getElementsByClassName("products_list-text-size_ul");
    var activeButton = null;
function updateSneakerSize(button) {
        var sneakerSizeElement = document.getElementById("sneaker-size");
        var newSize = button.textContent;
        sneakerSizeElement.textContent = "Sneaker Size: " + newSize;
        if (activeButton !== null) {
            activeButton.classList.remove("active");
        }

        button.classList.add("active");
        activeButton = button;
    }
function imageChange1(img) {
        var fullImage = document.getElementById("img-content-1");
        
        // Remover la clase 'active' de todas las imágenes
        var images = document.getElementsByClassName("products_list-3-review-row-img")[0].getElementsByTagName("img");
        for (var i = 0; i < images.length; i++) {
            images[i].classList.remove("active");
        }
        
        // Agregar la clase 'active' a la imagen clickeada
        img.classList.add("active");
        
        fullImage.src = img.src;
    }

function imageChange2(img) {
        var fullImage = document.getElementById("img-content-2");
        
        // Remover la clase 'active' de todas las imágenes
        var images = document.getElementsByClassName("products_list-3-2-review-row-img")[0].getElementsByTagName("img");
        for (var i = 0; i < images.length; i++) {
            images[i].classList.remove("active");
        }
        
        // Agregar la clase 'active' a la imagen clickeada
        img.classList.add("active");
        
        fullImage.src = img.src;
    }
