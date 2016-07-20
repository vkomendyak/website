console.log("Calculator\n");

var run = prompt("Would you like to run the code? (Y/N)")
run.toLowerCase(); 
var conversion1 = false;

while(run === 'yes' || run === 'y'){
    	while (conversion1 !== true){

            	var conversion = prompt("would you like to convert weight or distance?\n1)Weight\n2)Distance");
    		switch(conversion){
       	 		case(1):
            			var length1 = prompt("1)Meters\n2)Inches\n3)Miles\n4)Attoparsec");
            			conversion1 = true
				break;
                	
        		case(2):
            			alert("!");
            			conversion1 = true
            			break;
			
        		default:
            			alert("Please Select an appropriate value");
            
        	}
    	}
    	run = prompt("Would you like to run the code? (Y/N)")
    	run.toLowerCase();       
}


