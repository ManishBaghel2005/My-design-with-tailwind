const myButton = document.querySelector(".mybutton");
const part2 = document.querySelector(".part2");

myButton.addEventListener("click", () => {
    part2.scrollIntoView({
        behavior: "smooth", // smooth scrolling effect
        block: "start" // align to the top of the section
    });
});


