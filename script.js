const images = ["meme1.jpg", "meme2.jpg", "meme3.jpg", "meme4.jpg", "meme5.jpg", "meme6.jpg", "meme7.jpg", "meme8.jpg"]
let currentIndex = 0

function showNextImage() {
    const slideshow = document.getElementById("showPhotos")
    const overlay = document.getElementById("photoOverlay")

    slideshow.src = images[currentIndex]
    overlay.style.display = "flex"

    currentIndex = (currentIndex + 1) % images.length;
}

function hidePhotoOverlay() {
    document.getElementById("photoOverlay").style.display = "none"
}

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        showNextImage()
    }
})
