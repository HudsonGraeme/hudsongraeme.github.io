const footerHtml =
`
<footer class="footer fixed-bottom py-3">
    <div class="w-100">
    <div class="mx-3">
            <button class="btn btn-light align-middle" id="ghbutton">
                Open GitHub
                <img src="images/GitHub.png" height="20px"/>
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
    };

    gitHubLink = () => {
        // Caniuse claims this isn't supported in Safari, however testing it reveals a popup notification appears
        // Otherwise, browser support shouldn't be too big of a problem here.
        window.open('https://github.com/HudsonGraeme', '_blank');
    }

}

customElements.define('custom-footer', Foot);