import * as fetchImages from "./util/fetchImages.ts";

if (fetchImages && typeof fetchImages === "function") {
    fetchImages();
}