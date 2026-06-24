(function () {
  const panel = document.getElementById('detail-panel');
  const overlay = document.getElementById('panel-overlay');
  const closeButton = document.getElementById('panel-close');

  function openDetail(resourceId) {
    const item = window.portalData.resources.find(resource => resource.id === resourceId);
    if (!item) return;

    const panelBody = panel.querySelector('.panel-body');
    panelBody.innerHTML = `
      <div class="panel-pill">${item.tag || 'Azure Resource'}</div>
      
      <div class="panel-section">
        <h3>What is it?</h3>
        <p>${item.definition || item.what || ''}</p>
      </div>

      <div class="panel-section">
        <h3>Why is it used?</h3>
        <p>${item.why || ''}</p>
      </div>

      <div class="panel-section">
        <h3>Real-Life Analogy</h3>
        <p>${item.analogy || ''}</p>
      </div>

      <div class="panel-section">
        <h3>Hindi-English Explanation</h3>
        <p>${item.hindi || ''}</p>
      </div>

      <div class="panel-section">
        <h3>Terraform Resource</h3>
        <code style="display: block; background: rgba(255,255,255,0.05); padding: 12px; border-radius: 8px; margin-top: 8px; font-size: 0.9rem; overflow-x: auto;">${item.terraform || 'N/A'}</code>
      </div>

      <div class="panel-section">
        <h3>Terraform Example</h3>
        <code style="display: block; background: rgba(255,255,255,0.05); padding: 12px; border-radius: 8px; margin-top: 8px; font-size: 0.85rem; overflow-x: auto; line-height: 1.5;">${item.example || 'N/A'}</code>
      </div>

      <div class="panel-section">
        <h3>Best Practices</h3>
        <p>${item.practices || ''}</p>
      </div>

      <div class="panel-section">
        <h3>Common Mistakes to Avoid</h3>
        <p>${item.mistakes || ''}</p>
      </div>

      <div class="panel-section">
        <h3>Production Deployment</h3>
        <p>${item.production || ''}</p>
      </div>

      <div class="panel-section">
        <h3>Learn More</h3>
        <div class="button-group" style="display: flex; flex-direction: column; gap: 10px; margin-top: 14px;">
          ${item.learnUrl ? `<button class="learn-button" onclick="window.open('${item.learnUrl}', '_blank')" style="text-align: left; padding: 12px; background: rgba(0,120,212,0.16); border: 1px solid rgba(0,120,212,0.3); border-radius: 12px; color: #e8f1ff; cursor: pointer; font-weight: 600;">📘 Microsoft Learn</button>` : ''}
          ${item.terraformUrl ? `<button class="learn-button" onclick="window.open('${item.terraformUrl}', '_blank')" style="text-align: left; padding: 12px; background: rgba(0,120,212,0.16); border: 1px solid rgba(0,120,212,0.3); border-radius: 12px; color: #e8f1ff; cursor: pointer; font-weight: 600;">📗 Terraform Registry</button>` : ''}
          ${item.youtubeUrl ? `<button class="learn-button" onclick="window.open('${item.youtubeUrl}', '_blank')" style="text-align: left; padding: 12px; background: rgba(0,120,212,0.16); border: 1px solid rgba(0,120,212,0.3); border-radius: 12px; color: #e8f1ff; cursor: pointer; font-weight: 600;">▶ YouTube</button>` : ''}
          ${item.githubUrl ? `<button class="learn-button" onclick="window.open('${item.githubUrl}', '_blank')" style="text-align: left; padding: 12px; background: rgba(0,120,212,0.16); border: 1px solid rgba(0,120,212,0.3); border-radius: 12px; color: #e8f1ff; cursor: pointer; font-weight: 600;">🐙 GitHub Examples</button>` : ''}
          ${item.docsUrl ? `<button class="learn-button" onclick="window.open('${item.docsUrl}', '_blank')" style="text-align: left; padding: 12px; background: rgba(0,120,212,0.16); border: 1px solid rgba(0,120,212,0.3); border-radius: 12px; color: #e8f1ff; cursor: pointer; font-weight: 600;">🌐 Azure Documentation</button>` : ''}
        </div>
      </div>
    `;

    const titleNode = panel.querySelector('.panel-header h2');
    const subtitleNode = panel.querySelector('.panel-header p');
    titleNode.textContent = item.title;
    subtitleNode.textContent = item.summary;

    panel.classList.remove('hidden');
    overlay.classList.remove('hidden');
    panel.classList.add('visible');
    overlay.classList.add('visible');
  }

  function closeDetail() {
    panel.classList.remove('visible');
    overlay.classList.remove('visible');
    panel.classList.add('hidden');
    overlay.classList.add('hidden');
  }

  function initPopup() {
    if (closeButton) {
      closeButton.addEventListener('click', closeDetail);
    }
    if (overlay) {
      overlay.addEventListener('click', closeDetail);
    }
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && panel.classList.contains('visible')) {
        closeDetail();
      }
    });
    window.openDetail = openDetail;
  }

  document.addEventListener('DOMContentLoaded', initPopup);
})();
