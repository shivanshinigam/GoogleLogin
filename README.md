# 🎮 Game Portal Login

A futuristic, cyber-themed authentication interface featuring Google Sign-In. This project demonstrates a secure player login flow with a "Game Portal" aesthetic, smooth enter-game transitions, and a persistent user profile page.

## ✨ Features

- **Google Authentication**: fast and secure sign-in using Google Identity Services.
- **Cyber Aesthetic**: Neon green and black color palette with retro-gaming fonts.
- **Smooth Transitions**: animated "ENTER GAME" overlay upon successful login.
- **Session Persistence**: User session data is stored in `sessionStorage` to maintain login state across pages.
- **Profile Management**: Displays user avatar, name, and email on the home page with logout functionality.

## 📸 Screenshots

<img width="1041" height="456" alt="Screenshot 2025-12-23 at 5 04 00 PM" src="https://github.com/user-attachments/assets/83ad60fb-464a-48cf-8401-09c6140744a4" />

<img width="1440" height="900" alt="Screenshot 2025-12-23 at 5 03 39 PM" src="https://github.com/user-attachments/assets/5f095b04-4e98-4e50-9e06-4d9c2cc5d7c6" />

<img width="1440" height="900" alt="Screenshot 2025-12-23 at 5 03 57 PM" src="https://github.com/user-attachments/assets/3b7528a2-5e8a-478e-870f-aec9198054c1" />


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

