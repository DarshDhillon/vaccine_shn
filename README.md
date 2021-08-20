![Vaccine Booker App Banner](https://i.ibb.co/WvSgmhM/github-vac-banner.png)

### [Link to live site](https://vaccinebooker.darshdhillon.co.uk/)

## App overview

Vaccine Booker is a Covid19 vaccine appointment booking app. The app requires a user to register (with any dummy email address) and set a password - these credentials are then stored in a Google Firebase NoSQL database.

The user then utilises the integrated Google map to either search a location for their appointment, or manually browse the map. If permission is granted the user can reposition the app closer to their geographical location. After finalising further details (such as the date and time of the appointment), the user confirms their selection. The user can then login at a later date to either amend their appointment or cancel it.

## Features

- User account creation with login, logout and account deletion
- Google maps integration with Places API
- Google Firebase user authentication (email)
- CSS-in-JS with Styled-components library
- Custom markup and styling (no UI or styling libraries such as Material UI, Bootstrap etc.)
- PropTypes addition for all relevant components
- Fully responsive for desktop, tablet or mobile

## Installation

This application requires [Node.js](https://nodejs.org/) to run.

Install the necessary dependencies, and then start the application:

```sh
npm install
npm start
```

## Notes

A relevant and active key for the Google Maps (Places) API will be required for the app to function, in addition to various Google Firebase features.

![App snapshot](https://i.ibb.co/z52R6MD/Github-vac-snapshot.png)
