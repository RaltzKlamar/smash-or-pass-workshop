import * as learning from './util/learning'

if (learning?.default && typeof learning.default === "function") {
    const data = await learning.default();
    console.log(data)
}