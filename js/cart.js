var product=[
  {name:"BOOST Nutritional Pudding",price:35.0,visibility:true,piece:0},
  {name:"UTI-Stat Proantinox Liquid",price:35.0,visibility:true,piece:0},
  {name:"Prosource Powder Protein",price:35.0,visibility:true,piece:0},
  {name:"Juven Powder Nutritional Supplement",price:35.0,visibility:true,piece:0},
  {name:"Mbuw Honey1",price:35.0,visibility:true,piece:0},
  {name:"Mbuw Honey1",price:35.0,visibility:true,piece:0},
  {name:"Meuw Honey1",price:35.0,visibility:true,piece:0},
  {name:"Meuw Honey1",price:35.0,visibility:true,piece:0}
];
var carEmpty=true;
function addToCart(itemNo){
  product[itemNo-1].piece++;
  showList();
}
function showList(){
   //alert(carEmpty);
   var id=document.getElementById("cartDropDown");
   id.innerHTML="";
   var total=0.0;
   for(var i=0;i<product.length;i++){
     if(carEmpty && product[i].piece>0){
       id.innerHTML="<b>"+product[i].name+" : </b><br>"+product[i].price+" x "+ product[i].piece+"---------"+(product[i].price*product[i].piece)+" RM"+"<br>";
       carEmpty=false;
       total+=product[i].price*product[i].piece;
     }
     else if(product[i].piece>0){
       carEmpty=false;
       id.innerHTML+="<b>"+product[i].name+" : </b><br>"+product[i].price+" x "+ product[i].piece+"------------"+(product[i].price*product[i].piece)+" RM"+"<br>";
       total+=product[i].price*product[i].piece;
     }
   }
   if(!carEmpty){
      id.innerHTML+="<b> Sub Total------- = "+total+"</br>";

   }
}
function search(){
  var content=document.getElementById("searchBox").value.toUpperCase();

//  alert(content);
  var pDiv=document.getElementsByClassName("product");
  //alert(pDiv.length);
  for(var i=0;i<pDiv.length;i++){
    var productName=product[i].name;
    if(productName.toUpperCase().indexOf(content) == -1){
        pDiv[i].style.display="none";
    }
    else {
      pDiv[i].style.display="";
    }
  }
}
