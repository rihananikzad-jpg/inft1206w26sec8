const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

// declare the images
const images = [
  { filename: 'pic1.jpg', alt: 'Closeup of a human eye' },
  { filename: 'pic2.jpg', alt: 'Rock that looks like a wave' },
  { filename: 'pic3.jpg', alt: 'White and purple pansies' },
  { filename: 'pic4.jpg', alt: 'Section of wall from a pharaoh\'s tomb' },
  { filename: 'pic5.jpg', alt: 'Large moth on a leaf' }
];

// loop
const baseURL = "https://mdn.github.io/shared-assets/images/examples/learn/gallery/";
for (const image of images) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', baseURL + image.filename);
  newImage.setAttribute('alt', image.alt);

  newImage.setAttribute('tabindex', '0');

  thumbBar.appendChild(newImage);
    // update image
  newImage.addEventListener('click', () => {
    updateDisplayedImage(newImage.getAttribute('src'), newImage.getAttribute('alt'));
  });

  // keyboard 

  newImage.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      updateDisplayedImage(newImage.getAttribute('src'), newImage.getAttribute('alt'));
    }
  });
}

 // funcation

function updateDisplayedImage(src, alt) {
displayedImage.setAttribute('src', src);
displayedImage.setAttribute('alt', alt);
}



