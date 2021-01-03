/////////////////////////
//Pull and render data from google sheet
////////////////////////

$.ajax("https://spreadsheets.google.com/feeds/list/1DkknLv1ELt5dx7KR4AbO1W1O-aIsQrI53AaXJ9KUTXI/1/public/full?alt=json")
.then((data) => {
    //console.log(data)
    const rawProjects = data.feed.entry

    //console.log(rawProjects)
    const projects = rawProjects.map((project) =>{
        return{
            name: project.gsx$name.$t,
            img: project.gsx$img.$t,
            description: project.gsx$description.$t,
            live: project.gsx$live.$t,
            git: project.gsx$github.$t
        }
    })

    const carousel = document.querySelector("new-carousel")

    carousel.giveCards(projects)
})



////////////////////////////////////////
//Functionality for Hamburger Drop Down
////////////////////////////////////////

const $hamburger = $(".fas.fa-bars")
const $tab = $(".nav")
let open
function dropDown(){
    const $tabs = $("sl-tab")
    if(open){
        $tabs.css("display", "none")
        open = false
        //console.log("closed")
    }
    else{
        open = true
         $tabs.css("display", "inline")    
        //console.log("open")
    }
}

const media = window.matchMedia("(max-width: 768px)")

if(media.matches){
    $tab.on('click',(event) =>{
        dropDown()
    })
    
    $hamburger.on('click',(event) =>{
        dropDown()
    })
}

/////////////////////////////////////
//Functionality for carousel buttons
/////////////////////////////////////

const carousel = document.querySelector("new-carousel")

document.querySelector("#back").addEventListener("click", () =>{
    carousel.backward()
})
document.querySelector("#forward").addEventListener("click", () =>{
    carousel.forward()
})






