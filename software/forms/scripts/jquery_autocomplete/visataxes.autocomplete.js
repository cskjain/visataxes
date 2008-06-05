
$().ready(function() {

	function findValueCallback(event, data, formatted) {
		$("<li>").html( !data ? "No match!" : "Selected: " + formatted).appendTo("#result");
	}
	
	function formatItem(row) {
		return row[0] + " (<strong>id: " + row[1] + "</strong>)";
	}
	function formatResult(row) {
		return row[0].replace(/(<.+?>)/gi, '');
	}
	
	$("#us_state").autocomplete(states);
	$("#university_state").autocomplete(states);
	$("#foreign_country").autocomplete(countries);
    $("#citizenship_country").autocomplete(countries);
   	$("#passport_country").autocomplete(countries);
	$("#resident_country").autocomplete(countries);
	$("#visa_entry").autocomplete(visas);
	$("#visatype_yr6").autocomplete(visas);
	$("#visatype_yr5").autocomplete(visas);
	$("#visatype_yr4").autocomplete(visas);
	$("#visatype_yr3").autocomplete(visas);
	$("#visatype_yr2").autocomplete(visas);
	$("#visatype_yr_current").autocomplete(visas);

});




