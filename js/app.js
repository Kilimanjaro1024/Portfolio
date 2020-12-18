console.log("hello world");
/////////////////////////
//Pull and render data from google sheet
////////////////////////

$.ajax("https://spreadsheets.google.com/feeds/list/1DkknLv1ELt5dx7KR4AbO1W1O-aIsQrI53AaXJ9KUTXI/1/public/full?alt=json")
.then((data) => {
    console.log(data)
    const rawProjects = data.feed.entry

    console.log(rawProjects)
    const projects = rawProjects.map((project) =>{
        return{
            name: project.gsx$name.$t,
            img: project.gsx$img.$t,
            description: project.gsx$description,
            live: project.gsx$live.$t,
            github: project.gsx$github.$t
        }
    })
    console.log(projects)
})



/////////////////////////
//Pull and render data from google sheet
////////////////////////