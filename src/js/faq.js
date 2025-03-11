import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";

document.addEventListener("DOMContentLoaded", () => {
    new Accordion(".list-qestions", {
        duration: 500, 
        showMultiple: true,
    });

    const accordionButtons = document.querySelectorAll(".button-accordion");

    accordionButtons.forEach((button) => {
        const topicButton = button.closest(".topic-button");
        const question = topicButton?.nextElementSibling;
        const icon = button.querySelector("use");

        if (!question) return;

        button.addEventListener("click", () => {
            question.classList.toggle("open");
            const isOpen = question.classList.contains("open");
            if (isOpen) {
                icon.setAttribute("href", "/Code-Academy/assets/icons-BXQt0PIq.svg#icon-accordion-opensvg");
            } else {
                icon.setAttribute("href", "/Code-Academy/assets/icons-BXQt0PIq.svg#icon-accordion-closesvg");
            }
        });
    });
});