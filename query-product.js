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

