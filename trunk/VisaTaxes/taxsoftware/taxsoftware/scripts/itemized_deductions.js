//residency_test.js
//created by Pramode P Paul pramodepp@gmail.com
//copyrighted to  to www.visataxes.com

//global variable declaration
var filingstatus;
var line10 ;
var state_local_taxes;
var line11;
var citizencountry;

// controler function
function calculate_tax(){
	
	//intialization
	filingstatus = "single";
	line10 = 0;
	state_local_taxes = 0;
	
	filingstatus = document.getElementById('filingstatus').value;
	line10 = document.getElementById('line10').value;
	state_local_taxes = document.getElementById('state_local_taxes').value;
	citizencountry = document.getElementById('citizencountry').value;
	itemized_deductions ();
	document.getElementById('line11').value=line11; 
}

function itemized_deductions (){
	var varSmall=0;
	line11=0;
	if(citizencountry =="India"){    // country is india
  	 	if(filingstatus == "Single"){  
    	 	line11 = 5350 ; 
         	return ;
        }else{
			line11 = 10700;
            return ;
        }
		
	}else{//country is not India
     	
		if((filingstatus == "Married") && (line10 > 78200) && (line10 <= 100000)){
        	if((state_local_taxes * 0.80) > ((line10 - 78200) *  0.03)){
				varSmall=((line10 - 78200) *  0.03);
			}else{
				varSmall=(state_local_taxes * 0.80);
			}
			
			line11 = Math.round ((state_local_taxes - varSmall) *  0.667); 
			return; 
         }else{
		   line11 = Math.round (state_local_taxes);
		   return; 
         }
     }

}

