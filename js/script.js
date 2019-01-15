var buttons = document.querySelectorAll('.programmes .buttons button');
var programmesDiv = document.getElementsByClassName('programmes')[0];

for(var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    if(this.classList.contains('ug_button')) {
      programmesDiv.classList.remove('pg');
      programmesDiv.classList.add('ug');
    } else {
      programmesDiv.classList.remove('ug');
      programmesDiv.classList.add('pg');
    }
  })
}

// Toggle navigation on menu click
var menuBtn = document.getElementById("menuBtn");
var mainHeader = document.getElementById("mainHeader");

menuBtn.addEventListener('click', function() {
  if(mainHeader.classList.contains('active')) {
    mainHeader.classList.remove('active');
  } else {
    mainHeader.classList.add('active');
  }
})
