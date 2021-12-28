const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const hariRaya = hariRayaDate();

function countdown() {
    const hariRayaDate = new Date(hariRaya);
    const currentDate = new Date();

    const totalSeconds = (hariRayaDate - currentDate) / 1000;

    const hariRayaDays = Math.floor(totalSeconds / 3600 / 24);
    const hariRayaHours = Math.floor(totalSeconds / 3600) % 24;
    const hariRayaMins = Math.floor(totalSeconds / 60) % 60;
    const hariRayaSeconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = hariRayaDays;
    hoursEl.innerHTML = formatTime(hariRayaHours);
    minsEl.innerHTML = formatTime(hariRayaMins);
    secondsEl.innerHTML = formatTime(hariRayaSeconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time; /* if time less than 10 we want to show the '0' in front */
}

function hariRayaDate()
{
    /*have to update Hari Raya since it is changing every year*/
    const nextHariRaya = new Date("3 May 2022");
    const currentDate = new Date();
    const differenceDays = 354;
    if(currentDate.getTime()>nextHariRaya.getTime())
    {
        const totalYears = currentDate.getFullYear() - nextHariRaya.getFullYear();
        if(totalYears>0)
        {
            const totalDays = totalYears * differenceDays;
            nextHariRaya.setDate(nextHariRaya.getDate() + totalDays);
            if(currentDate.getTime()>nextHariRaya.getTime())
            {
                nextHariRaya.setDate(nextHariRaya.getDate() + differenceDays);
                return nextHariRaya.toDateString();
            }
            else
            return nextHariRaya.toDateString();
        }
        else
        {
            nextHariRaya.setDate(nextHariRaya.getDate() + differenceDays);
            return nextHariRaya.toDateString();
        }
        
    }
    else
    return nextHariRaya.toDateString();
}
// initial call
countdown();

setInterval(countdown, 1000); /*make the countdown time running */
