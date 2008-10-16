//This function responsiple for adding new form W-2

function addFromW2()

{

	//The limit of the number of forms is 3

	if (  document.getElementById('formW-2Counter').value < 3 )

	{

		var ni = document.getElementById('formw-2'); // Get the main Div

		var formW2Counter = document.getElementById('formW-2Counter'); //Get numer of the forms

		formW2Counter.value = (formW2Counter.value -1)+ 2; // Increment number of forms

		var divId = "formw-2"+formW2Counter.value; //initialize form id

		var newdiv = document.createElement('div'); // create the new div

		newdiv.setAttribute("id",divId); // give it the id

		

		//Here is the inner html of the div



		var output = "<table width=\"800\">"

			+"<tr bgcolor=\"#D3D3D3\">"

				+"<td align = \"left\">"

					+"<u><b>Form W-2</b></u>"

				+"</td>"

				+"<td align = \"center\">"

					+"&nbsp;"

				+"</td>"

				+"<td align = \"center\">"

					+"<a href=\"javascript:;\" onclick=\"addFromW2()\">Add Another Form W-2</a>"

				+"</td>"

			+"</tr>"

			

			+"<tr>"

				+"<td>"

					+"Please look at your Form W-2 and enter the information."

				+"<td>"

			+"</tr>"

			

			+"<tr>"

				+"<td>"

					+"Name of the Employer:"

				+"</td>"

				+"<td>"

					+"&nbsp;&nbsp;<input type=\"text\" name = \"fname\">"

				+"</td>"

			+"</tr>"

			

			+"<tr>"

				+"<td>"

					+"Box 1:"

				+"</td>"

				+"<td>"

					+"$<input type=\"text\" name = \"w2box1\"   onchange=\"calcLine3()\">"

				+"</td>"

			+"</tr>"

			

			+"<tr>"

				+"<td>"

					+"Box 2:"

				+"</td>"

				+"<td>"

					+"$<input type=\"text\" name = \"w2box2\" onchange=\"calcLine18()\">"

				+"</td>"

			+"</tr>"

			

			+"<tr>"

				+"<td>"

					+"Box 8:"

				+"</td>"

				+"<td>"

					+"$<input type=\"text\" name = \"w2box8\"  onchange=\"calcLine3()\">"

				+"</td>"

			+"</tr>"

			

			+"<tr>"

				+"<td>"

					+"Box 17:"

				+"</td>"

				+"<td>"

					+"$<input type=\"text\" name = \"w2box17\" onchange=\"calcLine11()\">"

				+"</td>"

			+"</tr>"

			

			+"<tr>"

				+"<td>"

					+"Box 19:"

				+"</td>"

				+"<td>"

					+"$<input type=\"text\" name = \"w2box19\" onchange=\"calcLine11()\">"

				+"</td>"

			+"</tr>"

			

			+"<tr>"

				+"<td>"

					+"<a href=\"javascript:;\" onclick=\"removeFromW2(\'"+divId+"\')\">Remove Form W-2</a>"

				+"</td>"

			+"</tr>"

		+"</table>";

		newdiv.innerHTML = output;

		ni.appendChild(newdiv); // append this div to the main div

	}

	else{

		alert("The Tax Software only supports a maximum of Three W-2 Forms.");

	}

}



//This function responsiple for removing a Form W-2



	

function removeFromW2(divId) // Remove form w-2

{

	document.getElementById('formW-2Counter').value = document.getElementById('formW-2Counter').value - 1; //decrement numer of created forms

	var mainDiv = document.getElementById('formw-2'); // The main div

 	var oldDiv = document.getElementById(divId); //the div which will be removed

	mainDiv.removeChild(oldDiv); //Removing

	if ( document.getElementById('formW-2Counter').value == 0 ) //make the No choice in the radio button checked in case that this is the last form

		document.getElementById('formw-2radio_2').checked = true;

		

	calcLine3();

	calcLine18();

	calcLine11();	

	

}



function hideFormW2(){ //Hide the main div of form w-2

	document.getElementById('formw-2').innerHTML ='';

	document.getElementById('formW-2Counter').value = 0;

	calcLine3();

	calcLine18();

	calcLine11();

}



function showFormW2(){ //Show the main div of form w-2 and also show a new form w-2

	document.getElementById('formw-2').style.display = 'block';

	if ( document.getElementById('formW-2Counter').value == 0 ) 

		addFromW2();

}







//This function responsiple for adding new Form 1042-S

function addFrom1042S()

{

		//The limit of the number of forms is 3

	if (  document.getElementById('form1042-SCounter').value < 3 )

	{

		var ni = document.getElementById('form1042-S');// Get the main Div

		var form1042SCounter = document.getElementById('form1042-SCounter'); //Get numer of the forms

		form1042SCounter.value = (form1042SCounter.value -1)+ 2;// Increment number of forms

		var divId = "form1042-S"+form1042SCounter.value;

		var newdiv = document.createElement('div');

		newdiv.setAttribute("id",divId);

		

		//Here is the inner html of the div

		var output = "<table width=\"800\">"

			+"<tr bgcolor=\"#D3D3D3\">"

				+"<td align = \"left\">"

					+"<u><b>Form 1042-S</b></u>"

				+"</td>"

				+"<td align = \"center\">"

					+"&nbsp;"

				+"</td>"

				+"<td align = \"center\">"

					+"<a href=\"javascript:;\" onclick=\"addFrom1042S()\">Add Another Form 1042-S</a>"

				+"</td>"

			+"</tr>"

			

			+"<tr>"

				+"<td>"

					+"Please look at your Form 1042-S and enter the information."

				+"<td>"

			+"</tr>"

			

			+"<tr>"

				+"<td>"

					+"Name of the Institution:"

				+"</td>"

				+"<td>"

					+"&nbsp;&nbsp;<input type=\"text\" name = \"1042sinstName\">"

				+"</td>"

			+"</tr>"

			

			+"<tr>"

				+"<td>"

					+"Box 2:"

				+"</td>"

				+"<td>"

					+"$<input type=\"text\" name = \"1042sbox2\"   onchange=\"calcLine5()\">"

				+"</td>"

			+"</tr>"

			

			+"<tr>"

				+"<td>"

					+"Box 7:"

				+"</td>"

				+"<td>"

					+"$<input type=\"text\" name = \"1042sbox7\" onchange=\"calcLine18()\">"

				+"</td>"

			+"</tr>"

			

			+"<tr>"

				+"<td>"

					+"<a href=\"javascript:;\" onclick=\"removeFrom1042S(\'"+divId+"\')\">Remove Form 1042-S</a>"

				+"</td>"

			+"</tr>"

		+"</table>";

		newdiv.innerHTML = output;

		ni.appendChild(newdiv);

	}

	else{

		alert("The Tax Software only supports a maximum of Three 1042-S Forms.");

	}

}

//This function responsiple for removing Form W-2

function removeFrom1042S(divId)

{

	document.getElementById('form1042-SCounter').value = document.getElementById('form1042-SCounter').value - 1;//decrement the counter of the number of 1042-S forms

	var mainDiv = document.getElementById('form1042-S'); //Get the main div of form1042-S

	var oldDiv = document.getElementById(divId);

	mainDiv.removeChild(oldDiv);

	if ( document.getElementById('form1042-SCounter').value == 0 )

		document.getElementById('form1042-Sradio_2').checked = true;



	calcLine5();

	calcLine18();

}

function hideForm1042S(){

	document.getElementById('form1042-S').innerHTML ='';

	document.getElementById('form1042-SCounter').value = 0;

	

	calcLine5();

	calcLine18();

}


function showForm1042S(){

	document.getElementById('form1042-S').style.display = 'block';

	if ( document.getElementById('form1042-SCounter').value == 0 ) 

		addFrom1042S();

}

//This function responsiple for adding new Form 1099-G

function addFrom1099G()

{

		//The limit of the number of forms is 3

	if (  document.getElementById('form1099-GCounter').value < 3 )

	{

		var ni = document.getElementById('form1099-G');// Get the main Div

		var formW2Counter = document.getElementById('form1099-GCounter'); //Get numer of the forms

		formW2Counter.value = (formW2Counter.value -1)+ 2;// Increment number of forms

		var divId = "form1099-G"+formW2Counter.value;

		var newdiv = document.createElement('div');

		newdiv.setAttribute("id",divId);

		

		//Here is the inner html of the div

		var output = "<table width=\"800\">"

			+"<tr bgcolor=\"#D3D3D3\">"

				+"<td align = \"left\">"

					+"<u><b>Form 1099-G</b></u>"

				+"</td>"

				+"<td align = \"center\">"

					+"&nbsp;"

				+"</td>"

				+"<td align = \"center\">"

					+"<a href=\"javascript:;\" onclick=\"addFrom1099G()\">Add Another Form 1099-G</a>"

				+"</td>"

			+"</tr>"

			

			+"<tr>"

				+"<td>"

					+"Please look at your Form 1099-G and enter the information."

				+"<td>"

			+"</tr>"

			

			+"<tr>"

				+"<td>"

					+"Name of the Institution:"

				+"</td>"

				+"<td>"

					+"&nbsp;&nbsp;<input type=\"text\" name = \"1009ginstName\">"

				+"</td>"

			+"</tr>"


			+"<tr>"

				+"<td>"

					+"Box 2:"

				+"</td>"

				+"<td>"

					+"$<input type=\"text\" name = \"1099gbox2\" onchange=\"calcLine4()\">"

				+"</td>"

			+"</tr>"



			+"<tr>"

				+"<td>"

					+"Box 4:"

				+"</td>"

				+"<td>"

					+"$<input type=\"text\" name = \"1099gbox4\" onchange=\"calcLine18()\">"

				+"</td>"

			+"</tr>"


			+"<tr>"

				+"<td>"

					+"<a href=\"javascript:;\" onclick=\"removeFrom1099G(\'"+divId+"\')\">Remove Form 1099-G</a>"

				+"</td>"

			+"</tr>"

		+"</table>";

		newdiv.innerHTML = output;

		ni.appendChild(newdiv);

	}

	else{

		alert("The Tax Software only supports a maximum of Three 1099-G  Forms.");

	}

}

//This function responsiple to remove Form 1099G

function removeFrom1099G(divId)

{

	document.getElementById('form1099-GCounter').value = document.getElementById('form1099-GCounter').value - 1;

	var mainDiv = document.getElementById('form1099-G');

	var oldDiv = document.getElementById(divId);

	mainDiv.removeChild(oldDiv);

	if ( document.getElementById('form1099-GCounter').value == 0 )

		document.getElementById('form1099-Gradio_2').checked = true;


	calcLine18();

	calcLine4();

}

function hideForm1099G(){

	document.getElementById('form1099-G').innerHTML ='';

	document.getElementById('form1099-GCounter').value = 0;

	calcLine18();

	calcLine4();

}



function showForm1099G(){

	document.getElementById('form1099-G').style.display = 'block';

	if ( document.getElementById('form1099-GCounter').value == 0 ) 

		addFrom1099G();

}

function reInitialize(){

				document.getElementById('formw-2radio_2').checked=true;

				document.getElementById('formW-2Counter').value = 0 ;

				

				document.getElementById('form1042-Sradio_2').checked=true;

				document.getElementById('form1042-SCounter').value = 0 ;

				

				document.getElementById('form1099-Gradio_2').checked=true;

				document.getElementById('form1099-GCounter').value = 0 ;

				

				document.getElementById('form4137bradio_2').checked=true;

				document.getElementById('form8919radio_2').checked=true;

				document.getElementById('form1040-Cradio_2').checked=true;

				document.getElementById('form1098-Eradio_2').checked=true;

				document.getElementById('line19Radio_2').checked=true;
				document.getElementById('citizen_same').checked=true;
				document.getElementById('resident_same').checked=true;

			}

function showDiv(divName){

	document.getElementById(divName).style.display = 'block';

}

function hideDiv(divName){

	document.getElementById(divName).style.display = 'none';

}

function showDivform4137bDiv(){

	document.getElementById('form4137bDiv').style.display = 'block';

	document.getElementById('chkform4137b_value').value ='Yes';

}

function hideDivform4137b(){

	document.getElementById('form4137bDiv').style.display = 'none';

	document.getElementById('form4137b').value='';

	document.getElementById('chkform4137b_value').value ='No';

	calcLine16();

}

function showDivform8919Div(){

	document.getElementById('form8919Div').style.display = 'block';

	document.getElementById('chkform8919_value').value ='Yes';

}

function hideDivform8919(){

	document.getElementById('form8919Div').style.display = 'none';

	document.getElementById('form8919').value='';

	document.getElementById('chkform8919_value').value ='No';

	calcLine16();

}

function hideDivform1040_C(){

	document.getElementById('form1040-CDiv').style.display = 'none';

	document.getElementById('line20_value').value='';

	calcLine20();

}

function hideDivform1098_E(){

	document.getElementById('form1098-EDiv').style.display = 'none';

	document.getElementById('1098ebox1').value='';
	
	calcLine9();

}

function hideline19Div(){

	document.getElementById('line19Div').style.display = 'none';

	document.getElementById('line19_value').value='';

	calcLine19();

}

function changeAction(x)
{
	if ( x == 0 )
	{
		document.visataxes.action ="Form1040NREZ.php";
	}
	else
		document.visataxes.action ="Form8843.php";
}