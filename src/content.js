var actionsDiv = document.querySelector(".navigation-container");

if (actionsDiv) {
    var newButton = document.createElement("button");
    newButton.innerHTML = "Nowy Przycisk";

    actionsDiv.appendChild(newButton);

    newButton.addEventListener("click", function () {
        var currentUrl = window.location.href;

        if (currentUrl.includes("shorts/")) {
            var newUrl = currentUrl.replace("shorts/", "watch?v");

            window.location.href = newUrl;
        }
    });
}