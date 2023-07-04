let popupPreview = document.querySelector(".project-popups");
let popup1 = popupPreview.querySelectorAll(".popup");

document.querySelectorAll("#projects .project").forEach(project => {
    project.onclick = () => {
        popupPreview.style.display = "flex";
        
        let name = project.getAttribute("data-name");
        
        popup1.forEach(popup => {
            let target = popup.getAttribute("data-target");
            if (name == target) {
                popup.classList.add("active")
            }
        });
    };
});

popup1.forEach(close => {
    close.querySelector("#x").onclick = () => {
        close.classList.remove("active");
        popupPreview.style.display= "none";
    };
});