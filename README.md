## Overview & Setup
This should contain a Yelp like app that will show all the restaurants available with some filters applied to it. We could search any term that describes the restaurant you're looking for.

Since it's a yelp like app, I utilized the Yelp Developer's API to retrieve the data we want to search.

The next script is optional but I'm leaving you with the configuration if you don't want to use the method that I'm exactly using.
I wirelessly connected my android phone to my computer by using:
```bash
adb connect <LOCAL IP ADDRESS:PORT>
```
By using the adb cli this means we need to install Android Studio as well.

## Pre requisite
1. Android Phone
2. Expo Go App
3. Yelp Developer Account

## After Cloning

Install the dependencies by running the script:
```bash
npm install
```

Insert your Yelp API Key as your Bearer token located at ## src/api/yelp.js: line 6

Then, run the development server:

```bash
npm run start
```

Open your Expo Go App and scan the QR shown on your terminal OR insert the URL manually.
If you also connect your android phone wirelessly using "adb" then just press "a" once you see the QR code.

For reading of RFID, make sure you tap the card closely to your phone's NFC
