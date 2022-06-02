d Mobile client for FireAPI, Version 1

That which is not measured, cannot be managed. Get to know your circadian rhythmn by tracking your alertness levels throughout the day. 

Back-end: https://github.com/yffenim/fire_api


# Roadmap

- [x] Track alertness levels on scale of 1-9 with times rounded to the hour
- [x] Track up to two other models
- [x] Create, read, upate, delete for all 3 models
- [x] Display CSV table and email to user
- [ ] User stats + editing
- [ ] User authentication
- [ ] OAUTH integration 
- [ ] Toggle themes / Choose icons


# Instructions for Use

Clone the repo: `git clone https://github.com/yffenim/fire_native.git`

Navigate to the project directory.

**When you run the install command, you may see a lot of warnings. Please do not run `npm audit` as suggested even if the vulnerabilities are "high"**

`npm install` from within project directory

`npm start`

OR, if this is not your first time running this project, please use: `npm start --reset-cache`

**Note that many features, such as emailing the CSV or scrolling through an extended view will _not_ work on browser.**

### Using mobile

Download onto your phone:

Expo for Android (Google Play Store Link: https://play.google.com/store/apps/details?id=host.exp.exponent)

or Expo for iOS (App Store Link: https://itunes.apple.com/us/app/expo-client/id982107779) 

Scan the QR code from the terminal from your camera. Expo will load project automatically. Shake your phone to reload.

### Using Iphone simulator

`i` for IOS stimulator 

`r` to reload if nothing is happening after 10 seconds of it loading. 

You will see a terminal message indicating that the bundling is happening if it is loading.

**Note that some features, such as emailing CSV to yourself, will only work on a real phone.**

### Using browser 

Follow the instructions from your terminal.

Not recommended unless debugging. You will have to turn the Logging back in app entrypoint (`App.jsx`)


# General Troubleshooting

### Front-end issues

`r` to reload. 

`npm start --reset-cache`

`npm upgrade`

`npm install --force`

If you have used `yarn` to install any dependencies, please remove the `yarn.lock` and re-install modules with `npm`.

If there are still cache issues, please try:

_(Note that if you do not have `watchman` installed or if your DIR is slightly different, you may have to install watchman and/or modify the exact command you use.)_

`watchman watch-del-all`

`rm -rf $TMPDIR/react-native-packager-cache-*`

`rm -rf $TMPDIR/metro-bundler-cache-*` 

`rm -rf node_modules/`

`npm cache clean --force`

` npm install && npm start --reset-cache`

_If you have Expo SDK44 or higher, you will have to resolve many dependencies._

### Backend Issues 

Did you reset the database? If so, `rails db:seed` as a default seed object is required.


# Development Troubleshooting

If any navigation stack changes have been made, you must restart the server: `npm start --reset-cache`

If more than 75 requests have been made to the FIRE API, you will have to wait for the next hour.

Note that the rendering on native vs browser may be different. It is useful to check browser version if native display is empty without reason. Browser dev tools are also useful for full error message rendering.

**Network issues:** Easiest to use  https://proxyman.io/ on your IOS to capture requests.


# Development Docs

## Repo Hierarchy

### Root Level 

`app.jsx` -> entrypoint.

`helpers` -> function helpful to development, not neccesary to app itself.

`__tests__` -> testing via jest. Use `npm run test`.

### `SRC` level

```
src
|---atoms
|---assets
|---containers
|---functions
|---presentations
|---screens
|---styles

```

`atoms` -> global source of truth from [Recoil state management]('https://github.com/facebookexperimental/Recoil')

`assets` -> static assets

`containers` -> how things work; stateful components; provides data and behaviour; minimal styling but will have wrapping elements or JSX will be unhappy

`functions` -> functions used by containers or presentations, including API calls and [selectors]('https://recoiljs.org/docs/api-reference/core/selector/')

`presentation` -> how things look; stateless components; mostly pure functions (gauranteed to return the same result given the same props and state); no deep mutations/

`screens` -> the "pages" of the native app. _Top level: `LandingScreen.jsx`_

`styles` -> self-explanatory


### Thank you
