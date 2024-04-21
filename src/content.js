document.addEventListener("DOMContentLoaded", () => {
    const actionsDiv = document.querySelector(".navigation-container");

    if (actionsDiv) {
        // log success
        console.log("YouTube Shorts Control successfully loaded!");

        // to fit custom button with other buttons
        actionsDiv.style.justifyContent = "flex-end";
        const buttons = actionsDiv.querySelectorAll(".navigation-button.ytd-shorts");
        buttons.forEach(button => {
            button.style.padding = "8px 16px";
        });

        // create custom button
        const newButton = document.createElement("button");
        newButton.className = "yt-shorts-control";
        newButton.innerHTML = "Open as video";

        actionsDiv.appendChild(newButton);

        // add event listener with arrow function
        newButton.addEventListener("click", () => {
            const currentUrl = window.location.href;
            if (currentUrl.includes("shorts/")) {
                // create a new link
                const newUrl = currentUrl.replace("shorts/", "watch?v=");
                // pause all videos
                document.querySelectorAll('video').forEach(v => v.pause());
                // open new url
                window.open(newUrl, "_blank");
            }
        });
    }
})
