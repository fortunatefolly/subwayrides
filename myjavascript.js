var rides;
var totalRides;
var Cost;

function rightRides(){
	WDs = document.getElementById("rides").value;
	/*var WEs = document.getElementById("weekends").value;*/
	totalRides = Number(WDs) * 4;
	Cost = Number(totalRides) * 2.75; 
	alert ("The total Number of Rides taken per month is " +
		totalRides +
		" for a Total Cost of $" +
		Cost);

	rightPrice();
}

function rightPrice(){
	Cost = Number(totalRides) * 2.75;
	if (Cost < 116.5){
		alert("You should pay per ride!");
	}
	 else {
		alert("You should get an Unlimited Card!")
	}
}