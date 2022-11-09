fetch('http://127.0.0.1:5000/report/mri')
    .then(response => response.json())
    .then(ingredient => {
        document.getElementById("most-requested-ingredient").innerHTML = "The most requested ingredient is " + ingredient.name + "."    
    });    

    fetch('http://127.0.0.1:5000/report/month')
    .then(response => response.json())
    .then(month => {
        console.log(month)
        document.getElementById("month").innerHTML = "The month with most revenue so far is " + month + "."    
    });    

    fetch('http://127.0.0.1:5000/report/top3')
    .then(response => response.json())
    .then(top3 => {
        console.log(top3)
    });    

/**
 * Find the template tag and populate it with the data
 * @param top
 */
function createTop3Template(top) {
    let template = $("#top-item-template")[0].innerHTML;
    return Mustache.render(template, order);
}
