let homeSection=document.querySelector("#home");
let skillsSection=document.querySelector("#skills")
let aboutSection=document.querySelector("#about");
let educationSection=document.querySelector("#education");
let contactSection=document.querySelector("#contact");
let tree=document.querySelector(".tree");
let btnabout=document.querySelector(".btn")

// tag declaration
let home=document.querySelector("#hometag");
let about=document.querySelector("#abouttag");
let skills=document.querySelector("#skillstag");
let contact=document.querySelector("#contacttag");
let education=document.querySelector("#educationtag");
let footSection=document.querySelector(".foot");

function previous(){
    if(currentSection=="home"){
        homeSection.classList.remove("active");
        home.classList.remove("active");
    }
    else if(currentSection=="about"){
        aboutSection.classList.remove("active");
        about.classList.remove("active");
    }
    else if(currentSection=="skills"){
        tree.classList.remove("active");
        skills.classList.remove("active");
    }
    else if(currentSection=="education"){
        educationSection.classList.remove("active");
        education.classList.remove("active");
    }
    else if(currentSection=="contact"){
        contactSection.classList.remove("active");
        contact.classList.remove("active");
        footSection.classList.remove("active");
    }
}

let currentSection="home";

document.addEventListener("DOMContentLoaded",()=>{
    const loadingText=homeSection.querySelectorAll(".appear");
    homeSection.classList.add("visible");
    loadingText.forEach(function(section){
        section.classList.add('visible');
    });
})
about.onclick=()=>{
    previous();
    const loadingText=aboutSection.querySelectorAll(".appear");
    aboutSection.classList.add("visible");
    loadingText.forEach(function(section){
        section.classList.add('visible');
    });
    aboutSection.classList.add("active");
    about.classList.add("active");
    currentSection="about";
}
btnabout.onclick=()=>{
    previous();
    const loadingText=aboutSection.querySelectorAll(".appear");
    aboutSection.classList.add("visible");
    loadingText.forEach(function(section){
        section.classList.add('visible');
    });
    aboutSection.classList.add("active");
    about.classList.add("active");
    currentSection="about";
}
home.onclick=()=>{
    previous();
    const loadingText=homeSection.querySelectorAll(".appear");
    homeSection.classList.add("visible");
    loadingText.forEach(function(section){
        section.classList.add('visible');
    });
    homeSection.classList.add("active");
    home.classList.add("active");
    currentSection="home";    
}
skills.onclick=()=>{
    previous();
    const loadingText=skillsSection.querySelectorAll(".appear");
    skillsSection.classList.add("visible");
    loadingText.forEach(function(section){
        section.classList.add('visible');
    });
    tree.classList.add("active");
    skills.classList.add("active");
    currentSection="skills";    
}
education.onclick=()=>{
    previous();
    const loadingText=educationSection.querySelectorAll(".appear");
    educationSection.classList.add("visible");
    loadingText.forEach(function(section){
        section.classList.add('visible');
    });
    educationSection.classList.add("active");
    education.classList.add("active");
    currentSection="education";    
}
contact.onclick=()=>{
    previous();
    const loadingText=contactSection.querySelectorAll(".appear");
    contactSection.classList.add("visible");
    loadingText.forEach(function(section){
        section.classList.add('visible');
    });
    contactSection.classList.add("active");
    footSection.classList.add("active")
    contact.classList.add("active");
    currentSection="contact";    
}
