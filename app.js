let paths = document.querySelectorAll('#svg path');
let lengths = [];
for(path of paths) {
	let len = path.getTotalLength();
	lengths.push(len);
}
for(let i=0; i<paths.length; i++){
	paths[i].style.strokeDasharray = `${lengths[i]}px`;
	paths[i].style.strokeDashoffset = `${lengths[i]}px`;
	paths[i].style.animation = `line-anim 3s ease forwards ${.1*(i-1)}s`;
}