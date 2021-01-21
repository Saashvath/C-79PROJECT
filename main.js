menu_list_array = ["chicken tandoori pizza","veg supreme pizza", "paneer tikka pizza","deluxe veggie pizza","veg extravaganza pizza";]
function get_menu()
{
var htmldata;

 htmldata="<ol> class=;='menulist'"

 menu_list_array.sort()
 for (var i=0;i<menu_list_array.length;i++)
 {

htmldata=htmldata+'<li>' +menu_list_array[i]'</li>'

 }
htmldata=htmldata+"</ol>"
}

function add_item()
{
  var htmldata;
   var item=document.getElementbyId("add_item");
   menu_list_array.push(item);
   menu_list_array.sort();
   htmldata="< selection class='cards'>"
   for(var 1=0;i<menu_list_array.length>;i++)
   {

    htmldata=htmldata+ '<div class ="card">'+ '<img src= "pizzaimg.png">' + menu_list_array[i] + '</div>'
    
     }

}