// www.VisaTaxes.com Tax Software to file Form 1040NR-EZ and Form 8843

// 2008 Tax Bracket updated for Single and Married Filing Separately

//controler function
function calculateTax()
{
   

    //get marital status from the form
    filing_status = document.getElementById('filingstatus').value;
    
    //get line 14 from the form
    line14 = document.getElementById('line14').value;
    //calculate tax average
    calculate_tax_average ();
    
    //calculate tax
    tax ();    
    //output tax value
    document.getElementById("line15").value = line15;
}
//--------------------------------------

//function to calculate the tax average
function calculate_tax_average()
{
    if (line14 <= 3000)
    {
        m1 = Math.floor(line14 / 25);
        tax_average = m1*25+12.5;
        return;
    }
    else
    {
        m1 = Math.floor(line14 / 50);
        tax_average = m1*50+25;
        return;
    }
}
//--------------------------------------

//function to calculate the tax
function tax()
{
    //Single

    if (filing_status == "single")
    {
  
	if (line14 < 5)
        {
            line15 = 0;
            return;
        }

        else if (line14 < 15)
        {
            line15 = 1;
            return;
        }

         else if (line14 < 25)
        {
            line15 = 2;
            return;
        }
        
        else if ( line14  <= 8350)
        {
            line15 = Math.round(0.10 * tax_average);
            return;
        }

        else if ( (line14 > 8350) && (line14 <= 33950))
        {
            line15 = Math.round( 835.00 + 0.15 * (tax_average - 8350));
            return;
        }

        else if ( (line14 > 33950) && (line14 <= 82250))
        {
            line15 = Math.round( 4675.00 + 0.25 * (tax_average - 33950));
            return;
        }
        
        else if ( (line14 > 82250 ) && (line14 <= 100000))
        {
            line15 = Math.round( 16750.00 + 0.28 * (tax_average - 82250));
            return;
        }
        
        else
        {
       alert(" your Taxable Income exceeds $100,000, you cannot file Form 1040NR-EZ");
            line15 = 0;
            return;
        }

    }
    
    // Married Filing Separately
    else
    {
       
	if (line14 < 5)
        {
            line15 = 0;
            return;
        }

        else if (line14 < 15)
        {
            line15 = 1;
            return;
        }

         else if (line14 < 25)
        {
            line15 = 2;
            return;
        }
        
        else if ( line14  <= 8350)
        {
            line15 = Math.round(0.10 * tax_average);
            return;
        }

        else if ( (line14 > 8350) && (line14 <= 33950))
        {
            line15 = Math.round( 835.00 + 0.15 * (tax_average - 8350));
            return;
        }

        else if ( (line14 > 33950) && (line14 <= 68525))
        {
            line15 = Math.round( 4675.00 + 0.25 * (tax_average - 33950));
            return;
        }
        
        else if ( (line14 > 68525) && (line14 <= 100000))
        {
            line15 = Math.round ( 13318.75 + 0.28 * (tax_average - 68525));
            return;
        }
    
             
        else
        {
            alert(" Your Taxable Income, exceeds $100,000, you cannot file Form 1040NR-EZ");
            line15 = 0;
        }

    }
}
//--------------------------------------

