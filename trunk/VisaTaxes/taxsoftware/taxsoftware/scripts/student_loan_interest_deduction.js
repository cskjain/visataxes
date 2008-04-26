// JavaScript Document
var D = 0;
var box11098e = 0;
var filingstatus = "single";
var line7 = 0;
var line8 = 0;
var line10 = 0;
var line9=0;

function student_interest ( box11098e , filingstatus, line7, line8, line10)
{     
	
	if (filingstatus == "single"  && line10 < 70000)          
	{
    	
		if(box11098e  > 2500)         
     	{
        	alert( " The Interest paid on a Qualified Student Loan cannot be more than $2500. ");
            box11098e = 0;
			line9=0;
            return line9;
            exit ;

		}
      	else                             
      	{
           	
			if ((line7 - line8) > 55000)
           	{
            	
				D =  (line7 - line8 - 55000) / 15000;
				
				
                if(D > 1)   
                {
                	D = 1;
                    line9 = Math.round (box11098e * (1-D)) ;
				    line9 = box11098e * (1-D) ;
					return line9;
                    exit;
                 }
                 else
                 {                                              
                 	line9 = Math.round (box11098e * (1-D));
                    return line9;
                    exit;
                 }

            }                     
            else            
            {
            	line9 = Math.round (box11098e);
				return line9 ;
                exit;
            }         
       }      

	}
 	else   
 	{
  		line9 = 0;
		return line9;
  		exit;
 	}   

}  

