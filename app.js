// Get detection ids
var detection = document.getElementById('detection');
var detection2 = document.getElementById('detection2');

// Detect web browser
if (navigator.userAgent.includes("Chrome")) {
    detection.innerText = "chrome? nice adblocker, oh wait...";
} else if (navigator.userAgent.includes("Vivaldi")) {
    detection.innerText = "vivaldi? I like his music";
} else if (navigator.userAgent.includes("Safari")) {
    detection.innerText = "let me get this straight, you're *choosing* to use safari?";
} else if (navigator.userAgent.includes("AppleWebKit")) {
    detection.innerText = "safari?? ?";
} else if (navigator.userAgent.includes("Opera") || navigator.userAgent.includes("OPR")) {
    detection.innerText = "DO you use opera because it is red or because it spys on you?";
} else if (navigator.userAgent.includes("Firefox") || navigator.userAgent.includes("Mozilla")) {
    detection.innerText = "thanks for using firefox!";
} else {
    detection.innerText = "error detecting web browser...";
}

// Detect operating system
if (navigator.userAgent.includes("Linux")) {
    detection2.innerText = "thanks for using linux!";
} else if (navigator.userAgent.includes("Android")) {
    detection2.innerText = "android user detected...";
} else {
    detection2.innerText = "switch to linux (˶ᵔ ᵕ ᵔ˶)";
}

// load rodent
function loadRandomImage() {
    const images = ['rodents/tenor.gif'];
    const randomIndex = Math.floor(Math.random() * images.length);
    document.getElementById('gif-image').src = images[randomIndex];
}

// Run the checkBrowser, checkOS and load image functions when the page loads
window.onload = function() {

    document.getElementById('show-gif-button').addEventListener('click', function() {
        const gifImage = document.getElementById('gif-image');
        gifImage.style.display = 'block';
        loadRandomImage(); // Call this to load a random image
    });
};