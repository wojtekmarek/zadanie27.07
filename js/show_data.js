

var month_map=new Map([["01","styczeń"],["02","luty"],["03","marzec"],["04","kwiecień"],
["05","maj"],["06","czerwiec"],["0,7","lipiec"],["08","sierpień"],["09","wrzesień"],["10","październik"],
["11","listopad"],["12","grudzień"]]);
var city_Set=new Set();
var citySelectFill=false;
var select = document.getElementById("city_sort");


async function showdata(data){
    console.log("show");
  
    let view='';
     data.forEach(element => {
       
       city_Set.add(element.miasto);
        
            view+= '<div class="card">'
                    +'<div class="heart" id="favorite'+element.id_angebot+'" onclick="addtofavorite('+element.id_angebot+')" name="favoriteButton">&#9825;</div>'
                    +'<h2>'+element.offer_details.model_details+'</h2>'
                    +'<h3>'+element.offer_details.kabina+'</h3>'
                    +'<h4>'+(element.in_stock? "Dostępny od ręki" : ("Przewidywana data dostawy "+month_map.get(element.pdd.split("-")[1])+" "+element.pdd.split("-")[0]+"*"))+'</h4>'
                    +'<picture><img class="w-100" src="'+element.offer_details.image_paths.front
                    +'"alt="'+element.offer_details.model_details+'"></picture>'
                    +'<div class="scribe">Rok produkcji<span>'+element.offer_details.mfgYear+'</span></div>'
                    +'<div class="scribe">Skrzynia<span>'+(element.offer_details.skrzynia_automatyczna? "Automatyczna" : "Manualna")+'</span></div>'
                    +'<div class="scribe">Miasto<span>'+element.miasto+'</span></div>'
                    +'<div class="scribe">Cenna netto <span class="fs-5">'+element.car_price_disc+'<span>zł</span></span></div>'
                    +'<div class="scribe">Cenna brutto <span>'+element.total_gross_price+'<span>zł</span></span></div>'
                    +'<button id="button'+element.id_angebot+' name="buttonShowOffer" onclick="showDetail('+element.id_angebot+')" >ZOBACZ OFERTĘ</button>'
                    +'</div>'
                  
            
        });
   //add listnery
   /*document.getElementsByName("favoriteButton")forEach(

   ).addEventListener("click",function(triger) {addtofavorite(triger)});
   document.getElementsByName("buttonShowOffer").addEventListener("click",function(triger) {addtofavorite(triger)});*/
   //set select city console.log(city_Set);
    document.getElementById("data").innerHTML=view;
    if(!citySelectFill)
    {

        city_Set.forEach(element=>{
           
var option = document.createElement("option");
option.text = element;
select.add(option);
        })
    }
}
export {showdata};