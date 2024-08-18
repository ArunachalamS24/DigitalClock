let updateTime = _=>{
    const time = new Date();
    let hours = time.getHours();
    let min = time.getMinutes().toString().padStart(2, 0);
    let sec = time.getSeconds().toString().padStart(2, 0);
    let mer = hours>12?"PM":"AM";
    hours = (hours%12 || 12).toString().padStart(2, 0);

    document.getElementsByClassName("clock")[0].innerText = `${hours}:${min}:${sec} ${mer}`
}

updateTime();
setInterval(updateTime,1000);

let even = (...arr)=>{
    arr.filter((element)=>element%2==0).map((i)=>console.log(i));
}

even(10,20,30,40,55,23,13,12,7,9,14,5);