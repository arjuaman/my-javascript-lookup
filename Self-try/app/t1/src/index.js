fetch("https://weatherapi-com.p.rapidapi.com/current.json?q=patna", {
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "3e54eccc67msh4a93ffd74125e4ep18034djsne94106419d2a",
        "x-rapidapi-host": "weatherapi-com.p.rapidapi.com"
    }
})
    .then(response => response.json())
    .then(data => console.log(data));
