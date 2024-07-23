function resizeImage() {
    const width = parseInt(document.getElementById('width').value);
    const height = parseInt(document.getElementById('height').value);
    const fileInput = document.getElementById('file-input');

    if (isNaN(width) || isNaN(height)) {
        alert("Please enter valid width and height.");
        return;
    }

    const file = fileInput.files[0];
    if (!file) {
        alert("Please select an image file.");
        return;
    }

    const reader = new FileReader();
    reader.onload = function (event) {
        const img = new Image();
        img.onload = function () {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            canvas.width = width;
            canvas.height = height;

            ctx.drawImage(img, 0, 0, width, height);

            const resizedImageUrl = canvas.toDataURL();
            document.getElementById('resized-image').src = resizedImageUrl;
        }
        img.src = event.target.result;
    }
    reader.readAsDataURL(file);
}
