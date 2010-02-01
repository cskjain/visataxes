<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<meta content="text/html; charset=UTF-8" http-equiv="content-type">
<title>1040NR Software - 2009 Form 1040NR EZ and Form 8843 Software Online - International Student Tax Return - Form 1040NR EZ Form 8843 Instructions F1 OPT Tax visa taxes - Tax Treaty Tax Credits Exemptions Deductions </title>
<link href="css/style.css" type="text/css" rel="stylesheet">
<?php
include_once('../../ssl_script.php');
?>
<?php
$discount = "selected";
?>
<?php require_once("../../header.php");
?>
<div id="nav2">
<ul>
 <li class=""> <a href="http://www.visataxes.com/form1040nrez_home.php" title="">Home</a></li>
  <li class=""> <a href="http://www.visataxes.com/nr_tax_software_security_privacy.php" title="">Security</a></li>
 <li class=""> <a href="http://www.visataxes.com/residency_test.php" title="">Residency Test</a></li>
 <li class=""> <a href="http://www.visataxes.com/Form1040NR-EZ_Instructions_Mailing_Address.php" title="">Form 1040NR-EZ - Help</a></li>
 <li class=""> <a href="http://www.visataxes.com/Form8843_Instructions_Mailing_Address.php" title="">Form 8843 - Help</a></li>
 <li class="selected"> <a href="https://www.visataxes.com/software/forms/Form1040NR-EZ.php" title="">Tax Software</a></li>
</ul>
</div>
</head>
<body  onload="init();">
<!-- Page Uploading Progress bar Script -->

<div id="loading" style="position:absolute; width:100%; text-align:center; top:300px;">
Loading Tax Software ... Please wait...<br>
<img src="imgs/progress_bar.gif" border=0></div>

<script>
 var ld=(document.all);
  var ns4=document.layers;
 var ns6=document.getElementById&&!document.all;
 var ie4=document.all;
  if (ns4)
         ld=document.loading;
 else if (ns6)
         ld=document.getElementById("loading").style;
 else if (ie4)
         ld=document.all.loading.style;
  function init()
 {
 if(ns4){ld.visibility="hidden";}
 else if (ns6||ie4) ld.display="none";
 }
 </script>

<!-- Tax Logic Scripts Section -->

<script src="scripts/tax_logic/initialize.js" type="text/javascript"></script>
<script src="scripts/tax_logic/form1040nrez_ui.js" type="text/javascript"></script>
<script src="scripts/tax_logic/form1040nrez.js" type="text/javascript"></script>
<script src="scripts/tax_logic/tax_treaty.js" type="text/javascript"></script>
<script src="scripts/tax_logic/student_interest.js" type="text/javascript"></script>
<script src="scripts/tax_logic/tax.js" type="text/javascript"></script>
<script type="text/javascript" src="scripts/tax_logic/personal_immigration.js"></script>

<!--Google Hosted Jquery Plugin -->

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.2.6/jquery.min.js" type="text/javascript"></script> 

<!-- Jquery Json Select Box Plugin -->

<script src="scripts/jquery_selectbox/jquery.selectboxes.js" type="text/javascript"></script>

<script type="text/javascript">

$(document).ready(function(){

 jQuery.getJSON("scripts/data/country_data.js",function(jsonData) {
 $.each(jsonData,function(key,object) {
 
 
 // $("#foreign_country_info").addOption(object.Country_Code,object.Country);
 // $("#foreign_country_info option[@value='select']").attr('selected', 'true');

         // $("#passport_country_info").addOption(object.Country_Code,object.Country);
        // $("#passport_country_info option[@value='select']").attr('selected', 'true');
          
        //  $("#citizenship_country_info").addOption(object.Country_Code,object.Country);
       //   $("#citizenship_country_info option[@value='select']").attr('selected', 'true');          
          
                    $("#resident_country_info").addOption(object.Country_Code,object.Country);
                    $("#resident_country_info option[@value='select']").attr('selected', 'true');
          
                               });
    
    
    // passport, citizenship and resident values 
    
    

  //  $("#passport_country_info").change(function() {

        //        passportcountry_selected = $("#passport_country_info option[@selected]").html();
                
            //    $("#passportcountry").val(passportcountry_selected);
                
 //       });        
        
        //   $("#citizenship_country_info").change(function() {

              //  citizenshipcountry_selected = $("#citizenship_country_info option[@selected]").html();
                
             //   $("#citizen_country").val(citizenshipcountry_selected);
                
   //    });        
        
        $("#resident_country_info").change(function() {

                resident_country_value = $("#resident_country_info option[@selected]").html();
                
                
                $("#residentcountry").val(resident_country_value);
                
                resident_country = resident_country_value;
                
                cmb_comb_foreignaddress();

                
                tax_treaty();
                
                calcLine11();

                
        });        
        

        
                $("#foreign_country_info").change(function() {

                foreign_country_selected = $("#foreign_country_info option[@selected]").html();
                
                       $("#foreigncountry").val(foreign_country_selected);
                       
                       foreign_country_value = foreign_country_selected;
                       
                       cmb_comb_foreignaddress();


        });        
        
        
        
        });
});

</script>
       
<!--Jquery Multitabs Scripts Section -->
<link rel="stylesheet" href="css/jquery.tabs.css" type="text/css" media="print, projection, screen">
<link href="css/style.css" type="text/css" rel="stylesheet">
<script src="scripts/jquery_multitabs/jquery.tabs.pack.js" type="text/javascript"></script>
<script type="text/javascript">
            
                                        $(function() {

                $('#container-1').tabs();

                $('#container-2').tabs(2);
                $('#container-3').tabs({ fxSlide: true });
                $('#container-4').tabs({ fxFade: true, fxSpeed: 'fast' });
                $('#container-5').tabs({ fxSlide: true, fxFade: true, fxSpeed: 'normal' });
                $('#container-6').tabs({
                    fxFade: true,
                    fxSpeed: 'fast',
                    onClick: function() {
                        alert('onClick');
                    },
                    onHide: function() {
                        alert('onHide');
                    },
                    onShow: function() {
                        alert('onShow');
                    }
                });

            });
                       
                    
        </script>


<!-- Javascript popup Script -->

        <script language="javascript" type="text/javascript">

        function popitup(url) {
                newwindow=window.open(url,'name','height=450,width=450, scrollbars = yes, resizable = yes');
                if (window.focus) {newwindow.focus()}
                return false;
        }

</script>

<div id="content">
<a name="top"></a>

<h2 class='l2'>2009 Form 1040NR EZ Form 8843 Software Online with Instructions - International Student Taxes - F1 J1 Taxes - Includes Tax Treaty Credits, Exemptions, Deductions - Non Resident Tax Software </h2>
<form name ="visataxes" method="POST">
<!-- Here are the containers / Tabs -->

        <div id="container-1">
            <ul>
               
                <li><a href="#Form1040NR-EZ_Personal"><span>1. Personal</span></a></li>
                                <li><a href="#Form1040NR-EZ_Immigration"><span>2. Immigration</span></a></li>
             <li><a href="#Form1040NR-EZ_Forms"><span>3. Forms</span></a></li> 
                                <li><a href="#Form1040NR-EZ_Review_Submit"><span>4. Download Form 1040NR-EZ, Form 8843</span></a></li>
            </ul>


   <!--Tab 1 Body-->
            <div id="Form1040NR-EZ_Personal">

                                      <br>
                                        <table >
                                                <tr>
                                                <td> <b>Personal Information :</b></td>
                                                </tr>
                                                <tr>
                                                        <td>
                                                                <br>
                                                                First Name * :&nbsp;<input type="text" id = "fname" name="fname" onChange="cmb_name();">
                                                                &nbsp;&nbsp;&nbsp;
                                                                Middle Name :&nbsp;<input type="text" id = "mname" name="mname" onChange="cmb_name();">
                                                        </td>
                                                  
                                                 </tr>

                                                  <tr>
                                                         <td>

                                                                <br>
                                                                
                                                                Last Name * :&nbsp;<input type="text" id = "lname"  name ="lname" onChange="cmb_name();">
                                                        </td>
                                                </tr>

                        <tr>
                                                        <td>
                                                                <br>
                        Please select your Marital Status * : 
                                        <select name="filingstatus" id = "filingstatus" onchange="calcLine_1_2_9_13_15();" >
                                                <option value="single" selected="selected">Single </option>
                                                <option value="married" >Married </option>
                                        </select> 
<a href="https://www.visataxes.com/software/forms/help/marital_status.htm" onclick="return popitup('https://www.visataxes.com/software/forms/help/marital_status.htm')"
        >Help Me</a>
                                                </td>
                        </tr>
                                                <tr>
                                                        <td>
                                                                </br>
                                                                Social Security Number (SSN) * :&nbsp;<input type="text" id = "ssn_itin" name="ssn_itin"> <a href="https://www.visataxes.com/software/forms/help/ssn_itin.htm" onclick="return popitup('https://www.visataxes.com/software/forms/help/ssn_itin.htm')"
        >Help Me</a>
                                                        </td>
                                                </tr>
                                                <tr>
                                                        <td>
                                                                <br>
                                                                <br>
                                                                <b>Present United States Address :</b>
                                                        </td>
                                                </tr>
                                                <tr>
                                                        <td>
                                                                <br>
                                                                Street and Apartment / Home Number * :&nbsp;<input type="text" id = "us_street" name="us_street" onChange="cmb_usaddress1();">
                                                        </td>
                                                </tr>
                         <tr>
                                                        <td>
                                                                <br>
                                                                City * :&nbsp;<input type="text" id = "us_city" name="us_city" onChange="cmb_usaddress2();">
                                                        </td>
                                                </tr>
                                                        <tr>
                                                        <td>
                                                                <br>
                                                                State * :&nbsp;<input type="text" id = "us_state" name="us_state" onBlur="cmb_usaddress2();">
                                                        &nbsp;&nbsp;&nbsp;
                                                                Zip * :&nbsp;<input type="text" id = "us_zip" name="us_zip" onChange="cmb_usaddress2();">
                                                        </td>
                                                </tr>
                                                
                                                
                                                <tr>
                                                        <td>
                                                                <br><br>
                                                                <b>Foreign Address :</b>
                                                        </td>
                                                </tr>
                                                <tr>
                                                        <td>
                                                                <br>
                                                                Street and Apartment / Home Number * :&nbsp; <input type="text" id = "foreign_street" name="foreign_street" onChange="cmb_comb_foreignaddress();">
                                                        </td>
                                                </tr>
                                                <tr>
                                                        <td>        
                                                                <br>
                                                                City * :&nbsp; <input type="text" id = "foreign_city" name="foreign_city" onChange="cmb_comb_foreignaddress();">
                                                        </td>
                                                </tr>
                                                <tr>
                                                        <td>
                                                                <br>
                                                                State * :&nbsp;<input type="text" id = "foreign_state" name="foreign_state" onChange="cmb_comb_foreignaddress();">
                                                                        &nbsp;&nbsp;&nbsp;
                                                                Zip * :&nbsp;<input type="text" id = "foreign_zip" name="foreign_zip" onChange="cmb_comb_foreignaddress();">
                                                        </td>
                                                </tr>
                                                <!--
<tr>
                                                        <td>        
                                                                <br>
                                                                Foreign Country * :&nbsp; <select id="foreign_country_info">
                                                        </td>
                                                </tr> -->
                                                          <tr><td></br>Foreign Country of Citizenship * : &nbsp; <select id="resident_country_info"/> &nbsp;<a href="help/resident_country_tax_treaty_benefits.htm" onclick="return popitup('help/resident_country_tax_treaty_benefits.htm')"
        >Help Me</a>
</b></td>  </tr>
                                                                                                
                                                <tr>
                                                        <td>
                                                                <br><br>
                                                                <b>Mode of Payment :</b>
                                                        </td>
                                                </tr>
                                                
                                                <tr>
                                                        <td>
                                                                <br>
                                                                I want my IRS Tax Refund sent to my * :&nbsp;&nbsp;&nbsp;
                                                                <input type="radio" name="mail_irs_refund" value ="us" checked> US Address&nbsp;&nbsp;:&nbsp;
                                                                <input type="radio" name="mail_irs_refund" value ="foreign"> Foreign Address
                                                        </td>
                                                </tr>
                                                
                                                <tr>
                                                        <td>
                                                                <br>
                                                                I would like to pay the amount I owe, or get a refund from IRS by * :&nbsp;&nbsp;&nbsp;
                                                                <input type="radio" name="mode_payment" value ="direct" checked onclick="showDiv('bank_information');"> Direct Deposit&nbsp;&nbsp;:&nbsp;
                                                                <input type="radio" name="mode_payment" value ="postal" onclick="hideDiv('bank_information');"> Postal Mail
                                                                <a href="help/direct-deposit.htm" onclick="return popitup('help/direct-deposit.htm')">Help Me</a>

                                                        </td>
                                                </tr>
                                        </table>
                                        <div id="bank_information">
                                                <table>
                                                        <tr>
                                                                <td>
                                                                        <br><br>
                                                                        <b>Bank Information :</b>
<a href="help/bank_information.htm" onclick="return popitup('help/bank_information.htm')"
        >Help Me</a>
                                                        </td>
                                                        </tr>
                                                        
                                                        <tr>
                                                                <td>
                                                                        <br>
                                                                        Routing Number of your Bank Account * :&nbsp;<input type="text" id = "routing_no" name="routing_no"> 
                                                                </td>
                                                        </tr>
                                                        <tr>
                                                                <td>
                                                                        <br>
                                                                        Account Number of your Bank Account * :&nbsp;<input type="text" id = "acc_no" name="acc_no">  
                                                                </td>
                                                        </tr>        
                                                        <tr>
                                                                <td>
                                                                        <br>
                                                                        Type of Bank Account *:&nbsp;&nbsp;&nbsp;
                                                                        <input type="radio" name="bank_type" value ="checking" checked> Checking&nbsp;&nbsp;:&nbsp;
                                                                        <input type="radio" name="bank_type" value ="saving"> Savings
                                                                </td>
                                                        </tr>
                                                </table>
                                        </div>
                                                <table>
                                                <tr>
                                                        <td>
                                                                <br><br>
                                                                <b>Purpose of Visit :</b> 
                                                        </td>
                                                </tr>
                                                
                                                <tr>
                                                        <td>
                                                                <br>
                                                                What is the purpose of your stay in US * ?&nbsp;&nbsp;&nbsp;
                                                                <select name="purpose_of_visit" id="purpose_of_visit" onchange="showHideUnivInfo(); tax_treaty(); calcLine11();" >
                                                                        <option value="student" selected="selected" >Student Full Time (F, J, Q, M Visas )</option>
                                                                        <option value="teacher" >Teacher, Researcher, Trainee (J, Q Visas)</option>
                                                                        <option value="employment" >Employment (H1B, TN, L1, O Visas)</option>
                                                                        <option value="other" >Other</option>
                                                                </select> &nbsp;&nbsp;

                                                                <a href="help/who-should-file-form8843.htm" onclick="return popitup('help/who-should-file-form8843.htm')"
        >Important - Please Read</a>

                                                        </td>
                                                </tr>
                                        </table>
                   
<!-- Start of University Display Block -->
                                        
                                        <div id="university_information">
                                                <table>
                                                        <tr>
                                                                <td>
                                                                        <br><br>
                                                                        <b>University or Research Institution * :</b>
                                                                </td>
                                                        </tr>
                                                        <tr>
                                                                <td>
                                                                        <br>
                                                                        Name of your University or Research Institution * :&nbsp;<input type="text" id = "university_name" name="university_name">
                                                                </td>
                                                        </tr>
                                                        <tr>
                                                                <td>
                                                                        <br>
                                                                        Street Address * :&nbsp;<input type="text" id = "university_street" name="university_street" onChange="cmb_universityaddress();">
                                                                </td>
                                                        </tr>
                                                        <tr>
                                                                <td>
                                                                        <br>
                                                                        City * :&nbsp;<input type="text" id = "university_city" name="university_city" onChange="cmb_universityaddress();">
                                                                </td>
                                                        </tr>
<tr>
                                                                <td>
                                                                        <br>
                                                                        State * :&nbsp;<input type="text" id = "university_state" name="university_state" onBlur="cmb_universityaddress();">&nbsp;&nbsp;&nbsp;Zip :&nbsp;<input type="text" id = "university_zip" name="university_zip" onChange="cmb_universityaddress();">

                                                                        
                                                                </td>
                                                        </tr>
                                                        
                                                        <tr>
                                                                <td>
                                                                        <br>
                                                                        Phone *:&nbsp;<input type="text" id = "university_phone" name="university_phone" onChange="cmb_universityaddress();">
                                                                </td>
                                                        </tr>
                                                        <tr>
                                                                <td>
                                                                        <br>
                                                                        Name of your Program or Department Director * : &nbsp;<input type="text" id = "director_name" name="director_name"> <a href="help/program_director.htm" onclick="return popitup('help/program_director.htm')"
        >Help Me</a>
                                        
                                                                </td>
                                                        </tr>
                                                </table>
                                        </div>
                                        
<!-- End of University Display Block -->
                                        
                                        <table>
                                                <tr>
                                                        <td>
                                                                <br>
                                                                Explain your purpose of your stay in United States * : <a href="https://www.visataxes.com/software/forms/help/purpose_of_stay.htm" onclick="return popitup('https://www.visataxes.com/software/forms/help/purpose_of_stay.htm')"
        >Help Me</a>
                                                <br>
                                <br>
                                                
                                                        <input type="text" name="purpose_stay1" id="purpose_stay1" maxlength="70" size="70">
                            <br>
                            
                            <input type="text" name="purpose_stay2" id="purpose_stay2" maxlength="70" size="70">
                            </td>
                                                </tr>
                                        </table>
<br />
<br />


<br>
Click <a href="#top">Go To Top</a>, and Complete the 'Immigration' Tab.
<br>


            </div>
                        <!--Tab 2 Body-->
                        <div id="Form1040NR-EZ_Immigration"> </br>
                             <table>
                           
                            
              <tr> <td> </br><b>Immigration Information :</b>   </td>  </tr>
                             

                                                                       <!--<tr> <td> </br> <b>Country Information :</b></td>  </tr> -->
                                                                                                       
                                                                                                                                           
                                                                                                            
                                                                
                                                                        <!-- <tr> <td> </br>
                                                                        Country that issued your passport * : &nbsp; <select id="passport_country_info"/> </td>  </tr> -->
                                                                    
                                                                        <tr> <td> </br>Enter your passport number * :&nbsp;<input type="text" id = "passport_number" name="passport_number"></td>  </tr>
                                                                        
                                                                         <!-- <tr> <td> </br>Country of Citizenship in 2009* :&nbsp;<select id="citizenship_country_info"/></td>  </tr> -->
                                                        

                                                                    
                                          <!--<tr><td></br>Resident country for Tax Treaty Calculation * : &nbsp; <select id="resident_country_info"/> &nbsp;<a href="help/resident_country_tax_treaty_benefits.htm" onclick="return popitup('help/resident_country_tax_treaty_benefits.htm')"
        >Help Me</a>
</b></td>  </tr> -->

                                                        

                                                                       <tr><td></br><b>Type of Visa and Dates Information :</b></td>  </tr>
     
     <tr><td></br>Date you first entered the United States * :
    <input name="date_entry" id="date_entry" class="date_entry" onChange="cmb_entry_visadate();"/> &nbsp; mm/dd/yyyy    (Example: Enter Jan 10, 2005 as 01/10/2005)
         </td>  </tr>
    <tr><td></br>
     Type of Visa when you first entered United States * :
     <input name="visa_entry" id="visa_entry" class="visa_entry" onchange="cmb_entry_visadate();" /></td>  </tr>
  </table>
  <table>

     <tr>
     <td>
</br>
     <b>Year</b>
     </td>

     <td>
</br>
   <b>  &nbsp;&nbsp;Visa Type</b>
     </td>

     <td>
</br>
     <b>  &nbsp;&nbsp;Days in US</b>
     </td>
     
          <td>
</br>
     <b>  &nbsp;&nbsp;Claim Tax Treaty</b>
     </td>
</tr>
<tr>
     <td>
     2003
     </td>

     <td>
     &nbsp;&nbsp;<input  type="text" id="visatype_yr7" name="visatype_yr7" size = "12" />
     </td>

     <td>
      &nbsp;&nbsp;<input type="text" id="days_yr7" name="days_yr7" size="12" onchange="tax_treaty();">
     </td>
     
     <td>
&nbsp;&nbsp;<select name="taxtreaty_yr7" id = "taxtreaty_yr7"  onchange="tax_treaty();">
                                                <option value="no" selected="selected">No </option>
                                                <option value="yes" >Yes</option>
                                        </select> 
     
     </td>
</tr>

  <tr>
     <td>
     2004
     </td>

     <td>
     &nbsp;&nbsp;<input type="text" id="visatype_yr6" name="visatype_yr6"  size = "12" />
     </td>

     <td>
      &nbsp;&nbsp;<input type="text" id="days_yr6" name="days_yr6" size="12" onchange="tax_treaty();">
     </td>
     
       <td>
&nbsp;&nbsp;<select name="taxtreaty_yr6" id = "taxtreaty_yr6"  onchange="tax_treaty();">
                                                <option value="no" selected="selected">No </option>
                                                <option value="yes" >Yes</option>
                                        </select> 
     
     </td>
</tr>
  <tr>
     <td>
     2005
     </td>

     <td>
     &nbsp;&nbsp;<input type="text"  id="visatype_yr5" name="visatype_yr5" size = "12" />
     </td>

     <td>
      &nbsp;&nbsp;<input type="text" id="days_yr5" name="days_yr5" size="12" onchange="tax_treaty();">
     </td>
     
       <td>
&nbsp;&nbsp;<select name="taxtreaty_yr5" id = "taxtreaty_yr5"  onchange="tax_treaty();">
                                                <option value="no" selected="selected">No </option>
                                                <option value="yes" >Yes</option>
                                        </select> 
     
     </td>
</tr>
  <tr>
     <td>
     2006
     </td>

     <td>
     &nbsp;&nbsp;<input type="text" id="visatype_yr4" name="visatype_yr4"  size = "12" />
     </td>

     <td>
      &nbsp;&nbsp;<input type="text" id="days_yr4" name="days_yr4" size="12" onchange="tax_treaty();">
     </td>
     
       <td>
&nbsp;&nbsp;<select name="taxtreaty_yr4" id = "taxtreaty_yr4"  onchange="tax_treaty();">
                                                <option value="no" selected="selected">No </option>
                                                <option value="yes" >Yes</option>
                                        </select> 
     
     </td>
</tr>
  <tr>
     <td>
     2007
     </td>

     <td>
     &nbsp;&nbsp;<input type="text" id="visatype_yr3" name="visatype_yr3"  size = "12" />
     </td>

     <td>
      &nbsp;&nbsp;<input type="text" id="days_yr3" name="days_yr3" size="12" onchange="tax_treaty();">
     </td>
     
       <td>
&nbsp;&nbsp;<select name="taxtreaty_yr3" id = "taxtreaty_yr3"  onchange="tax_treaty();">
                                                <option value="no" selected="selected">No </option>
                                                <option value="yes" >Yes</option>
                                        </select> 
     
     </td>
</tr>
  <tr>
     <td>
     2008
     </td>

     <td>
     &nbsp;&nbsp;<input type="text" id="visatype_yr2"  name="visatype_yr2" size = "12" />
     </td>

     <td>
      &nbsp;&nbsp;<input type="text" id="days_yr2" name="days_yr2" size="12" onchange="tax_treaty();">
     </td>
     
       <td>
&nbsp;&nbsp;<select name="taxtreaty_yr2" id = "taxtreaty_yr2"  onchange="tax_treaty();">
                                                <option value="no" selected="selected">No </option>
                                                <option value="yes" >Yes</option>
                                        </select> 
     
     </td>
</tr>
 <tr>
     <td>
     2009
     </td>

     <td>
     &nbsp;&nbsp;<input type="text" id="visatype_yr_current" name="visatype_yr_current"  size = "12" onchange="cmb_current_visadate();" />
     </td>

     <td>
      &nbsp;&nbsp;<input type="text" id="days_yr_current" name="days_yr_current" size="12">
     </td>
     
       <td>
&nbsp;&nbsp;<select name="taxtreaty_yr_current" id = "taxtreaty_yr_current"  >
                                                <option value="no" selected="selected">No </option>
                                                <option value="yes" >Yes</option>
                                        </select> 
     
     </td>
</tr>
</table>
    <input type="hidden" name="total_months" id ="total_months">
          <br />
     <br />
     Date when your current Visa was issued * :
     <input name="date_visa_issued" id="date_visa_issued" class="date_visa_issued" onChange="cmb_current_visadate();"/>  &nbsp; mm/dd/yyyy    (Example: Enter Jan 10, 2005 as 01/10/2005)
     <br />
     <br />
     
     <b>Dates you entered and departed United States in 2009 :</b>
     
    

<a href="https://www.visataxes.com/software/forms/help/dates_entry_departure.htm" onclick="return popitup('https://www.visataxes.com/software/forms/help/dates_entry_departure.htm')"
        >Help Me</a>         &nbsp;*(Skip this section, if you are from Canada, Mexico)
<br><br>
Example: If you Entered US in Jan 30, 2009 and Departed US Nov 15, 2009, mention Entry date as 
01 30 09 and Departure date as 11 15 09 in MM DD YY format.

<br />
<br />
                      
     <table width="400px">
	 <tr>
		<td align="center">
           <u>2009 Entry Dates</u>
		</td>
		<td align="center">
		   <u>2009 Departure Dates</u>
		</td>
	 </tr>
	 <tr>
		<td>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; MM   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; DD &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; YY 
		</td>
		<td>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; MM   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; DD &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; YY 
		</td>
                    
     </tr>                          
     <tr>
           
        <td align="center">
			<input type="text" id="entrymonth1" name="entrymonth1"  size = "2" />
			<input type="text" id="entrydate1" name="entrydate1"  size = "2" />
			<input type="text" id="entryyear1" name="entryyear1"  size = "2" />
		</td>           
        <td align="center">
			<input type="text" id="departuremonth1" name="departuremonth1"  size = "2" />
			<input type="text" id="departuredate1" name="departuredate1"  size = "2" />
			<input type="text" id="departureyear1" name="departureyear1"  size = "2" />
		</td>  
           
     </tr>
     <tr align="center">
           
        <td>
			<input type="text" id="entrymonth2" name="entrymonth2"  size = "2" />
			<input type="text" id="entrydate2" name="entrydate2"  size = "2" />
			<input type="text" id="entryyear2" name="entryyear2"  size = "2" />
		</td>           
		<td align="center">
			<input type="text" id="departuremonth2" name="departuremonth2"  size = "2" />
			<input type="text" id="departuredate2" name="departuredate2"  size = "2" />
			<input type="text" id="departureyear2" name="departureyear2"  size = "2" />
		</td>  
           
     </tr>
	 <tr align="center">
		<td>
			<input type="text" id="entrymonth3" name="entrymonth3"  size = "2" />
			<input type="text" id="entrydate3" name="entrydate3"  size = "2" />
			<input type="text" id="entryyear3" name="entryyear3"  size = "2" />
		</td>           
        <td align="center">
			<input type="text" id="departuremonth3" name="departuremonth3"  size = "2" />
			<input type="text" id="departuredate3" name="departuredate3"  size = "2" />
			<input type="text" id="departureyear3" name="departureyear3"  size = "2" />
		</td>  
    </tr>
    <tr align="center">
        <td>
			<input type="text" id="entrymonth4" name="entrymonth4"  size = "2" />
			<input type="text" id="entrydate4" name="entrydate4"  size = "2" />
			<input type="text" id="entryyear4" name="entryyear4"  size = "2" />
		</td>           
        <td align="center">
			<input type="text" id="departuremonth4" name="departuremonth4"  size = "2" />
			<input type="text" id="departuredate4" name="departuredate4"  size = "2" />
			<input type="text" id="departureyear4" name="departureyear4"  size = "2" />
		</td>  
    </tr>
    <tr>
        <td align="center">
			<input type="text" id="entrymonth5" name="entrymonth5"  size = "2" />
			<input type="text" id="entrydate5" name="entrydate5"  size = "2" />
			<input type="text" id="entryyear5" name="entryyear5"  size = "2" />
		</td>           
        <td align="center">
			<input type="text" id="departuremonth5" name="departuremonth5"  size = "2" />
			<input type="text" id="departuredate5" name="departuredate5"  size = "2" />
			<input type="text" id="departureyear5" name="departureyear5"  size = "2" />
		</td>  
     </tr>
           
    </table>
     
    
     <br><br>
    
     <!-- <input type="text" name="entry_dates_1" id="entry_dates_1" maxlength="70" size="70">
      <br />
     <input type="text" name="entry_dates_2" id="entry_dates_2" maxlength="70" size="70">
      <br />
     
     <input type="text" name="entry_dates_3" id="entry_dates_3" maxlength="70" size="70">
      <br />
  
     <input type="text" name="entry_dates_4" id="entry_dates_4" maxlength="70" size="70">
     <br />
     <br /> -->
     
     Have you filed a United States tax return in 2008 * ?
     <select name="prev_year_tax_filing" id="prev_year_tax_filing" onchange="showHideUinvInfo();">
         <option value="Yes" selected="selected">Yes</option>
         <option value="No">No</option>
     </select>
     <br />
     <br />
 
<div id = "prev_tax_form">  
Name of the Tax Forms filed in the Year 2008 * : 
<input type="text" name="tax_forms" id="tax_forms" onChange="cmbcomb_taxforms();" /> 
<a href="https://www.visataxes.com/software/forms/help/prev_year_tax_forms.htm" onclick="return popitup('https://www.visataxes.com/software/forms/help/prev_year_tax_forms.htm')">Help Me</a></br>
</div>


<br />
<br />

   Have you applied for a Green Card ?
     <select name="gc" id="gc" >
         <option value="Yes" >Yes</option>
         <option value="No" selected="selected">No</option>
     </select>
     <br />
     <br />
     <br />
Click <a href="#top">Go To Top</a>, and Complete the 'Forms' Tab.
                                
            </div>
                        <!--Tab 3 Body-->
                        <div id="Form1040NR-EZ_Forms"> <br>                                  
        
                                <b>Forms:</b>  
                                
                                
                                Do you receive Form W-2? 
<a href="https://www.visataxes.com/software/forms/help/FormW2_wages_salary.htm" onclick="return popitup('https://www.visataxes.com/software/forms/help/FormW2_wages_salary.htm')">Help Me</a>
                                <br>
                                <input type="radio" id ="formw-2radio_1" name="formw-2radio" value ="1" onclick="showFormW2();"> Yes<br>
                                
                                <input type="radio" id ="formw-2radio_2" name="formw-2radio"  value = "0" checked onclick="hideFormW2();" > No<br> 
                                <input type="hidden" id="formW-2Counter" value="0">
                                <div id="formw-2">
                                </div>
                                <br>
                                <br>
                                
                                
                                
                                Do you receive Form 1042-S? <a href="https://www.visataxes.com/software/forms/help/Form1042S_Scholarship_Fellowship.htm" onclick="return popitup('https://www.visataxes.com/software/forms/help/Form1042S_Scholarship_Fellowship.htm')">Help Me</a> <br> 
                                <input type="radio" id="form1042-Sradio_1" name="form1042-Sradio" value ="1" onclick="showForm1042S();"> Yes<br>
                                <input type="radio" id="form1042-Sradio_2" name="form1042-Sradio" value ="0" checked onclick="hideForm1042S();" > No<br> 
                                <input type="hidden" id="form1042-SCounter" value="0">
                                <div id="form1042-S">
                                </div>
                                <br>
                                <br>
                                
                                
                                
                                Do you receive Form 1099-G? <a href="https://www.visataxes.com/software/forms/help/Form1099G_State_Tax_Refund.htm" onclick="return popitup('https://www.visataxes.com/software/forms/help/Form1099G_State_Tax_Refund.htm')">Help Me</a><br> 
                                <input type="radio" id="form1099-Gradio_1" name="form1099-Gradio" value ="1" onclick="showForm1099G();"> Yes<br>
                                <input type="radio" id="form1099-Gradio_2" name="form1099-Gradio" value ="0" checked onclick="hideForm1099G();" > No<br> 
                                <input type="hidden" id="form1099-GCounter" value="0">
                                <div id="form1099-G">
                                </div>
                                <br>
                                <br>
                        
                                
                                
                                
                                Did you receive Form 1098-E ? <a href="https://www.visataxes.com/software/forms/help/Form1098E_Student_Loan_Interest.htm" onclick="return popitup('https://www.visataxes.com/software/forms/help/Form1098E_Student_Loan_Interest.htm')">Help Me</a><br>                                 <input type="radio" id="form1098-Eradio_1" name="form1098-Eradio" value ="1" onclick="showDiv('form1098-EDiv');"> Yes<br>
                                <input type="radio" id="form1098-Eradio_2" name="form1098-Eradio" value ="0" checked onclick="hideDivform1098_E();" > No<br> 
                                <div id="form1098-EDiv" style="display: none;">
                                        Please enter the amount shown in Box 1 of Form 1098-E :
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        $<input type ="text" id = "1098ebox1" name="1098ebox1"  onchange="calcLine9_10();">
                                        
                                </div>
                                


                                <br>
                                <br>
                                
Click <a href="#top">Go To Top</a>, and Download the forms from 'Download Form 1040NR-EZ' Tab.
<br>
                               
<br>
                                <table>
                     <tr>
                         <td><tr><tr>
                      <b>Tax Software Computation - Just Display for your peace of mind. </b>
                        </td>
                      </tr>
 <tr><td></td></tr>
                                       <tr>
                                                <td>
                                               Filing Status :
                           
                                                        
                                                </td>
                                                <td>
                                                        <input type ="text" id = "filingstatus_value" name="filingstatus" value = "single" readonly>
                                                </td>
                                        </tr>
                                      <!--   <tr>
                                                <td>
                                                        Foreign Country :
                                                </td>
                                                <td>
                                                        <input type ="text" id = "foreigncountry" name="foreigncountry"  readonly>
                                                </td>
                                        </tr>

                       <tr>
                                                <td>
                                                        Passport Country :
                                                </td>
                                                <td>
                                                        <input type ="text" id = "passportcountry" name="passportcountry"  readonly>
                                                </td>
                                        </tr>
     <tr>
                                                <td>
                                                        Citizen Country :
                                                </td>
                                                <td>
                                                        <input type ="text" id = "citizen_country" name="citizen_country" readonly>
                                                </td>
                                        </tr> -->
  <tr>
                                                <td>
                                                        Foreign Country of Citizenship :
                                                </td>
                                                <td>
                                                        <input type ="text" id = "residentcountry" name="residentcountry"  readonly>
                                                </td>
                                        </tr>                                        <tr>
                                                <td>
                                                        Line 3: Wages, Salaries, Tips etc:
                                                </td>
                                                <td>
                                                        <input type ="text" id = "line3" name="line3" value = "0" readonly>
                                                </td>
                                        </tr>
                                        <tr>
                                                <td>
                                                        Line 4: Taxable Refunds, Credits, Offsets of State and Local Income Taxes:
                                                </td>
                                                <td>
                                                        <input type ="text" id = "line4" name="line4" value = "0" readonly>
                                                </td>
                                        </tr>
                                        <tr>
                                                <td>
                                                        Line 5: Scholarship and Fellowship Grants. Attach Explanation:
                                                </td>
                                                <td>
                                                        <input type ="text" id = "line5" name="line5" value = "0" readonly>
                                                </td>
                                        </tr>
                                        <tr>
                                                <td>
                                                        Line 6: Total Wages and Scholarships Exempted by a treaty from Page 2, Item J:
                                                </td>
                                                <td>
                                                        <input type ="text" id = "line6" name="line6" value = "0" readonly>
                                                </td>
                                        </tr>
                                        <tr>
                                                <td>
                                                        Line 7:
                                                </td>
                                                <td>
                                                        <input type ="text" id = "line7" name="line7" value = "0" readonly>
                                                </td>
                                        </tr>
                                        <tr>
                                                <td>
                                                        Line 8: Scholarship and Fellowship Grants Excluded :
                                                </td>
                                                <td>
                                                        <input type ="text" id = "line8" name="line8" value = "0" readonly>
                                                </td>
                                        </tr>
                                        <tr>
                                                <td>
                                                        Line 9: Student Loan Interest Deduction :
                                                </td>
                                                <td>
                                                        <input type ="text" id = "line9" name="line9" value = "0" readonly>
                                                </td>
                                        </tr>
                                        <tr>
                                                <td>
                                                        Line 10: Adjusted Gross Income: $Line10 :
                                                </td>
                                                <td>
                                                        <input type ="text" id = "line10" name="line10" value = "0" readonly>
                                                </td>
                                        </tr><tr>
                                                <td>
                                                        Line 11: Itemized Deductions :                                                </td>
                                                <td>
                                                        <input type ="text" id = "line11" name="line11" value = "0" readonly>
                                                </td>
                                        </tr>
                                        <tr>
                                                <td>
                                                        Line 12:
                                                </td>
                                                <td>
                                                        <input type ="text" id = "line12" name="line12" value = "0" readonly>
                                                </td>
                                        </tr>
                                        <tr>
                                                <td>
                                                        Line 13: Exemption Deduction:
                                                </td>
                                                <td>
                                                        <input type ="text" id = "line13" name="line13" value = "3650" readonly>
                                                </td>
                                        </tr>
                                        <tr>
                                                <td>
                                                        Line 14: Taxable Income . Subtract Line 13 from Line 12:
                                                </td>
                                                <td>
                                                        <input type ="text" id = "line14" name="line14" value = "0" readonly>
                                                </td>
                                        </tr>
                                        <tr>
                                                <td>
                                                        Line 15 : Tax . Find your Tax from the Tax Table:
                                                </td>
                                                <td>
                                                        <input type ="text" id = "line15" name="line15" value = "0" readonly>
                                                </td>
                                        </tr>

                                        <tr>
                                                <td>
                                                        Line 17: Total Tax:
                                                </td>
                                                <td>
                                                        <input type ="text" id = "line17" name="line17" value = "0" readonly>
                                                </td>
                                        </tr>
                                        <tr>
                                                <td>
                                                        Line 18: Federal Income Tax withheld :
                                                </td>
                                                <td>
                                                        <input type ="text" id="line18" name="line18" value = "0" readonly>
                                                </td>
                                        </tr>
                                        <tr>
                                                <td>
                                                        Line 21: Total Payments:
                                                </td>
                                                <td>
                                                        <input type ="text" id="line21" name="line21" value = "0" readonly>
                                                </td>
                                        </tr>
                                        <tr>
                                                <td>
                                                        Line 22: Amount Overpaid - Your Refund from the IRS :
                                                </td>
                                                <td>
                                                        <input type ="text" id="line22_1" value = "0" readonly>
                                                </td>
                                        </tr>
                                        <tr>
                                                <td>
                                                        Line 25: Amount you owe - You need to pay the IRS :
                                                </td>
                                                <td>
                                                        <input type ="text" id="line25_1" value = "0" readonly>
                                                </td>
                                                
                                                
                                        </tr>
                                        <tr>
                                        
                                        <td>
                                                        Tax Treaty Article Number :
                                                </td>
                                                <td>
                                                        <input type ="text" id = "tarticle" name="tarticle"  readonly>
                                                </td>

                                        
                                        </tr>
                                        <tr>
                                                <td>
Line J : Tax Treaty on Wages for Students :                                                        
                                                </td>
                                                <td>
                                                        <textarea  id="linej" name="linej" rows="2" cols="60" readonly>
                                                          </textarea>
                                                      
                                                </td>
                                                                                                 
                                        </tr>
                                                                       </table>
                                                                             <br>
                                                                             <br>
                                                                             Click <a href="#top">Go To Top</a>, and Download the forms from 'Download Form 1040NR-EZ' Tab.
                                                                     
                                 <input type ="hidden" id="comb_fname_mname" name="comb_fname_mname" >
                                  <input type ="hidden" id="complete_name" name="complete_name" >

                                                                <input type ="hidden" id="comb_us_address1" name="comb_us_address1" >
                                                                <input type ="hidden" id="comb_us_address2" name="comb_us_address2" >
                                                                <input type ="hidden" id="comb_us_address" name="comb_us_address" >

                                                                <input type ="hidden" id="comb_foreign_address_street" name="comb_foreign_address_street" >
                                                                
                                                                <input type ="hidden" id="comb_foreign_address" name="comb_foreign_address" >
                                                                <input type ="hidden" id="comb_current_visa_date" name="comb_current_visa_date">
                                                                <input type ="hidden" id="comb_entry_visa_date" name="comb_entry_visa_date">
                                                                <input type ="hidden" id="comb_tax_forms" name="comb_tax_forms">
                                                                <input type ="hidden" id="comb_university_address" name="comb_university_address" >

<br />
<br />


                                
            </div>
                        <!--Tab 4 Body-->
                        <div id="Form1040NR-EZ_Review_Submit"> <br>


                <table>

                <tr>
                <td>
                
                <b>Review and Download - 2009 Form 1040NR-EZ and Form 8843</b>
                </td>
                </tr>

                     <tr>
                                 <td><br>
                                 Amount Overpaid - Your Refund from the IRS : $
                                  <input type ="text" id="line22" name="line22" value = "0" readonly>

                                 </td>
                                 
<br>
                                 </tr> 
<tr></tr>
                                 <tr> 
                 
                                 <td><br>
               
                                 Amount you owe - You need to pay the IRS : $
                                  <input type ="text" id="line25" name="line25" value = "0" readonly>

                        
                                 </tr>


<tr><td height="64" align="left">
                         <input type="checkbox" name="chkAccept" id="chkAccept" checked ="checked" disabled="disabled">&nbsp;I accept the <a href="https://www.visataxes.com/terms_of_service.php" onclick="return popitup('http://www.visataxes.com/terms_of_service.php')" 
        >Terms and Conditions</a> and the <a href="https://www.visataxes.com/privacy.php" onclick="return popitup('https://www.visataxes.com/privacy.php')" 
        >Privacy Policy</a>  at VisaTaxes.com</td>            
               
                                        </tr>
                                                                                <tr>
                                                                                        <td align="left">
                                                                                                        <INPUT TYPE="Image" src="imgs/Download_Form_1040NR_EZ.gif" ALT="Submit button" onclick="changeAction(0);">
                                                                                                        <INPUT TYPE="IMAGE" src="imgs/Download_Form_8843.gif" ALT="Submit button" onclick="changeAction(1);">
                                                                                        </td>
                                        </tr>
<tr>
<td>
<br>
<b>Important:</b><br><br>

<u>Do not forget to Sign and Date</u> the downloaded Tax Forms.
</td>
</tr>
<tr>
<td>
<br>
<b>Mailing Address - Form 1040NR-EZ and Form 8843:</b><br><br>

The Department of Treasury,<br>
Internal Revenue Service Center,<br>
Austin TX 73301-0215<br>
</td>
</tr>


                                </table>
            </div>
        </div>
        </form>

<br>
<b>Donate $25</b> - if you found the Tax Software helpful, by clicking the button below.<br>
<form action="https://checkout.google.com/api/checkout/v2/checkoutForm/Merchant/728063127949155" target="_blank" id="BB_BuyButtonForm" method="post" name="BB_BuyButtonForm">
    <input name="item_name_1" type="hidden" value="Donate $25 - Tax Software"/>
    <input name="item_description_1" type="hidden" value="Donate $25 - Tax Software to file Form 1040NR-EZ and Form 8843"/>
    <input name="item_quantity_1" type="hidden" value="1"/>
    <input name="item_price_1" type="hidden" value="25.0"/>
    <input name="item_currency_1" type="hidden" value="USD"/>
    <input name="_charset_" type="hidden" value="utf-8"/>
    <input alt="" src="https://checkout.google.com/buttons/buy.gif?merchant_id=728063127949155&amp;w=117&amp;h=48&amp;style=white&amp;variant=text&amp;loc=en_US" type="image"/>
</form>

<?php require_once("../../footer.php")
?>

</body>
</html>
