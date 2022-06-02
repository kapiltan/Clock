window.addEventListener("load", ()=>{
    clock();
    function clock(){
        const today = new Date();

        const hours = today.getHours();
        const minutes = today.getMinutes();
        const seconds = today.getSeconds();

        const hour = hours<10?"0"+hours:hours;
        const minute = minutes<10?"0"+minutes:minutes;
        const second = seconds<10?"0"+seconds:seconds;

        const hourtime=hour>12?hour-12:hour;

        const ampm=hour>12?"PM":"AM";

        const month=today.getMonth();
        const year=today.getFullYear();
        const day=today.getDay();

        const monthList = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];

        const date=monthList[month] + " " + day + ", " + year;
        const time = hourtime + ":" + minute + ":" + second + ampm;

        const dateTime = date + " - " + time;

        document.getElementById("date-time").innerHTML=dateTime;
        setTimeout(clock,1000);

    }
});