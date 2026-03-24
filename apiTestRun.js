import * as fetchImages from "./util/fetchImages.ts";

if (fetchImages?.default && typeof fetchImages.default === "function") {
    const data = await fetchImages.default();
    console.log(data);
}