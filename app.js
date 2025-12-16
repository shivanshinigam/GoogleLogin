const CLIENT_ID = '380325275782-6o2d2ab2ltcfiuph7o9garlplag578km.apps.googleusercontent.com';
        
window.onload = function() {
    google.accounts.id.initialize({
        client_id: CLIENT_ID,
        callback: handleLogin
    });
            
    google.accounts.id.renderButton(
    document.getElementById("buttonDiv"),
    { theme: "outline", size: "medium" }
    );
    };
        
function handleLogin(response) {
    const user = parseJwt(response.credential);

    sessionStorage.setItem('googleUser', JSON.stringify(user));

    window.location.href = 'home.html';
}

function parseJwt(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
        atob(base64).split('').map(c =>
            '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
        ).join('')
    );
    return JSON.parse(jsonPayload);
}