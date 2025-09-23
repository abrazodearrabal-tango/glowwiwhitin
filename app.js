/* Menu toggle. Keep it simple and robust */
const burger = document.querySelector('.hamburger');
const nav = document.getElementById('siteNav');

if (burger && nav) {
  burger.addEventListener('click', () => {
    const open = !nav.hasAttribute('hidden');
    if (open) {
      nav.setAttribute('hidden', '');
      burger.setAttribute('aria-expanded', 'false');
    } else {
      nav.removeAttribute('hidden');
      burger.setAttribute('aria-expanded', 'true');
    }
  });
}

/* Year in footer */
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

/* i18n dictionary */
const I18N = {
  'site.title': { es:'GlowWithin · Counseling', en:'GlowWithin · Counseling', de:'GlowWithin · Beratung' },
  'nav.about': { es:'Sobre mí', en:'About', de:'Über mich' },
  'nav.counseling': { es:'Qué es counseling', en:'What is counseling', de:'Was ist Beratung' },
  'nav.testimonials': { es:'Testimonios', en:'Testimonials', de:'Stimmen' },
  'nav.contact': { es:'Contacto', en:'Contact', de:'Kontakt' },

  'hero.title': {
    es:'Descubre tu poder y abraza tu mejor versión, brillando desde adentro.',
    en:'Discover your power and embrace your best self, shining from within.',
    de:'Entdecke deine Stärke und werde die beste Version von dir, die von innen heraus strahlt.'
  },
  'hero.cta': { es:'Reserva una call de 20 min gratis', en:'Book a free 20 min call', de:'Kostenloses 20 Min Gespräch buchen' },

  'about.title': { es:'Sobre mí', en:'About me', de:'Über mich' },
  'about.hello': {
    es:'Hola. Soy Romina, de Buenos Aires, ahora viviendo en Alemania.',
    en:'Hi. I am Romina, from Buenos Aires and now based in Germany.',
    de:'Hallo. Ich bin Romina, aus Buenos Aires und lebe jetzt in Deutschland.'
  },
  'about.body1': {
    es:'Después de muchos cambios entendí lo que se necesita para avanzar. Ayudo a mujeres y hombres a mejorar la gestión emocional, la comunicación y la confianza personal.',
    en:'After many life changes I learned what it takes to move forward. I help women and men improve emotional management, communication and self trust.',
    de:'Nach vielen Veränderungen weiß ich, was es braucht, um weiterzukommen. Ich helfe Frauen und Männern, Emotionen zu regulieren, besser zu kommunizieren und Vertrauen aufzubauen.'
  },
  'about.body2': {
    es:'Trabajo con una mirada humana usando herramientas de la Terapia Cognitivo Conductual.',
    en:'I work with a human approach using Cognitive Behavioral Therapy tools.',
    de:'Ich arbeite menschlich und nutze Werkzeuge der kognitiven Verhaltenstherapie.'
  },
  'about.body3': {
    es:'Querés ver si encajamos. Agendá un encuentro virtual corto.',
    en:'Want to see if we are a fit. Book a short virtual meeting.',
    de:'Willst du sehen ob es passt. Buche ein kurzes Online Gespräch.'
  },
  'about.cta': { es:'Reservar encuentro virtual gratuito', en:'Book a free virtual meeting', de:'Kostenloses Online Gespräch buchen' },

  'counseling.title': { es:'Qué es counseling', en:'What is counseling', de:'Was ist Beratung' },
  'counseling.lead': {
    es:'El counseling es un acompañamiento que te ayuda a transitar desafíos personales y crecer con claridad.',
    en:'Counseling is guided support that helps you navigate personal challenges and grow with clarity.',
    de:'Beratung ist eine Begleitung die dir hilft Herausforderungen zu meistern und klar zu wachsen.'
  },
  'counseling.areasTitle': { es:'Áreas de trabajo', en:'Areas I work with', de:'Arbeitsbereiche' },

  'areas.emotions': { es:'Reconocimiento y manejo de emociones', en:'Emotion awareness and regulation', de:'Emotionswahrnehmung und Regulation' },
  'areas.wellbeing': { es:'Estrés y bienestar', en:'Stress and wellbeing', de:'Stress und Wohlbefinden' },
  'areas.balance': { es:'Balance vida y trabajo', en:'Life and work balance', de:'Balance zwischen Leben und Arbeit' },
  'areas.growth': { es:'Crecimiento personal', en:'Personal growth', de:'Persönliches Wachstum' },
  'areas.boundaries': { es:'Límites y asertividad', en:'Boundaries and assertiveness', de:'Grenzen und Selbstbehauptung' },
  'areas.communication': { es:'Estilos de comunicación', en:'Communication styles', de:'Kommunikationsstile' },
  'areas.dialogue': { es:'Mejorar el diálogo en pareja', en:'Relationship dialogue', de:'Dialog in Beziehungen' },
  'areas.empower': { es:'Confianza y empoderamiento', en:'Confidence and empowerment', de:'Selbstvertrauen und Empowerment' },
  'areas.change': { es:'Gestión del cambio', en:'Navigating change', de:'Umgang mit Veränderung' },
  'areas.relationships': { es:'Relaciones', en:'Relationships', de:'Beziehungen' },

  'counseling.cta': { es:'Reserva una llamada gratis de 20 min', en:'Book a free 20 min call', de:'Kostenloses 20 Min Gespräch buchen' },

  'testimonials.title': { es:'Descubriendo otras historias', en:'Stories from clients', de:'Erfahrungsberichte' },
  'testimonials.quote1': {
    es:'Me sentía trabada con los mismos pensamientos. Con las herramientas y el apoyo semanal volví a confiar en mí.',
    en:'I felt stuck with the same thoughts and patterns. With the tools and weekly support I learned to trust myself again.',
    de:'Ich steckte in denselben Mustern fest. Mit den Werkzeugen und der Begleitung habe ich wieder Vertrauen gefunden.'
  },

  'contact.title': { es:'Estemos en contacto', en:'Let us connect', de:'Lass uns sprechen' },
  'contact.lead': {
    es:'Elegí día y hora para un encuentro virtual gratis de 20 min o enviá un mensaje.',
    en:'Choose a day and time to book a free 20 min virtual meeting or send a message.',
    de:'Buche ein kostenloses 20 Min Gespräch oder sende eine Nachricht.'
  },

  'form.name': { es:'Nombre', en:'Name', de:'Name' },
  'form.msg': { es:'Mensaje', en:'Message', de:'Nachricht' },
  'form.send': { es:'Enviar', en:'Send', de:'Senden' },

  'footer.roles': { es:'Counseling. Máster en Comunicación.', en:'Counseling. MSc in Communication.', de:'Beratung. MSc Kommunikation.' }
};

/* Aplicar idioma */
const langBtns = document.querySelectorAll('.lang-btn');
const applyLang = (lang) => {
  document.documentElement.lang = lang;
  langBtns.forEach(b => b.setAttribute('aria-pressed', b.dataset.lang === lang ? 'true' : 'false'));
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const t = I18N[key]?.[lang];
    if (t) el.textContent = t;
  });
};
langBtns.forEach(b => b.addEventListener('click', () => applyLang(b.dataset.lang)));
applyLang('es');

/* Submit a Formspark con fallback */
const form = document.getElementById('contactForm');
const note = document.getElementById('formNote');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const endpoint = form.getAttribute('action');
    const hasId = endpoint && !endpoint.endsWith('YOUR_FORMSPARK_ID');
    if (note) note.textContent = 'Enviando...';

    try {
      const data = new FormData(form);
      if (!hasId) {
        console.warn('Formspark ID missing. Replace YOUR_FORMSPARK_ID.');
        await new Promise(r => setTimeout(r, 400));
        if (note) note.textContent = 'Guardado local. Agregá tu Formspark ID para enviar.';
        form.reset();
        return;
      }
      const res = await fetch(endpoint, { method:'POST', body:data });
      if (!res.ok) throw new Error('Network error');
      if (note) note.textContent = 'Gracias. Tu mensaje entró bien.';
      form.reset();
    } catch (err) {
      console.error(err);
      if (note) note.textContent = 'No se pudo enviar. Probá de nuevo.';
    }
  });
}