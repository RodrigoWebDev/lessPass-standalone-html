# 📴 HTML Standalone Lesspass

Go to the [🌐 website](https://lesspass-standalone-html.netlify.app/).

This is a lightweight, standalone HTML version of the [Lesspass](https://www.lesspass.com/#/) password manager. In this version, you can download the single HTML file from this page and have your favorite password manager with you forever, without depending on the website, repository, internet connection and without the need to install any app on your OS. Your system only needs a modern browser. You can also back up this file wherever you want.

## 📜 How to use this version

It's simple. Go to the [🌐 website](https://lesspass-standalone-html.netlify.app/), click "⬇️ Download it here." and open the file in your favorite browser(I recommend chrome but other browsers should work)

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