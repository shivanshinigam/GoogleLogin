# Google Authentication Demo (Frontend Only)

This project demonstrates a simple, frontend-only Google Sign-In flow using
Google Identity Services.

The goal is to implement a clean **Login → Redirect → Home** authentication
pattern without introducing a backend.

---

## What This App Does

1. User lands on a login page (`index.html`)
2. User signs in using Google
3. After successful login, the app redirects to `home.html`
4. User details (name, email, avatar) are displayed on the home page
5. Session is maintained using `sessionStorage`
6. Logout clears the session and redirects back to login

---

## Project Structure

index.html → Login page
app.js → Google auth logic + redirect
home.html → Post login home page

---

## How Authentication Works

- Google returns an ID token after login
- The token is decoded on the client to read basic user info
- User data is stored in `sessionStorage`
- `home.html` checks for an active session before rendering
- If no session exists, the user is redirected back to login

This keeps the flow simple.

---

## Running the Project

1. Open `index.html` using Live Server
2. Click **Sign in with Google**
3. You will be redirected to `home.html`
4. Click **Logout** to end the session

