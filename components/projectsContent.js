const projectsHtml =
    `
<div class="main h-100 row my-5 w-75 h-75 mx-auto p-5 text-center">
    <div class="col">
<iframe src=""
     style="width:100%; height:100%; border:0; border-radius: 4px; overflow:hidden;"
     title="Pacmen"
     class="sandbox"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
    </div>
    <div class="col text-white">
        <img class="rounded image" height="100px" width="100px" alt="Section Image"/>
        <h1 class="text-monospace my-2 title"> Bio </h1>
        <p class="text-justify mb-4 description"></p>
        <button class="btn btn-light link" >
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

const projects = [
    {
        title: "Real Time Bus Tracker",
        description:
            `
        A web application that tracks buses in semi-realtime using the ottawa transport API.
        This application features custom map markers with each bus's data displayed on a callout that can be expanded by clicking on each marker.
        By selecting an interval from the selection boxes, users are able to choose the rate at which new data is fetched and loaded from the server.
        The animation can be paused and resumed at any time, and whenever new data is being processed, a status indicator is displayed within the toggle button.
        Routes are shown in a list below the controls, and clicking on each route will "reveal" any bus markers that correspond to that route on the map.
        `,
        url: "https://github.com/HudsonGraeme/xPro-Portfolio/tree/main/wk9",
        sandboxURL: "https://codesandbox.io/embed/condescending-cherry-5mtsr?fontsize=14&hidenavigation=1&theme=dark&view=preview",
        imageSrc: 'images/BusMarker.svg'
    },
    {
        title: "Eye Exercise",
        description:
            `
                The eye exercise shown to the left will animate the movement of each eyeball when the cursor moves around the display. It offers the ability for dimming the eyes via
                a BootStrap range picker. The eyes displayed have a noticeable redness, this is likely due to the fact they live on various LCD panels and don't get too much sleep.
                Additionally, upon double clicking the page, the background colour will switch to another colour entirely (just to keep things interesting).
                `,
        url: "https://github.com/HudsonGraeme/xPro-Portfolio/tree/main/wk8",
        sandboxURL: "https://codesandbox.io/embed/falling-monad-1bo8f?fontsize=14&hidenavigation=1&theme=dark&view=preview",
        imageSrc: 'images/Bloodshot.svg'
    },
    {
        title: "Pacmen Exercise",
        description:
            `
                    The Pacmen exercise shown on the left allows users to create as many pacmen as they would like, then upon starting the animation, allows the individual pacmen to float around the screen.
                    If a corner is encountered or the control box gets in the way, the pacman will reverse direction and "bouce" off of the object it has come into contact with.
                    The pacmen change colours as they float around the display, and you will see a nice rainbow effect if you generate more pacmen once there are pacmen already animating
                    since the colour of each pacmen is based on when it was generated. There is a reset button if the pacmen get out of hand, and buttons will change disabled / enabled states based
                    on whether or not the animation is in progress.
                    `,
        url: "https://github.com/HudsonGraeme/xPro-Portfolio/tree/main/wk7",
        sandboxURL: "https://codesandbox.io/embed/loving-violet-r31rt?fontsize=14&hidenavigation=1&theme=dark&view=preview",
        imageSrc: 'images/pacman.png'
    }
];

class Projects extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = projectsHtml.repeat(projects.length);
        const sections = [...document.getElementsByClassName('main')];
        projects.forEach((project, index) => {
            const section = sections[index];
            const title = section.getElementsByClassName('title')[0];
            title.innerHTML = project.title;
            const description = section.getElementsByClassName('description')[0];
            description.innerHTML = project.description;
            const linkButton = section.getElementsByClassName('link')[0];
            linkButton.onclick = () => window.open(project.url, '_blank');
            const sandboxElement = section.getElementsByClassName('sandbox')[0];
            sandboxElement.setAttribute('src', project.sandboxURL);
            sandboxElement.setAttribute('title', project.title);
            const imageElement = section.getElementsByClassName('image')[0];
            imageElement.setAttribute('src', project.imageSrc);
        });
    };

}

customElements.define('projects-content', Projects);