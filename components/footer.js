const footerHtml =
`
<footer class="footer fixed-bottom py-3">
    <div class="w-100 row">
        <div class="mx-3 col">
            <button class="btn btn-light align-middle mx-2" id="ghbutton">
                Open GitHub
                <img src="images/GitHub.png" height="20px"/>
            </button>
            <button class="btn btn-light align-middle mx-2" id="emailbutton">
                Send me an Email
                <img src="images/email.svg" height="20px"/>
            </button>
        </div>
    </div>
</footer>
`;

class Foot extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = footerHtml;
        document.getElementById('ghbutton').onclick = this.gitHubLink;
        document.getElementById('emailbutton').onclick = this.emailLink;
    };

    gitHubLink = () => {
        // Caniuse claims this isn't supported in Safari, however testing it reveals a popup notification appears
        // Otherwise, browser support shouldn't be too big of a problem here.
        window.open('https://github.com/HudsonGraeme', '_blank');
    }

    emailLink = () => {
        window.open('mailto:spencer@carspotter.ca');
    }

}

customElements.define('custom-footer', Foot);