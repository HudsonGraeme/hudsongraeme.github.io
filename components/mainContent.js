const mainHtml =
`
<div class="main h-100 row my-5 w-75 h-75 mx-auto p-5 text-center">
    <div class="video col">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/uLmj0D7wZoQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div class="col text-white">
        <img class="rounded" src="images/biopic.jpg" alt="biopic"/>
        <h1 class="text-monospace my-2"> Bio </h1>
        <p class="text-justify mb-4">
        Welcome to my portfolio!
        <br/>
        My name is Spencer, and I am a software developer.
        I enjoy development in various languages and learning new and exciting frameworks.
        I started with Swift in 2015 and progressively began to learn more languages over time.
        On my GitHub profile, you'll find several projects in many of the languages that I have picked up over time such as C, C#, Java and JavaScript.
        This year, my focus is on JavaScript and the MERN stack, something that is relatively new to me. This portfolio itself and the example projects within
        illustrate some of the practises I have been fortunate enough to learn over my experience learning the stack.
        <br/>
        Thanks for checking out my portfolio!
        </p>
        <button class="btn btn-light" href="https://github.com/HudsonGraeme" target="_blank">
            <img class="mx-2" height="20px" src="images/GitHub.png">
                <b>
                    @HudsonGraeme
                </b>
                on GitHub
            </img>
        </button>
        <button class="btn btn-light" href="https://www.linkedin.com/in/spencer-graham-4ba756190" target="_blank">
            <img class="mx-2" height="20px" src="images/linkedin.png">
                <b>
                    @Spencer Graham
                </b> on LinkedIn
            </img>
        </button>
    </div>
</div>
`;

class Main extends HTMLElement {

  constructor() {
    super();
  }

    connectedCallback() {
        this.innerHTML = mainHtml;
  };

}

customElements.define('main-content', Main);