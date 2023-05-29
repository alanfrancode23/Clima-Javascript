import { API_KEY } from './config.js';
window.addEventListener('load', ()=>{

    

    let lon
    let lat

    let temperaturaValor =document.getElementById('temperatura-valor')
    let temperaturaDescripcion =document.getElementById('temperatura-descripcion')

    let ubicacion =document.getElementById('ubicacion')
    let iconoAnimado =document.getElementById('icono-animado')

    let vientoVelocidad =document.getElementById('viento-velocidad')




    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(posicion =>{
            console.log(posicion)
            lon = posicion.coords.longitude
            lat = posicion.coords.latitude


        //ubicacion actual   
        //const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`

        //ubicacion por ciudad
        const url=`https://api.openweathermap.org/data/2.5/weather?q=Chile&appid=${API_KEY}`
            console.log(url)
        })

    }

})