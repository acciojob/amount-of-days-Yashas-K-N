//your JS code here. If required.
function daysOfAYear(year) {
	if (year%4 == 0){
		if(year%100 != 0){
	    console.log("366");
	}
		else if(year%400 == 0){
			console.log("366");
		}

		else  {
		 console.log("365");
	}

}
 
daysOfAYear();