document.getElementById("email").onkeypress = function() {
	document.querySelector(".form-extension").style.display = "block";
};

document.getElementById("men-li").onclick = function() {
	document.querySelector(".women-option").style.display = "none";
	document.querySelector(".kids-option").style.display = "none";
	document.querySelector(".accessories-option").style.display = "none";
	document.querySelector(".shoes-option").style.display = "none";
	document.querySelector(".men-option").style.display = "block";
};

document.getElementById("women-li").onclick = function() {
	document.querySelector(".men-option").style.display = "none";
	document.querySelector(".kids-option").style.display = "none";
	document.querySelector(".accessories-option").style.display = "none";
	document.querySelector(".shoes-option").style.display = "none";
	document.querySelector(".women-option").style.display = "block";
};

document.getElementById("kids-li").onclick = function() {
	document.querySelector(".men-option").style.display = "none";
	document.querySelector(".women-option").style.display = "none";
	document.querySelector(".accessories-option").style.display = "none";
	document.querySelector(".shoes-option").style.display = "none";
	document.querySelector(".kids-option").style.display = "block";
};

document.getElementById("accessories-li").onclick = function() {
	document.querySelector(".men-option").style.display = "none";
	document.querySelector(".women-option").style.display = "none";
	document.querySelector(".kids-option").style.display = "none";
	document.querySelector(".shoes-option").style.display = "none";
	document.querySelector(".accessories-option").style.display = "block";
};

document.getElementById("shoes-li").onclick = function() {
	document.querySelector(".men-option").style.display = "none";
	document.querySelector(".women-option").style.display = "none";
	document.querySelector(".kids-option").style.display = "none";
	document.querySelector(".accessories-option").style.display = "none";
	document.querySelector(".shoes-option").style.display = "block";
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



