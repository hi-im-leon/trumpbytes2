# trumpbytes2
you're still fired!

## Before you start

1. You need a [Google Account](https://www.google.com/accounts/NewAccount) to
   access the Google APIs Console, request an API key, and register your
   application.
2. [Register your application](https://console.developers.google.com/project)
   with Google so that it can submit API requests.

3. After registering your application, select the YouTube Data API as one of
   the services that your application uses:

    - Go to the [APIs Console](https://console.developers.google.com/project) and
      select the project that you just registered.
    - Click on *APIs & auth* on the left side. Then a dropdown will be opened.
    - Select *APIs*.
    - Search for *YouTube Data API v3*, click it and click <kbd>Enable API</kbd>

## Installation

 1. `cd` into the cloned directory and run `npm install`:

    ```
    cd trumpbytes
    npm install
    ```

 3. Go back in your Google app and click again on *APIs & auth& and then select *Credentials*.
 4. Click <kbd>Create new Client ID</kbd>. This will create new OAuth 2.0 credentials:
   - Select *Web application*
   - Click <kbd>Configure consent screen</kbd>
   - Complete the required fields:
     - Product name: what ever you want (e.g. "Youtube API Test")
     - Product logo is optional
     - Home page is optional
     - Save the changes
   - Now you will have to set the auth urls. This test application uses the following urls:
     - Authorized JavaScript origins: `http://localhost:3000/` (paste it in the first textarea)
     - Authorized redirect URIs: `http://localhost:3000/oauth2callback` (paste it in the second textarea)
   - Finally, click <kbd>Create Client ID</kbd>

OK, at this step you have the credentials (in your Google app). Now you have to use them in this test application:

 1. Rename `credentials.templ.json` into `credentials.json`.
 2. Open `credentials.json` and replace `yourClientId` with the **client id** and `yourSecretKey` with **client secret** generated previously.
 2. Now you are ready. Start the script (`npm start`) and open `http://localhost:3000`.