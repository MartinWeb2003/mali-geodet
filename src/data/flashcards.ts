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

  // ---------------------------------------------------------------- Izmjera
  { id: 'iz1', setName: 'Izmjera', front: 'Povijesni razvoj geodezije', back: 'Homer/Tales (800-600 pr.Kr.) – Zemlja disk; Pitagorejci (500 pr.Kr.) – sferni oblik (dokaz: nestajanje broda, okrugla sjena pri pomrčini); Eratosten (240 pr.Kr.) – izračunao Zemljin opseg; Fernel – duljina luka Paris–Amiens; Kopernik – heliocentrični sustav; Kepler – zakoni gibanja planeta; Snellius – trig. odredio luk meridijana; Francuska akademija – ekspedicije Laponija i Ekvador (potvrda eliptičnog oblika); Bošković i Le Maire – spljoštenost Zemlje; Helmert – definicija geodezije (ZNANOST O IZMJERI I PRIKAZIVANJU ZEMLJINE POVRŠINE); 1884. – Greenwich meridijan; Bessel – lučna mjerenja u Pruskoj.' },
  { id: 'iz2', setName: 'Izmjera', front: 'Oblik i veličina Zemlje', back: 'Fizička površina je nepravilna. Modeli: Sfera (osnovni oblik), Rotacijski elipsoid (uzima u obzir spljoštenost), Geoid (male promjene sile teže), Ravnina (manji dio površine). Zemlja je geoid koji se aproksimira rotacijskim elipsoidom. Razlikuju se: fizička površina, geoid (fizikalni oblik), elipsoid (referentna ploha). Besselov elipsoid – naš teritorij; Hayford – međunarodno priznat.' },
  { id: 'iz3', setName: 'Izmjera', front: 'HDKS – Gauss-Krügerov koordinatni sustav', back: 'Konformna poprečna cilindrična projekcija (kutovi nepromjenjivi). Baziran na transverzalnoj Mercatorovoj projekciji – točke elipsoida preslikavaju se na plašt valjka koji dodiruje središnji meridijan. Što se više odmičemo prema istoku ili zapadu, deformacije su veće. Meridijani i paralele sijeku se pod pravim kutom. Položaj određen pravokutnim koordinatama y i x. Fundamentalna točka: Hermannskogel. Zasnovan na Besselovom elipsoidu. Pogreška deformacije dužine: 1 dm/km; širina zone do 3°.' },
  { id: 'iz4', setName: 'Izmjera', front: 'HTRS96 – novi hrvatski terestrički referentni sustav', back: 'Položajna mreža od 78 osnovnih trajno stabiliziranih geodetskih točaka čije su koordinate određene u ETRS89 (jedinstveni europski koordinatni sustav). Uveden 1995. kao službeni položajni referentni koordinatni sustav RH. Zasnovan na preslikavanju elipsoida GRS80 u ravninu projekcije po zakonitostima poprečne Mercatorove projekcije.' },
  { id: 'iz5', setName: 'Izmjera', front: 'Geodetski koordinatni sustavi i datum', back: 'Datum – parametar koji definira položaj, ishodište, mjerilo i orijentaciju referentnog koord. sustava. Globalni geodetski datum – aproksimira cijelu Zemlju, geocentrični (WGS84). Lokalni geodetski datum – aproksimira određeno područje (regija, država). Veza lokalnog i globalnog: Helmertova transformacija (3 translacije + 3 rotacije + 1 faktor mjerila = 7 parametara). Stari sustavi: Bečki, Krimski, Kloštar-Ivanićki, Srednji i Južni. Novi: HTRS96, WGS84.' },
  { id: 'iz6', setName: 'Izmjera', front: 'Prikaz Zemlje – kartografske projekcije', back: 'Površina Zemlje na ravninu se preslikava putem projekcija. Referentne plohe – plohe na kojima se svode geodetska mjerenja. Vrste projekcija: azimutalna, centralna, cilindrična, ekvidistantna, ekvivalentna, Gauss-Krügerova, konformna, konusna, kosa, Mercatorova, ortografska, perspektivna, poliedarska, poprečna Mercatorova (TM), UTM.', images: ['izmjera-q26.png'] },
  { id: 'iz7', setName: 'Izmjera', front: 'Metode određivanja visinskih razlika', back: '1. Trigonometrijsko mjerenje visina → Δh = d · tan φ\n2. Geometrijski nivelman → horizontalna vizura, Δh = Z − P (najveća točnost)\n3. Hidrostatski nivelman\n4. Barometrijski nivelman\n5. Satelitska metoda – GPS mjerenja' },
  { id: 'iz8', setName: 'Izmjera', front: 'Geometrijski nivelman', back: 'Određivanje visinskih razlika dviju točaka pomoću horizontalne vizure. Instrument: nivelir (optički s libelom ili kompenzatorom, laserski, digitalni). Durbin se okreće samo oko vertikalne osi; kolimacijska os je horizontalna. Δh = Z − P (razlika očitanja letvi). Po svrsi: generalni (određuje visinu repera) i detaljni (visine detaljnih točaka). Primjena: trasiranje, izgradnja prometnica, regulacija vodenih tokova, ispitivanje pomaka i deformacija objekata.' },
  { id: 'iz9', setName: 'Izmjera', front: 'Ispitivanje i rektifikacija nivelira', back: '1. Vertikalna os mora biti vertikalna (horizontiranjem).\n2. Kolimacijska os mora biti horizontalna (niveliranjem iz sredine i s kraja).\n3. Horizontalna nit nitnog križa treba biti horizontalna (vizira se točka, pomičemo durbin horizontalnim vijkom – ako i dalje pogađa točku, OK; ako ne, ispravljamo korekcijskim vijcima).\n4. Ispitivanje nule letve (na ~20 m, čita se lijeva i desna podjela letve A i B – treba biti isto; eliminira se parnim brojem stajališta).\n5. Ispitivanje vrijednosti skale mikrometra.' },
  { id: 'iz10', setName: 'Izmjera', front: 'Detaljni nivelman', back: 'Postupak za određivanje nadmorskih visina detaljnih točaka u ravnim i blago nagnutim terenima. Vezne točke: papuče (meki teren) ili kamen (tvrdi/asfaltirani teren). Prvo se čita letva na reperu, zatim na veznoj točki (na mm). Nakon svih detaljnih točaka s tog stajališta uzima se završna vizura na prednju veznu točku (kontrola; max razlika 2–3 mm). Dijeli se na: det. niv. površine i det. niv. linija.' },
  { id: 'iz11', setName: 'Izmjera', front: 'Niveliranje iz sredine i s kraja', back: 'Iz sredine – ispravno jer se pogreška vizurne osi poništava (jednaka je na obje letve) → to je vrijednost TREBA. S kraja – nivelir se prenosi do jedne od letvi; očitanje na bližoj letvi je ispravno (mala pogreška zbog blizine); očitanje na daljnjoj letvi je krivo ako postoji pogreška. Ako se Δh razlikuje → postoji pogreška vizurne osi. Uvijek je poželjno nivelirati iz sredine.' },
  { id: 'iz12', setName: 'Izmjera', front: 'Postavljanje i stabilizacija nivelmanske mreže', back: 'Nivelmanski vlakovi trebaju: ići po što ravnijem terenu, po tvrdom i stabilnom terenu, biti što kraći. Reperi trebaju biti: visinski pouzdani, dobro visinski definirani, smješteni da što bolje posluže svrsi, lako dostupni za priključak.' },
  { id: 'iz13', setName: 'Izmjera', front: 'Priključak na visoki reper', back: 'Ako je vizura nivelira iznad repera → očitanje na ravnalu je pozitivno. Ako je ispod vizure → očitanje je negativnog predznaka. Mikrometar je uvijek pozitivan i dodaje se na iznos na ravnalu.' },
  { id: 'iz14', setName: 'Izmjera', front: 'Generalni nivelman', back: 'Naziva se i precizni. Radi se u dva smjera: naprijed i natrag. Dozvoljeno odstupanje: 2 mm · √L (L = duljina vlaka u km). Instrument i letvu postavljati na što čvršći teren. Mjerenja se ne izvode u istom danu ni u istom dobu dana (npr. smjer naprijed ujutro → smjer natrag sljedeći dan poslijepodne). Određuje visinu repera.' },
  { id: 'iz15', setName: 'Izmjera', front: 'Pogreška slijeganja papuče i stativa', back: 'Na mekanom terenu (blato, zemlja, smrznuta zemlja) tlo može popustiti pod težinom stativa, što uzrokuje pomak koji nije vidljiv golim okom, ali daje krive rezultate. Kontrola: često gledati kroz os optičkog viska (centriranost) i alhidadnu libelu (horizontiranost). Pogreška slijeganja papuče odnosi se samo na letvu kod niveliranja.' },
  { id: 'iz16', setName: 'Izmjera', front: 'Utjecaj refrakcije pri generalnom niveliranju', back: 'Zbog različitih gustoća zračnih slojeva vizurna linija ne prolazi u pravcu nego u obliku refrakcijske krivulje (fotoni se lome pri prijelazu u različita sredstva). Utjecaj refrakcije eliminiramo niveliranjem iz sredine i s kraja.' },
  { id: 'iz17', setName: 'Izmjera', front: 'Izjednačenje nivelmanskog vlaka', back: 'Izjednačenje je uklanjanje odstupanja između mjerenih i zadanih vrijednosti. Nivelman se sastoji od vlakova priključenih na repere poznatih visina. Mjerodavne su visinske razlike u oba smjera. Rezultati se iskazuju aritmetičkim sredinama obostranih mjerenja. Za dugačke vlakove dodaju se ortometrijski popravci. Svakoj visinskoj razlici u dionicama dodaje se popravka vh uz zadani uvjet.' },
  { id: 'iz18', setName: 'Izmjera', front: 'Izvori pogrešaka pri niveliranju', back: 'Grube: pogreška u očitanju letve (propust dm ili cm), zaboraviti navrhuniti lib., pročitati g ili d nit umjesto srednje, neuklonjena paralaksa.\nSistematske i slučajne – vezane za letvu (nevertikalna, kriva podjela), instrument (neparalelnost kolim. osi s gl. tangentom libele), atmosferske prilike, procjenu položaja niti na letvi.' },
  { id: 'iz19', setName: 'Izmjera', front: 'Pribor kod preciznog nivelmana', back: '2 nivelmanske papuče, stativ, nivelir sa mikrometrom, 2 nivelmanske letve, ravnalo za visoki reper.' },
  { id: 'iz20', setName: 'Izmjera', front: 'Određivanje apsolutnih visina', back: 'Reperima se određuje stalna visina pomoću obostrano priključenog nivelmanskog vlaka. Naviziramo na reper (iznad vizure → predznak +; ispod vizure → predznak −; mikrometar uvijek +). Letva se postavlja na ~30 m, računa se Δh = Z − P, pomičemo letvu za ~30 m i ponavljamo do tražene točke, pa do sljedećeg poznatog repera (smjer naprijed). Zatim se kreće natrag. Pogreška: T (razlika repera) − I (suma Δh). Popravka: d · pogreška / Duk. Ne mjeri se u istom danu ni periodu.' },
  { id: 'iz21', setName: 'Izmjera', front: 'Trigonometrijsko mjerenje visinskih razlika', back: 'Instrument: teodolit. Mjeri se visinski kut φ ili zenitna daljina z, plus horizontalna ili kosa duljina. Elektronički tahimetri objedinjuju oba mjerenja.\nFormule: Δh = d · tg φ = d · ctg z; Δh = d′ · sin φ = d′ · cos z\ngdje: φ – visinski kut, z – zenitna daljina, d – horiz. duljina, d′ – kosa duljina.', images: ['izmjera-q21.png'] },
  { id: 'iz22', setName: 'Izmjera', front: 'Trigonometrijsko mjerenje visinskih razlika bliskih točaka', back: 'Za bliske točke ne uzima se u obzir zakrivljenost Zemlje ni refrakcija. Razvija se pomoćni trokut; mjere se: horiz. i vert. kutovi (α₁, α₂, φ₁, φ₂), duljina d, visine horizonta instrumenta u točkama A i B. Stabiliziraju se pomoćne točke koje se međusobno dogledaju. Mjere se horiz. duljine i zenitni kutovi prema traženoj točki. Koriste se nivelman ili GNSS metode.', images: ['izmjera-q22.png'] },
  { id: 'iz23', setName: 'Izmjera', front: 'Geodetske mreže', back: 'Niz točaka poznatih koordinata raspoređenih po terenu po određenim pravilima. Vrste: triangulacijska, trilateracijska, poligonska, nivelmanska, gravimetrijska, GNSS mreže. Metode uspostave: terestrička (triangulacija, trilateracija, poligonometrija, nivelman, gravimetrija) i metoda satelitske geodezije. Razvoj: iz velikog u malo. Geodetska osnova – stabilizirana točka s poznatim koordinatama (položajnim i visinskim).' },
  { id: 'iz24', setName: 'Izmjera', front: 'Triangulacijska mreža', back: 'Koordinate se određuju uglavnom iz kutnih mjerenja. Računanja po pravilima sfere ili ravne trigonometrije. Da bi se odredila cijela mreža, treba poznavati: koordinate 1 točke, 1 duljinu i 1 azimut. Primjena: dimenzije/oblik/gravitacijski pol Zemlje, inž.-tehničke zadatke, geometrijska osnova za izmjeru i kartiranje. Oblici: geodetski četverokut, centralni sustav, lanac trokuta, kombinacija.' },
  { id: 'iz25', setName: 'Izmjera', front: 'Podjela osnovne trigonometrijske mreže', back: 'Mreža 1. reda (20–50 km), osnovna mreža 2. reda (15–25 km), popunjavajuća mreža 2. reda (9–18 km), osnovna mreža 3. reda (5–13 km), popunjavajuća mreža 3. reda (3–7 km), mreža 4. reda (1–4 km).' },
  { id: 'iz26', setName: 'Izmjera', front: 'Metode izmjere (snimanja)', back: 'Grafička metoda: geodetski stol, fotogrametrijska metoda (terestrička fotogrametrija, aerofotogrametrija).\nNumerička metoda: ortogonalna metoda, polarna metoda.\nMetode satelitske geodezije (GNSS).', images: ['izmjera-q26.png'] },
  { id: 'iz27', setName: 'Izmjera', front: 'Ortogonalna metoda', back: 'Mjere se pravokutne koordinate detaljnih točaka u relativnom koord. sustavu (ishodište P1, os x okomita na liniju P1P2). Koristi se u izgrađenim i ravnim terenima. P1 i P2 su točke geodetske osnove postavljene rekognosciranjem. Na P1 i P2 postave se trasirke, napne se čelična vrpca (mjere apscise do nožišta okomice). Drugom vrpcom mjeri se ordinata. Točke se snimaju neposredno i posredno.' },
  { id: 'iz28', setName: 'Izmjera', front: 'Polarna metoda', back: 'Mjere se relativne polarne koordinate detaljnih točaka s obzirom na neku točku (npr. poligonsku) i smjer prema susjednoj točki. Prostorne polarne koord.: horiz. kut α, vert. kut φ i kosa duljina d′ (mjerna stanica). Daje istovremeno horiz. i vert. snimak terena. dh = d′ · cos φ; Δh = d′ · sin φ + i − r.' },
  { id: 'iz29', setName: 'Izmjera', front: 'Izmjera detalja', back: 'Prije rada: skica izmjere. Nakon rekognosciranja nanesu se koordinate poznate točke i gruba skica detalja. Na sve karakteristične točke redom se postavlja prizma i čitaju se horiz. i vert. kut i dužina. Snimaju se i profili (gustoća ovisi o konfiguraciji terena). Na poligonsku točku se postavi mjerna stanica, centrira i horizontira. Točke se numeriraju 1–999. Ako je zaraštenost problem, prizma se uzdiže i to se upisuje u zapisnik. Na kraju se ponovnim viziranjem kontrolira nepomičnost instrumenta.' },
  { id: 'iz30', setName: 'Izmjera', front: 'Pravila pri snimanju detalja', back: 'Snimaju se u 1 položaju instrumenta (nije potrebna velika preciznost). Snimaju se GNSS-om i mjernom stanicom. Područja bez GNSS signala (zaraštenost, urbano okružje) snimaju se mjernom stanicom. Profili brežuljaka snimani su s 6 točaka.' },
  { id: 'iz31', setName: 'Izmjera', front: 'Tahimetrija', back: 'Mjere se relativne polarne koordinate detaljnih točaka u odnosu na neku točku (poligonsku) i neki početni smjer (poligonska strana). Istovremeno se dobiva horizontalni i vertikalni prikaz terena. Sve tri veličine za svaku točku mjere se totalnom (mjernom) stanicom. Koristi se tamo gdje se je ranije koristila ortogonalna metoda.' },
  { id: 'iz32', setName: 'Izmjera', front: 'Metode mjerenja dužine', back: 'Mehaničko: najstarija; letve, žice, vrpce; problem: konfiguracija terena i prepreke.\nOptičko: rješavanje paralaktičkog trokuta; zadana duljina letve → mjeri se kut teodolitom; ili zadan kut → mjeri se odsječak (Reichenbachov); nedostatak za kraće duljine.\nElektroničko: poznata brzina el. vala; mjeri se vrijeme puta od instr. do reflektora i natrag; veći doseg i brzina.\nGNSS.\nNeposredno: čelična/invarska vrpca. Posredno (daljinomjeri): elektronički, optički, GPS, trigonometrijski.' },
  { id: 'iz33', setName: 'Izmjera', front: 'Korekcija duljina', back: 'D = D′ + ΔdAK + ΔdΔH + ΔdRe + Δdp + C\n1. Korekcija zbog meteoroloških uvjeta (1. i 2. brzinska korekcija → stvarna kosa duljina).\n2. Redukcija kose dužine na horizont (2 načina: vis. razlika ili vis. kut).\n3. Redukcija dužine na nivo plohu elipsoida (duljina luka; treba tetiva i visine krajnjih točaka).\n4. Redukcija dužine na ravninu projekcije (može biti +, − ili 0).' },
  { id: 'iz34', setName: 'Izmjera', front: 'Izvori pogrešaka pri mjerenju dužina', back: '1. Pogreška kompariranja vrpce\n2. Pogreška krivo određene vis. razlike\n3. Pogreška temperature\n4. Pogreška aliniranja vrpce\n5. Pogreška ugibanja vrpce\n6. Pogreška promjene sile zatezanja\n7. Pogreška nesvođenja na plohu ref. elipsoida\n8. Pogreška nesvođenja u ravninu projekcije\n9. Pogreška atmosferskih uvjeta (elektrooptički daljinomjeri)\n10. Pogreška centriranja daljinomjera\n11. Pogreška centriranja reflektora\n12. Pogreška mjerene zenitne duljine' },
  { id: 'iz35', setName: 'Izmjera', front: 'Što se mjeri u poligonskom vlaku?', back: 'Prijelomni i vezni kutovi, kose duljine, visine instrumenta na svakom stajalištu i visine signala. Kao rezultat dobivamo koordinate točaka poligonskog vlaka.' },
  { id: 'iz36', setName: 'Izmjera', front: 'Kutovi u poligonometriji', back: 'Prijelomni kutovi (između nepoznatih točaka), vezni kutovi (između poznate i nepoznate točke), smjerni kutovi (dobiveni računanjem).' },
  { id: 'iz37', setName: 'Izmjera', front: 'Poligonski vlak – vrste i primjena', back: 'Niz točaka stabiliziranih na terenu (nadzemni i podzemni centar), povezanih mjerenjima kutova i duljina. Služi za progušćivanje triangulacijske mreže i izradu geod. osnova pri izmjeri, iskolčenju građevina i podzemnih objekata. Oblici: ispruženi i izduženi.\nVrste: Umetnuti (između dvije trig. točke), Zatvoreni (počinje i završava na istoj točki), Slijepi (počinje na poznatoj, završava na nepoznatoj).\nPo priključku: 1. obostrano (smjer + koord.); 2. početak smjer+koord., kraj samo koord.; 3. samo koord.; 4. slijepi.' },
  { id: 'iz38', setName: 'Izmjera', front: 'Zatvoreni poligonski vlak', back: 'Počinje i završava na istoj poznatoj točki. Početni i završni smjerni kut su jednaki. Kutna nesuglasica: fβ = T − I = νBA − (νAB + [β] − n · 180°).' },
  { id: 'iz39', setName: 'Izmjera', front: 'Obostrano priključeni poligonski vlak', back: 'Izmjere se sve kutovi β, stranice, i odrede početni i završni smjerni kut iz poznatih koord. Smjerni kut 1. stranice: poč. sk + β₁ − 180°. Završni IMA = poč. sk + Σβ − n · 180°; TREBA iz koord. Razlika T−I = kutna nesuglasica (jednaka popravka svakom kutu). Horiz. duljina: d′ · sin φ. ΔE = dh · sin(sk); ΔN = dh · cos(sk). Koord. nesuglasica: (E_zadnje − E_prvo) TREBA vs. ΣΔE IMA. Popravka: pogreška · dh / Duk. Konačne koord.: prethodno stajalište + popravka + Δ.' },
  { id: 'iz40', setName: 'Izmjera', front: 'Poligonski vlak po koordinatama', back: 'Kada ne možemo mjeriti vezne kutove, postavi se lokalni koord. sustav u početnoj točki (os Y = prva poligonska strana; os X okomita na Y). Prvi smjerni kut = 90°. Ostali smjerni kutovi računaju se kao kod obostrano priključenog vlaka.' },
  { id: 'iz41', setName: 'Izmjera', front: 'Slijepi poligonski vlak', back: 'Počinje na poznatoj, završava na nepoznatoj točki. Nema kutnog, položajnog ni visinskog odstupanja. Računa se: 1. smjerni kut (iz formule i reduciranih sredina kutova β), horiz. duljina (d′ · sin z), ΔE i ΔN (dh · sin sk; dh · cos sk). Konačne koord.: koord. prve točke + ΔE (analogno za ΔN).' },
  { id: 'iz42', setName: 'Izmjera', front: 'Stabilizacija poligonskih točaka', back: 'Kameni ili betonski stupac (nad i pod centar); keramičke ili betonske cijevi (nad i pod centar); željezna kapa (asfalt/beton; pod i nad centar); stjenoviti/kamenit teren (nad centar – na živi kamen).' },
  { id: 'iz43', setName: 'Izmjera', front: 'Mjerenje kutova', back: 'Najčešće pomoću teodolita. Bitna je orijentacija (međusobni odnosi točaka, ispravnost koordinata, pažljivo viziranje na terenu). Prijelomni i vezni kutovi mjere se girusnom metodom (1/2 girusa).' },
  { id: 'iz44', setName: 'Izmjera', front: 'Pogreške koje utječu na mjerenje kutova', back: 'Unutarnje (izvor u instrumentu): pogreške podjele limba i optičkog mikrometra; pogreške očitanja; pogreške viziranja (povećanje durbina, vanjski uvjeti, udaljenost, fokusiranje, oblik signala); pogreške horizontiranja (osjetljivost alhidadne libele).\nVanjske (mogu se ukloniti metodom rada ili uvjetima mjerenja): utjecaj bočne refrakcije (proboj tunela); pogreška centriranja instrumenta (loš optički visak); pogreška centriranja signala (signal ekscentričan); pogreška uvijanja stativa (zagrijavanje – mjeri se dvaput).' },
  { id: 'iz45', setName: 'Izmjera', front: 'Priključak poligonskog vlaka na nepristupačnu točku', back: 'Nije moguće izmjeriti vezni kut β ni prvu stranu vlaka d₁. Potrebno je postaviti 1 ili više pomoćnih točaka.' },
  { id: 'iz46', setName: 'Izmjera', front: 'GPS', back: 'Globalni pozicijski sustav; 24 satelita u orbiti. Svaka točka se određuje zasebno (nema prijenosa pogrešaka), ne zahtjeva posebne vještine, primjenjiv na Zemlji, moru i u zraku, u bilo koje doba dana bez obzira na meteorologiju. Primjena u katastru nekretnina. Segmenti: svemirski, kontrolni, korisnički.' },
  { id: 'iz47', setName: 'Izmjera', front: 'Primjena GNSS-a i nedostaci', back: 'Primjena: ubrzalo razvoj geodetskih mreža, jednostavno određivanje koordinata, izmjera zemljišta, koordinate stajališta i orijentacije za trigonometriju, geodetska situacija (jednoznačno određuje visinu terena). Nedostaci: mora biti otvoreno nebo; smetnje od dalekovoda, snijega, staklenih zgrada, urbane gradnje.' },
  { id: 'iz48', setName: 'Izmjera', front: 'Dijelovi GPS-a', back: 'Svemirski segment: 28 satelita; 11h 57 min za obilazak Zemlje; 6 orbitalnih ravnina; prijem signala s min. 4 satelita; na satelitima: odašiljač, prijamnik, memorija, antene, oscilatori, mikroprocesor.\nKontrolni segment: nadzire putanje i ispravnost satelita, kontrolira vremensku komponentu; 5 opažačkih stanica, 1 gl. kontrolna stanica, 3 zemaljske antene.\nKorisnički segment: prijemnik + satelitska antena; vojni i civilni korisnici; navigacija, mobiteli, promet.' },
  { id: 'iz49', setName: 'Izmjera', front: 'GNSS statika', back: 'Daje visoku točnost (±1 mm + 1 ppm) na velikim udaljenostima za geodetske mreže. Jedan prijamnik na poznatoj točki (φ, λ, h), drugi na nepoznatoj. Opažanje: 10 min do nekoliko sati/dana (za promjenu geometrije prijamnik–satelit radi određivanja cjelobrojne neodređenosti). Primjena: državne geodetske mreže, pomaci tektonskih ploča, deformacijska mjerenja.' },
  { id: 'iz50', setName: 'Izmjera', front: 'RTK metoda', back: 'Real-Time Kinematic. Omogućuje snimanje velikog broja točaka i prikaz u realnom vremenu, direktno iscrtavanje detalja na terenu. Primjenjuje se kod novih katastarskih izmjera (velika količina detalja na malom području) i kod iskolčenja točaka. Najčešće se koristi u geodeziji.' },
]

export const flashcards: Flashcard[] = seed.map(card => ({
  ...card,
  attemptCount: 0,
  consecutiveCorrect: 0,
  lastAttempted: null,
}))
