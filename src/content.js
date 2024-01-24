function addCustomButton() {
    var actionsDiv = document.querySelector(".navigation-container");

    if (actionsDiv) {
        clearInterval(checkExistenceInterval);
        
        console.log("YouTube Shorts Control successfully loaded!");

        // to fit custom button with other buttons
        actionsDiv.style.justifyContent = "flex-end";
        let buttons = actionsDiv.querySelectorAll(".navigation-button.ytd-shorts");
        buttons.forEach(button => {
            button.style.padding = "8px 16px";
        });

        // create custom button
        var newButton = document.createElement("button");
        newButton.className = "yt-shorts-control";
        newButton.innerHTML = "Open as video";

        actionsDiv.appendChild(newButton);

        // add event listener
        newButton.addEventListener("click", function () {
            var currentUrl = window.location.href;

            if (currentUrl.includes("shorts/")) {
                var newUrl = currentUrl.replace("shorts/", "watch?v=");

                window.location.href = newUrl;
            }
        });
    }
}

// check if the navigation container already exists
var checkExistenceInterval = setInterval(addCustomButton, 5000);
