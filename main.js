canvas = document.getElementById("myCanvas"); 
ctx= canvas.getContext("2d"); 
color = "blue"; 

ctx.beginPath();
 ctx.strokeStyle = color; 
 ctx.lineWidth = 4; 
 ctx.arc(200, 200, 60 ,0 , 2*Math.PI); 
 ctx.stroke();
canvas.addEventListener("mousedown", my_mousedown); 
color = "yellow"

ctx.beginPath();
 ctx.strokeStyle = color; 
 ctx.lineWidth = 4; 
 ctx.arc(275, 250, 60 ,0 , 2*Math.PI); 
 ctx.stroke();
canvas.addEventListener("mousedown", my_mousedown); 
color = "black"

ctx.beginPath();
 ctx.strokeStyle = color; 
 ctx.lineWidth = 4; 
 ctx.arc(350, 200, 60 ,0 , 2*Math.PI); 
 ctx.stroke();
canvas.addEventListener("mousedown", my_mousedown); 
color = "green"

ctx.beginPath();
 ctx.strokeStyle = color; 
 ctx.lineWidth = 4; 
 ctx.arc(425, 250, 60 ,0 , 2*Math.PI); 
 ctx.stroke();
canvas.addEventListener("mousedown", my_mousedown); 
color = "red"

ctx.beginPath();
 ctx.strokeStyle = color; 
 ctx.lineWidth = 4; 
 ctx.arc(500, 200, 60 ,0 , 2*Math.PI); 
 ctx.stroke();
canvas.addEventListener("mousedown", my_mousedown); 

function my_mousedown(e) {
     //taking color from input box //additional activity start 
     color = document.getElementById("color").value; 
     console.log(color); 
     //addition activity ends
      mouse_x = e.clientX - canvas.offsetLeft; 
      mouse_y = e.clientY - canvas.offsetTop;
       console.log("X = " + mouse_x + " ,Y = " + mouse_y);
        circle(mouse_x , mouse_y);
     } 
     function circle(mouse_x , mouse_y) {
          ctx.beginPath(); 
        ctx.strokeStyle = color; 
        ctx.lineWidth = 2;
         ctx.arc(mouse_x, mouse_y, 40 ,0 , 2*Math.PI); 
        ctx.stroke();
     } 
     //additional activity 
     function clearArea() { 
         ctx.clearRect(0, 0, canvas.width, canvas.height);
         }