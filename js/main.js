document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('contact-name').value;
      const company = document.getElementById('contact-company').value || 'Não informada';
      const city = document.getElementById('contact-city').value || 'Palmas';
      const solution = document.getElementById('contact-solution').value;
      const message = document.getElementById('contact-message').value;

      const text = `*SOLICITAÇÃO DE COTAÇÃO - JRBC TECH STORE*\n\n` +
                   `👤 *Nome:* ${name}\n` +
                   `🏢 *Empresa:* ${company}\n` +
                   `📍 *Cidade:* ${city}\n` +
                   `🎯 *Interesse:* ${solution}\n` +
                   `📝 *Detalhes:* ${message}`;

      const phone = '5563981213180';
      const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

      window.open(url, '_blank');
    });
  }
});