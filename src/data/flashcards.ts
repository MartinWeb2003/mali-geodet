import { Flashcard } from '../types'

// Sjeme kartica generirano iz ispitnog materijala (Grupe A–D).
// Kartice koje kao odgovor imaju sliku (skice / izvodi formula) referenciraju
// datoteke u /public/flashcards/. Te datoteke Luka dodaje ručno — popis
// očekivanih naziva nalazi se u public/flashcards/README.md.

type SeedCard = Pick<Flashcard, 'id' | 'front' | 'back' | 'setName'> & {
  images?: string[]
}

const seed: SeedCard[] = [
  // ---------------------------------------------------------------- Grupa A
  {
    id: 'a1',
    setName: 'Grupa A',
    front: 'Uvjeti terena na izvršenje zadatka',
    back:
      'a) Nepristupačnost terena\n' +
      'b) Zaraštenost (visoka vegetacija, ratarske kulture)\n' +
      'c) Izgrađenost (urbana, ruralna, nenaseljena)\n' +
      'd) Prepreke (vodeni tokovi, promet, loša vidljivost)\n' +
      'e) Opasnosti (mine, tuneli, rudokopi, kamenolomi)',
  },
  {
    id: 'a2',
    setName: 'Grupa A',
    front: 'Mjerenje u geodetskom smislu',
    back:
      'Mjerenje je usporedba dviju istovrsnih veličina, gdje se jedna koristi kao jedinična mjera.\n\n' +
      'U geodeziji su mjerenja ključni dio radova i obuhvaćaju linearna, kutna i vektorska mjerenja.\n\n' +
      'Većina geodetskih mjerenja provodi se na terenu, prilagođeno specifičnim prostorima i uvjetima.',
  },
  {
    id: 'a3',
    setName: 'Grupa A',
    front: 'Stabilizacija trigonometrijske točke prvog reda',
    back:
      'Stabilizacija se izvodi podzemno i nadzemno, pri čemu su oba centra u vertikali.\n\n' +
      'Podzemno se postavlja kamena ili betonska ploča s rupom ispunjenom olovom i urezanim križem.\n\n' +
      'Nadzemno se koristi betonski stup (1,4–1,8 m), koji viri 1–1,2 m iz tla. Točka na vrhu označena je križem ili željeznom šipkom (1,5–2 cm promjera, 15–20 cm duljine) s križem ili rupicom.',
  },
  {
    id: 'a4',
    setName: 'Grupa A',
    front: 'Metode određivanja koordinata',
    back:
      'a) Triangulacija (y, x)\n' +
      'b) Trilateracija (y, x)\n' +
      'c) Presjek pravaca (y, x)\n' +
      'd) Lučni presjek (y, x)\n' +
      'e) Ortogonalna metoda (y, x)\n' +
      'f) Poligonometrija (y, x, h)\n' +
      'g) Tahimetrija (y, x, h)\n' +
      'h) Fotogrametrija (y, x, h)\n' +
      'i) Inercijalni sustav (y, x, h)\n' +
      'j) Astro-geodetska metoda\n' +
      'k) GNSS metoda\n' +
      'l) Nivelman (h)\n' +
      'm) Gravimetrija (g)\n' +
      'n) Geomagnetska metoda (D, I, F)\n' +
      'o) Diferencijalni odometar (y, x, h)',
  },
  {
    id: 'a5',
    setName: 'Grupa A',
    front: 'Objasni poligonske i čvorne točke te koja im je primjena',
    back:
      'Čvorne i poligonske točke su trajno stabilizirane točke na terenu koje imaju određene Kartezijeve 2D koordinate (y, x).\n\n' +
      'U čvornoj točki počinju ili završavaju najmanje 3 poligonska vlaka.\n\n' +
      'Poligonska mreža je niz poligonskih vlakova povezanih u jednu cjelinu.\n\n' +
      'Poligonskim točkama dobivamo geodetsku osnovu za obavljanje geodetskih mjerenja.',
  },
  {
    id: 'a6',
    setName: 'Grupa A',
    front: 'Opasna kružnica',
    back:
      'Opasna kružnica nastaje kada se tri zadane točke A, B i M te tražena točka T nalaze na istoj kružnici.\n\n' +
      'Neodređeni izraz: ako dođe do takvog slučaja, zadatak se ne može riješiti metodom presjeka. Tada je potrebno izmjeriti i neku duljinu do nepoznate točke ili još jedan kut (φ ili ψ).\n\n' +
      '(Vidi skicu i izvod formula u nastavku.)',
    images: ['grupa-a-6-opasna-kruznica-skica.png', 'grupa-a-6-opasna-kruznica-formule.png'],
  },
  {
    id: 'a7',
    setName: 'Grupa A',
    front: 'Rotacija po ε',
    back:
      'Transformacija koordinata između dvaju koordinatnih sustava zarotiranih za kut ε.\n\n' +
      'Zadano: T (y, x), traženo: T′ (y′, x′) — te obrnuti zadatak: zadano T′ (y′, x′), traženo T (y, x).\n\n' +
      '(Vidi skice i izvod formula u nastavku.)',
    images: [
      'grupa-a-7-rotacija-skica-1.png',
      'grupa-a-7-rotacija-skica-2.png',
      'grupa-a-7-rotacija-formule.png',
    ],
  },

  // ---------------------------------------------------------------- Grupa B
  {
    id: 'b1',
    setName: 'Grupa B',
    front: 'Organizacija rada na terenu',
    back:
      'Važno je prvotno dobro definirati predmetni zadatak.\n\n' +
      'U opis zadatka terenskog rada spadaju:\n' +
      '- cilj\n' +
      '- postupci i plan rada\n' +
      '- mogući utjecaji na izvršenje zadatka\n' +
      '- dnevnik rada\n' +
      '- ekspertize, studije, elaborati, izvješća\n' +
      '- mjerenja',
  },
  {
    id: 'b2',
    setName: 'Grupa B',
    front: 'Što su reperi i čemu služe',
    back:
      'Reperi su trajno stabilizirane geodetske točke s poznatom nadmorskom visinom.\n\n' +
      'Oni služe za uspostavljanje visinske mreže i određivanje visina drugih točaka na terenu.',
  },
  {
    id: 'b3',
    setName: 'Grupa B',
    front: 'Što spada u geodetsku dokumentaciju',
    back:
      '1. Geodetske podloge za dio terena na kojem se obavlja posao\n' +
      '2. Podaci geodetske osnove\n' +
      '3. Skica poligonske mreže za tu katastarsku česticu\n' +
      '4. Skica izmjere i geodetske osnove\n' +
      '5. Tahimetrijski ili nivelmanski zapisnik\n' +
      '6. Popis točaka geodetske osnove, detaljnih točaka\n' +
      '7. Tehničko izvješće\n' +
      '8. Digitalni katastarski plan\n' +
      '9. Podaci iz zemljišne knjige o česticama\n' +
      '10. Geodetski elaborat',
  },
  {
    id: 'b4',
    setName: 'Grupa B',
    front: 'Položajni opis trigonometrijske točke sadrži',
    back:
      '1. Položajni opis s orijentacijskom skicom\n' +
      '2. Detaljnu skicu položaja točke\n' +
      '3. Način stabilizacije\n' +
      '4. Signalizaciju\n' +
      '5. Red, broj i ime točke\n' +
      '6. Koordinate točke\n' +
      '7. Nadmorsku visinu točke\n' +
      '8. Zapisnik\n' +
      '9. Nagibe\n' +
      '10. Prostor za upisivanje promjena i posebnih napomena\n' +
      '11. Ime osobe ili tvrtke koja je stabilizirala točku',
  },
  {
    id: 'b5',
    setName: 'Grupa B',
    front: 'Nacrtati i objasniti stabilizaciju niskog repera na ravnom zemljanom terenu i građevini',
    back:
      'Niski reperi ugrađuju se u objekte na visini do 0,5 m iznad terena.\n\n' +
      'Visinu definira najviša točka kugle repera.\n\n' +
      'Postavljaju se betonom, najbolje vertikalno, da se izbjegnu smetnje pri mjerenju. Viri samo glava repera.\n\n' +
      'Uz nadzemni reper postavlja se i podzemni kontrolni reper, koji služi kao zamjena u slučaju oštećenja nadzemnog.',
    images: ['grupa-b-5-niski-reper.png'],
  },
  {
    id: 'b6',
    setName: 'Grupa B',
    front: 'Lučni presjek (2+1 točka)',
    back:
      'Lučni presjek je metoda određivanja koordinata nepoznate točke mjerenjem horizontalnih duljina između nepoznate i poznatih točaka (tri ili više).\n\n' +
      'Zadano: T_A (y_A, x_A), T_B (y_B, x_B), T_C (y_C, x_C); mjereno: d_A, d_B, d_C; traženo: T (y_T, x_T).\n\n' +
      '(Vidi skicu i izvod formula u nastavku.)',
    images: ['grupa-b-6-lucni-presjek-skica.png', 'grupa-b-6-lucni-presjek-formule.png'],
  },
  {
    id: 'b7',
    setName: 'Grupa B',
    front: 'Snellius-Pothenotova metoda',
    back:
      'U Snellius-Pothenotovoj metodi koordinate nepoznate točke određuju se prema izrazima za računanje u Kartezijevome dvodimenzionalnom (ravninskom) koordinatnom sustavu.\n\n' +
      '(Vidi skicu i izvod formula u nastavku.)',
    images: ['grupa-b-7-snellius-pothenot-skica.png', 'grupa-b-7-snellius-pothenot-formule.png'],
  },

  // ---------------------------------------------------------------- Grupa C
  {
    id: 'c1',
    setName: 'Grupa C',
    front: 'Što utječe na izvršenje zadatka',
    back:
      '1. Vrsta terenskog rada\n' +
      '2. Uvjeti na terenu\n' +
      '3. Atmosferski uvjeti\n' +
      '4. Stručna sposobnost mjeritelja i suradnika\n' +
      '5. Stanje i dostupnost geodetske dokumentacije\n' +
      '6. Stanje geodetske osnove na terenu',
  },
  {
    id: 'c2',
    setName: 'Grupa C',
    front: 'Geodetska podloga i osnova',
    back:
      'Geodetsku osnovu čine sve trajno stabilizirane geodetske točke na određenom dijelu Zemljine površine koje imaju poznate koordinate u nekom referentnom sustavu.\n\n' +
      'Geodetska podloga je kartografska podloga izrađena u odgovarajućem mjerilu i ovjerena od strane nadležnog tijela za državnu izmjeru i katastar nekretnina.',
  },
  {
    id: 'c3',
    setName: 'Grupa C',
    front: 'Koja je podjela i svrha trigonometrijskih točaka',
    back:
      'To su nadzemno i podzemno stabilizirane točke s 2D Kartezijevim koordinatama. Povezane su u trokute s izmjerenim pravcima i barem jednom duljinom, tvoreći trigonometrijsku mrežu koja se dijeli prema udaljenosti točaka.\n\n' +
      'Koriste se za znanstvena geodetska istraživanja (dimenzije, oblik i gravitacijsko polje Zemlje) te kao osnova za izmjeru i izradu planova i karata.',
  },
  {
    id: 'c4',
    setName: 'Grupa C',
    front: 'Stabilizacija visokog repera',
    back:
      'Reperi na koje se letva ne može direktno postaviti su visoki reperi.\n\n' +
      'Usađuju se isključivo u zgrade, na visini od 1,2 do 1,8 m iznad terena.\n\n' +
      'Visina koju taj reper definira dana je sredinom rupice promjera 2 mm.',
    images: ['grupa-c-4-visoki-reper.png'],
  },
  {
    id: 'c5',
    setName: 'Grupa C',
    front: 'Kutna mjerenja',
    back:
      'Ona obuhvaćaju horizontalne i vertikalne kutove, a mjere se teodolitom.\n\n' +
      'Horizontalni kut je razlika očitanja dvaju pravaca na horizontalnom limbu. Metode mjerenja horizontalnih kutova su: jednostavna, girusna, Schreiberova, metoda zatvaranja horizonta, sektorska, Francuska i repeticijska.\n\n' +
      'Vertikalni kut očitava se na vertikalnom limbu. On može biti elevacijski, depresijski ili zenitni.',
  },
  {
    id: 'c6',
    setName: 'Grupa C',
    front: 'Ekscentricitet',
    back:
      'Kod ekscentričnog mjerenja kutova nije moguće kutove mjeriti s točke centra te se u njegovoj blizini odabere mjesto za ekscentrično stajalište, uz uvjet da se s njega mogu vizirati sve potrebne točke.\n\n' +
      'Mjesto za ekscentar treba odabrati što bliže centru, kako bi popravke mjerenih kutova tijekom računa centriranja bile što manje.\n\n' +
      '(Vidi skicu i izvod formula u nastavku.)',
    images: ['grupa-c-6-ekscentricitet-skica.png', 'grupa-c-6-ekscentricitet-formule.png'],
  },
  {
    id: 'c7',
    setName: 'Grupa C',
    front: 'Analitička metoda',
    back:
      'U analitičkom načinu koordinate nepoznate točke određuju se prema izrazima za računanje točke presjeka dvaju pravaca.\n\n' +
      'Zadano: T_A (y_A, x_A), T_B (y_B, x_B); mjereno: δ_A, δ_B; traženo: T (y_T, x_T).\n\n' +
      '(Vidi skicu i izvod formula u nastavku.)',
    images: ['grupa-c-7-analiticka-skica.png', 'grupa-c-7-analiticka-formule.png'],
  },

  // ---------------------------------------------------------------- Grupa D
  {
    id: 'd1',
    setName: 'Grupa D',
    front: 'Utjecaj atmosferskih uvjeta na izvršenje zadatka',
    back:
      'Za precizna geodetska mjerenja potrebno je pratiti temperaturu, tlak i vlažnost zraka radi korekcije podataka.\n\n' +
      'Mjerenja je najbolje provoditi rano ujutro ili kasno poslijepodne zbog manjih temperaturnih utjecaja, dok vjetar i oborine mogu otežati ili onemogućiti rad.',
  },
  {
    id: 'd2',
    setName: 'Grupa D',
    front: 'Što su i koja je svrha GPS točaka',
    back:
      'To su trajno stabilizirane točke s elipsoidnim koordinatama (φ, λ, h) iz kojih se dobivaju ravninske koordinate (y, x) i nadmorska visina (h).\n\n' +
      'One čine geodetsku osnovu određenog područja, koriste se za topografska i kartografska mjerenja te praćenje pomaka i deformacija terena.',
  },
  {
    id: 'd3',
    setName: 'Grupa D',
    front: 'Načini mjerenja duljina',
    back:
      'a) Mehaničko – vrpcom, žicom ili letvom\n' +
      'b) Optičko – optički daljinomjer\n' +
      'c) Elektroničko – mjerenjem vremena prijenosa EM vala između primopredajnika i reflektora\n' +
      'd) Koordinatno – računski na temelju koordinata točaka',
  },
  {
    id: 'd4',
    setName: 'Grupa D',
    front: 'Girusna metoda',
    back:
      'Mjere se horizontalni pravci u girusima. Svaki girus ima dva polugirusa.\n\n' +
      'Početni pravac mora biti jasno vidljiv, dobro definiran i udaljen najmanje 100 m, poželjno prema sjeveru.\n\n' +
      'Ako se mjeri više girusa, početni pravac se pomiče za δ = 180°/n, gdje je n broj girusa.',
  },
  {
    id: 'd5',
    setName: 'Grupa D',
    front: 'Stabilizacija poligonske točke u betonu',
    back:
      'Izvodi se postavljanjem metalne oznake u betonski temelj.\n\n' +
      'Betonski blok osigurava trajnost i stabilnost točke, a oznaka na površini omogućuje precizno postavljanje instrumenta za mjerenje.',
    images: ['grupa-d-5-poligonska-tocka-beton.png'],
  },
  {
    id: 'd6',
    setName: 'Grupa D',
    front: 'Računanje smjernog kuta i duljine uz zadane koordinate',
    back:
      'Smjerni kut ν i duljina d računaju se iz razlika koordinata Δy i Δx, vodeći računa o kvadrantu (predznaci Δy i Δx).\n\n' +
      '(Vidi skice po kvadrantima i formule u nastavku.)',
    images: ['grupa-d-6-smjerni-kut-skice.png', 'grupa-d-6-smjerni-kut-formule.png'],
  },
  {
    id: 'd7',
    setName: 'Grupa D',
    front: 'Collinsova metoda',
    back:
      'Zadatak se svodi na računanje dvaju presjeka naprijed, koristeći pritom jedan od Talesovih teorema: „obodni kutovi nad istim lukom su jednaki”.\n\n' +
      'Zadano: T_A (y_A, x_A), T_B (y_B, x_B), T_M (y_M, x_M); mjereno: α, β; traženo: T (y_T, x_T).\n\n' +
      '(Vidi skicu i izvod formula u nastavku.)',
    images: [
      'grupa-d-7-collins-skica.png',
      'grupa-d-7-collins-formule-1.png',
      'grupa-d-7-collins-formule-2.png',
    ],
  },
]

export const flashcards: Flashcard[] = seed.map(card => ({
  ...card,
  attemptCount: 0,
  consecutiveCorrect: 0,
  lastAttempted: null,
}))
