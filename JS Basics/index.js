
//Arrays

var vehicles =
 ["Ford", ["Fiesta","Taurus", "Explorer"],
 "Honda", ["Pilot", "Civic", "Accord"],
"Toyota", ["Corolla", "Camry", "Prius"]];

console.log(vehicles[1][2]) // Explorer

// String to Array
var joke =  "The chicken crossed the road";
console.log(joke[4]) // c 

console.log(joke.length)// 28

//Declaring Variables

var x = "";
var cheese = "yummy";
var age = 30;

// Variables are Case Sensitive

/* its good to use lower cases or camel case

eg var cat = "this cat"
var redDog = "bingo"

 they start with leters , not numbers / characters*/

//Reserved Words

/*
 The following words cannot be used as variables

abstract	arguments	await*	boolean
break	byte	case	catch
char	class*	const	continue
debugger	default	delete	do
double	else	enum*	eval
export*	extends*	false	final
finally	float	for	function
goto	if	implements	import*
in	instanceof	int	interface
let*	long	native	new
null	package	private	protected
public	return	short	static
super*	switch	synchronized	this
throw	throws	transient	true
try	typeof	var	void
volatile	while	with	yield*/

 var cheese ="yummy";
 console.log(cheese)// yummy

 myNum = 5
 console.log(5) //5

 var myOtherNum = 6
 console.log(6)  //6

 var sum = myNum + myOtherNum
 console.log(sum)//11
 console.log(myNum * myOtherNum)//30
 
var notNum ="5";
var newNum = 10
console.log(newNum + notNum)//"105" IT RETURNS A STRING . JS HAS CONCATENATED/ JOINED THE NUMBER AND SRING

var newNum2 =  6;
console.log(newNum + newNum2);// 16

var myCup =10;
var myCupAsString = "5";
console.log(typeof(myCup)); //number
console.log(typeof(myCupAsString))// string

var undefinedvariable;
console.log(typeof(undefinedvariable))// undefined

var nothingAtAll = null;
console.log(typeof(nothingAtAll))// object

  var emptyString =""
  console.log(typeof(emptyString))// string



// JS ARRAYS

// an array is a container with sub container

// Creating Arrays

var colors = new Array("red", "green", "blue"); // or

var colors = ["red", "green", "blue"]// they are just the same
console.log(colors[0]);// red
console.log(colors.length)//3

var vehicles = 
["Ford", [" Fiesta", "Taurus", "Explorer"],
"Honda", ["Pilot", "Civic", "Accord"],
"Toyota", [ "Corolla", "Camry", "Prius"]]

console.log(vehicles[1][2])// Explorer

var joke = "The rooster ate my tooth";
console.log(joke[7])// s
console.log(joke.length)//24

var animals = ['cat', 'dog', 'chicken'];
animals.push('lion')
console.log(animals)//[ 'cat', 'dog', 'chicken', 'lion' ]
console.log(animals[2])//chicken
console.log(animals.splice(1,1))//dog
console.log(animals)//[ 'cat', 'chicken', 'lion' ]
animals.push('dog')// ['cat', 'chicken', 'lion', 'dog' ]
console.log(animals.sort())//[ 'cat', 'chicken', 'dog', 'lion' ]
console.log(animals.length)//4 
console.log(animals[animals.length-1]) //lion



// OPERATORS, BOOLEANS, 

//Operators (+-/*%)
//Booleans (true/false)



