// Renderizador Dinâmico de Produtos da JRBC Tech Store
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('products-grid');
  if (!container) return;

  fetch('data/products.json')
    .then(response => {
      if (!response.ok) throw new Error('Falha ao carregar catálogo');
      return response.json();
    })
    .then(produtos => {
      container.innerHTML = produtos.map(prod => {
        const isB2B = prod.tipo === 'b2b';
        const badgeColor = isB2B ? 'background: #004aad; color: #fff;' : 'background: #ee4d2d; color: #fff;';
        
        const actionButton = prod.acao_tipo === 'whatsapp'
          ? `<a href="https://wa.me/5563981213180?text=Olá,%20tenho%20interesse%20no%20produto%20${encodeURIComponent(prod.nome)}%20(ID:%20${prod.id})" 
                target="_blank" 
                class="btn-product btn-b2b" style="display:inline-block; padding:10px 16px; background:#25D366; color:#fff; text-decoration:none; border-radius:6px; font-weight:bold; margin-top:12px;">
                ${prod.acao_texto}
             </a>`
          : `<a href="${prod.url_externa}" 
                target="_blank" 
                class="btn-product btn-external" style="display:inline-block; padding:10px 16px; background:#ff5722; color:#fff; text-decoration:none; border-radius:6px; font-weight:bold; margin-top:12px;">
                ${prod.acao_texto} ↗
             </a>`;

        return `
          <div class="product-card" style="border: 1px solid #e1e4e8; border-radius: 8px; padding: 18px; background: #fff; box-shadow: 0 2px 4px rgba(0,0,0,0.04); display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <span style="font-size: 11px; padding: 3px 8px; border-radius: 12px; font-weight: bold; ${badgeColor}">${prod.badge}</span>
                <span style="font-size: 12px; color: #666;">${prod.categoria}</span>
              </div>
              <h3 style="font-size: 17px; margin: 0 0 8px 0; color: #111;">${prod.nome}</h3>
              <p style="font-size: 13px; color: #555; line-height: 1.4; margin-bottom: 12px;">${prod.descricao}</p>
            </div>
            <div>
              <div style="font-size: 18px; font-weight: 700; color: #004aad;">${prod.preco}</div>
              <div style="font-size: 12px; color: #777; margin-top: 4px;">${prod.condicao}</div>
              ${actionButton}
            </div>
          </div>
        `;
      }).join('');
    })
    .catch(err => {
      console.error('Erro ao renderizar vitrine:', err);
    });
});
