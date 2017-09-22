$(document).ready(function(){
    $("#hidden_info").hide();
    $("#open").click(function(){
      $("#hidden_info").show("slow");
      
    });
    $("#close").click(function(){
      $("#hidden_info").hide("slow");
      
    });

  });

var myIndex = 0;
change_slides();

function change_slides() {
    var i;
    var x = document.getElementsByClassName("Slides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(change_slides, 4000);
}