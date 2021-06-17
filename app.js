//using selectors inside the element
// traversing the dom

var buttons = document.querySelectorAll(".question-btn").length;

for (i=0; i<buttons; i++){
  document.querySelectorAll(".question-btn")[i].addEventListener("click", function(){
      var target = event.currentTarget;
      target.parentElement.parentElement.classList.toggle("show-text");
    });
  };
