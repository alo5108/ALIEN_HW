// -----------------
// var dataSet = [.....]
//------

var result = dataSet.map(function (row) {
    var transformed = [];

    for (var key in row) {
        var value = row[key];
        transformed.push(value)
    }

    return transformed;

});


$(document).ready(function () {
    $('#example').DataTable({
        data: result,
        columns: [{
                title: "Date-Time"
            },   
            {
                title: "City"
            },
            {
                title: "State"
            },
            {
                title: "Country"
            },
            {
                title: "UFO-Shape"
            },
            {
                title: "Duration-in-Minutes"
            },
            {
                title: "Comments"
            }]
    });
});