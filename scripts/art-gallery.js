(function () {
  'use strict';

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

  function initArtGallery() {
    const galleryPrevious = document.getElementById('art-gallery-previous');
    const galleryActive = document.getElementById('art-gallery-active');
    const galleryNext = document.getElementById('art-gallery-next');
    const prevButton = document.querySelector('.art-gallery-arrow-left');
    const nextButton = document.querySelector('.art-gallery-arrow-right');

    if (!galleryPrevious || !galleryActive || !galleryNext || !artGalleryImages.length) {
      return;
    }

    let currentIndex = 0;

    function renderGallery() {
      const prevIndex = (currentIndex - 1 + artGalleryImages.length) % artGalleryImages.length;
      const nextIndex = (currentIndex + 1) % artGalleryImages.length;

      galleryPrevious.innerHTML = '<img src="' + artGalleryImages[prevIndex] + '" alt="Previous artwork" loading="lazy">';
      galleryActive.innerHTML = '<img src="' + artGalleryImages[currentIndex] + '" alt="Current artwork" loading="lazy">';
      galleryNext.innerHTML = '<img src="' + artGalleryImages[nextIndex] + '" alt="Next artwork" loading="lazy">';
    }

    function showPrevious() {
      currentIndex = (currentIndex - 1 + artGalleryImages.length) % artGalleryImages.length;
      renderGallery();
    }

    function showNext() {
      currentIndex = (currentIndex + 1) % artGalleryImages.length;
      renderGallery();
    }

    if (prevButton) {
      prevButton.addEventListener('click', showPrevious);
    }

    if (nextButton) {
      nextButton.addEventListener('click', showNext);
    }

    renderGallery();
  }

  if (window.PortfolioUtils) {
    window.PortfolioUtils.ready(initArtGallery);
    return;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initArtGallery, { once: true });
    return;
  }

  initArtGallery();
})();
