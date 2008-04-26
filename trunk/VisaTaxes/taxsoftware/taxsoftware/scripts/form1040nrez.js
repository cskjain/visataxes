
function calcLine3(){
	var w2box1 = document.getElementsByName("w2box1"); //get all the W2 box1 values
	var i = 0;
	var sumw2box1 = 0;
	for ( i = 0 ; i < w2box1.length ; i++ )
	{
		sumw2box1 = sumw2box1 + ( w2box1[i].value -1 + 1 ); // get the sum of all the W2 box1 values
	}
	
	var w2box8 = document.getElementsByName("w2box8"); //get all the W2 box8 values
	var j = 0;
	var sumw2box8 = 0;
	for ( j = 0 ; j < w2box8.length ; j++ )
	{
		sumw2box8 = sumw2box8 + ( w2box8[j].value -1 + 1 );// get the sum of all the W2 box8 values
	}
	var line6 = document.getElementById('line6').value;
	var line3 = Math.round ( sumw2box8 + sumw2box1 - line6);
	if (line3 < 0)
		line3 = 0;
	document.getElementById('line3').value = line3;
	
}


function calcLine5(){
	var box21042 = document.getElementsByName("1042sbox2"); //get all the 1024-s box2 values
	var i = 0;
	var sum1042sbox2 = 0;
	for ( i = 0 ; i < box21042.length ; i++ )
	{
		sum1042sbox2 = sum1042sbox2 + ( box21042[i].value -1 + 1 );// get the sum of all the 1024-s box2 values
	}
	
	var line5 = Math.round ( sum1042sbox2 );
	document.getElementById('line5').value = line5;
	
}

function calcLine4(){
	var box21099g = document.getElementsByName("1099gbox2"); //get all the 1024-s box2 values
	var i = 0;
	var sumbox21099g = 0;
	for ( i = 0 ; i < box21099g.length ; i++ )
	{
		sumbox21099g = sumbox21099g + ( box21099g[i].value -1 + 1 );// get the sum of all the 1024-s box2 values
	}
	
	var line4 = Math.round ( sumbox21099g );
	document.getElementById('line4').value = line4;
	
}


function calcLine18(){
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
	document.getElementById('line18').value = line18;
	
}


function calcstate_local_taxes()
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
	
	var state_local_taxes = sumw2box17 + sumw2box19 ;
	document.getElementById('state_local_taxes').value = state_local_taxes;
}


function calcLine16()
{
	var form4137b = ( document.getElementById('form4137b').value -1 + 1 );
	var form8919 = ( document.getElementById('form8919').value - 1 + 1 );
	var line16 = form4137b + form8919 ;
	document.getElementById('line16').value = line16;
}

function calcLine19()
{
	document.getElementById('line19').value = document.getElementById('line19_value').value - 1 + 1;
}

function calcLine20()
{
	document.getElementById('line20').value = document.getElementById('line20_value').value - 1 + 1;
}