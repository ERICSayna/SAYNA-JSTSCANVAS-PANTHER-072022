var titles = document.querySelectorAll('myHeading');
var tchallaImage = document.querySelector('roi');
    
    titles.forEach(function(title) {
        myHeading.addEventListener('mouseover', function() {
            myHeading.style.transform = 'scale(1.1)';
      });
      
      myHeading.addEventListener('mouseout', function() {
        myHeading.style.transform = 'scale(1)';
      });
    });
    
    roi.addEventListener('mouseover', function() {
      roi.style.transform = 'scale(1.1)';
    });
    
    roi.addEventListener('mouseout', function() {
      roi.style.transform = 'scale(1)';
    });
    


