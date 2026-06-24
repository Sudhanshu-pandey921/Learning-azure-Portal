(function () {
  const grid = document.getElementById('resource-grid');
  const progressGrid = document.getElementById('progress-grid');
  const exploreBtn = document.getElementById('explore-resources');
  const diagramBtn = document.getElementById('view-diagram');
  const loaderShell = document.getElementById('loader-shell');

  function createResourceCard(resource) {
    const card = document.createElement('article');
    card.className = 'resource-card';
    card.dataset.search = `${resource.title.toLowerCase()} ${resource.summary.toLowerCase()} ${resource.tag.toLowerCase()}`;
    card.innerHTML = `
      <div>
        <span class="resource-tag">${resource.tag}</span>
        <h3>${resource.title}</h3>
        <p>${resource.summary}</p>
      </div>
      <div class="resource-cta">Open details</div>
    `;
    card.addEventListener('click', function () {
      window.openDetail(resource.id);
    });
    return card;
  }

  function createProgressCard(entry) {
    const card = document.createElement('article');
    card.className = 'progress-card';
    card.innerHTML = `
      <div class="progress-title">
        <strong>${entry.title}</strong>
        <span>${entry.value}%</span>
      </div>
      <div class="progress-bar">
        <span class="progress-fill" style="width: ${entry.value}%;"></span>
      </div>
      <p>${entry.description}</p>
    `;
    return card;
  }

  function renderResources() {
    if (!grid) return;
    grid.innerHTML = '';
    window.portalData.resources.forEach(resource => {
      grid.appendChild(createResourceCard(resource));
    });
  }

  function renderProgress() {
    if (!progressGrid) return;
    progressGrid.innerHTML = '';
    window.portalData.progress.forEach(entry => {
      progressGrid.appendChild(createProgressCard(entry));
    });
  }

  function initButtons() {
    if (exploreBtn) {
      exploreBtn.addEventListener('click', function () {
        document.getElementById('resources-section').scrollIntoView({ behavior: 'smooth' });
      });
    }
    if (diagramBtn) {
      diagramBtn.addEventListener('click', function () {
        document.getElementById('diagram-section').scrollIntoView({ behavior: 'smooth' });
      });
    }
  }

  function finishLoading() {
    if (loaderShell) {
      loaderShell.classList.add('hidden');
    }
  }

  function init() {
    renderResources();
    renderProgress();
    initButtons();
    finishLoading();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
