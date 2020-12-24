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

    const final = projects.map((project) =>{
        console.log(project.description)
        return `
            <project-card name="${project.name}" img=${project.img} description="${project.description}"></project-card>
        `
    })
    

    const $project = $(".projects")
    $project.html(final.join(""))
})



/////////////////////////
//Pull and render data from google sheet
////////////////////////

const $hamburger = $("i")
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

const media = window.matchMedia("(max-width: 720px)")
//console.log(media)
if(media.matches){
    $tab.on('click',(event) =>{
        dropDown()
    })
    
    $hamburger.on('click',(event) =>{
        dropDown()
    })
}



