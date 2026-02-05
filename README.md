# 📴 HTML Standalone Lesspass

This is a lightweight, standalone HTML version of the [Lesspass](https://www.lesspass.com/#/) password manager. In this version, you can download the single HTML file and have your favorite password manager with you forever, without depending on the website, repository, internet connection and without the need to install any app on your OS. Your system only needs a modern browser(preferably Chrome). You can also back up this file wherever you want.

## 📜 Instructions

### How to download the file

1. Open the [website](https://lesspass-standalone-html.netlify.app/) and click the "Download this page" button, or...
2. Go to the `dist` folder (or [click here](https://github.com/RodrigoWebDev/lessPass-standalone-html/blob/main/dist)) and download the `index.html` file.

### How to use this file

Just open it in your browser, preferably Chrome, since I developed this using Chrome for testing.

## 🤔 How it works

You can know how it work [here](https://blog.lesspass.com/2016-10-19/how-does-it-work).

## Development

To install the project in your machine you will need:

- [Git](https://git-scm.com/) to clone this repo
- [Node](https://nodejs.org/) (I'm using v20.15.1)

To run the project:

- `npm i` to install (only necessary the first time)
- `npm run dev` to run the local server
- `npm run build` to generate the HTML file for production
- `npm run preview` to preview the build file

This project use:

- [Lesspass](https://www.npmjs.com/package/lesspass) package
- [water.css](https://watercss.kognise.dev/) with some custom styles
- [Vite](https://vite.dev/) build tool
- [Vanilla JS](http://vanilla-js.com/)
