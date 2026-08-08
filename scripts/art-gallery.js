const artGalleryImages = [
  '/Photos/Sword_Wireframe.png',
  '/Photos/Sword_SubstancePainter.png',
  '/Photos/Torch_Wireframe.png',
  '/Photos/Torch_Wireframe_Shaded.png',
  '/Photos/GIMM100_Art1.png',
  '/Photos/GIMM100_Art2.png',
  '/Photos/GIMM100_Art3.png',
  '/Photos/GIMM100_Art4.png',
  '/Photos/GIMM100_Art5.png'
];

const galleryTrack = document.getElementById('art-gallery-track');
const prevButton = document.querySelector('.art-gallery-arrow-left');
const nextButton = document.querySelector('.art-gallery-arrow-right');

let currentIndex = 0;

function renderGallery() {
  if (!galleryTrack) return;

  const prevIndex = (currentIndex - 1 + artGalleryImages.length) % artGalleryImages.length;
  const nextIndex = (currentIndex + 1) % artGalleryImages.length;

  const slides = [
    { index: prevIndex, className: 'art-slide prev' },
    { index: currentIndex, className: 'art-slide active' },
    { index: nextIndex, className: 'art-slide next' }
  ];

  galleryTrack.innerHTML = slides.map(({ index, className }) => `
    <div class="${className}">
      <img src="${artGalleryImages[index]}" alt="Portfolio artwork ${index + 1}" loading="lazy">
    </div>
  `).join('');
}

function showPrevious() {
  currentIndex = (currentIndex - 1 + artGalleryImages.length) % artGalleryImages.length;
  renderGallery();
}

function showNext() {
  currentIndex = (currentIndex + 1) % artGalleryImages.length;
  renderGallery();
}

if (prevButton) prevButton.addEventListener('click', showPrevious);
if (nextButton) nextButton.addEventListener('click', showNext);

renderGallery();
