document.addEventListener('DOMContentLoaded', function () {
    let myButton = document.querySelector(".cta button");
    myButton.addEventListener('click', function () {
        if (myButton.textContent === "Get in touch")
         myButton.textContent = "Contacting...";
        else
         myButton.textContent = "Get in touch";
    });
 });