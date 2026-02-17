
fetch('./profile.json') 
    .then(response => {
        return response.json(); 
    })
    .then(data => {
        console.log("Úspěch! Data jsou tady:", data); 
    })
    .catch(error => {
        console.error("Chyba při načítání:", error); 
    });