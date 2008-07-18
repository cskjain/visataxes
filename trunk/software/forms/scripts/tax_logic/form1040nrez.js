// www.VisaTaxes.com

// Form 1040NR-EZ Logic

// update when filing status Line 1 and Line 2 changes

function calcLine_1_2_9_13_15()
{
	document.getElementById('filingstatus_value').value = document.getElementById('filingstatus').value;
	calcLine9();
	calcLine15();
	
}

// line3 = sum (w2 box 8) + sum (w2 box 1) - line 6

function calcLine3()

{

//get all W-2 Box 1 Values

	var w2box1 = document.getElementsByName("w2box1"); 
	var i = 0;
	var sumw2box1 = 0;
	for ( i = 0 ; i < w2box1.length ; i++ )
	{
		sumw2box1 = sumw2box1 + ( w2box1[i].value -1 + 1 ); 
	}
	

// get all W-2 Box 8 Values

	var w2box8 = document.getElementsByName("w2box8"); 
	var j = 0;
	var sumw2box8 = 0;
	for ( j = 0 ; j < w2box8.length ; j++ )
	{
		sumw2box8 = sumw2box8 + ( w2box8[j].value -1 + 1 );
	}

// get line6 value

	var line6 = document.getElementById('line6').value;

// Final Logic line3 = sum (w2 box 8) + sum (w2 box 1) - line 6

	var line3 = Math.round ( sumw2box8 + sumw2box1 - line6);
	if (line3 < 0)
		line3 = 0;
	document.getElementById('line3').value = line3;
	calcLine7();
	
}



// line 4 = Sum (1099-G Box 2)

function calcLine4(){

    //get all the 1099-G box2 values

	var box21099g = document.getElementsByName("1099gbox2"); 
	var i = 0;
	var sumbox21099g = 0;
	for ( i = 0 ; i < box21099g.length ; i++ )
	{
		sumbox21099g = sumbox21099g + ( box21099g[i].value -1 + 1 );// get the sum of all the 1024-s box2 values
	}
	
	var line4 = Math.round ( sumbox21099g );
	if (line4 < 0)
		line4 = 0;
	document.getElementById('line4').value = line4;
	calcLine7();
}


// line 5 = sum (1042-S Box 2)

function calcLine5(){

//get all the 1024-s box2 values

	var box21042 = document.getElementsByName("1042sbox2"); 
	var i = 0;
	var sum1042sbox2 = 0;
	for ( i = 0 ; i < box21042.length ; i++ )
	{
		sum1042sbox2 = sum1042sbox2 + ( box21042[i].value -1 + 1 );
	}
	
	var line5 = Math.round ( sum1042sbox2 );
	if (line5 < 0)
		line5 = 0;
	document.getElementById('line5').value = line5;
	calcLine7();
}


// Line 6 is calculated from the function Tax_treaty();


// Logic to update Line 7

// Line 7 = Line 3 + Line 4 + Line 5

function calcLine7(){
	var line3 = document.getElementById("line3").value - 1 + 1 ;
	var line4 = document.getElementById("line4").value - 1 + 1 ;
	var line5 = document.getElementById("line5").value - 1 + 1 ;
	var line7 = Math.round ( line3 + line4 + line5 );
	if (line7 < 0)
		line7 = 0;
	document.getElementById("line7").value = line7;
	calcLine10();
	calcLine9();
}

// Line 8 is 0 

var line8 = 0;


function calcLine9_10(){
	calcLine9();
	calcLine10();
}

function calcLine9(){
	student_interest();
}

function calcLine10(){
	var line7 = document.getElementById("line7").value - 1 + 1 ;
	var line8 = document.getElementById("line8").value - 1 + 1 ;
	var line9 = document.getElementById("line9").value - 1 + 1 ;
	var line10 = Math.round ( line7 - ( line8 + line9 ) );
	if (line10 < 0)
		line10 = 0;
	document.getElementById("line10").value = line10;
	calcLine12();
}

function calcLine11()
{
	var w2box17 = document.getElementsByName("w2box17");
	var i = 0;
	var sumw2box17 = 0;
	for ( i = 0 ; i < w2box17.length ; i++ )
	{
		sumw2box17 = sumw2box17 + ( w2box17[i].value -1 + 1 );
	}
	
	var w2box19 = document.getElementsByName("w2box19");
	var j = 0;
	var sumw2box19 = 0;
	for ( j = 0 ; j < w2box19.length ; j++ )
	{
		sumw2box19 = sumw2box19 + ( w2box19[j].value -1 + 1 );
	}
	
	var line11 = Math.round ( sumw2box17 + sumw2box19 );
	if (line11 < 0)
		line11 = 0;
	document.getElementById('line11').value = line11;
	calcLine12();
}

function calcLine12(){
	var line10 = document.getElementById("line10").value - 1 + 1 ;
	var line11 = document.getElementById("line11").value - 1 + 1 ;
	var line12 = Math.round ( line10 - line11 );
	if (line12 < 0)
		line12 = 0;
	document.getElementById("line12").value = line12;
	calcLine14();
}

// Exemption Deduction Line 13 value for Year 2008 is $3500

var line13 = 3500;

function calcLine14()
{
	var line12 = document.getElementById("line12").value - 1 + 1 ;
	var line14 = Math.round ( line12 - line13 );
	if (line14 < 0)
		line14 = 0;
	document.getElementById("line14").value = line14;
	calcLine15();
}

function calcLine15(){
	calculateTax();
	calcLine17();
}

// Line 16 is 0

var line16 = 0;

function calcLine17(){
	var line15 = document.getElementById("line15").value - 1 + 1 ;
	var line17 = Math.round ( line15 + line16 );
	if (line17 < 0)
		line17 = 0;
	document.getElementById("line17").value = line17;
	calcLine22();
	calcLine25();
}


function calcLine18()

    {
	var w2box2 = document.getElementsByName("w2box2");
	var i = 0;
	var sumw2box2 = 0;
	for ( i = 0 ; i < w2box2.length ; i++ )
	{
		sumw2box2 = sumw2box2 + ( w2box2[i].value -1 + 1 );
	}
	
	
	var box71042 = document.getElementsByName("1042sbox7");
	var j = 0;
	var sum1042sbox7 = 0;
	for ( j = 0 ; j < box71042.length ; j++ )
	{
		sum1042sbox7 = sum1042sbox7 + ( box71042[j].value -1 + 1 );
	}

	
	var box41099g = document.getElementsByName("1099gbox4");
	var k = 0;
	var sum1099gbox4 = 0;
	for ( k = 0 ; k < box41099g.length ; k++ )
	{
		sum1099gbox4 = sum1099gbox4 + ( box41099g[k].value -1 + 1 );
	}
	
	var line18 = Math.round ( sumw2box2 + sum1042sbox7 + sum1099gbox4 );
	if (line18 < 0)
		line18 = 0;
	document.getElementById('line18').value = line18;
	calcLine21();
	
}

function calcLine21(){
	var line18 = document.getElementById("line18").value - 1 + 1 ;
	var line21 = Math.round ( line18 );
	if (line21 < 0)
		line21 = 0;
	document.getElementById("line21").value = line21;
	calcLine22();
	calcLine25();
}

function calcLine22(){
	var line21 = document.getElementById("line21").value - 1 + 1 ;
	var line17 = document.getElementById("line17").value - 1 + 1 ;
	var line22 = Math.round ( line21 - line17 );
	if ( line22 < 0 )
		line22 = 0 ;
	document.getElementById("line22").value = line22;
	document.getElementById("line22_1").value = line22;
}

function calcLine25(){
	var line21 = document.getElementById("line21").value - 1 + 1 ;
	var line17 = document.getElementById("line17").value - 1 + 1 ;
	var line25 = Math.round ( line17 - line21 );
	if ( line25 < 0 )
		line25 = 0 ;
	document.getElementById("line25").value = line25;
	document.getElementById("line25_1").value = line25;
}





