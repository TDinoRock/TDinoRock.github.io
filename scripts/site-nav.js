(function () {
    const navMarkup = `
        <aside class="nav-sidebar">
            <div>
                <a class="brand-mark" href="index.html#intro" aria-label="Trennon Talbot home"><img src="Photos/tt-brand-logo.png" alt="TT angular geometric logo" width="154" height="132"></a>
                <h1><a href="index.html#intro">Trennon Talbot</a></h1>
                <h2><a href="index.html#recent">Game Designer</a></h2>

                <a href="https://github.com/TDinoRock/TDinoRock.github.io" target="_blank" aria-label="GitHub"
                    rel="noopener noreferrer">
                    <i class="fa fa-github fa-2x"></i>
                </a>
                <a href="https://www.linkedin.com/in/trennon-talbot/" target="_blank" aria-label="LinkedIn"
                    rel="noopener noreferrer">
                    <i class="fa fa-linkedin-square fa-2x"></i>
                </a>
                <a href="https://www.youtube.com/@trennontalbot3638" target="_blank" aria-label="YouTube"
                    rel="noopener noreferrer">
                    <i class="fa fa-youtube-play fa-2x"></i>
                </a>
                <a href="Resume New - Trennon Talbot.pdf" target="_blank" aria-label="Resume" rel="noopener noreferrer">
                    <i class="fa fa-file-pdf-o fa-2x"></i>
                </a>

                <hr>
                <ul>
                    <li class="nav-item">
                        <a class="nav-link" href="index.html#intro">
                            <span class="material-symbols-outlined fa-5x" aria-hidden="true">keyboard_arrow_down</span>
                            Home Page
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <span class="material-symbols-outlined fa-5x" aria-hidden="true">keyboard_arrow_down</span>
                            Personal Projects
                        </a>
                        <a class="sub-link" href="AccurateWeaponry.html">Accurate Weaponry</a>
                        <a class="sub-link" href="MarineTraining.html">Marine Training Simulator</a>
                        <a class="sub-link" href="VRBrainRot.html">VR Brain Rot</a>
                        <a class="sub-link" href="SoulBurden.html">Soul Burden</a>
                        <a class="sub-link" href="2DPlatformer.html">2D Platformer</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <span class="material-symbols-outlined fa-5x" aria-hidden="true">keyboard_arrow_down</span>
                            Art &amp; Animation
                        </a>
                        <a class="sub-link" href="ArtGallery.html">Art Gallery</a>
                        <a class="sub-link" href="FirstRigging.html">First Rigging</a>
                        <a class="sub-link" href="First22Years.html">First 22 Years</a>
                        <a class="sub-link" href="Ammonite.html">Ammonite</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <span class="material-symbols-outlined fa-5x" aria-hidden="true">keyboard_arrow_down</span>
                            Websites
                        </a>
                        <a class="sub-link" href="GIMM260 - Data/index.html" target="_blank" rel="preconnect">GIMM260 - Data</a>
                    </li>

                    <hr>
                    <li class="nav-item">
                        <a class="nav-link" href="https://github.com/TDinoRock/TDinoRock.github.io" target="_blank"
                            aria-label="GitHub" rel="noopener noreferrer">GitHub</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://www.linkedin.com/in/trennon-talbot/" target="_blank"
                            aria-label="LinkedIn" rel="noopener noreferrer">LinkedIn</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://www.youtube.com/@trennontalbot3638" target="_blank"
                            aria-label="YouTube" rel="noopener noreferrer">YouTube Channel</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="resume.html">Resume</a>
                    </li>

                    <hr>
                    <li class="nav-item">
                        <a class="nav-link" href="index.html#contact-me">Contact Me</a>
                    </li>
                </ul>
            </div>
        </aside>
    `;

    const mountPoint = document.getElementById('site-nav');
    if (mountPoint) {
        mountPoint.insertAdjacentHTML('afterbegin', navMarkup);
    }
})();
