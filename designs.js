// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(height, width) {

// Your code goes here!
 //Get number of rows and cols from input
 var height = $('#input_height').val(); // canvas height
 var width = $('#input_width').val(); //canvas width
 //tables
 var table = $('#pixel_canvas');  // canvas area
 table.children().remove(); ////Reset - if in case one already created.
   
//genarate row/widths
 for (var row=0; row<height; row++){
 table.append("<tr></tr>");
   //generate col/height
   for (var col=0; col<width; col++){ 
   table.children().last().append("<td></td>");
   }  
 } 

//Apply color to cell  
table.on("click","td", function(){
  var csColor = $('#colorPicker').val();
  $(this).attr("bgcolor", csColor);
 }); 
}

// for buttin clicks to triger canvas tion(evt){
$('#sizePicker').on('submit', function(evt){
   evt.preventDefault();  
   makeGrid();
}); 

