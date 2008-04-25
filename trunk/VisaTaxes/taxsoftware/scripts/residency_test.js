//residency_test.js
//copyrighted to 


// function for Residency Test
function printOutput(){
	
	var days_current=0;
	var days_prev=0;
	var days_prev1=0;
	//get the value of current Visa Type
	var visatype=document.getElementById('visatype').value;
	//get the value of Student Option
	var more5years=document.getElementById('more5years').value;
	//get the value of Teacher or Trainee option
	var more2years=document.getElementById('more2years').value;
	//get the value of Greencard holder
	var greencard=document.getElementById('greencard').value;
	//get the value of Number of Days present in the United States - current year
	days_current=document.getElementById('days_current').value;
	//get the value of Number of Days present in the United States - previous year
	days_prev=document.getElementById('days_prev').value;
	//get the value of Number of Days present in the United States - previous year1
	days_prev1=document.getElementById('days_prev1').value;
	
	var SPT=spt (days_current, days_prev, days_prev1);  //SPT can have the values Pass or Fail
	
	if(greencard =="No"){

        if((visatype =="Student") && (more5years == "No")){
       		
          // Output
			
			 document.getElementById("output").innerHTML="<br><br>Substantial Presence Test: Do not Qualify, as you are under Tax Exempt Status.<br>Tax Exempt Status: PASS<br>Greencard Test: FAIL<br>You are a Non Resident Alien, You should file Form 1040NR-EZ or Form 1040NR AND Form 8843.";

          }
		 if((visatype=="Student")&&(more5years=="Yes")&&(SPT=="Fail")) {
			// Output

			   document.getElementById("output").innerHTML ="<br><strong> Residency Test Results:</strong><br>Substantial Presence Test: Fail<br> Tax Exempt Status: Fail<br>Greencard Test: Fail<br>You are a Non Resident Alien, You should file Form 1040NR-EZ or Form 1040NR.";

           }
		   if((visatype =="Student")&&(more5years=="Yes")&&(SPT=="Pass")){
          	// Output
			  document.getElementById("output").innerHTML ="<br><strong> Residency Test Results:</strong><br><br>Substantial Presence Test: Pass<br><br>Tax Exempt Status: Fail<br><br>Greencard Test: Fail<br><br>You are a Resident Alien, You should file Form 1040.";

           }
		 if((visatype =="Teacher")&& (more2years =="No")){  
  			 // Output

			  document.getElementById("output").innerHTML ="<br><strong> Residency Test Results:</strong><br>Substantial Presence Test: Do not Qualify, as you are under Tax Exempt Status. <br>Tax Exempt Status: PASS<br>Greencard Test: FAIL<br>You are a Non Resident Alien, You should file Form 1040NR-EZ or Form 1040NR AND Form 8843.";

           }
		 if((visatype =="Teacher")&& (more2years =="Yes")&&(SPT=="Fail")){
              // Output
			  document.getElementById("output").innerHTML ="<br><strong> Residency Test Results:</strong><br>Substantial Presence Test: Fail<br>Tax Exempt Status: Fail<br>Greencard Test: Fail<br>You are a Non Resident Alien, You should file Form 1040NR-EZ or Form 1040NR.";

          }
		 if((visatype == "Teacher")&&(more2years =="Yes")&&(SPT=="Pass")){
			// Output

			   document.getElementById("output").innerHTML ="<br><strong> Residency Test Results:</strong><br> Substantial Presence Test: Pass<br>Tax Exempt Status: Fail<br>Greencard Test: Fail<br>You are a Resident Alien, You should file Form 1040.";

           }
		 if((visatype =="Other") && (SPT=="Pass")){
			 // Output

			  document.getElementById("output").innerHTML ="<br><strong> Residency Test Results:</strong><br>Substantial Presence Test: Pass<br>Tax Exempt Status: Do not qualify for Tax Exempt Status.<br>Greencard Test: Fail<br>You are a Resident Alien, You should file Form 1040.";
		 }
		 if((visatype =="Other")&&(SPT=="Fail")){
              // Output

			  document.getElementById("output").innerHTML ="<br><strong> Residency Test Results:</strong><br>Substantial Presence Test: Fail<br>Tax Exempt Status: Do not qualify for Tax Exempt Status.<br>Greencard Test: Fail<br>You are a Non Resident Alien, You should file Form 1040NR-EZ or Form 1040NR.";

           }

	
	}
	else{
		  // Output
				
		 document.getElementById("output").innerHTML ="<br><strong> Residency Test Results:</strong><br><br>Substantial Presence Test: Do not qualify for Substantial Presence Test.<br><br> Tax Exempt Status: Do not qualify for Tax Exempt Status.<br><br> Greencard Test: Pass<br><br>You are a  Resident Alien, You should file Form 1040."; 
			
	}
	return false;
	
}
//function for calculate the SPT
function spt(days_current, days_prev, days_prev1){
	 	
		var SPT="";
		var val=0;
		if (days_current >= 31 ){
        	  
                val=eval(days_current) +eval(days_prev / 3)+eval(days_prev1 / 6);
			    if (days_current >= 183){
					SPT="Pass";
					return SPT ;
				}
                else if(val >= 183){
	            	SPT="Pass";
					return SPT ;
                }
				else{
                	SPT = "Fail";
					return SPT;
				}
            
		}
		else{
			SPT = "Fail";
			return SPT ;
			
		}

}
// function for select the div area as per visatype
function selParagraph(){
	if(document.getElementById("visatype").value=="Student"){
		document.getElementById('student').style.display = 'block';
		document.getElementById('teacher').style.display = 'none';
	}
	if(document.getElementById("visatype").value=="Teacher"){
		document.getElementById('teacher').style.display = 'block';
		document.getElementById('student').style.display = 'none';
	}
	if(document.getElementById("visatype").value=="Other"){
		document.getElementById('teacher').style.display = 'none';
		document.getElementById('student').style.display = 'none';
	}
	
}

