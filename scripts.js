var url = "https://restcountries.eu/rest/v1/name/";
var countriesList = $("#countries");

function showCountriesList(resp) {
	countriesList.empty();
	resp.forEach(function (item) {
		$("<li>").text(item.name + ", " + item.capital).appendTo(countriesList);
	});
}

function searchCountries() {
	var countryName = $("#country-name").val();
	if (!countryName.length) {
        countryName = "Poland";
    }
	$.ajax({
		url: url + countryName,
		method: "GET",
		success: showCountriesList
	});
}

$("#search").click(searchCountries);
