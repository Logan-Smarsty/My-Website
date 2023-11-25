
window.onload = () => {
    const apiUrl = 'https://ddragon.leagueoflegends.com/cdn/13.22.1/data/en_US/champion.json';
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const champions = Object.values(data.data);
  
        const championListDiv = document.getElementById('championList');
        champions.forEach(champion => {
          const championDiv = document.createElement('div');
          championDiv.innerHTML = `
            <h2 class="champion-name">Name: ${champion.name}</h2>
            <p class="champion-title">Title: ${champion.title}</p>
            <img src="http://ddragon.leagueoflegends.com/cdn/13.22.1/img/champion/${champion.image.full}" alt="${champion.name}" class="center">
            <p class="campion-difficulty">Difficulty: ${champion.info.difficulty}</p>
            <p class="champion-tags">Tags: ${champion.tags}</p>
          `;
         

          championListDiv.appendChild(championDiv);
        });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };
  