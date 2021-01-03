class ProjectCard extends HTMLElement{
    constructor(){
        super()

        const name = this.getAttribute("name")
        const git = this.getAttribute("git")
        const live = this.getAttribute("live")
        const description = this.getAttribute("description")
        const image = this.getAttribute("img")
        
        // const shadow = this.attachShadow({mode: "open"})

        const style =

        `<style>
        .projects div{
            margin: 10px 0 10px 0;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            background-image: url(${image});
            background-size: cover;
            height: 350px;
            align-items: flex-end;
            overflow: hidden;
        }

        .projects div h3{
            display: flex;
            align-items: flex-start;
            width: 100%;
            background-color: white;
        }

        .projects div p{
            width: 100%;
            min-height: 40px;
   
            background-color: rgb(255, 255, 255);
        }

        </style>`

        this.innerHTML =`
            ${style}
            <div style="
            background-image: url(${image};">
                <h3><a href="${live}">${name}</a></h3>
                <p id="hoverGrow">${description}</p>
            </div>`

        let big = false;
        $
        $("#hoverGrow").css("height", "40px") 
        document.getElementById("hoverGrow").addEventListener("click", () =>{
            
            if(big === false)
            {
                big = true
                $("#hoverGrow").css("height", "fit-content")
            }
            else{
                big = false
                $("#hoverGrow").css("height", "40px")
            }
            
        })

        document.getElementById("hoverGrow").addEventListener("mouseover", () =>{
            const media = window.matchMedia("(min-width: 1024px)")
            if(media.matches)
            {
                $("#hoverGrow").css("box-shadow", " 0  0 100px 0 #fff")
            }
            
        })
        document.getElementById("hoverGrow").addEventListener("mouseout", () =>{    
            $("#hoverGrow").css("box-shadow", "none")    
        })
    }
    
}

customElements.define("project-card", ProjectCard)


////////////////////
//Carousel
////////////////////

class Carousel extends HTMLElement{
    constructor(){
        super()
        this.cards = []
        this.current = 0

        const style =
        `<style>
        new-carousel{
            
        }
        </style>`
        this.innerHTML =`
        ${this.style}
        `
    }
    
    giveCards(cards){
        this.cards = cards
        console.log(cards)
        console.log(cards[0].name)
        this.innerHTML = `
        <project-card name="${cards[0].name}" description="${cards[0].description}" img="${cards[0].img}">
        </project-card>
        `
    }

    forward(){
        console.log("forward")
        if(this.current >= this.cards.length - 1){
            this.current = 0
            this.innerHTML = `
            <project-card name="${this.cards[this.current].name}" description="${this.cards[this.current].description}" img="${this.cards[this.current].img}"> 
            </project-card>`
        }
        else{
            this.current += 1
            this.innerHTML = `
            <project-card name="${this.cards[this.current].name}" description="${this.cards[this.current].description}" img="${this.cards[this.current].img}">    
            </project-card>`
        }
    }

    backward(){
        console.log("back")
        if(this.current <= 0){
            this.current = this.cards.length - 1
            this.innerHTML = `
            <project-card name="${this.cards[this.current].name}" description="${this.cards[this.current].description}" img="${this.cards[this.current].img}">  
            </project-card>`
        }
        else{
            this.current -= 1
            this.innerHTML = `
            <project-card name="${this.cards[this.current].name}" description="${this.cards[this.current].description}" img="${this.cards[this.current].img}">
            </project-card>`
        }
    }

}

customElements.define("new-carousel", Carousel)

