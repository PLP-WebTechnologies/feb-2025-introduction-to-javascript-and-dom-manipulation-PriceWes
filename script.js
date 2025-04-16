    // Change text content dynamically
    document.getElementById("change-text-btn").addEventListener("click", function () {
        const title = document.getElementById("main-title");
        title.textContent = "KARIBU PLP!";
        title.style.color = "blue"; // Modifies CSS style
    });
    
    // Add or remove an element when a button is clicked
    document.getElementById("toggle-element-btn").addEventListener("click", function () {
        const dynamicParagraph = document.getElementById("dynamic-paragraph");
        if (dynamicParagraph) {
            dynamicParagraph.remove(); // Remove the element
        } else {
            const newParagraph = document.createElement("p");
            newParagraph.id = "dynamic-paragraph";
            newParagraph.textContent = "This is a dynamically added paragraph.";
            document.getElementById("dynamic-content").appendChild(newParagraph);
        }
    });
