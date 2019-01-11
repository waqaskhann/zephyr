document.getElementById("email").onkeypress = function() {
	document.querySelector(".form-extension").style.display = "block";
};

document.querySelector(".search").onclick = function() {
	document.querySelector(".search-area").style.display = "flex";
};

document.querySelector("#privacy-policy").onclick = function() {
	document.querySelector("#privacy-popup").style.display = "block";
};

document.querySelector("#terms-of-use").onclick = function() {
	document.querySelector("#terms-popup").style.display = "block";
};

document.querySelector("#contact-us").onclick = function() {
	document.querySelector("#contact-popup").style.display = "block";
};

document.querySelector("#login").onclick = function() {
	document.querySelector("#login-popup").style.display = "block";
};

document.querySelector("#search-close-btn").onclick = function() {
	document.querySelector(".search-area").style.display = "none";
};

document.querySelector("#contact-close-btn").onclick = function() {
	document.querySelector("#contact-popup").style.display = "none";
};

document.querySelector("#privacy-close-btn").onclick = function() {
	document.querySelector("#privacy-popup").style.display = "none";
};

document.querySelector("#terms-close-btn").onclick = function() {
	document.querySelector("#terms-popup").style.display = "none";
};

document.querySelector("#login-close-btn").onclick = function() {
	document.querySelector("#login-popup").style.display = "none";
};



/*PRODUCT NAVIGATION*/
document.querySelector("#men-options").onclick = function() {
	document.querySelector(".product-nav-s").style.display = "block";
	document.querySelector(".women-secondary").style.display = "none";
	document.querySelector(".kids-secondary").style.display = "none";
	document.querySelector(".accessories-secondary").style.display = "none";
	document.querySelector(".shoes-secondary").style.display = "none";
  	document.querySelector(".men-secondary").style.display = "flex";
};

document.querySelector("#women-options").onclick = function() {
	document.querySelector(".product-nav-s").style.display = "block";
	document.querySelector(".men-secondary").style.display = "none";
	document.querySelector(".kids-secondary").style.display = "none";
	document.querySelector(".accessories-secondary").style.display = "none";
	document.querySelector(".shoes-secondary").style.display = "none";
  	document.querySelector(".women-secondary").style.display = "flex";
};

document.querySelector("#kids-options").onclick = function() {
	document.querySelector(".product-nav-s").style.display = "block";
	document.querySelector(".men-secondary").style.display = "none";
	document.querySelector(".women-secondary").style.display = "none";
	document.querySelector(".accessories-secondary").style.display = "none";
	document.querySelector(".shoes-secondary").style.display = "none";
  	document.querySelector(".kids-secondary").style.display = "flex";
  };

document.querySelector("#accessories-options").onclick = function() {
	document.querySelector(".product-nav-s").style.display = "block";
	document.querySelector(".men-secondary").style.display = "none";
	document.querySelector(".women-secondary").style.display = "none";
	document.querySelector(".kids-secondary").style.display = "none";
	document.querySelector(".shoes-secondary").style.display = "none";
  	document.querySelector(".accessories-secondary").style.display = "flex";
};

document.querySelector("#shoes-options").onclick = function() {
	document.querySelector(".product-nav-s").style.display = "block";
	document.querySelector(".men-secondary").style.display = "none";
	document.querySelector(".women-secondary").style.display = "none";
	document.querySelector(".kids-secondary").style.display = "none";
	document.querySelector(".accessories-secondary").style.display = "none";
  	document.querySelector(".shoes-secondary").style.display = "flex";
};



$('.slider').each(function() {
  var $this = $(this);
  var $group = $this.find('.slide_group');
  var $slides = $this.find('.slide');
  var bulletArray = [];
  var currentIndex = 0;
  var timeout;
  
  function move(newIndex) {
    var animateLeft, slideLeft;
    
    advance();
    
    if ($group.is(':animated') || currentIndex === newIndex) {
      return;
    }
    
    bulletArray[currentIndex].removeClass('active');
    bulletArray[newIndex].addClass('active');
    
    if (newIndex > currentIndex) {
      slideLeft = '100%';
      animateLeft = '-100%';
    } else {
      slideLeft = '-100%';
      animateLeft = '100%';
    }
    
    $slides.eq(newIndex).css({
      display: 'block',
      left: slideLeft
    });
    $group.animate({
      left: animateLeft
    }, function() {
      $slides.eq(currentIndex).css({
        display: 'none'
      });
      $slides.eq(newIndex).css({
        left: 0
      });
      $group.css({
        left: 0
      });
      currentIndex = newIndex;
    });
  }
  
  function advance() {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      if (currentIndex < ($slides.length - 1)) {
        move(currentIndex + 1);
      } else {
        move(0);
      }
    }, 4000);
  }
  
  $('.next_btn').on('click', function() {
    if (currentIndex < ($slides.length - 1)) {
      move(currentIndex + 1);
    } else {
      move(0);
    }
  });
  
  $('.previous_btn').on('click', function() {
    if (currentIndex !== 0) {
      move(currentIndex - 1);
    } else {
      move(3);
    }
  });
  
  $.each($slides, function(index) {
    var $button = $('<a class="slide_btn">&bull;</a>');
    
    if (index === currentIndex) {
      $button.addClass('active');
    }
    $button.on('click', function() {
      move(index);
    }).appendTo('.slide_buttons');
    bulletArray.push($button);
  });
  
  advance();
});