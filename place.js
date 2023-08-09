let locationButton = document.querySelector(".location");
let placeText = document.querySelector(".place");

locationButton.addEventListener("click",()=>{
 // return location querySelector
 if(navigator.geolocation){
 navigator.geolocation.getCurrentPosition(showPosition,sheckErorr);
 }else{
    placeText.textContent = `the browser dose not support geolocation`;
 }

});

let sheckErorr = (error) =>{
   switch(error.code){
      case error.PERMISSION_DENIED:
         placeText.textContent = `Please allow access to location`;
         break;
      case error.POSITION_UNVAIBLE:
         placeText.textContent = `Location Information unvaible`;
         break;
      case error.TIMEOUT:
         placeText.textContent = `the requist to get user location timed out`;
         break;
   }
}

let showPosition = async(position)=>{
let response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`);
let data = await response.json();
// console.log(data);
placeText.textContent = `${data.address.city},${data.address.country}`;
console.log("true")
}






















