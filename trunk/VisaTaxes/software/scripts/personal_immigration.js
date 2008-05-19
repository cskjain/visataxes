// JavaScript Document for personal.html
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
  } else {
	e.style.display="none";
  }
  return true;
}
//for resident display
function toggleResident(a){
  var e=document.getElementById("ResidentDisp");
  if(a==1){
	e.style.display="block";
  } else {
	e.style.display="none";
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