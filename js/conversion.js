function calculateNumber(){
  var total  =0;
  var dict = {"A": 1, "F" : 2,		"K" : 3,		"P" : 4,		"U" : 5,		"Z" : 6	,
              "B" : 1,"G" : 2,		"L" : 3,		"Q" : 4,	    "V" : 5,
              "C" : 1,"H" : 2,		"M" : 3,	    "R" : 4,		"W" : 5,
              "D" : 1,"I" : 2,		"N" : 3,		"S" : 4,		"X" : 5,
              "E" : 1,"J" : 2,		"O" : 3,		"T" : 4,		"Y" : 5};

  var nameText =document.getElementById("fullName").value;
			    			for (var i = 0; i < nameText.length ; i++) {
			    			    for (var key in dict) {
			    			    	if (nameText.charAt(i).toUpperCase()== key) {
			    			    	  total += dict[key];
			    			    	}
			    			    }
			    			}
			    	      
			    			
						//Calculating the different values to populate in the fields
						console.log(total);
                   		document.getElementById("chiffreVieBox").value = total;
                 
						 //Calculate the decom
						   var decomValue = (total * 360)/72;
						   document.getElementById("decomBox").value = decomValue;
			    	       
			    	       //Calculate the decom de vie anterieure
			    	       var decomDeVie1Value = new Date().getFullYear() - decomValue;
			    	       document.getElementById("decomVie1").value = decomDeVie1Value;
						   
						   //Calculate chiffre de Vie 2
			    	       var chiffreDeVie2Value = parseInt(decomDeVie1Value.toString().slice(0,2)) +  parseInt(decomDeVie1Value.toString().slice(2,4));
						   document.getElementById("chiffreVieBox2").value = chiffreDeVie2Value;
						   

			    	        //Set the value for the chiffre De Vie 2
			    	       var decom1Value = (chiffreDeVie2Value * 360)/72;
			    	       document.getElementById("decomBox1").value = decom1Value;
						   document.getElementById("decomVie2").value = decomDeVie1Value - decom1Value;
						   total = 0; 
				
}

function clear(){
	document.getElementById("input").reset();
	document.getElementById("result").reset();
	
   
}