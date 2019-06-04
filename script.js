let dirt = document.querySelectorAll(".dirt");
let main = document.querySelector(".main");
let scoreShow = document.querySelector(".score");
let img = document.createElement('img');
let lastRand = 0;
let score = 0;
document.body.appendChild(img);
img.classList.add('krot');


setInterval(show, 1000);
function show(){
	let rand = Math.floor(Math.random() * dirt.length);
	if(rand != lastRand) {
		img.src = 'mole.svg';
		img.style.top = dirt[rand].getBoundingClientRect().y - 130 + "px";
		img.style.left = dirt[rand].getBoundingClientRect().x + "px";
	}
	lastRand = rand;
};
img.onclick = function(){
	if(score > 4){
		main.style.display = 'none';
		img.style.display = 'none';
		let div = document.createElement('div');
		document.body.appendChild(div);
		div.classList.add('win');
		div.innerHTML = 'YOU WIN';

	} else{
		score++;
		scoreShow.textContent = 'СЧЁТ:' + score;
		img.style.display = 'none';
		show();
		img.style.display = 'inline';
		
	}
}

