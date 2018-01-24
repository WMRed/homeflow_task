$(document).ready(function(){
	// Location
$.getJSON("http://index1.homeflow.co.uk/places?api_key=77467477edfd2689cd77796a2c4b019f&search[name]=elstead", function(data) {
    //data is the JSON string

	var locationHtml = "";
	for( var index in data.result.locations.elements ) {
	   locationHtml += '<option>' + data.result.locations.elements[index].name + '</option>';	
	}

	$('#location').html(locationHtml);
	
});
//Properties
$.getJSON("http://index1.homeflow.co.uk/properties?api_key=77467477edfd2689cd77796a2c4b019f&search[place][id]=51e7c4a873dadaf60feee624&[search][channel]=sales", function(data) {
    //data is the JSON string
	var index = 0;
	
    var idHtml = "";
	idHtml += "ID: " + data.result.properties.elements[index].property_id;	
	$('#id').html(idHtml);
	
	var describeHtml = "";
	describeHtml += data.result.properties.elements[index].short_description;	
	$('#description').html(describeHtml);

	var addressHtml = "";
	   addressHtml += data.result.properties.elements[index].display_address;	
	$('#address').html(addressHtml);
	
	var priceHtml = "";
	   priceHtml += "£" + data.result.properties.elements[index].price_value;	
	$('#price').html(priceHtml);
	
	var bedsHtml = "";
	   bedsHtml += data.result.properties.elements[index].bedrooms + ' Bedrooms';	
	$('#bedrooms').html(bedsHtml);	
	
    var agencyHtml = "";
	   agencyHtml += data.result.properties.elements[index].agency.agency_name;	
	$('#agency').html(agencyHtml);	
	
	var phoneHtml = "";
	   phoneHtml += data.result.properties.elements[index].contact_telephone;	
	$('#phone').html(phoneHtml);	
	
	var summaryHtml = "";
	for( var index in data.result.properties.elements) {
	  summaryHtml += "<p>ID: " + data.result.properties.elements[index].property_id + 
	  '</p><p>' + data.result.properties.elements[index].property_type + '</p>';		
	  
	}
	$('#id_search').html(summaryHtml);	
		
});

});


/*$(document).ready(function(){
	
$.getJSON("http://index1.homeflow.co.uk/places?api_key=77467477edfd2689cd77796a2c4b019f&search[name]=elstead", function(data) {
    for( var index in data.elements ) {
        $('#locationDropDown ul').append('<li><a href="#" data-maker="'+data.elements[index].name+'</a></li>');
    }
  });
});*/

/*$(document).ready(function () {
	$('.locationDropDown').on('click',
		function () {
			$.getJSON("http://index1.homeflow.co.uk/places?api_key=77467477edfd2689cd77796a2c4b019f&search[name]=elstead", function (data) {
				for (var index in data.elements) {
					$('#locationDropDown ul').append('<li><a href="#" data-maker="' + data.elements[index].name + '</a></li>');
				}
			});
			$(this).dropdown('toggle');
		}
	);*/

/*function getTheLocation() {
	alert("hello barry");
	(function(){
	$.getJSON("http://index1.homeflow.co.uk/places?api_key=77467477edfd2689cd77796a2c4b019f&search[name]=elstead", function (data) {
				for (var index in data.elements) {
					$('#inputGroup-sizing-sm').append( data.elements[index].name );
				}
			});
	})
}*/
	
//});
function doTheSearch() {
	alert('searching...');
}