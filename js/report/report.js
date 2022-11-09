var clients

fetch('http://127.0.0.1:5000/report/mri')
    .then(response => response.json())
    .then(ingredient => {
        document.getElementById("most-requested-ingredient").innerHTML = "The most requested ingredient is <b>" + ingredient.name + "</b>."    
    });    

    fetch('http://127.0.0.1:5000/report/month')
    .then(response => response.json())
    .then(month => {
        document.getElementById("month").innerHTML = "The month with most revenue so far is <b>" + month + "</b>."    
    });    

    fetch('http://127.0.0.1:5000/report/top3')
    .then(response => response.json())
    .then(top3 => {
        if(top3.length){
            document.getElementById("top3").innerHTML += '<b>Top customers:</b> <ol type="1" class="list-group list-group-numbered">'
            top3.forEach(element => {
                document.getElementById("top3").innerHTML += "<li>"+element+"</li>"
            })
            document.getElementById("top3").innerHTML += "</ol>"
        }
    });    




