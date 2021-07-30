const projectsHtml =
`
<div class="main h-100 row my-5 w-75 h-75 mx-auto p-5 text-center">
    <div class="sandbox col">
    <iframe src="https://raw.githubusercontent.com/HudsonGraeme/xPro-Portfolio/main/wk7/index.html"> </iframe>
    </div>
    <div class="col text-white">
        <img class="rounded" src="images/biopic.jpg" alt="biopic"/>
        <h1 class="text-monospace my-2"> Bio </h1>
        <p class="text-justify mb-4"></p>
        <button class="btn btn-light" href="https://github.com/HudsonGraeme" target="_blank">
            <img class="mx-2" height="20px" src="images/GitHub.png">
            View on
                <b>
                    GitHub
                </b>
            </img>
        </button>
    </div>
</div>
`;

class Projects extends HTMLElement {

  constructor() {
    super();
  }

    connectedCallback() {
        this.innerHTML = projectsHtml;
  };

}

customElements.define('projects-content', Projects);