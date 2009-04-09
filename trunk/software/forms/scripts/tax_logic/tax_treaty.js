
//function to calculate the tax 

function tax_treaty(){
        
        //get country value from the form

        //citizencountry=document.getElementById('citizencountry').value;
        
        //resident_country=document.getElementById('resident_country').value;
        resident_country=document.getElementById("residentcountry").value;
        //get visa type value from the form

        purpose_of_visit=document.getElementById('purpose_of_visit').value;
        
        line6=0;
        
        if(purpose_of_visit == "student"){
                
                //switch (citizencountry){
                 switch (resident_country){

                        case "Bangladesh": 

                                line6=8000;

                                article="21(2)";

                                break;

                        case "Belgium": 

                                line6=9000;

                                article="19(1)(b)";

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

                        case "France":

                                line6=5000;

                                article="21(1)";

                                break;

                        case "Germany": 

                                line6=9000;

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


                        case "Morocco": 

                                line6=2000;

                                article="18";

                                break;

             case "Norway": 

                                line6=2000;

                                article="16(1)";

                                break;

                        case "Pakistan": 

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


                        case "Romania": 

                                line6=2000;

                                article="20(1)";

                                break;

                        case "Slovak Republic": 

                                line6=5000;

                                article="21(1)";

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


                        default:

                                line6 = 0;

                                break;
                        

                }

                

        }else{// any visatype_treatys other than student

            line6 = 0

                // do not display linej

    }

        
        if(line6==0){

                document.getElementById("linej").value = "";
                //document.getElementById("labellinej").innerHTML = "";
        }else{
                
document.getElementById("linej").value = "during Studying and Training: $"+line6+" based on Article: "+article ;;

        }

        document.getElementById('line6').value = line6;

        calcLine3();

}

