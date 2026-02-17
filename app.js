
const API_URL = './profile.json';

fetch(API_URL)
    .then(response => {
        if (!response.ok) {
            throw new Error('Nepodařilo se načíst data');
        }
        return response.json();
    })
    .then(data => {
        document.getElementById('name').textContent = data.name;

        const skillsList = document.getElementById('skills-list');

        skillsList.innerHTML = '';

        data.skills.forEach(skill => {
            const li = document.createElement('li'); 
            li.textContent = skill;                  
            skillsList.appendChild(li);              
        });

        const interestsSection = document.getElementById('interests-section');
        
        interestsSection.innerHTML = '';

        data.interests.forEach(interest => {
            const div = document.createElement('div');
            div.classList.add('interest-item'); 
            div.textContent = interest;
            interestsSection.appendChild(div);
        });
    })
    .catch(error => {
        console.error('Chyba:', error);
        document.getElementById('name').textContent = "Chyba načítání profilu";
    });