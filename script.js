var menuicon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");

menuicon.onclick = function(){
    sidebar.classlist.toggle("small-sidebar");
    sidebar.classlist.toggle("small-sidebar");
    container.classlist.toggle("large-container");

}