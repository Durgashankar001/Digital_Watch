const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const Year = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]
let day = new Date().getDay()
let date = new Date().getDate()
let mon = new Date().getMonth()
let year = new Date().getFullYear()
document.getElementById("getday").innerText = days[day]
document.getElementById("getdate").innerText = ("0" + date).slice(-2)
document.getElementById("month").innerText = Year[mon]
document.getElementById("year").innerText = year

const currentDate = new Date();
const startDate = new Date(currentDate.getFullYear(), 0, 1);
const totalDay = Math.floor((currentDate - startDate) /
    (24 * 60 * 60 * 1000));

const week = Math.ceil(totalDay / 7);
document.getElementById("week").innerText = ("0" + week).slice(-2)

const getData = () => {
    return fetch("https://type.fit/api/quotes").then(res => res.json())
}
const showData = () => {
    const num = Math.floor(Math.random() * (1500 - 0) + 0)
    getData().then(data => {
        document.getElementById("title").innerText = data[num].text;
        document.getElementById("author").innerText = data[num].author
    })
}
showData()
document.getElementById("reload").addEventListener("click", function () {
    showData()
})


let timerId = null
let time = 0
const start = () => {
    if (!timerId) {
        timerId = setInterval(() => {
            time = time + 10
            let stop_hour = ("0" + Math.floor((time / 3600000) % 60)).slice(-2)
            document.getElementById("sh").innerText = stop_hour+" "+":"
            let stop_min = ("0" + Math.floor((time / 60000) % 60)).slice(-2)
            document.getElementById("sm").innerText = stop_min+" "+":"
            let stop_sec = ("0" + Math.floor((time / 1000) % 60)).slice(-2)
            document.getElementById("ss").innerText = stop_sec+" "+":"
            let stop_milisec = ("0" + ((time / 10) % 100)).slice(-2)
            document.getElementById("smili").innerText = stop_milisec
        }, 10)
    }
}

const puse = () => {
    clearInterval(timerId)
    timerId = null
}
const reset = () => {
    clearInterval(timerId)
    timerId = null
    time = 0
    document.getElementById("sh").innerText = "00"+" "+":"
    document.getElementById("sm").innerText = "00"+" "+":"
    document.getElementById("ss").innerText = "00"+" "+":"
    document.getElementById("smili").innerText = "00"
}


const callFun = () => {
    let x = document.getElementById("start").innerText

    if (x == "Start") {
        start()
        document.getElementById("start").innerText = "Puse"
    }
    else if (x == "Puse") {
        puse()
        document.getElementById("start").innerText = "Stop"
    }
    else if (x == "Stop") {
        reset()
        document.getElementById("start").innerText = "Start"
    }
}

document.getElementById("start").addEventListener("click", callFun)

setInterval(function () {
    const time = new Date().getTime()
    const Hour = new Date().getHours()
    const Min = new Date().getMinutes()
    const Sec = new Date().getSeconds()
    const Milisec = new Date().getMilliseconds()
    let hour = ("0" + Hour).slice(-2)
    let min = ("0" + Min).slice(-2)
    let sec = ("0" + Sec).slice(-2)
    let milisec = ("0" + Milisec).slice(-2)
    document.getElementById("hour").innerText = hour
    document.getElementById("mili").innerText = milisec
    document.getElementById("sec").innerHTML = sec
    document.getElementById("min").innerHTML = min
}, 100)





