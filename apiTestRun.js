const fetchImages = require("./util/fetchImages.ts");

if (fetchImages && typeof fetchImages === "function") {
    fetchImages();
}