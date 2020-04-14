# POC: proof of concept
SW POC

# To run the project
1. Install expo-cli: `npm install --global expo-cli` (https://docs.expo.io/versions/v37.0.0/get-started/installation/)
2. Install Expo mobile app (https://docs.expo.io/versions/v37.0.0/get-started/installation/)
3. Install dependencies: `yarn` / `npm install`
4. Start the project `expo start`
5. Scan generated QR code, it will open the project in Expo app on your phone

# Flows
Welcome screen ➡ Recover Identity (when `status` value changes `StatusUpdate`screen will be pushed on, `status` will be reset and user redirected to `Onboarding`) ➡ Click all the way throught Onboarding screens ➡ Settings ➡ Log out.

Interesting pieces: 
  * Authentication

    Module `auth` manages authentication data.  
    The main thing is happening in `useAuth` hook.  
    Based on if `did` is available displaying `LoggedIn` or `LoggedOut` screens section. 

  * Server status update

    StatusUpdate screen is a presentational layer.  
    There is a listener in `screens/index.js` which listens to status update and shows `StatusUpdate` modal
  

# Having problems
Reach out to me I will be happy to assist

