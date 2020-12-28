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

    console.log(projects)
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
    //console.log(open)
    
    
    //document.getElementByClass("nav").classList.toggle("hide")
}

const media = window.matchMedia("(max-width: 768px)")
//console.log(media)
if(media.matches){
    $tab.on('click',(event) =>{
        dropDown()
    })
    
    $hamburger.on('click',(event) =>{
        dropDown()
    })
}

// const images =[
//     {img: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHw%3D&w=1000&q=80", alt: "text"}, {img: "https://scontent-lhr8-1.cdninstagram.com/v/t51.29350-15/121705293_854705421731461_7184786958370307358_n.jpg?_nc_cat=111&ccb=2&_nc_sid=8ae9d6&_nc_ohc=knLGYmKgFEkAX84yxJS&_nc_ht=scontent-lhr8-1.cdninstagram.com&oh=be189e8ca0fee2e6baa0b5ee85853c12&oe=600D0C3C", alt: "text"}
// ]

const carousel = document.querySelector("new-carousel")

// carousel.giveImages(images)
document.querySelector("#back").addEventListener("click", () =>{
    carousel.backward()
})
document.querySelector("#forward").addEventListener("click", () =>{
    carousel.forward()
})




