import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";

document.addEventListener("DOMContentLoaded", () => {
    new Accordion(".list-qestions", {
        duration: 500, 
        showMultiple: true,
    });

    const accordionButtons = document.querySelectorAll(".icon-accordion-close");

    accordionButtons.forEach((button) => {
        const topicButton = button.closest(".topic-button");
        const question = topicButton?.nextElementSibling;
        const icon = button.querySelector("use");

        if (!question) return;

        button.addEventListener("click", () => {
            const isOpen = question.style.display === "block";
            if (isOpen) {
                question.style.display = "none";
                icon.setAttribute("href", "/copy-jefferson/assets/icons-BXQt0PIq.svg#icon-accordion-closesvg");
            } else {
                question.style.display = "block";
                icon.setAttribute("href", "/copy-jefferson/assets/icons-BXQt0PIq.svg#icon-accordion-opensvg");
            }
        });
    });
});
