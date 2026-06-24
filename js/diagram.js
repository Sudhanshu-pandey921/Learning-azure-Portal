(function () {
  const board = document.getElementById('diagram-board');

  function createDiagramNode(resource, index) {
    const wrapper = document.createElement('div');
    wrapper.className = 'diagram-connector';
    wrapper.innerHTML = `
      <article class="diagram-node" role="button" tabindex="0" data-resource="${resource.id}" data-search="${resource.title.toLowerCase()} ${resource.summary.toLowerCase()} ${resource.tag.toLowerCase()}">
        <span class="node-step">${index + 1}</span>
        <h3>${resource.title}</h3>
        <p>${resource.summary}</p>
      </article>
    `;
    wrapper.querySelector('.diagram-node').addEventListener('click', function () {
      window.openDetail(resource.id);
    });
    wrapper.querySelector('.diagram-node').addEventListener('keypress', function (event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        window.openDetail(resource.id);
      }
    });
    if (index === window.portalData.resources.length - 1) {
      wrapper.classList.add('diagram-end');
      wrapper.style.marginBottom = '0';
      wrapper.style.paddingBottom = '0';
      wrapper.style.border = 'none';
    }
    return wrapper;
  }

  function renderDiagram() {
    if (!board) return;
    board.innerHTML = '';
    window.portalData.resources.forEach((resource, index) => {
      const node = createDiagramNode(resource, index);
      board.appendChild(node);
    });
  }

  document.addEventListener('DOMContentLoaded', renderDiagram);
})();
