This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Prereqs

### e621 API Key and username

Make an account on [e621](https://e621.net/) ([e926](https://e926.net/) for the "SFW" version) if you don't have one.

After that, go to your profiles page, and click the API Key View link. Copy that value, and use it to make a .env file
(save it in the project directory) with your user name and some default tags:

```Dotenv
# .env
API_KEY="1nHrmzmsvJf26EhU1F7CjnjC" # Not a real API key
USERNAME="rocketraccoon"
DEFAULT_TAGS="order:random rating:s score:>50 solo -comic -webm -swf"
IMAGE_BOARD_URL="https://e926.net
```

### Don't forget to install NPM packages

```bash
npm i
```

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

Intro to technologies used:

* [React](https://react.dev/learn)
* [Next](https://nextjs.org/learn)
* [TypeScript](https://www.typescriptlang.org/docs/handbook/intro.html#get-started)
* [JavaScript](https://www.codecademy.com/learn/introduction-to-javascript) - Great for new programmers
* [Tailwind](https://tailwindcss.com/build-uis-that-dont-suck)
* [Zustand](https://refine.dev/blog/zustand-react-state/)
* [Zod](https://didoesdigital.com/blog/zod-overview/)
