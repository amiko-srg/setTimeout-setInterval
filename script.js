// let sekunt = document.querySelector('.sekunt')
// let minut = document.querySelector('.minut')
// setInterval(() => {
//     let data = new Date()
//     sekunt.textContent = data.getSeconds()
//     minut.innerHTML = ` : ${data.getMinutes()} : `
// }, 1000)

 let hours = document.querySelector('.Hours')
 let minutes = document.querySelector('.Minutes')
 let seconds = document.querySelector('.Seconds')
 setInterval(() => {
 let data = new Date()
 hours.textContent = data.getHours()
 minutes.textContent = data.getMinutes()
 seconds.textContent = data.getSeconds()
 }, 1000)


