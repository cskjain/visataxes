


// function for Residency Test
function printOutput(){
	
	var days_current=0;
	var days_prev=0;
	var days_prev1=0;
	//get the value of current Visa Type
	var visatype_residency=document.getElementById('visatype_residency').value;
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

        if((visatype_residency =="Student") && (more5years == "No")){
       		
          // Output
			
			 document.getElementById("output").innerHTML="<br><br><b>Substantial Presence Test:</b> Do not Qualify, as you are under Tax Exempt Status.<br><br><b>Tax Exempt Status:</b> PASS<br><br><b>Greencard Test:</b> FAIL<br><br>You are a <b>Non Resident Alien</b>, You should file <b>Form 1040NR-EZ</b> or <b>Form 1040NR</b> AND <b>Form 8843</b>.";

          }
		 if((visatype_residency=="Student")&&(more5years=="Yes")&&(SPT=="Fail")) {
			// Output

			   document.getElementById("output").innerHTML ="<br><strong> Residency Test Results:</strong><br><br><b>Substantial Presence Test:</b> Fail<br><br> <b>Tax Exempt Status:</b> Fail<br><br><b>Greencard Test:</b> Fail<br><br>You are a <b>Non Resident Alien</b>, You should file <b>Form 1040NR-EZ</b> or <b>Form 1040NR</b>.";

           }
		   if((visatype_residency =="Student")&&(more5years=="Yes")&&(SPT=="Pass")){
          	// Output
			  document.getElementById("output").innerHTML ="<br><strong> Residency Test Results:</strong><br><br><b>Substantial Presence Test:</b> Pass<br><br><b>Tax Exempt Status:</b> Fail<br><br><b>Greencard Test:</b> Fail<br><br>You are a <b>Resident Alien</b>, You should file <b>Form 1040</b>.";

           }
		 if((visatype_residency =="Teacher")&& (more2years =="No")){  
  			 // Output

			  document.getElementById("output").innerHTML ="<br><strong> Residency Test Results:</strong><br><br><b>Substantial Presence Test:</b> Do not Qualify, as you are under Tax Exempt Status. <br><br><b>Tax Exempt Status:</b> PASS<br><br><b>Greencard Test:</b> FAIL<br><br>You are a <b>Non Resident Alien</b>, You should file <b>Form 1040NR-EZ</b> or <b>Form 1040NR</b> AND <b>Form 8843</b>.";

           }
		 if((visatype_residency =="Teacher")&& (more2years =="Yes")&&(SPT=="Fail")){
              // Output
			  document.getElementById("output").innerHTML ="<br><strong> Residency Test Results:</strong><br><br><b>Substantial Presence Test:</b> Fail<br><br><b>Tax Exempt Status:</b> Fail<br><br><b>Greencard Test:</b> Fail<br><br>You are a <b>Non Resident Alien</b>, You should file <b>Form 1040NR-EZ</b> or <b>Form 1040NR</b>.";

          }
		 if((visatype_residency == "Teacher")&&(more2years =="Yes")&&(SPT=="Pass")){
			// Output

			   document.getElementById("output").innerHTML ="<br><strong> Residency Test Results:</strong><br><br> <b>Substantial Presence Test:</b> Pass<br><br><b>Tax Exempt Status:</b> Fail<br><br><b>Greencard Test:</b> Fail<br><br>You are a <b>Resident Alien</b>, You should file <b>Form 1040.</b>";

           }
		 if((visatype_residency =="Other") && (SPT=="Pass")){
			 // Output

			  document.getElementById("output").innerHTML ="<br><strong> Residency Test Results:</strong><br><br><b>Substantial Presence Test:</b> Pass<br><br><b>Tax Exempt Status:</b> Do not qualify for Tax Exempt Status.<br><br><b>Greencard Test:</b> Fail<br><br>You are a <b>Resident Alien</b>, You should file <b>Form 1040</b>.";
		 }
		 if((visatype_residency =="Other")&&(SPT=="Fail")){
              // Output

			  document.getElementById("output").innerHTML ="<br><strong> Residency Test Results:</strong><br><br><b>Substantial Presence Test:</b> Fail<br><br><b>Tax Exempt Status:</b> Do not qualify for Tax Exempt Status.<br><br><b>Greencard Test:</b> Fail<br><br>You are a <b>Non Resident Alien</b>, You should file <b>Form 1040NR-EZ</b> or <b>Form 1040NR</b>.";

           }

	
	}
	else{
		  // Output
				
		 document.getElementById("output").innerHTML ="<br><strong> Residency Test Results:</strong><br><br><b>Substantial Presence Test:</b> Do not qualify for Substantial Presence Test.<br><br> <b>Tax Exempt Status:</b> Do not qualify for Tax Exempt Status.<br><br> <b>Greencard Test:</b> Pass<br><br>You are a  <b>Resident Alien</b>, You should file <b>Form 1040</b>."; 
			
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
// function for select the div area as per visatype_residency
function selParagraph(){
	if(document.getElementById("visatype_residency").value=="Student"){
		document.getElementById('student').style.display = 'block';
		document.getElementById('teacher').style.display = 'none';
	}
	if(document.getElementById("visatype_residency").value=="Teacher"){
		document.getElementById('teacher').style.display = 'block';
		document.getElementById('student').style.display = 'none';
	}
	if(document.getElementById("visatype_residency").value=="Other"){
		document.getElementById('teacher').style.display = 'none';
		document.getElementById('student').style.display = 'none';
	}
	
}

