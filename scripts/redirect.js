// if user used admin password, redirect to admin page
let url = new URL(window.location)
let params = url.searchParams

let username = params.get('uname')
let password = params.get('psw')

let count = 1;
document.querySelector('.count-down').textContent = count;
let countdown = setInterval(function() {
    count--;
    document.querySelector('.count-down').textContent = count;
    if (count === 0 && username =='admin' && password == 'admin') {
        clearInterval(countdown);
        window.location.href = "conceptworkshopadmin.html";
    } else if (count === 0 && username =='student' && password == 'student') {
        clearInterval(countdown);
        window.location.href = "conceptworkshopstudent.html";
    }
}, 1000);