document.addEventListener('DOMContentLoaded', () => {
  // Año automático en el pie de página
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Menú responsive
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isOpen));
      nav.classList.toggle('open', !isOpen);
      document.body.classList.toggle('menu-open', !isOpen);
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('menu-open');
    }));
  }

  // Filtros de servicios
  const filterButtons = document.querySelectorAll('[data-filter]');
  const serviceCards = document.querySelectorAll('.detail-card[data-category]');
  filterButtons.forEach(button => button.addEventListener('click', () => {
    filterButtons.forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    serviceCards.forEach(card => {
      const visible = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('hidden', !visible);
    });
  }));

  // Formulario: prepara un correo para que el usuario lo envíe desde su aplicación.
  const form = document.getElementById('contactForm');
  if (form) {
    const params = new URLSearchParams(window.location.search);
    const service = params.get('servicio');
    const course = params.get('curso');
    const typeSelect = document.getElementById('tipo');
    if (typeSelect && service) {
      const option = [...typeSelect.options].find(o => o.text.toLowerCase().includes(service.toLowerCase()));
      if (option) typeSelect.value = option.value;
      else if (service) typeSelect.value = service;
    }
    const messageField = document.getElementById('mensaje');
    if (messageField && course) messageField.value = `Me interesa recibir información sobre el curso/taller: ${course}.`;
    form.addEventListener('submit', event => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const subject = encodeURIComponent(`Solicitud de información — ${data.get('tipo')}`);
      const body = encodeURIComponent(
        `Hola, Desconcertados Studios:\\n\\n` +
        `Mi nombre / nombre artístico: ${data.get('nombre')}\\n` +
        `Correo: ${data.get('email')}\\n` +
        `Servicio: ${data.get('tipo')}\\n` +
        `Presupuesto estimado: ${data.get('presupuesto') || 'Por definir'}\\n\\n` +
        `Mi idea:\\n${data.get('mensaje')}\\n\\n` +
        `Enviado desde el sitio de Desconcertados Studios.`
      );
      const status = document.getElementById('formStatus');
      if (status) status.textContent = 'Se abrirá tu aplicación de correo con la solicitud preparada.';
      // Sustituye este correo por el correo real de atención cuando publiques el sitio.
      window.location.href = `mailto:contacto@desconcertadosst.com.mx?subject=${subject}&body=${body}`;
    });
  }
});