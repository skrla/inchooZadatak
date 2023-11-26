document.addEventListener('DOMContentLoaded', function() {
    var showForm = document.getElementById('show-form-btn');
    var crossIcon = document.getElementById('cross-icon');
    var estimatedTxt = document.getElementById('estimate-shipping-txt');

    showForm.addEventListener('click', function() {
        showForm.classList.toggle('clicked');
        estimatedTxt.classList.toggle('clicked');
        if(crossIcon.src.endsWith('cross.svg')) {
            crossIcon.src = "assets/crossGreen.svg";
        } else {
            crossIcon.src ="assets/cross.svg";
        }
        var form = document.getElementById('form');
        form.style.display = (form.style.display === 'none' || form.style.display === '') ? 'block' : 'none';
    });


});

function openMenu() {
    var item = document.getElementById("hamburgerMenuItems");
    if (item.style.display === "block") {
      item.style.display = "none";
    } else {
      item.style.display = "block";
    }
}

function handleAnimation() {
    const targetElements = document.getElementsByClassName('table__row');
  
    Array.from(targetElements).forEach(element => {
        element.style.top = '0';
    });
  }
  
  
  window.addEventListener('load', handleAnimation);

  handleAnimation();