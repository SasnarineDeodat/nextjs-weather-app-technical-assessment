# WEATHER APP

This is an app that allows the users to get various informations about the weather and know the weather forecast for the upcoming days.

## Start the project

First, install the required dependencies:

```bash
npm i
```

Then, create a .env.local file with the following data:

```bash
NEXT_PUBLIC_API_KEY=[Your API key comes here]
```

Get your API key here - [RapidAPI](https://rapidapi.com/visual-crossing-corporation-visual-crossing-corporation-default/api/visual-crossing-weather)

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Libraries/Technologies Used

This project is created using [Nextjs](https://nextjs.org/) and mainly uses following libraries as dependencies:
[axios](https://www.npmjs.com/package/axios)
[tailwindcss](https://tailwindcss.com/)

## Pages

**Home Page**: A welcome screen with a navigation button to the weather page.
**Weather Page**: Find weather details and forecast for any city using this page.


## Functionality

Firstly, this project uses [axios](https://www.npmjs.com/package/axios) to fetch details of the weather. Then the project uses React's Context API to make the weather details available throughout the app.

After this, BackgroundLayout component uses this data to decide the background image of the weather page.

After that, MiniCard component uses this data to render the weather forecast for the upcoming days.

The WeatherCard component uses this data to render the current weather details on the weather page. It uses useDate hook to provide the current date and time, which updates every minute.

## Credits 

This utility was developed by [Sasnarine Deodat](https://github.com/SasnarineDeodat).