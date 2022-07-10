// import the data from data.js
const tableData = data ;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    // First, clean out any data
    tbody.html("");

// Loop through each object in the data
// and append a row and cells for each value in the row
data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)

    Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
    );
});
}

// add function to determine what to do after input
function handleClick() {
    
    // grab dt value from filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

// check to see if date was entered and filter
if (date) {
    //apply filter to table to only keep rows where dt matches
    filteredData = filteredData.filter(row => row.datetime === date);
    
}

// rebuild the table using the filtered data
// ifno date entered, then original table data
buildTable(filteredData);
}

// attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// build the table when the page loads
buildTable(tableData);