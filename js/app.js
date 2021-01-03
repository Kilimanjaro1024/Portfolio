console.log("hello world");
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
            github: project.gsx$github.$t
        }
    })

    const carousel = document.querySelector("new-carousel")

    carousel.giveCards(projects)
})



/////////////////////////
//Pull and render data from google sheet
////////////////////////

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

const carousel = document.querySelector("new-carousel")

// carousel.giveImages(images)
document.querySelector("#back").addEventListener("click", () =>{
    carousel.backward()
})
document.querySelector("#forward").addEventListener("click", () =>{
    carousel.forward()
})






