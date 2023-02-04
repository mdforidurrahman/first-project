// var forid=document.querySelector("h5");

// forid.addEventListener("mouseover", function(){
//     forid.classList.add("my-style");
// });


// forid.addEventListener("mouseout", function(){
//     forid.classList.remove("my-style");
// });

var newDiv=document.createElement('div');

newDiv.className='Hello';

newDiv.id='hi';

newDiv.setAttribute('title','hello1');
newDiv.setAttribute('alt','Design UMO');

var newDivText=document.createTextNode('Hello World!');

newDiv.appendChild(newDivText);

var container=document.querySelector('footer .foot row');
var h1= document.querySelector('footer h1');

console.log(newDiv);


container.insertBefore(newDiv, footer);
