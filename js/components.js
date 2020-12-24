class ProjectCard extends HTMLElement{
    constructor(){
        super()

        const name = this.getAttribute("name")
        const git = this.getAttribute("git")
        const live = this.getAttribute("live")
        const description = this.getAttribute("description")
        const image = this.getAttribute("image")
        //console.log(description)

        const style =

        `<style>

        .projects img{

        }
        .projects div{
            margin: 10px 0 10px 0;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            background-image: url("https://media.discordapp.net/attachments/771150639732359212/784984970326179890/IMG_20201205_212943711.jpg?width=351&height=468");
            background-size: cover;
            height: 350px;
            align-items: flex-end;
            overflow: hidden;
        }

        .projects div h2{
            display: flex;
            align-items: flex-start;
            width: 100%;
            background-color: white;
        }

        .projects div p{
            width: 100%;
            height: 20%;
            background-color: white;
        }

        </style>`

        this.innerHTML =`
            ${style}
            <div>
                <h2>${name}</h2>
                <p>${description}</p>
            </div>
            `
        //const shadow = this.attachShadow({mode: "open"})

        
        
        
    }
}

customElements.define("project-card", ProjectCard)

