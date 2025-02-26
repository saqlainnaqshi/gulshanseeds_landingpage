const countdown = () => {
    const launchDate = new Date("January 1, 2024 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = launchDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.getElementById("days").innerText = textDay;
    document.getElementById("hours").innerText = textHour;
    document.getElementById("minutes").innerText = textMinute;
    document.getElementById("seconds").innerText = textSecond;
};

setInterval(countdown, 1000);

document.getElementById("subscribeForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const message = document.getElementById("message");

    if (email) {
        message.textContent = "Thank you! We'll notify you when we launch.";
        message.style.color = "#FFEB3B";
    } else {
        message.textContent = "Please enter a valid email address.";
        message.style.color = "#FF0000";
    }
});