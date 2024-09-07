setInterval(()=>{
    let d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();

    hour.style.transform = `rotate(${(hours + minutes / 60 + seconds / 3600) * 30}deg)`;
    minute.style.transform = `rotate(${(minutes + seconds / 60) * 6}deg)`;
    second.style.transform = `rotate(${seconds * 6}deg)`;
}, 1000)