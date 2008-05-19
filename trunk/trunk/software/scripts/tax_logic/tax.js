

//global variables used to calculate Tax
var tax_average;
var m1;
var line14;
var line15;
var filing_status;
//--------------------------------------

//controler function
function calculateTax()
{
    //intialization
    tax_average = 0;
    m1 = 0;
    line14 = 0;
    line15 = 0;
    filing_status = "";

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
    //if marital status is single
    if (filing_status == "Single")
    {
        if (line14 <= 5)
        {
            line15 = 0;
            return;
        }

        else if (line14 <= 15)
        {
            line15 = 1;
            return;
        }
        
        else if ( line14  <= 7825)
        {
            line15 = Math.round(0.10 * tax_average);
            return;
        }

        else if ( (line14 > 7825) && (line14 <= 31850))
        {
            line15 = Math.round( 782.5 + 0.15 * (tax_average - 7825));
            return;
        }

        else if ( (line14 > 31850) && (line14 <= 77100))
        {
            line15 = Math.round( 4386.25 + 0.25 * (tax_average - 31850));
            return;
        }
        
        else if ( (line14 > 77100 ) && (line14 <= 100000))
        {
            line15 = Math.round( 15698.75 + 0.28 * (tax_average - 77100));
            return;
        }
        
        else
        {
            alert(" your Taxable Income exceeds, you cannot file Form 1040NR-EZ");
            line15 = 0;
            return;
        }

    }
    
    //if marital status is married
    else
    {
        if (line14 <= 5)
        {
            line15 = 0;
            return;
        }
        
        else if (line14 <= 15) 
        {
            line15 = 1;
            return;
        }
        
        else if ( line14  <= 7825)
        {
            line15 = Math.round (0.10 * tax_average);
            return;
        }

        else if ( (line14 > 7825) && (line14 <= 31850))
        {
            line15 = Math.round ( 782.5 + 0.15 * (tax_average - 7825));
            return;
        }

        else if ( (line14 > 31850) && (line14 <= 64250))
        {
            line15 = Math.round( 4386.25 + 0.25 * (tax_average - 31850));
            return;
        }
        
        else if ( (line14 > 64250 ) && (line14 <= 97925))
        {
            line15 = Math.round ( 12486.25 + 0.28 * (tax_average - 64250));
            return;
        }
        
        else if ( (line14 > 97925 ) && (line14 <= 100000))
        {
            line15 = Math.round ( 21915.25 + 0.33 * (tax_average - 97925));
            return;
        }
        
        else
        {
            alert(" Since your Taxable Income, is greater than $100,000 you cannot file Form 1040NR-EZ");
            line15 = 0;
        }

    }
}
//--------------------------------------

