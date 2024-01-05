document.addEventListener("DOMContentLoaded",()=>{
    const loadingText=document.querySelectorAll(".appear");
    let observer = new IntersectionObserver(function(entries) { 
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.5 });
        loadingText.forEach(function(section) {
            observer.observe(section);
        });
})
let currentSection="";
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            currentSection=entry.target.id;
        }
        if(currentSection=="home"){
            let currentTag=document.querySelector("#hometag").classList.add("active");
            currentTag=document.querySelector("#abouttag").classList.remove("active");
            currentTag=document.querySelector("#skillstag").classList.remove("active");
            currentTag=document.querySelector("#educationtag").classList.remove("active");
            currentTag=document.querySelector("#contacttag").classList.remove("active");
        }
        else if(currentSection=="about"){
            let currentTag=document.querySelector("#abouttag").classList.add("active");
            currentTag=document.querySelector("#hometag").classList.remove("active");
            currentTag=document.querySelector("#skillstag").classList.remove("active");
            currentTag=document.querySelector("#educationtag").classList.remove("active");
            currentTag=document.querySelector("#contacttag").classList.remove("active");
        }
        else if(currentSection=="skills"){
            let currentTag=document.querySelector("#skillstag").classList.add("active");
            currentTag=document.querySelector("#hometag").classList.remove("active");
            currentTag=document.querySelector("#abouttag").classList.remove("active");
            currentTag=document.querySelector("#educationtag").classList.remove("active");
            currentTag=document.querySelector("#contacttag").classList.remove("active");
        }
        else if(currentSection=="education"){
            let currentTag=document.querySelector("#educationtag").classList.add("active");
            currentTag=document.querySelector("#hometag").classList.remove("active");
            currentTag=document.querySelector("#skillstag").classList.remove("active");
            currentTag=document.querySelector("#abouttag").classList.remove("active");
            currentTag=document.querySelector("#contacttag").classList.remove("active");
        }
        else if(currentSection=="contact"){
            let currentTag=document.querySelector("#contacttag").classList.add("active");
            currentTag=document.querySelector("#hometag").classList.remove("active");
            currentTag=document.querySelector("#skillstag").classList.remove("active");
            currentTag=document.querySelector("#educationtag").classList.remove("active");
            currentTag=document.querySelector("#abouttag").classList.remove("active");
        }
    });
}
const options = {
    root: null, 
    rootMargin: '0px', 
    threshold: 0.5 
}
const observer = new IntersectionObserver(handleIntersection, options);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});
