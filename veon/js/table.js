
let Person = function(name,lastName,number,money){
	this.name = name;
	this.lastName = lastName;
	this.number = number;
	this.money = money;
}

let objects = {
	234234: new Person('samoa','ulunc','91 9283 21', 12000),
	345435: new Person('zoya', 'kush', '96 674 233', 90000),
	222343: new Person('valod','abudabyan','99 678 222',70000),
	113233: new Person('garnik','zazazyan','99 678 122',1000)
}

for(var key in objects){
	 $('.tableHtml').append("<tr class='person'><td>"+ objects[key].name 
	 +"</td><td>"+ objects[key].lastName +"</td><td>"+ objects[key].number 
	 +"</td><td>"+ objects[key].money +"</td></tr>");
}

// sort num a-b, 0-9
$(function(){
 $(".table").addSortWidget();
});
