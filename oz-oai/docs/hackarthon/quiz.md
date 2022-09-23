---
sidebar_position: 3
---

# Quiz

Sprawdź swoją wiedzę

export const Init = ({children}) => {window.i=1; return <></>}

export const Odp = ({children}) => <label><input type="radio" name={`pyt${window.i}`}/>{children}</label>;

export const Form = ({children}) => (<form action="https://zochniak.pl/oaiz/save.exe" method="POST"
  onSubmit={ev => {
    if(0) ev.preventDefault();
    const form = ev.target || ev.target.closest('form')
    if(0) fetch(form.action, {method: 'POST'}).then(r => {
      debugger;
    })
    form.querySelector('.resp').innerHTML = 'Gratulacje, wygrałeś/-aś?';
  }}
  >
  {children}
  <div class='resp'></div>
  <button type="submit">Wyślij</button>
</form>);

export const Pytanie = ({children}) => {
  // i+=1;
  return <div style={{marginTop: '30px', display: 'flex', flexDirection: 'column'}}>
    Pytanie {window.i++}. {children}
  </div>;
}

import BrowserOnly from '@docusaurus/BrowserOnly';

<BrowserOnly>
{() => <Form>
<Init/>

<Pytanie>
<b>Zbiorów jakiego obiketu dotyczy Hackathon</b>
<Odp>Zachęta Narodowa Galeria Sztuki</Odp>
<Odp>Wikipedia</Odp>
<Odp>British Museum</Odp>
</Pytanie>

<Pytanie>
<b>Na kanale Youtube jakiej organizacji relacjonowany jest przebieg hackathonu?</b>
<Odp>Centrum Cyfrowe</Odp>
<Odp>Unia Europejska</Odp>
<Odp>Towarzystwo Zachęty Sztuk Pięknych</Odp>
</Pytanie>

<Pytanie>
  <b>Która ze ścieżek nie jest dostępna w trwającym hackathonie?</b>
  <Odp>D jak Działanie</Odp>
  <Odp>M jak Malarstwo</Odp>
  <Odp>N jak Natura</Odp>
  <Odp>S jak Słowo</Odp>
</Pytanie>

<Pytanie>
  <b>Które zasoby nie są sugerowane przez gospodarzy hackathonu?</b>
  <Odp>Katalog Narodowa Galeria Sztuki Zachęta</Odp>
  <Odp>Wikipedia Data</Odp>
  <Odp>Wikimedia Commons</Odp>
  <Odp>Europeana</Odp>
</Pytanie>

<Pytanie>
  <b>(łatwe) Która z wymienionych postaci widnieje w zbiorach</b>
  <Odp>Adama Półtawskiego</Odp>
  <Odp>Włodzimierz Sel</Odp>
  <Odp>Anna Bielawska</Odp>
  <Odp>Andrzej Heidrich</Odp>
</Pytanie>

<Pytanie>
  <b>(trudne) Kto z wymienionych nie był związany z żadnym z wydarzeń w 2021r. w Zachęcie?</b>
  <Odp>Magdalena Abakanowicz</Odp>
  <Odp>Joanna Rajkowska</Odp>
  {/* <Odp>Anna Olszewska</Odp> */}
  <Odp>Maciej Salamon</Odp>
  <Odp>Anna Bielawska</Odp>
</Pytanie>
{/* https://zacheta.art.pl/pl/kalendarz?date-from=2021-01-01&date-to=2021-12-31 */}
{/* <Pytanie>
  <b>Która z wymienionych postaci widnieje w zbiorach</b>
  <Odp>Adama Półtawskiego</Odp>
  <Odp>Włodzimierz Sel</Odp>
  <Odp>Anna Bielawska</Odp>
  <Odp>Andrzej Heidrich</Odp>
</Pytanie> */}
<br/>

[API Katalogu artystów](./podstawy-api/05-katalog-artystow.md)

<Pytanie>
  <b>Jaki parametr pozwoli wyszukać artystów, którzy mają dziś urodziny?</b>
  `https://apihackaton.zacheta.art.pl/api/v1/artworks?...`
  <Odp>Artists[Birthday][$eq]=09-29</Odp>
  <Odp>Artists[Birthday][$startsWith]=09-29</Odp>
  <Odp>Artists[Birthday][$endsWith]=09-29</Odp>
  <Odp>Artists[Birthday][$gt]=1997-05-01</Odp>
</Pytanie>

<Pytanie>
  <b>Jak wyszukać artystów, którzy urodzili się w 1923r.?</b>
  `https://apihackaton.zacheta.art.pl/api/v1/artists?...`
  <Odp>Artists[Birthday][$eq]=1923</Odp>
  <Odp>Artists[Birthday][$gt]=1923</Odp>
  <Odp>Birthday[$endsWith][$startsWith]=1923</Odp>
  <Odp>Birthday[$endsWith][$endsWith]=1923</Odp>
</Pytanie>

<Pytanie>
  <b>Jak nazywa się artysta widniejący pod ID 24</b>
  `https://apihackaton.zacheta.art.pl/api/v1/artists?...`
  <Odp>Paweł Althamer</Odp>
  <Odp>Jerzy Nowosielski</Odp>
  <Odp>Jadwiga Sawicka</Odp>
  <Odp>Krzysztof Wodiczko</Odp>
</Pytanie>

</Form>}
</BrowserOnly>

<!-- ```
curl --request GET \
  --url 'https://apihackaton.zacheta.art.pl/api/v1/artists/23' \
  --header 'Accept: application/vnd.api+json' \
  --header 'Authorization: Bearer {{token}}}}' \
  --header 'Host: apihackathon.zacheta.art.pl'
``` -->
