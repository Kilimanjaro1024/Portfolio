# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  
You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 1| Wireframes / Priority Matrix / Timeline | Complete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Complete
|Day 4| MVP & Bug Fixes | Complete
|Day 5| Final Touches | Incomplete
|Day 6| Present | Incomplete

## Project Description

For my project for unit one I want to make my portfolio site a minimalistic representation of the work I do. One of the key things I want to emphasize is concise design. After looking at a lot of  other portfolios I notice that they are all well designed and sectioned off but the sections run down the page and you essentially end up with a long list of things that don't always run well together. I want the relative content to be the focus of the viewer at any given time. I want to showcase my ability to learn and incorporate new plugins, libraries, and frameworks in HTML and javascript. I also want to use this project to display some of my design capability and make the website as intuitive to navigate as I think other sites should be.

## Google Sheet


[Projects](https://docs.google.com/spreadsheets/d/1DkknLv1ELt5dx7KR4AbO1W1O-aIsQrI53AaXJ9KUTXI/edit#gid=0) 

## Portfolio I want to Emulate

Search and compare at least 3 profile web sites.  Record your findings in the table below and include some aspect of the site that you would like to incorporate into your own site.

Link To Site  | One Thing I'd Like To Incorporate | 
| ------------- | ------------- |
| [robertdiscipio.surge.sh](http://robertdiscipio.surge.sh/) | Splash image layout
|[lianapenn.com](https://www.lianapenn.com/) | Interactive background image, and skills layout presentation |
| [dribbble.com](https://dribbble.com/shots/5048198/attachments/5048198-Web-slider-interaction?mode=media) |  General layout of carousel element
---
## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Do not include the actual image and have it render on the page. 

- [Mobile](https://imgur.com/a/swFvx3S)
- [Desktop](https://imgur.com/a/bk62V0M)


## Time/Priority Matrix

[Link](https://imgur.com/t1s9O2z)


### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP (examples)

- HTML Structure
- Hamburger 
- Nav
- Responsive
- Contact Form
- Home Div
- Skills Div
- Projects Div
- Social Media Icons

#### PostMVP 

- Project Hover (expandable Blurb)
- Projects Carousel
- Embed Videos
- Interactive Background Image
- Bootstrap
- Make Logo

## Functional Components



#### MVP

| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: |
| HTML Structure | H | 1.5hr | 1.5hr | 
| Hamburger | L | 1hr | 2hr |
| Nav | H | 1.5hr | 2hr |
| Responsive | M | 2hr | 4hr |  
| Contact Form | M | 2.5hr|  2hr | 
| Home Div| H | 3hr | 6hr|
| Skills Div | H | 3hr |  4hr | 
| Projects Div | H | 3hr | 5hr |
| Social Media Icons | L | 2hr |  1hr |
| Total | H | 19.5hrs| 27.5hrs |

#### PostMVP

| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Project Hover (expandable Blurb) | H | 2hr | 3hr |
| Projects Carousel | M | 2hr | 3hr |
| Embed Videos | M | 3hr | hr |
| Interactive Background Image | L | 4hr | hr |
| Shoelace | H | 3hr | 4hr |
| Make Logo | L | 4hr | hr |
| Total | M | 18hrs| 10hrs |

## Additional Libraries

 Use this section to list all supporting libraries and thier role in the project. 

## Code Snippet

This code I was very proud of because I was able to search for screen size and have the functionality as well as the design act differently at different resolutions.
```
const media = window.matchMedia("(max-width: 768px)")

if(media.matches){
    $tab.on('click',(event) =>{
        dropDown()
    })
    
    $hamburger.on('click',(event) =>{
        dropDown()
    })
}
```

## Issues and Resolutions

 Use this section to list of all major issues encountered and their resolution.