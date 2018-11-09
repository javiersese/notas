# Notas
A javascript exercise
***

We have a JSON file with the subject qualifications for several students.
Because I do not want to complicate the code I avoid to include the part to read the JSON file from the disk and include its content in the javascript code.

~~~
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
~~~

I have to build the expression through string concatenations because if I write all in a single string there are some errors when execute the program (strange characters are found... ?).

The goal is to build a report showing the qualifications of each student and its average. I have included too the average of the qualifications for each subject.

Well, we start with the constant ***notasJSON*** containing the JSON file as a string, as if it had been read from the disk

In the javascript file you can see, at the end, the main program as succession of calls to functions

~~~
loadJSON();
tableHeader();
tableBody();
tableFooter();
~~~

I did it in this way to modularize the program and make it more understandable.


---
#### function loadJSON

The function loadJSON should include to read the file JSON from the disk (not coded by the moment as it has been explained before).
The other task that this function has to do is to parse the content of*** notasJSON*** to create an javascript object.

~~~
	notas = JSON.parse(notasJSON);	
~~~

The object will be stored in the variable ***notas***.

Note that the variable ***notes*** is declared outside the functions. Therefore it is a global variable and can be accessed from any function.

~~~
 let notas;
~~~

Following the Saru suggestion I decide to build the report using a table html.
I have divided the table in three parts: header, body and footer, and coded a function for each part of the table. So that means to create three tables.

In the html file (***notas.html***) I have included three \<div>, one for each part of the table:

~~~
	<body>
		<div id="t-head"></div>
		<div id="t-body"></div>
		<div id="t-footer"></div>
	</body>
~~~

---
#### function tableHeader

This function show the headers of the table. It is a table with only a row and it is shown in the "t-head" *div*.
~~~
function tableHeader() {
	document.getElementById("t-head").innerHTML =
	"<table><tr><th>Nombre</th><th>Nota 1</th><th>Nota 2</th><th>Nota 3</th><th>Media</th></tr></table>";
};
~~~

---
#### function tableBody
This function builds the table with the information of each students. The number of rows is variable, depending the number of student that we have in the JSON file.
So, we need a loop structure to access to all the rows in the object ***notas***.
For each student (row) we have the following data:

* nombre
* nota1
* nota2
* nota3

we have to calculate the average of the qualifications:

average = (nota1 + nota2 + nota3) / 3

We also have to acumulate the qualifications for each subsject to allow the calcule of the subject averages. To do that we use a global array (declared outside the functions)

~~~
let	mediaCol = [0,0,0,0]; 
~~~

The array has 4 elements: one for each of the three subjects and other for the average of averages.
In the loop we acumulate the qualifications and when the loop finishes, the average is calculated dividing the sum by the number of students (length of the ***notas*** object)

So, the code for the tableBody function is:
~~~
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
~~~

tBody is a string variable where we are building the html content to be assigned to the innerHTML property.

---
#### function tableFooter
This funtion has only a row to shoe the average values of each subject that we have calculated previously in the tableBody function.

~~~
function tableFooter() {
	document.getElementById("t-footer").innerHTML =
	"<table><tr><td><i>Medias Asg.</i></td><td>"+mediaCol[0].toPrecision(3)+"</td><td>"+mediaCol[1].toPrecision(3)+"</td><td>"+mediaCol[2].toPrecision(3)+"</td><td>"+mediaCol[3].toPrecision(3)+"</td></tr></table>"
};
~~~

For css I used the sample given by w3chools.com, customicing it a little...

[CSS Styling Tables](https://www.w3schools.com/css/css_table.asp)

### IMPORTANT
In the HTML file the script tag to link *notas.js* has to be after the body. If you put this line before the **body html** the program does not work right, because the browser tries to execute the javascript code before the **div tags** have been defined.
	







