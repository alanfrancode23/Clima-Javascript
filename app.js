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
        const url=`https://api.openweathermap.org/data/2.5/weather?q=Chile&appid=aec86784f852807e14bd16dfce8b7a0e`
            //console.log(url)

        fetch(url)
            .then(response =>{ return response.json()})
            .then (data =>{
                console.log(data)
            })
            .catch(error=>{
                console.log(error)
            })


        })

    }

})