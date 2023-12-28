// if user used admin password, redirect to admin page
let url = new URL(window.location)
let params = url.searchParams

let msg = document.querySelector('.login-msg')
let username = params.get('uname')
let password = params.get('psw')

let count = 1;
document.querySelector('.count-down').textContent = count;
let countdown = setInterval(function() {
    count--;
    document.querySelector('.count-down').textContent = count;
    if (count === 0 && username =='admin' && password == 'admin') {
        clearInterval(countdown);
        msg.textContent = "Redirecting to admin page...";
        // pause for 2 seconds before redirecting
        let count = 2;
        document.querySelector('.count-down').textContent = count;
        setTimeout(function() {
            window.location.href = "conceptworkshopadmin.html";
        }, 2000);
    } else if (count === 0 && username =='student' && password == 'student') {
        clearInterval(countdown);
        msg.textContent = "Redirecting to student page...";
        let count = 2;
        document.querySelector('.count-down').textContent = count;
        setTimeout(function() {
            window.location.href = "conceptworkshopstudent.html";
        }, 2000);
    } // if user used wrong password, redirect to home page with message
    else if (count === 0) {
        clearInterval(countdown);
        msg.textContent = "Wrong username or password. Redirecting to home page...";
        // pause for 2 seconds before redirecting
        let count = 2;
        document.querySelector('.count-down').textContent = count;
        setTimeout(function() {
            window.location.href = "index.html";
        }, 2000);
    }
}, 1000);