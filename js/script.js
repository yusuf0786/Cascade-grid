var a = 0;
var b = 0;
function minus(){
    document.getElementById("quantity").value=a;
    a=a-1;
}
function addition(){
    document.getElementById("quantity").value=b;
    b=b+1;
}


$(".toggle-down .left, .toggle-down .right").click(function(){
    $(".display-ul1, .display-ul2").slideToggle();
});