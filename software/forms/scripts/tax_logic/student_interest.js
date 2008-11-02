// JavaScript Document


function student_interest ()
{
	box11098e = document.getElementById('1098ebox1').value;
	    filing_status = document.getElementById('filingstatus').value;
    	line7 = document.getElementById('line7').value;
     
	
	if (filing_status == "single" )          
	{
    	
		   if(box11098e  > 2500)         
     	   {

			line9 = 0;

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
                                 }
                               else
                               {                                              
                            	line9 = Math.round (box11098e * (1-D));
                                }

                     }                     
                  else            
                  {
            	line9 = Math.round (box11098e);
                  }         
        

	         }
	         
	}
 	else   
 	{
  		line9 = 0;
 	}   
	
   document.getElementById('line9').value = line9;


}  

