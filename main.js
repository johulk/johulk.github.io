fetch('projects.json')
  .then(response => response.json())
  .then(data => {
    const projectCards = document.getElementById('project-cards');
    data.projects.forEach(project => {
      const card = document.createElement('div');
      card.classList.add('col-md-4');
      card.innerHTML = `
        <div class="card">
          <img src="${project.image}" class="card-img-top" alt="${project.title}">
          <div class="card-body">
            <h5 class="card-title">${project.title}</h5>
            <p class="card-text">${project.description}</p>
            <a href="${project.link}" class="btn btn-primary">Learn More</a>
          </div>
        </div>
      `;
      projectCards.appendChild(card);
    });
  });