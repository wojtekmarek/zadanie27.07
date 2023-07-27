import {data_json} from "./get_data.js"
import { showdata } from "./show_data.js";
var checkOne=false;
var checkTwo=false;
var checkThree=false;
var  to_show_json=data_json;
function addtofavorite(id){
    alert("funkcjonalność niezaimplementowana");
}

function showDetail(id){
    alert("funkcjonalność niezaimplementowana");
}
function comparePriceAscending(a,b){
    if (a.car_price_disc < b.car_price_disc) {
        return 1;
      }
      if (a.car_price_disc > b.car_price_disc) {
        return -1;
      }
      return 0;
}
function comparePriceDescending(a,b){
    if (a.car_price_disc < b.car_price_disc) {
        return -1;
      }
      if (a.car_price_disc > b.car_price_disc) {
        return 1;
      }
      return 0;
}
export function sortByPrice(event){


if(event.target.value==1)
{
    
        to_show_json.sort(comparePriceAscending);
        showdata(to_show_json);
    
}else{
    
    to_show_json.sort(comparePriceDescending);
        showdata(to_show_json);
   
    }
    
    
}
function check_data_to_pick()
{
    if(!checkOne&&!checkTwo&&!checkThree)
    {
        return data_json;
    }else{
        return to_show_json;
    }
}

function refreshDataShow()  {
    /*
    checking which checkbox is checked
    filtering by checkbox and refreshing the list */
    alert("funkcjonalność niezaimplementowana");
}

function onlyAccessible(event){
    if(event.target.checked)
    {
        let data=check_data_to_pick();
        checkOne=true;
       
            let new_json=[];
            data.forEach(element => {
                if(element.in_stock==1)
                {
                    
                    new_json.push(element)}
                
            });
            console.log(new_json);
           
           to_show_json=new_json;
        
            showdata(JSON.parse(JSON.stringify(new_json)))
         
         
    }else{
        
        checkOne=false;
        refreshDataShow();
    }
}
function onlyFavorite(event){
    
    if(event.target.checked)
    {
        alert("funkcjonalność niezaimplementowana");
        /* let data=check_data_to_pick();
        checkTwo=true;
        change function to check list
         chooseFromJson("id_angebot",favoritelist,data);
          */
         
    }else{
        
        checkTwo=false;
        refreshDataShow();
    }
}
function onlyAutomatic_gearbox(event){
    if(event.target.checked)
    {
     let data=check_data_to_pick();
     let new_json=[];
     data.forEach(element => {
         if(element.offer_details.skrzynia_automatyczna==true)
         {
             
             new_json.push(element)}
         
     });
     console.log(new_json);
    
    to_show_json=new_json;
 
     showdata(JSON.parse(JSON.stringify(new_json))) 
       
          
         
    }else{
        checkThree=false;
        refreshDataShow();
    }
}

function getByCity(event){
    
    let new_json=[];
            data_json.forEach(element => {
                if(element.miasto==event.target.value)
                {
                    
                    new_json.push(element)}
                
            });
            console.log(new_json);
           
           to_show_json=new_json;
        
            showdata(JSON.parse(JSON.stringify(new_json)))
}

document.getElementById("price_sort").addEventListener("change", (event) => {sortByPrice(event)});
document.getElementById("accessible").addEventListener("change", (event) => {onlyAccessible(event)});
document.getElementById("favorite").addEventListener("change", (event) => {onlyFavorite(event)});
document.getElementById("automatic_gearbox").addEventListener("change", (event) => {onlyAutomatic_gearbox(event)});
document.getElementById("city_sort").addEventListener("change", (event) => {getByCity(event)});

    