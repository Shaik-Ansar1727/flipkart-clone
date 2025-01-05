// let arr=[
//     'images1/akash.webp',  
//     'images1/alia.webp',  
//     'images1/fas.webp',  
//     'images1/images1.webp', 
//     'images1/pus.webp',
//     'images1/sale.webp',
//     'images1/zeb.webp'
// ];
// let im1 =document.querySelector('.im1');
// let i=0;
// setInterval(() => {
//     let existingImg = im1.querySelector('img');
//     if (existingImg) {
//         existingImg.remove();
//     }
//     var img = document.createElement('img');
//     img.src=arr[i];
//     im1.appendChild(img);
//     i = (i + 1) % arr.length;
// }, 3000);
let arr = [
    'images1/akash.webp',
    'images1/alia.webp',
    'images1/fas.webp',
    'images1/images1.webp',
    'images1/pus.webp',
    'images1/sale.webp',
    'images1/zeb.webp'
];

let im1 = document.querySelector('.im1');
let i = 0;


// Function to create and display the new image
function createImage() {
    let img = document.createElement('img');
    img.src = arr[i];

    // Append the new image to the wrapper
    im1.appendChild(img);

    // Wait for the image to load (this ensures that the new image is visible before transitioning)
    img.onload = function () {
        setTimeout(() => {
            // Make sure the new image fades in and is visible
            img.style.opacity = 1;
        }, 100); // Small delay to ensure image is fully loaded
    };

    // Move to the next image in the array
    i = (i + 1) % arr.length;
}

// Function to slide images from right to left
function changeImage() {
    let images = im1.querySelectorAll('img');

    if (images.length > 1) {
        // Apply the sliding transition after a short delay
        im1.style.transition = 'transform 1s ease-out';
        im1.style.transform = 'translateX(-100%)';

        // After the transition is done, remove the first image (now out of view)
        setTimeout(() => {
            images[0].remove();  // Remove the first image from the DOM
            im1.style.transition = 'none';  // Disable transition temporarily to reset
            im1.style.transform = 'translateX(0)';
            setTimeout(() => {
                im1.style.transition = 'transform 1s ease-out';  // Re-enable smooth transition

            }, 50);
            
        }, 1000); // Time delay to match the transition duration
    }
}

// Initialize the first image
createImage();
// Change image every 3 secondss
setInterval(() => {
    createImage();  // Add a new image
    changeImage();  // Slide the images
    

}, 3000);
function myfunction() {
    createImage();  // Add a new image
    changeImage();  // Slide the images
}

const scrollButtons = document.querySelectorAll('.sbutton3');
const cardContainers = document.querySelectorAll('.sec-a.cardContainer');

// console.log("Number of buttons: ", scrollButtons.length);  // Log button count
// console.log("Number of containers: ", cardContainers.length);  // Log container count

if (scrollButtons.length === cardContainers.length) {
    scrollButtons.forEach((scrollBtn, index) => {
        const cardContainer = cardContainers[index];
        scrollBtn.addEventListener('click', function () {
            cardContainer.scrollBy({
                left: 300,
                behavior: 'smooth'
            });
        });
    });
} else {
    console.error("The number of scroll buttons and card containers don't match.");
}

const bigElements = document.querySelectorAll('.big');
const smallElements = document.querySelectorAll('.small');

// Initialize the elements (no transition) before the animation starts
function initialize() {
    bigElements.forEach(bigElement => {
        bigElement.style.width = '20px';  // Initial size of .big
        bigElement.style.transition = 'none';  // No transition on load
    });

    smallElements.forEach(smallElement => {
        smallElement.style.width = '0%';  // Initial size of .small
        smallElement.style.transition = 'none';  // No transition on load
    });
}

// Function to start enlarging the elements
function big(small, big) {
    small.style.transition = "width 2s ease";  // Enable transition for the small element
    small.style.width = "100%";
    big.style.transition = "width 2s ease";  // Enable transition for the big element
    big.style.width = "50px";
}

// Function to shrink the elements back to their initial state
function small(small, big) {
    small.style.transition = "none";  // No transition for the small element when shrinking
    small.style.width = "0%";
    big.style.transition = "none";  // No transition for the big element when shrinking
    big.style.width = "20px";
}

let m = 0;

// Function to enlarge and shrink the elements sequentially
function enlargeAndShrink() {
    const bigElement = bigElements[m];
    const smallElement = smallElements[m];

    // First, enlarge the current element
    big(smallElement, bigElement);

    // After enlarging, wait for the transition to complete (2s), then shrink it
    setTimeout(() => {
        small(smallElement, bigElement);

        // Move to the next element immediately after shrinking
        m++;

        // If we reach the end, reset to the first element
        if (m >= bigElements.length) {
            m = 0;
        }

        // Immediately start the next transition (without delay between transitions)
        enlargeAndShrink();
    }, 3000);  // This matches the duration of the enlarging transition
}

// Initialize the elements first (without transitions)
initialize();

// Start the sequence after initialization
setTimeout(() => {
    enlargeAndShrink();
}, 100);  // Start the animation after a brief delay to ensure initialization is complete

