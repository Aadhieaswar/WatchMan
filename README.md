# Watch Man - React Native

### Description
Use WatchMan to look up any movie or series to get information directly from the OMDb database! Enjoy!!

### Requirements
- `npm` and `node` installed in your system
- `expo` app in your android or IOS phone (recommended)

### Setup
- Clone repo using `git clone https://github.com/Aadhieaswar/Movie-Browser-React-Native.git`
- Do `npm install -g expo-cli` if you don't have `expo-cli` installed in your machine
- `cd` into the cloned repo and run `npm install`
- Run start scripts from the following:
  - `npm start`: provides a QR code which you can scan from your phone to view the app in the expo app (recommended)
  - `npm android`: starts the app in the android studio's virtual device
  - `npm ios`: starts the app in ios device emulator (only works in mac)
  - `npm web`: starts the app in the web browser view

### Files and Directories
- The crucial files in the repo home directory are:
  - `App.js`: the file that is run to view the app
  - `package.json`: consists of all the dependencies and the run scripts for the app
  - `api\api.js`: consists of all the functions needed for API calls
  - `screens`: this directory consists of all the different screen views files for the app
  - `components`: this directory consists of all the components created in react for the app
  - `assets`: this directory consists of all the images for the splash screens and such

### Feature
###### Search for movies in the app to view their details as provided by the [OMDb API](http://www.omdbapi.com/)

### Credits
- Harvard CS50 provided this idea for a wonderful project.
- OMDb API for providing the movie/series information (live API)
- Implemented by __Aadhieaswar Senthil Kumar__
    - Contact me at: <aadhieaswar@gmail.com>
