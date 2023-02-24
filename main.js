window.addEventListener("load",init);
function init(){
    const tartalomElemEz = document.querySelectorAll(".tartalom");
    console.log(tartalomElemEz)
    const etelek = ["Pizza","Lassagna","Mákosguba"];
    etelkiiras(etelek, tartalomElemEz)
}
function etelkiiras(etelek, tartalomElemEz){
    tartalomElemEz[0].innerHTML ="<ul> </ul>"
    const ulElem = document.querySelectorAll(".tartalom ul")[0]
    for (let index = 0; index < etelek.length; index++){
        let etel = etelek[index];
        ulElem.innerHTML += "<li>"+etel+"<li>";
    }
}
