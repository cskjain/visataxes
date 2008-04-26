//residency_test.js
//created by Pramode P Paul pramodepp@gmail.com
//copyrighted to  to www.visataxes.com

//global variable declaration
var line6 ;
var article ;
var citizencountry ;
var visatype_treaty ;
var linej;
var article;
var wages;

//function to calculate the tax 
function tax_treaty(){
	wages="";
	article="";
	linej="";
	//get country value from the form
	citizencountry=document.getElementById('citizencountry').value;
	//get visa type value from the form
	visatype_treaty=document.getElementById('visatype_treaty').value;
	line6=0;
	if(visatype_treaty == "Student"){
		switch (citizencountry){
			case "Bangladesh": 
				line6=8000;
				article="21(2)";
				break;
			case "Belgium": 
				line6=2000;
				article="21(1)";
				break;
			case "Cyprus": 
				line6=2000;
				article="21(1)";
				break;
			case "China": 
				line6=5000;
				article="20(c)";
				break;
			case "Czeck Republic": 
				line6=5000;
				article="21(1)";
				break;
			case "Egypt": 
				line6=3000;
				article="23(1)";
				break;
			case "Estonia": 
				line6=5000;
				article="21(1)";
				break;
			case "France": 
				line6=5000;
				article="21(1)";
				break;
			case "Germany": 
				line6=4000;
				article="20(4)";
				break;
			case "Iceland": 
				line6=2000;
				article="22(1)";
				break;
			case "Indonesia": 
				line6=2000;
				article="19(1)";
				break;
			case "Israel": 
				line6=3000;
				article="24(1)";
				break;
			case "Korea": 
				line6=2000;
				article="21(1)";
				break;
			case "Latvia": 
				line6=5000;
				article="20(1)";
				break;
			case "Lithuania": 
				line6=5000;
				article="20(1)";
				break;
			case "Morocco": 
				line6=2000;
				article="18";
				break;
			case "Pakisthan": 
				line6=5000;
				article="XIII(1)";
				break;
			case "Philippines": 
				line6=3000;
				article="22(1)";
				break;
			case "Poland": 
				line6=2000;
				article="18(1)";
				break;
			case "Portugal": 
				line6=5000;
				article="23(1)";
				break;
			case "Romania": 
				line6=2000;
				article="20(1)";
				break;
			case "Slovak Republic": 
				line6=5000;
				article="21(1)";
				break;
			case "Slovenia": 
				line6=5000;
				article="20(1)";
				break;
			case "Spain": 
				line6=5000;
				article="22(1)";
				break;
			case "Thailand": 
				line6=3000;
				article="22(1)";
				break;
			case "Trinidad and Tobago": 
				line6=2000;
				article="19(1)";
				break;
			case "Tunisia": 
				line6=4000;
				article="20";
				break;
			case "Venezuala": 
				line6=5000;
				article="21(1)";
				break;
			default:
				line6 = 0;
				break;
			
		}
		
	}else{// any visatype_treatys other than student
    	line6 = 0
		// do not display linej
    }
	if(line6==0){
		document.getElementById("linej").innerHTML = "";
	}else{
		document.getElementById("linej").innerHTML = "Tax Exemption based on Tax Treaty, on wages during Studying and Training: $"+line6+" based on Article: "+article ;;
	}
	document.getElementById('line6').value = line6;
	calcLine3();
}
