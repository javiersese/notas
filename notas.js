
const notasJSON = '['+
					'{"nombre" : "Aurelio", 	 "nota1" : 8.5, "nota2" : 6.3, "nota3" : 3.5},'+
					'{"nombre" : "Silvia", 	 "nota1" : 6.5, "nota2" : 5.4, "nota3" : 4.9},'+
					'{"nombre" : "Francisco", "nota1" : 4.5, "nota2" : 7.7, "nota3" : 5.8},'+
					'{"nombre" : "Marta", 	 "nota1" : 3.4, "nota2" : 8.4, "nota3" : 6.7},'+
					'{"nombre" : "Catalina",  "nota1" : 2.7, "nota2" : 2.1, "nota3" : 7.6},'+
					'{"nombre" : "Ramon", 	 "nota1" : 6.9, "nota2" : 3.8, "nota3" : 4.1},'+
					'{"nombre" : "Oriol", 	 "nota1" : 9.1, "nota2" : 6.4, "nota3" : 8.3},'+
					'{"nombre" : "Andrea", 	 "nota1" : 2.8, "nota2" : 6.4, "nota3" : 6.0}'+
					']'; 

let notas;
let	mediaCol = [0,0,0,0]; 


function loadJSON() {
	notas = JSON.parse(notasJSON);	
}

function tableHeader() {
	document.getElementById("t-head").innerHTML =
	"<table><tr><th>Nombre</th><th>Nota 1</th><th>Nota 2</th><th>Nota 3</th><th>Media</th></tr></table>";
};

function tableBody() {
	tBody = '<table>';
	for (i=0; i<notas.length;i++) {
		media = (notas[i].nota1 + notas[i].nota2 + notas[i].nota3)/3;
		mediaCol[0] += notas[i].nota1;
		mediaCol[1] += notas[i].nota2;
		mediaCol[2] += notas[i].nota3;
		mediaCol[3] += media;
		tBody += "<tr><td>"+notas[i].nombre+"</td><td>"+notas[i].nota1+"</td><td>"+notas[i].nota2+"</td><td>"+notas[i].nota3+"</td><td>"+media.toPrecision(3)+"</td></tr>"
	};
	mediaCol[0] = mediaCol[0]/notas.length;
	mediaCol[1] = mediaCol[1]/notas.length;
	mediaCol[2] = mediaCol[2]/notas.length;
	mediaCol[3] = mediaCol[3]/notas.length;
	tBody += "</table>";
	document.getElementById("t-body").innerHTML = tBody;
};

function tableFooter() {
	document.getElementById("t-footer").innerHTML =
	"<table><tr><td><i>Medias Asg.</i></td><td>"+mediaCol[0].toPrecision(3)+"</td><td>"+mediaCol[1].toPrecision(3)+"</td><td>"+mediaCol[2].toPrecision(3)+"</td><td>"+mediaCol[3].toPrecision(3)+"</td></tr></table>"
};


loadJSON();
tableHeader();
tableBody();
tableFooter();
