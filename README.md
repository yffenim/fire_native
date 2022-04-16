# ReactNative client for FireAPI, Version 1

## Instructions for Use

Clone the repo: git clone https://github.com/yffenim/fire_native.git

Navigate to the project directory.

**When you run the install command, you may see a lot of warnings. Please do not run `npm audit` as suggested even if the vulnerabilities are "high"**

`npm install` from within project directory

`npm start`

OR, if this is not your first time running this project, use: `npm start --reset-cache`

### Using mobile

Download Expo for Android (Google Play Store Link: https://play.google.com/store/apps/details?id=host.exp.exponent) or Expo for iOS (App Store Link: https://itunes.apple.com/us/app/expo-client/id982107779) onto your phone.

Scan the QR code from the terminal (after running `expo start`)

### Using browser

Follow the instructions from your terminal.

### Troubleshooting

`npm upgrade`
`npm start --reset-cache`

If you have used `yarn` to install any dependencies, please remove the `yarn.lock` and re-install modules with `npm`.

## Instructions for Dev

`app.jsx` -> entrypoint
`screens` -> self-explanatory
`containers` -> stateful components (the ones making API calls)
`components` -> stateless components 
`helpers` -> function imports 
`__tests__` -> tests using jest with `npm run test`

## Tree hierarchy

[DashboardScreen]
[[UserGreeting, InputMoment, DisplayMoments]]
[[],[InputSlider, SubmitButton],[UpdateMomentsList, DisplayMomentsList]]

### Thank you
