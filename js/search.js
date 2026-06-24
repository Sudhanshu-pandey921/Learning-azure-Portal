(function () {
  const input = document.getElementById('search-input');

  function filterResources(query) {
    const search = query.trim().toLowerCase();
    const cards = Array.from(document.querySelectorAll('.resource-card'));
    const nodes = Array.from(document.querySelectorAll('.diagram-node'));

    cards.forEach(card => {
      const text = card.dataset.search;
      const visible = text.includes(search);
      card.style.display = visible ? 'grid' : 'none';
    });

    nodes.forEach(node => {
      const text = node.dataset.search;
      const visible = text.includes(search);
      node.style.opacity = visible ? '1' : '0.28';
      node.style.pointerEvents = visible ? 'auto' : 'none';
    });
  }

  function initSearch() {
    if (!input) return;
    input.addEventListener('input', function (event) {
      filterResources(event.target.value);
    });
  }

  document.addEventListener('DOMContentLoaded', initSearch);
})();
