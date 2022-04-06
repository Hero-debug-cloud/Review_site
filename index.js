
var photos=["images/44.jpeg","images/22.jpeg","images/1.jpeg","images/33.jpeg"];
var names=["anna johnson","peter jones","bill anderson","susan smith"];
var posts=["web designer","intern","the boss","web developer"];
var dis=["Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.","Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.","Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ","I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"];



var prev=document.getElementById("prev");
var next=document.getElementById("next");

prev.addEventListener('click',previous);
next.addEventListener('click',nexting);

var count=-1;

function previous(){
    count--;
    console.log(count);
  if(count<0){
    count=(names.length-1);
    // console.log("changing values");
  }
  document.getElementById("changing").src=photos[count];
   document.querySelector(".name").innerHTML=names[count];
   document.querySelector(".post").innerHTML=posts[count];
    document.querySelector(".dis").innerHTML=dis[count];
    
    

}

function nexting(){
    count++;
    console.log(count);
   if(count===(names.length)){
       count=0;
   }
   document.getElementById("changing").src=photos[count];
   document.querySelector(".name").innerHTML=names[count];
   document.querySelector(".post").innerHTML=posts[count];
    document.querySelector(".dis").innerHTML=dis[count];
    

}

var sup=document.getElementById("me");
sup.addEventListener('click',change_random);

function change_random(){
    var index=Math.floor(Math.random()*4);
    document.getElementById("changing").src=photos[index];
   document.querySelector(".name").innerHTML=names[index];
   document.querySelector(".post").innerHTML=posts[index];
    document.querySelector(".dis").innerHTML=dis[index];
}
