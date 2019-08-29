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
    
    // Reference date input field
    var dateInput = d3.select("#datetime");

    // Reference date input value within the input field
    var dateValue = dateInput.property("value");

    // filter tableData date column based on the date input value
    var filteredDate = tableData.filter(sighting => sighting.datetime === dateValue);  
    console.log(filteredDate);
    
    // Clear anthing already in tbody
    tbody.html("");

    // Loop through FilteredSighting data
    filteredDate.forEach((FilteredSighting) => {
        
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
