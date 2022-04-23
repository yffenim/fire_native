# Mobile client for FireAPI, Version 1

That which is not measured, cannot be managed. Get to know your circadian rhythmn by tracking your alertness levels throughout the day. 

Back-end: https://github.com/yffenim/fire_api

## Features

- [ ] accessible UI to track your alertness on scale of 1-9 available rounded to the hour
- [ ] option to track up to two other models
- [ ] export your current data in combined and individual model form in CSV emailed to user and downloadable onto phone
- [ ] view daily summary graphs of individual models
- [ ] user authentication 
- [ ] OAUTH integration 

## Instructions for Use

Clone the repo: `git clone https://github.com/yffenim/fire_native.git`

Navigate to the project directory.

**When you run the install command, you may see a lot of warnings. Please do not run `npm audit` as suggested even if the vulnerabilities are "high"**

`npm install` from within project directory

`npm start`

OR, if this is not your first time running this project, please use: `npm start --reset-cache`

*Note that many features, such as emailing the CSV or scrolling through an extended view will _not_ work on browser.*

### Using mobile

Download Expo for Android (Google Play Store Link: https://play.google.com/store/apps/details?id=host.exp.exponent) or Expo for iOS (App Store Link: https://itunes.apple.com/us/app/expo-client/id982107779) onto your phone.

Scan the QR code from the terminal.

### Using Simulator

`i` for IOS stimulator 

`r` to reload if nothing is happening after 10 seconds of it loading. 

You will see a terminal message indicating that the bundling is happening if it is loading. 

### Using browser

Follow the instructions from your terminal. 

### Troubleshooting

If any navigation stack changes have been made, you must restart the server: `npm start --reset-cache`

`r` to reload. 

If more than 75 requests have been made to the FIRE API, you will have to wait for the next hour.


If you have used `yarn` to install any dependencies, please remove the `yarn.lock` and re-install modules with `npm`.

If there are still cache issues, please try:

_(Note that if you do not have `watchman` installed or if your DIR is slightly different, you may have to install watchman and/or modify the exact command you use.)_

`npm upgrade`

`watchman watch-del-all`

`rm -rf $TMPDIR/react-native-packager-cache-*`

`rm -rf $TMPDIR/metro-bundler-cache-*` 

`rm -rf node_modules/`

`npm cache clean --force`

` npm install && npm start -- --reset-cache`

## Development Docs

### Root Level 

`app.jsx` -> entrypoint.

`helpers` -> function helpful to development, not neccesary to app itself.

`__tests__` -> testing via jest. Use `npm run test`.


### `SRC` level

```
src
|---assets
|---containers
|---functions
|---presentations
|---screens
|---styles

```

`assets` -> static assets

`containers` -> how things work; stateful components; provides data and behaviour; minimal styling but will have wrapping elements or JSX will be unhappy

`functions` -> functions used by containers or presentations, including API calls

`presentation` -> how things look; stateless components; mostly pure functions (gauranteed to return the same result given the same props and state); no deep mutations/

`screens` -> the "pages" of the native app. _Top level: `LandingScreen.jsx`_

`styles` -> self-explanatory

## Component hierarchy

Level 1. _[`LandingScreen`]_

Level 2. _[[`SettingsScreen`],[AddDataScreen],[`SummaryScreen`],[ExportScreen]]_

Detailed diagram coming soon.

### Thank you
