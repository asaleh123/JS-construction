document.addEventListener("DOMContentLoaded", function () {
    const galleryImages = document.querySelectorAll(".gallery img");

    galleryImages.forEach((img) => {
        img.addEventListener("click", function () {
            openLightbox(this.src);
        });
    });

    function openLightbox(imageSrc) {
        let lightbox = document.createElement("div");
        lightbox.id = "lightbox";
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <span class="close">&times;</span>
                <img src="${imageSrc}" alt="Expanded Image">
            </div>
        `;
        document.body.appendChild(lightbox);

        document.querySelector(".close").addEventListener("click", function () {
            document.body.removeChild(lightbox);
        });
    }
});
