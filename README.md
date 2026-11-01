# Hverdagshelten – nettside

*En hjelpende hånd.* Nettsiden ligger på
<https://hverdagsheltenub.github.io/hverdagshelten-nettside/> (GitHub Pages fra `main`).

## Filer

| Fil | Hva den er |
| --- | --- |
| `index.html` | Forsiden med alt innhold, skjemaene og chatten |
| `personvern.html` | Personvernerklæringen |
| `stil.css` | Felles utseende for begge sidene (farger, skrift, knapper) |
| `felles.js` | «Større tekst»-knappen og menyen på mobil/nettbrett |
| `prototype/index.html` | Den klikkbare modellen av appen (Anne og Emil). Vises under «Prøv appen» på forsiden |
| `robots.txt`, `sitemap.xml` | Hjelper Google å finne sidene |
| `*.jpg`, `*.png` | Bilder, logo og ikoner |

## Skjemaene og Gmail

Begge skjemaene (påmelding til appen og innspill under «Prøv appen») sendes via
[FormSubmit](https://formsubmit.co) til **hverdagsheltenub@gmail.com**.

- Det finnes ingen passord eller API-nøkler i koden. FormSubmit kjenner bare e-postadressen.
- Skjemaet sendes i bakgrunnen, så besøkeren blir på siden og får en tydelig takkemelding.
  Hvis det ikke går (for eksempel dårlig nett), sendes skjemaet på vanlig måte i stedet.
- Innspill har emnet «Nytt innspill fra nettsiden». Har avsenderen skrevet e-post, kan du
  trykke «Svar» i Gmail for å svare direkte.

**Etter en endring:** send ett testinnspill fra den publiserte siden og sjekk at e-posten
kommer frem (se også i Søppelpost/Spam første gang).

## Farger og skrift

Lilla `#52395E`, mørk lilla `#3E2A48`, lavendel `#BCA3D8`, krem `#FFE7CE`.
Skrift: Atkinson Hyperlegible (lettlest), og Kalam på den håndskrevne lappen.
