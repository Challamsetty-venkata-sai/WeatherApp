const btn=document.querySelector('.btn');
const text_bar=document.querySelector('.text_bar');
const weather_icon=document.querySelector('.weather_icon');
const details_block=document.querySelector('.details_block');
const temp_no=document.querySelector('.temp_no');
const city_name=document.querySelector('.city_name');
const humidity_value=document.querySelector('.humidity_value1');
const wind_value=document.querySelector('.winds_value1');
const details_block1=document.querySelector('.details_block1');


let value;
async function fetchData(value){
  

    
    let request=await fetch(`http://api.weatherapi.com/v1/current.json?key=7504e4a182ce45e191e140855241311&q=${value}`);
    if(request.ok!=true){
        throw new Error('Invalid input name');
   
    
    }
   
   
    const data=await request.json();
    return data;
   
}
function adjustingImage(success){
    
    let imageurl=success.current.condition.icon;
    weather_icon.setAttribute('src',imageurl);
    
    return;


}
function adjustingDegName(success){
    temp_no.innerText=`${success.current.temp_c +'°C'}`;
    city_name.innerText=`${success.location.name}`;
    return;

}
function adjustingHumWind(success){
    humidity_value.innerText=`${success.current.humidity+'%'}`;
    wind_value.innerText=`${success.current.wind_kph+'kmp/h'}`;
    return;

}
function reAdjusting(){
    
   
    weather_icon.setAttribute('src','weatherimage.webp')
    temp_no.innerText="21°C";
    city_name.innerText="bengulore";
    humidity_value.innerText="30%";
    wind_value.innerText='5km/h';
    return;
}

btn.addEventListener('click',()=>{
    reAdjusting();
    value=text_bar.value;
    text_bar.value='';
    
    fetchData(value).then(function(success){
        console.log(success);
        adjustingImage(success);
        adjustingDegName(success);
        adjustingHumWind(success);


    })
    fetchData(value).catch(function(err){
        
        alert(err.message)
        
        // let result=function(){
        //     alert('NO COUNTRY OR STATE NAME IS AVAILABLE');
            
        // }
        // result();
        

    })
    
    
    

   


})
