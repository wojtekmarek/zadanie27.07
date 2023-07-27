
import { showdata } from "./show_data.js";



//  
//http://localhost/htdocs/offers2023.json


const data_json= await fetch("https://gx.pandora.caps.pl/zadania/api/offers2023.json", {
    method: "GET", 
    mode: "cors",
    credentials: "include",
    orgin:"*",
    headers: {
        'Content-Type': 'application/json',       
    }})
    .then(res => {
        return res.json();
    })
    .then(json => {
        
        showdata(json.offers);
        return json.offers;
     })
    .catch(function () {
       console.log("obsluga wyjatku");
    })
    export {data_json};



        
