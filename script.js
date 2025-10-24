document.addEventListener("DOMContentLoaded", () => {
    console.log("Welcome to Prabhat's Portfolio!");
    
    // Smooth scroll effect for navigation links
    const links = document.querySelectorAll("nav a");
    
    links.forEach(link => {
        link.addEventListener("click", e => {
            const href = link.getAttribute("href");

            // --- THIS IS THE FIX ---
            // Only prevent default and scroll for internal links (starting with #)
            if (href.startsWith("#")) {
                e.preventDefault(); // Stop the browser from jumping
                const targetId = href.substring(1);
                const target = document.getElementById(targetId);
                
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 20,
                        behavior: "smooth"
                    });
                }
            }
            // For external links or files (like your resume), this code is skipped,
            // and the browser will open the link as usual.
        });
    });
});
