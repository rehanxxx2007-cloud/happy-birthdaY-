function showMessage() {
    document.getElementById("msg").style.display = "block";
    document.getElementById("music").play();
}

let images = [
    "anshu11.jpg",
    "anshu22.jpg",
    "anshu33.jpg"
];

let i = 0;

setInterval(() => {
    i = (i + 1) % images.length;
    document.getElementById("slide").src = images[i];
}, 2000);
