// JavaScript Document for personal.html


var passport_country="Select Country";
var citizenship_country="Select Country";
var resident_country="Select Country";
var citizenship_same = "yes";
var resident_same = "yes";
var comb_fname_mname="";
var comb_us_address1="";
var comb_us_address2="";
var comb_foreign_address="";
var comb_university_address="";
var comb_current_visa_date="";
var comb_tax_forms="";
//for date functions

$(function()

{

	$('.date_entry').datePicker({startDate:'01/01/1996'});

});

$(function()

{

	$('.date_visa_issued').datePicker({startDate:'01/01/1996'});

});

// for citizen display

function toggleCitizen(a){
  
  var e=document.getElementById("CitizenshipDisp");

  if(a==1){

    e.style.display="block";
	citizenship_same="no";
	document.getElementById("citizenship_country").value="Select Country";
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
	document.getElementById("resident_country").value="Select Country";
	country_logic();
	
	
  } else {
	document.getElementById("resident_country").value="Select Country";
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

//function for couintry selection
//country_logic ( passport_country, citizenship_country, resident_country, citizenship_same, resident_same)
function country_logic()
{
		//var e=document.getElementById("CitizenshipDisp");
		
		passport_country=document.getElementById("passport_country").value;
		citizenship_country=document.getElementById("citizenship_country").value;
		resident_country=document.getElementById("resident_country").value;
	//	alert(passport_country);
		if((citizenship_same =="yes")&&(resident_same=="yes")){
			citizenship_country="";
			resident_country="";
			citizenship_country = passport_country;
			resident_country = passport_country;
		}
        
		          
         if((citizenship_same=="no")&&(resident_same=="yes")){
			 resident_country="";
	         resident_country = citizenship_country;
         }

         if((citizenship_same=="yes")&&(resident_same=="no")){
			 citizenship_country="";
	         citizenship_country = passport_country ;
         }
		
		 document.getElementById("passportcountry_value").value=passport_country;
		 document.getElementById("citizen_country").value=citizenship_country;
		 document.getElementById("residentcountry_value").value=resident_country;
		  
		// document.getElementById("output1").innerHTML="Passport Country :"+passport_country+"<br>"+"Citizenship Country :"+citizenship_country+"<br>"+"Resident Country: "+resident_country;

}
//function for combination of fname and mname
function cmb_name(){
	comb_fname_mname   =document.getElementById("fname").value+" "+document.getElementById("mname").value;
}
//function for uscombination
function cmb_usaddress1(){
	comb_us_address1=document.getElementById("us_street").value;
	
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
	
}
//function for comb_tax_forms
function cmbcomb_taxforms(){
	comb_tax_forms="";
	comb_tax_forms="Year 2007"+" "+document.getElementById("tax_forms").value;
	
}