document.addEventListener("DOMContentLoaded", function () {
    const galleryImages = document.querySelectorAll(".gallery img");

    galleryImages.forEach((img) => {
        img.addEventListener("click", function () {
            openLightbox(this.src);
        });
    });

    function openLightbox(imageSrc) {
        // Remove any existing lightbox before creating a new one
        const existingLightbox = document.getElementById("lightbox");
        if (existingLightbox) {
            existingLightbox.remove();
        }

        // Create lightbox container
        let lightbox = document.createElement("div");
        lightbox.id = "lightbox";
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <span class="close">&times;</span>
                <img src="${imageSrc}" alt="Expanded Image">
            </div>
        `;

        document.body.appendChild(lightbox);

        // Close lightbox when clicking the close button
        document.querySelector(".close").addEventListener("click", function () {
            document.body.removeChild(lightbox);
        });

        // Close lightbox when clicking outside the image
        lightbox.addEventListener("click", function (event) {
            if (event.target === lightbox) {
                document.body.removeChild(lightbox);
            }
        });

        // Apply full-screen styles
        applyLightboxStyles();
    }

    function applyLightboxStyles() {
        const style = document.createElement("style");
        style.id = "lightbox-style";
        style.innerHTML = `
            #lightbox {
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                background: rgba(0, 0, 0, 0.9);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 10000;
            }
            .lightbox-content {
                position: relative;
                width: 90%;
                height: 90%;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .lightbox-content img {
                width: auto;
                height: 100%;
                max-width: 100%;
                max-height: 100%;
                border-radius: 10px;
                object-fit: contain;
            }
            .close {
                position: absolute;
                top: 15px;
                right: 25px;
                font-size: 2.5rem;
                color: white;
                cursor: pointer;
                background: rgba(255, 255, 255, 0.3);
                padding: 10px;
                border-radius: 50%;
            }
            .close:hover {
                background: rgba(255, 255, 255, 0.6);
            }
        `;
        document.head.appendChild(style);
    }
});
