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

    $('#userName').text(user.name);
    $('#userEmail').text(user.email);

    if (user.picture) {
        $('#userImage')
            .attr('src', user.picture)
            .show();
    }
    
    else {
    const firstLetter = user.name ? user.name.charAt(0).toUpperCase() : 'U';
    $('#userImage').replaceWith(`
    <div id="userImage" style="
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #4caf50;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 20px;
    ">${firstLetter}</div>
    `);
    }
    $('h3').hide();
    $('#userInfo').show();
    $('#buttonDiv').hide();
}

        
    function parseJwt(token) {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(c => 
                '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
            ).join(''));
            return JSON.parse(jsonPayload);
}
        
    function signOut() {
            $('#userInfo').hide();
            $('#buttonDiv').show();
            $('h3').show();
        }