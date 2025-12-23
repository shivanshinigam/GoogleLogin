# 🎮 Game Portal Login

A futuristic, cyber-themed authentication interface featuring Google Sign-In. This project demonstrates a secure player login flow with a "Game Portal" aesthetic, smooth enter-game transitions, and a persistent user profile page.

## ✨ Features

- **Google Authentication**: fast and secure sign-in using Google Identity Services.
- **Cyber Aesthetic**: Neon green and black color palette with retro-gaming fonts.
- **Smooth Transitions**: animated "ENTER GAME" overlay upon successful login.
- **Session Persistence**: User session data is stored in `sessionStorage` to maintain login state across pages.
- **Profile Management**: Displays user avatar, name, and email on the home page with logout functionality.

## 📸 Screenshots

| Login Portal | Sign In | Player Profile |
|:---:|:---:|:---:|
| ![Login Screen](screenshots/login_screen.png) | ![Google Sign-In](screenshots/signin_prompt.png) | ![Player Profile](screenshots/player_profile.png) |

*(Note: Place your screenshots in a `screenshots` folder to match the path above)*

## 🚀 How to Run

1.  **Clone the repository** (or download usage files).
2.  **Host the files**: due to Google Identity Service's CORS policy, this project must be served over `http` or `https`, not `file://`.
    -   **Recommended**: Use the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension in VS Code.
    -   Or run a simple python server: `python3 -m http.server 8080`.
3.  **Open the App**: Navigate to `http://localhost:8080/indexGoogle.html`.
4.  **Login**: Click "Sign in with Google" to authenticate use your Google credentials.

## 📂 File Structure

- **`indexGoogle.html`**: The main entry point. Contains the styled login card, the "Enter Game" overlay, and the Google Sign-In button container.
- **`homeGoogle.html`**: The protected user profile page. Checks for a valid session; if none exists, it redirects back to the login page.
- **`app.js`**: Handles the core logic:
    -   Initializes Google Accounts ID.
    -   Parses the JWT (JSON Web Token) from Google.
    -   Manages the transition animation and redirection.

## ⚙️ Configuration

The project uses a specific Google Client ID in `app.js`:
```javascript
const CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID';
```
Ensure this Client ID is authorized for your specific origin (e.g., `http://localhost:8080`) in the [Google Cloud Console](https://console.cloud.google.com/).

## 🛠 Tech Stack

- **Frontend**: HTML5, CSS3 (Flexbox, Animations)
- **Scripting**: Vanilla JavaScript (ES6+), jQuery (used in Home page)
- **Auth**: [Google Identity Services SDK](https://developers.google.com/identity/gsi/web/guides/overview)
