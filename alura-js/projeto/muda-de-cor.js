/**
 * Created by Joao on 02/05/2016.
 */

var trs = document.getElementsByTagName("tr");
percorreArray(trs, function(tr){
   tr.addEventListener("click", function(){
       this.setAttribute("bgColor", "grey");
   });
    tr.addEventListener("dblclick", function(){
        this.setAttribute("bgColor", "white");
    });
});