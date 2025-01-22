function upDate(previewPic) {
    console.log("Événement déclenché");

    console.log("Image source: ", previewPic.src);
    console.log("Image alt: ", previewPic.alt);

    document.getElementById("image").innerText = previewPic.alt;

    document.getElementById("image").style.backgroundImage = `url(${previewPic.src})`;
}

function cancelUpdate() {
    document.getElementById("image").style.backgroundImage = "url('')";

    document.getElementById("image").innerText = "Hover over an image below to display here";
}

const thumbnails = document.querySelectorAll('.thumbnail');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('mouseover', () => upDate(thumbnail));
    thumbnail.addEventListener('mouseout', cancelUpdate);
});
