
// for citizen display

function toggleCitizen(a){
  
  var e=document.getElementById("CitizenshipDisp");

  if(a==1){

    e.style.display="block";
	citizenship_same="no";
	country_logic();
  } else {

    e.style.display="none";
	citizenship_same="yes";
	country_logic();
  }
  
  return true;

}

//for resident display

function toggleResident(a){

  var e=document.getElementById("ResidentDisp");

  if(a==1){
	resident_same="no";
    e.style.display="block";
	country_logic();
	
	
  } else {
    e.style.display="none";
	resident_same="yes";
	country_logic();
  }
  
  return true;

}
//for tax details display

function selTaxForm(value){

	var e=document.getElementById("taxform");

	if(value=="Yes"){

		e.style.display="block";	

	}else{

		e.style.display="none";

	}

}

//function for country selection
function country_logic()
{
	
		
		if((citizenship_same =="yes")&&(resident_same=="yes")){
		
		       citizenship_country = document.getElementById("passport_country").value;
	        resident_country = document.getElementById("passport_country").value;
         document.getElementById("citizen_country").value=document.getElementById("passport_country").value;
		 document.getElementById("residentcountry").value=document.getElementById("passport_country").value;
		 tax_treaty();
		}
        
		          
         if((citizenship_same=="no")&&(resident_same=="yes")){
         
	        citizenship_country = document.getElementById("citizenship_country").value;
	        resident_country = document.getElementById("passport_country").value;
	         document.getElementById("passportcountry").value=document.getElementById("passport_country").value;
		 document.getElementById("citizen_country").value=document.getElementById("citizenship_country").value;
		 document.getElementById("residentcountry").value=document.getElementById("passport_country").value;
		  tax_treaty();

         }

         if((citizenship_same=="yes")&&(resident_same=="no")){
         
         resident_country = document.getElementById("resident_country").value;
         citizenship_country = document.getElementById("passport_country").value;
         document.getElementById("passportcountry").value=document.getElementById("passport_country").value;
		 document.getElementById("citizen_country").value=document.getElementById("passport_country").value;
		 document.getElementById("residentcountry").value=document.getElementById("resident_country").value;
		tax_treaty();

         }
		
		else
		{
		citizenship_country = document.getElementById("citizenship_country").value;
         resident_country = document.getElementById("resident_country").value;

		 document.getElementById("passportcountry").value=document.getElementById("passport_country").value;
		 document.getElementById("citizen_country").value=document.getElementById("citizenship_country").value;
		 document.getElementById("residentcountry").value=document.getElementById("resident_country").value;
		 		  tax_treaty();

		  }

}
//function for combination of fname and mname
function cmb_name(){
	comb_fname_mname   =document.getElementById("fname").value+" "+document.getElementById("mname").value;
	document.getElementById("comb_fname_mname").value = comb_fname_mname;
}


// single function for usaddress combination

function cmb_us_address()
{

if(!document.getElementById("us_street").value==""){
		comb_us_address1=document.getElementById("us_street").value;
	}
if(!document.getElementById("us_city").value==""){
		comb_us_address2=document.getElementById("us_city").value;
	}
	if(!document.getElementById("us_state").value==""){
		comb_us_address2=comb_us_address2+","+" "+document.getElementById("us_state").value;
	}
	if(!document.getElementById("us_zip").value==""){
		comb_us_address2=comb_us_address2+","+" "+document.getElementById("us_zip").value;
	}


	document.getElementById("comb_us_address2").value= comb_us_address2;

comb_us_address = comb_us_address1 + "," + "" + comb_us_address2 + "," + "" + "United States" ;

	document.getElementById("comb_us_address").value= comb_us_address;

}

//function for uscombination
function cmb_usaddress1(){
	document.getElementById("comb_us_address1").value=document.getElementById("us_street").value;
	cmb_us_address();
}
function cmb_usaddress2(){
	comb_us_address2="";
	if(!document.getElementById("us_city").value==""){
		comb_us_address2=document.getElementById("us_city").value;
	}
	if(!document.getElementById("us_state").value==""){
		comb_us_address2=comb_us_address2+","+" "+document.getElementById("us_state").value;
	}
	if(!document.getElementById("us_zip").value==""){
		comb_us_address2=comb_us_address2+","+" "+document.getElementById("us_zip").value;
	}
	document.getElementById("comb_us_address2").value= comb_us_address2;
	cmb_us_address();
}
//function for comb_foreign_address
function cmb_comb_foreignaddress(){
	comb_foreign_address="";
	if(!document.getElementById("foreign_street").value==""){
		comb_foreign_address=document.getElementById("foreign_street").value;
	}
	if(!document.getElementById("foreign_city").value==""){
		comb_foreign_address=comb_foreign_address+","+" "+document.getElementById("foreign_city").value;
	}
	if(!document.getElementById("foreign_state").value==""){
		comb_foreign_address=comb_foreign_address+","+" "+document.getElementById("foreign_state").value;
	}
	if(!document.getElementById("foreign_zip").value==""){
		comb_foreign_address=comb_foreign_address+","+" "+document.getElementById("foreign_zip").value;
	}
	if(!document.getElementById("foreign_country").value==""){
		comb_foreign_address=comb_foreign_address+","+" "+document.getElementById("foreign_country").value;
	}
	document.getElementById("comb_foreign_address").value = comb_foreign_address ;
}
//function for comb_university_address
function cmb_universityaddress(){
	comb_university_address="";
	if(!document.getElementById("university_street").value==""){
		comb_university_address=document.getElementById("university_street").value;
	}
	if(!document.getElementById("university_city").value==""){
		comb_university_address=comb_university_address+","+" "+document.getElementById("university_city").value;
	}
	if(!document.getElementById("university_state").value==""){
		comb_university_address=comb_university_address+","+" "+document.getElementById("university_state").value;
	}
	if(!document.getElementById("university_zip").value==""){
		comb_university_address=comb_university_address+","+" "+document.getElementById("university_zip").value;
	}
	comb_university_address=comb_university_address+","+" "+"United States"+","+" "+"Phone:";
	if(!document.getElementById("university_phone").value==""){
		comb_university_address=comb_university_address+" "+document.getElementById("university_phone").value;
	}
	document.getElementById("comb_university_address").value = comb_university_address;
}
//function for comb_current_visa_date
function cmb_current_visadate(){
	comb_current_visa_date="";
	if(!document.getElementById("visatype_yr_current").value==""){
		comb_current_visa_date=document.getElementById("visatype_yr_current").value;
	}
	if(!document.getElementById("date_visa_issued").value==""){
		comb_current_visa_date=comb_current_visa_date+","+" "+document.getElementById("date_visa_issued").value;
	}
	document.getElementById("comb_current_visa_date").value = comb_current_visa_date;
}
//function for comb_tax_forms
function cmbcomb_taxforms(){
	comb_tax_forms="";
	comb_tax_forms="Year 2007"+" "+document.getElementById("tax_forms").value;
	document.getElementById("comb_tax_forms").value = comb_tax_forms;
}