const navHtml =
`<nav class="navbar navbar-expand-lg navbar-dark w-100">
  <a class="navbar-brand font-monospace mx-4" href="index.html">
    <img src="./images/Cafe.svg" width="30" height="30" class="d-inline-block align-top" alt="">
    <span id="name">Spencer Graham</span>
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li id="main" class="nav-item">
        <a class="nav-link text-light"  href="index.html">Main</a>
      </li>
      <li id="projects" class="nav-item">
        <a class="nav-link text-light"  href="projects.html">
          Projects
        </a>
      </li>
    </ul>
  </div>
  </nav>
  `;

class Navigation extends HTMLElement {

  underscoreShown = false;
  underscoreAnimation = 0;

  constructor() {
    super();
  }

  animateUnderscore = () => {
    setTimeout(() => {
      this.underscoreAnimation = requestAnimationFrame(this.animateUnderscore);
      this.underscoreShown = !this.underscoreShown;
      const name = document.getElementById('name');
      if (this.underscoreShown) {
        name.innerHTML += " _";
      } else {
        name.innerHTML = "Spencer Graham";
      }
    }, 750);
  };

  connectedCallback() {
    this.innerHTML = navHtml;
    this.animateUnderscore();
    const currentLocation = window.location.href.split("/").slice(-1)[0].split(".")[0];
    const mainLink = document.getElementById('main');
    const projectsLink = document.getElementById('projects');
    switch (currentLocation) {
      case 'projects':
        projectsLink.style.textDecoration = "underline";
        projectsLink.classList.add("active");
        break;
      default:
        mainLink.style.textDecoration = "underline";
        mainLink.classList.add("active");
        break;
    }
  };

  disconnectedCallback() {
    cancelAnimationFrame(this.underscoreAnimation);
  };

}

customElements.define('custom-navigation', Navigation);