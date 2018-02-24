# itunes

## Overview

Visit a [live demo](https://itunes.peterschussheim.com/) of this app or follow the instructions below to run locally.

## Features

* Search `iTunes` API for your favorite artists
* Clean, responsive and functional UI
* 'Scroll to top button' for convenience
* Basic helper to print errors from API calls (could be improved using an `Error Boundary`)
* Simple input validation

## Local Development

If you are familiar with `create-react-app`, you can use the `react-scripts` commands included in that project. Otherwise, use the list below to get started:

1. clone or download this repo
2. extract into desired local directory and `cd` into project root
3. `yarn` to install dependencies
4. `yarn start` to start a local development server (this opens a browser window)

<details>
 <summary>Requirements</summary>

* [x] Create a Search Component for entering an Artist
* [x] On Search, make an api call to iTunes API to fetch the information about the artist
      API URL: https://itunes.apple.com/search?term=${ARTIST_NAME}
* [x] When the Search button is clicked, make a call to the API and display the list of albums, including the album name and album cover inside `#albums-container` in a `grid`. Use any CSS technique you are comfortable with.
* [x] Style the page to the best of the ability to make the UI look clean and presentable
  </details>
