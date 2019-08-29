// from data.js
var tableData = data;

// YOUR CODE HERE!
// Reference table body
var tbody = d3.select("tbody");

// Loop through sighting data
data.forEach((sighting) => {

    // Create new row within table body
    var row = tbody.append("tr");

    // Grab sighting data keys and values
    Object.entries(sighting).forEach(([key, value]) => {

        // Create new cell in row for each value within sighting data
        var cell = row.append("td");

        // Put value text in cell
        cell.text(value);
    });
});

// Select button
var button = d3.select("#filter-btn");

// Function for when button is clicked
button.on("click", function() {
    
    // Reference DATE input field and value within the input field
    var dateInput = d3.select("#datetime").property("value");
    // Reference CITY input field and value within the input field
    var cityInput = d3.select("#city").property("value");
    // Reference STATE input field and value within the input field
    var stateInput = d3.select("#state").property("value");
    // Reference COUNTRY input field and value within the input field
    var countryInput = d3.select("#country").property("value");
    // Reference SHAPE input field and value within the input field
    var shapeInput = d3.select("#shape").property("value");

    // Create dictionary that holds user input
    var filter = {
        date: dateInput,
        city: cityInput.toLowerCase(),
        state: stateInput.toLowerCase(),
        country: countryInput.toLowerCase(),
        shape: shapeInput.toLowerCase()
    };
    console.log(filter);

    // Filter  DATE column based on the date input value
    var dateData = tableData.filter(sighting => sighting.datetime == filter.date);
    console.log(dateData);
    // If the dateData is empty then keep the original tableData
    if (dateData == "") {dateData = tableData};
    console.log(dateData);

    // Filter  CITY column based on the city input value
    var cityData = dateData.filter(sighting => sighting.city == filter.city);
    console.log(cityData);
    // If the cityData is empty then keep the original dateData
    if (cityData == "") {cityData = dateData};
    console.log(cityData);

    // Filter STATE column based on the state input value
    var stateData = cityData.filter(sighting => sighting.state == filter.state);
    console.log(stateData);
    // If the stateData is empty then keep the original cityData
    if (stateData == "") {stateData = cityData};
    console.log(stateData);

    // Filter COUNTRY column based on the country input value
    var countryData = stateData.filter(sighting => sighting.country == filter.country);
    console.log(countryData);
    // If the countryData is empty then keep the original stateData
    if (countryData == "") {countryData = stateData};
    console.log(countryData);

    // Filter SHAPE column based on the shape input value
    var shapeData = countryData.filter(sighting => sighting.shape == filter.shape);
    console.log(shapeData);
    // If the shapeData is empty then keep the original countryData
    if (shapeData == "") {shapeData = countryData};
    console.log(shapeData);
    
    // Now that table has been filtered throgh all inputs label as filteredData
    var filteredData = shapeData;

    // Clear anthing already in tbody
    tbody.html("");

    // Loop through FilteredSighting data
    filteredData.forEach((FilteredSighting) => {
            
        // Create new row within table body
        var row = tbody.append("tr");
                
         // Grab sighting data keys and values
        Object.entries(FilteredSighting).forEach(([key, value]) => {
                
            // Create new cell in row for each value within sighting data
            var cell = row.append("td");
                
            // Put value text in cell
            cell.text(value);   
        });
    });
});




