// Felles for alle sidene: «Større tekst» og menyen.
(function () {
  var rot = document.documentElement;

  // «Større tekst». Valget huskes i nettleseren hvis det er mulig.
  var tekstknapp = document.getElementById('tekststorrelse');
  function settTekst(pa) {
    rot.classList.toggle('stor-tekst', pa);
    if (!tekstknapp) return;
    tekstknapp.setAttribute('aria-pressed', pa ? 'true' : 'false');
    var navn = pa ? 'Vanlig tekst' : 'Større tekst';
    tekstknapp.setAttribute('aria-label', navn);
    var etikett = tekstknapp.querySelector('.lang');
    if (etikett) etikett.textContent = navn;
  }
  try { if (localStorage.getItem('hh-stor-tekst') === '1') settTekst(true); } catch (e) {}
  if (tekstknapp) {
    tekstknapp.addEventListener('click', function () {
      var pa = !rot.classList.contains('stor-tekst');
      settTekst(pa);
      try { localStorage.setItem('hh-stor-tekst', pa ? '1' : '0'); } catch (e) {}
    });
  }

  // Menyen på mobil og nettbrett
  var topp = document.querySelector('.topp');
  var menyknapp = document.getElementById('menyknapp');
  if (!topp || !menyknapp) return;
  var etikett = menyknapp.querySelector('.lang');
  function settMeny(apen) {
    topp.classList.toggle('meny-apen', apen);
    menyknapp.setAttribute('aria-expanded', apen ? 'true' : 'false');
    if (etikett) etikett.textContent = apen ? 'Lukk' : 'Meny';
  }
  menyknapp.addEventListener('click', function () {
    settMeny(!topp.classList.contains('meny-apen'));
  });
  // Lukk menyen når man velger en lenke, trykker Escape eller klikker utenfor
  topp.addEventListener('click', function (e) {
    if (e.target.closest('.hovedmeny a')) settMeny(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && topp.classList.contains('meny-apen')) { settMeny(false); menyknapp.focus(); }
  });
  document.addEventListener('click', function (e) {
    if (topp.classList.contains('meny-apen') && !topp.contains(e.target)) settMeny(false);
  });
})();
