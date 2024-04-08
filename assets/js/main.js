
document.addEventListener("DOMContentLoaded", function () { //CTA popup window functionality    
    const popupOpen = document.querySelectorAll(".popup-open");
    const popupContainer = document.getElementById("popup-container");
    const popupClose = document.querySelectorAll(".popup-close");    
    const topMenu = document.getElementById('top-menu'); //crutch

    let targetPopup;

    popupOpen.forEach(function (button) {
        button.addEventListener("click", function () {            
            const popupID = button.dataset.popupId;
            targetPopup = document.getElementById(popupID);            

            popupContainer.style.display = "flex";
            targetPopup.style.display = "flex";
            document.body.style.overflow = "hidden";

            if(targetPopup.style.display === "flex"){
                topMenu.style.width = "98.9%";
            };
            console.log(targetPopup);

            popupContainer.addEventListener("click", function (event) {            
                if (popupContainer.style.display === "flex" && !targetPopup.contains(event.target)) {

                    console.log(targetPopup);
                    popupContainer.style.display = "none";
                    targetPopup.style.display = "none";
                    document.body.style.overflow = "";
                    topMenu.style.width = "100%";               

                }
            });


        });
    });    

    popupClose.forEach(function (button) {
        button.addEventListener("click", function () {
            const popupID = button.dataset.popupId;
            const targetPopup = document.getElementById(popupID);

            popupContainer.style.display = "none";
            targetPopup.style.display = "none"; 
            document.body.style.overflow = "";
            topMenu.style.width = "100%";
            console.log(popupContainer);
        });
    });
});

document.querySelectorAll('.catalog-card').forEach(card => {//change image of catalog products    
    const originalImage = card.getAttribute('data-normal-image');
    const hoverImage = card.getAttribute('data-hover-image');
    
    card.addEventListener('mouseover', () => {
        card.querySelector('img').src = hoverImage; 
    });

    card.addEventListener('mouseout', () => {
        card.querySelector('img').src = originalImage;
    });
     
});


document.addEventListener("DOMContentLoaded", () => {   
    let currentVideoIndex = 0;
    const videoPlayer = document.getElementById('videoPlayer');
    
    videoPlayer.addEventListener('ended', () => {
        currentVideoIndex = (currentVideoIndex + 1) % videoSources.length;    

        const source = videoPlayer.querySelectorAll('source');
        source.src = videoSources[currentVideoIndex];
        
        console.log(videoSources);

        videoPlayer.load();
        videoPlayer.play();
    });

});

  





