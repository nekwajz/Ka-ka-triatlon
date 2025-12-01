const storyNodes = {
  "scene_1_start": {
    "id": "scene_1_start",
    "type": "story",
    "title": "Start: Triatlon, co nikdo neplánoval",
    "text": "Kačí, představ si sobotní ráno.\nMísto skautské výpravy stojíš v depu místního triatlonu „IronyMan Sázava“.\n\nOrganizátor používá megafon, který nefunguje, takže jen křičí nahlas.\nNa registraci je fronta až k pojízdné toitoice, někdo se snaží natáhnout neopren vzhůru nohama\n a Mango (tvůj nový psí fanoušek) se snaží sežrat oranžový kužel.\n\nTobiáš má na sobě dres s číslem jiného závodníka.\nEliška křičí, že chce taky startovní číslo, jinak je to nefér.\n\nA uprostřed toho stojíš ty.\nChemik, triatlonistka, projekťačka… a člověk, který dnes doufal v normální závod.\n\nCo uděláš na úplném začátku?",
    "choices": [
      {
        "label": "Vezmu to profesionálně – zorganizuju rodinu i závod v hlavě jako projekt.",
        "nextId": "scene_2A_organized"
      },
      {
        "label": "Řeknu: „Tak jo, dneska vedete vy, já to jen přežiju.“",
        "nextId": "scene_2B_kids_lead"
      }
    ]
  },

  "scene_2A_organized": {
    "id": "scene_2A_organized",
    "type": "story",
    "title": "Registrace jako status meeting",
    "text": "Postavíš rodinu do řady u stánku Registrace.\n\n„Tak, plán: já vyzvednu číslo, Tobiáš hlídá MANGA, Eliška… nelez na ten sud, prosím.“\n\nDobrovolník u stánku – vysmátý kluk jménem Radim – ti podá startovní balíček a řekne:\n„Jo a čísla jsme trochu pomíchali, tak kdyby vám na trati někdo fandil cizím jménem, tak to neřešte.“\n\nPodíváš se na startovní listinu a zjistíš, že podle papírů jsi „Božena Turbová, kategorie legendy 60+“.\n\nJak na to zareaguješ?",
    "choices": [
      {
        "label": "Pokusím se to opravit a domluvit se s Radimem jako rozumný člověk.",
        "nextId": "scene_3A_map"
      },
      {
        "label": "Neřeším to. Vnitřně přijímám alter-ego Božena Turbová.",
        "nextId": "scene_3B_dog"
      }
    ]
  },

  "scene_2B_kids_lead": {
    "id": "scene_2B_kids_lead",
    "type": "story",
    "title": "Když organizují děti",
    "text": "„Dneska jste moji trenéři,“ oznámíš.\n\nTobiáš se chopí mapky závodu, otočí ji vzhůru nohama a sebevědomě prohlásí:\n„Plavání bude támhle… nebo tady… každopádně ve vodě.“\n\nEliška se rozhodne, že MANGO je oficiální maskot závodu, a pokouší se mu připevnit startovní číslo.\nDobrovolník Radim se jen směje a strká ti do ruky čip na nohu se slovy:\n„Když to pípne aspoň jednou, bereme to jako úspěch.“\n\nPo chvíli zjistíš, že máš na ruce fixou napsané jiné startovní číslo, než máš na helmě.\n\nCo uděláš?",
    "choices": [
      {
        "label": "Zkusím to řešit u registrace jako zodpovědný dospělý.",
        "nextId": "scene_3A_map"
      },
      {
        "label": "Prohlásím to za součást absurdního triatlonového zážitku a nechám to být.",
        "nextId": "scene_3B_dog"
      }
    ]
  },

  "scene_3A_map": {
    "id": "scene_3A_map",
    "type": "story",
    "title": "Administrativní chaos",
    "text": "Přijdeš k registračnímu stánku a snažíš se situaci vysvětlit.\n\n„Mám jiné číslo na papíře, jiné na ruce a jiné na helmě.“\n\nRadim vytáhne seznam, který vypadá, jako by ho tiskla tiskárna v devadesátých letech po těžké noci.\n\n„Hele, tady jste jednou jako Kačka, jednou jako Božena Turbová…\nRozhodně jste v seznamu. To je dobrý znamení.“\n\nPo dvou minutách si uvědomíš, že tohle je přesně ten typ meetingu, kde nikdy nevznikne zápis.\n\nV jedné věci máš jasno: dneska se rozhodně něco stane.\n\nMANGO ti mezitím poslintá botu a táhne tě směrem ke startu plavání.",
    "choices": [
      {
        "label": "Jdu radši ke startu plavání. Co by se tam mohlo pokazit… že?",
        "nextId": "scene_4_rogalo"
      }
    ]
  },

  "scene_3B_dog": {
    "id": "scene_3B_dog",
    "type": "story",
    "title": "Přijmout chaos jako strategii",
    "text": "Podíváš se na své tři různé startovní identifikace a v duchu si řekneš:\n„Dobře. Dneska prostě nejsem Kačka. Jsem Božena Turbová, pán chaosu.“\n\nDěti jsou nadšené:\nTobiáš: „Takže jsme tým TURBO! To je mnohem lepší!“\nEliška: „Já chci být Turbo jednorožec!“\n\nMANGO naštěstí neřeší žádné identity a táhne tě přímo ke startu plavání.\n\nRozhodneš se, že tam prostě doplaveš jako kdokoliv, kdo má na sobě neopren – a papíry to nějak doženou.",
    "choices": [
      {
        "label": "Vyrazit ke startu plavání a doufat v nejlepší.",
        "nextId": "scene_4_rogalo"
      }
    ]
  },

  "scene_4_rogalo": {
    "id": "scene_4_rogalo",
    "type": "story",
    "title": "Plavecký start: vodní tragikomedie",
    "text": "Stojíš na břehu rybníka, kde se má plavat.\nNa hladině plavou tři nafukovací jednorožci, jedna labuť a jeden závodník,\n který si zjevně spletl závod s wellness pobytem.\n\nRozhodčí jménem Zuzana Píšťalka má v ruce píšťalku, která píská asi o tři vteřiny později, než foukne.\n\nNěkdo vedle tebe si právě nasazuje plavecké brýle na čelo místo na oči,\na jiný závodník zjišťuje, že si nechal zip od neoprenu vepředu.\n\nCo uděláš před startem plavání?",
    "choices": [
      {
        "label": "Zkontroluju brýle, čip a dýchací schopnosti – zkusím být aspoň trochu profi.",
        "nextId": "scene_5A_no_fly"
      },
      {
        "label": "Řeknu si, že to prostě odplavu, i kdybych měla místo kraulu vlnit trapnost.",
        "nextId": "scene_5B_fly_memory"
      }
    ]
  },

  "scene_5A_no_fly": {
    "id": "scene_5A_no_fly",
    "type": "story",
    "title": "Plavání: technická příprava vs. realita",
    "text": "Ještě jednou zkontroluješ brýle.\nJsou na očích. Čip je na noze. Neopren je správně zipem dozadu.\n\nPíšťalka pískne o tři vteřiny později, než Zuzana foukne, ale všichni stejně skočí do vody na první nádech.\n\nRybník je ledový, plný řas a jednoho překvapeného kapra, který vypadal, že šel původně jen pro rohlík.\n\nPár temp zvládáš profesionálně, než ti někdo omylem vyrazí brýle.\nNásleduje krátký segment „plavání na slepo“, doprovázený vnitřním komentářem:\n„Dobře, tak tohle bude spíš zážitek než výkon.“\n\nNakonec z vody vylezeš živá –\nvlasy všude, brýle nakřivo, ale děti ti mávají, jako kdyby jsi vyhrála olympiádu.",
    "choices": [
      {
        "label": "Vyrazím do depa a zkusím najít svoje kolo… pokud ještě existuje.",
        "nextId": "scene_6_reflection"
      }
    ]
  },

  "scene_5B_fly_memory": {
    "id": "scene_5B_fly_memory",
    "type": "story",
    "title": "Plavání: vstup do ledové dimenze",
    "text": "Řekneš si: „No tak, už jsem zažila horší věci než rybník se zubatou vodou.“\n\nSkočíš.\nLedový šok, řasy, kapr… a vedle tebe závodník na nafukovacím jednorožci, který prý „šetří síly na kolo“.\n\nPrvní minuty se snažíš držet techniku, ale brzo přejdeš na styl „jakékoliv tempo, které nevede ke smrti“.\n\nNěkdo ti vrazí ruku na hlavu, jiný tě předplave prapodivnou kombinací znaku a boje o život.\n\nNakonec vylezeš z vody – živá, zadýchaná a lehce posolená ironií.\nDěti ti mávají jako šílené a MANGO se snaží olízat každou část neoprenu zvlášť.\n\nJe čas na kolo. Co by se tam asi tak mohlo pokazit…",
    "choices": [
      {
        "label": "Běžím do depa. Najdu kolo a tvářím se, že to mám pod kontrolou.",
        "nextId": "scene_6_reflection"
      }
    ]
  },

  "scene_6_reflection": {
    "id": "scene_6_reflection",
    "type": "story",
    "title": "Depo: zóna řízeného šílenství",
    "text": "V depu to vypadá jako v open-space pět minut před deadlinem.\nVšichni něco hledají, někdo stojí a jen se otáčí dokola, jiný má helmu obráceně.\n\nTvoje kolo je naštestí pořád tam, kde má být.\nNejsi si jistá, jestli sis helmu nasadila vždycky správně, ale dneska to aspoň nevypadá úplně absurdně.\n\nChvíli se nadechneš a uvědomíš si, že už máš za sebou ledovou koupel, chaos registrace, děti, psa…\na stejně ještě stojíš. Možná mírně vyosená, ale stojíš.\n\nJak chceš pokračovat na kole?",
    "choices": [
      {
        "label": "Pojedu na kole v klidném režimu – chci si to spíš užít a nezabít se.",
        "nextId": "scene_7A_calm"
      },
      {
        "label": "Zkusím režim závodnice – aspoň na oko budu dělat, že jedu o medaili.",
        "nextId": "scene_7B_adventure"
      }
    ]
  },

  "scene_7A_calm": {
    "id": "scene_7A_calm",
    "type": "story",
    "title": "Kolo na pohodu",
    "text": "Vyjedeš z depa a nastavíš si v hlavě mód:\n„Hlavně se nerozsekej a občas se koukni kolem.“\n\nMíjíš pole, rybník, farmu se třemi kozami, které vypadají mnohem méně stresovaně než všichni závodníci.\nJeden dobrovolník ti nabízí kelímek s ionťákem, druhý ti mává cedulí „USMÍVEJ SE, STEJNĚ TO BOLÍ“.\n\nNa chvíli tě napadne, že tenhle triatlon je dost dobrá metafora života:\nplavání chaos, kolo improvizace, běh… to teprve přijde.\n\nPak dorazíš na místo, kde se děje něco divného.",
    "choices": [
      {
        "label": "Zpomalím a zjistím, co se děje.",
        "nextId": "scene_8_symbol"
      }
    ]
  },

  "scene_7B_adventure": {
    "id": "scene_7B_adventure",
    "type": "story",
    "title": "Kolo ve stylu „aspoň to zkusím“",
    "text": "Vyjedeš z depa a v hlavě si pustíš vnitřní soundtrack závodnice.\n\nPředjíždíš pár lidí, kteří očividně trpí víc než ty, a pár těch, kteří jsou na tom podivně dobře.\nJeden závodník jede na horském kole z roku 1995, ale valí to, jako by mu šlo o život.\n\nDobrovolník s cedulí „POSLEDNÍ KOPEC (MOŽNÁ)“ na tebe mává a směje se.\n\nZa kopcem ale přijde zápletka: před tebou je změť šipek, cedulí a nějakých podivných značek na silnici.\n\nJe jasné, že tady se něco semlelo.",
    "choices": [
      {
        "label": "Zpomalím a zjistím, co znamenají všechny ty šipky a cedule.",
        "nextId": "scene_8_symbol"
      }
    ]
  },

  "scene_8_symbol": {
    "id": "scene_8_symbol",
    "type": "story",
    "title": "Místo, kde značení vzdalo boj",
    "text": "Před tebou je křižovatka.\nNa zemi jsou křídou nakreslené tři šipky různými směry.\nVedle toho cedule „BĚH →“, druhá cedule „PLAVÁNÍ ← (TO BY BYLA SRANDA)“ a třetí „KAFE ?“.\n\nDobrovolník zmizel. Na jeho místě stojí jen plastový kužel a MANGO, který vypadá, že přemýšlí.\n\nTobiáš a Eliška tě sledují z okraje trati:\n„Mami, tady to vypadá jako level z počítačové hry.“\n\nJak tuhle záhadu rozsekneš?",
    "choices": [
      {
        "label": "Objeví se rozhodčí Karel a vyzve mě na kámen–nůžky–papír o správný směr.",
        "nextId": "scene_8B_hvizdal"
      },
      {
        "label": "Objeví se závodnice Žaneta Nitro a chce hrát piškvorky o poslední volný pruh na cyklostezce.",
        "nextId": "scene_8C_malvina"
      },
      {
        "label": "Zpoza stromu vyleze věštec Vilda s hádankou o směru trati.",
        "nextId": "scene_8D_bard"
      }
    ]
  },

  "scene_8B_hvizdal": {
    "id": "scene_8B_hvizdal",
    "type": "minigame_rps",
    "title": "Karel Rozhodčí a kámen–nůžky–papír",
    "text": "Zpoza kuželu vyskočí chlapík v rozhodcovském tričku.\nNa krku má píšťalku a kolem pasu pověšené tři různé stopky.\n\n„Jsem Karel Rozhodčí! Tady je značení trochu… kreativní.\nSprávný směr si musíš vybojovat férovým způsobem – KÁMEN, NŮŽKY, PAPÍR!“\n\nDěti jsou nadšené, MANGO má pocit, že jde o hru s pamlsky.\n\nTeď si spolu opravdu zahrajte kámen–nůžky–papír.\nDomluvte se, kolikrát dáte repete, ale cílem je, aby Kačka jednou vyhrála a mohla pokračovat.\n\nAž vyhrajete, Karel ti s vážnou tváří ukáže správný směr a pronese:\n„Běžte tam, kde je víc kyslíku.“",
    "choices": [
      {
        "label": "Kačka vyhrála souboj s Karlem a pokračuje správným směrem.",
        "nextId": "scene_9_boy"
      },
      {
        "label": "Karel vyhrál – zkusíme to ještě jednou.",
        "nextId": "scene_8B_hvizdal"
      }
    ]
  },

  "scene_8C_malvina": {
    "id": "scene_8C_malvina",
    "type": "minigame_tictactoe",
    "title": "Žaneta Nitro a piškvorky o pruh",
    "text": "Zpoza cedule „KAFE ?“ vyběhne závodnice v neonovém dresu.\n\n„Jsem Žaneta Nitro a tady to mám na starosti já.\nPoslední volný a nejhezčí cyklistický pruh je k dispozici jen pro vítěze PIŠKVOREK!“\n\nZ kapsy vytáhne malou tabulku s mřížkou 3×3 a fix.\n\nNakreslete si piškvorky na papír nebo si je jen představte ve vzduchu.\nTy hraješ za Žanetu, Kačka za sebe.\n\nHrajte, dokud někdo nevyhraje – nebo dokud se prostě nenasmějete.\nCílem je, aby Kačka nakonec jednou vyhrála a mohla pokračovat po „VIP pruhu“.\n\nŽaneta na konci uznale kývne:\n„Dobře ty. Běž, než si to rozmyslím.“",
    "choices": [
      {
        "label": "Kačka vyhrála piškvorky a jede dál ideálním pruhem.",
        "nextId": "scene_9_boy"
      },
      {
        "label": "Žaneta vyhrála – zkusíme piškvorky ještě jednou.",
        "nextId": "scene_8C_malvina"
      }
    ]
  },

  "scene_8D_bard": {
    "id": "scene_8D_bard",
    "type": "minigame_riddle",
    "title": "Věštec Vilda a hádanka o směru",
    "text": "Zpoza stromu vyleze chlapík v ponču, s čelenkou a cedulkou „TRAŤOVÝ VĚŠTEC“.\n\n„Jsem Vilda, mistr značení a hádanek.\nSprávný směr ti neřeknu jen tak. Musíš uhodnout mou hádanku.“\n\nVilda si odkašle a pronese:\n\n„Když plaveš, je mokrá,\nkdyž jedeš, je dlouhá,\nkdyž běžíš, je nekonečná.\nCo je to?“\n\n(Napověda pro vypravěče: odpověď může být T R A Ť, Z Á V O D nebo C E S T A – cokoliv v tomhle duchu.)\n\nNech Kačku hádat, klidně jí pomož nápovědami.\nKdyž se dostanete k nějaké rozumné odpovědi, Vilda se spokojeně usměje a ukáže správný směr.",
    "choices": [
      {
        "label": "Kačka uhodla hádanku a Vilda jí ukázal správný směr.",
        "nextId": "scene_9_boy"
      }
    ]
  },

  "scene_9_boy": {
    "id": "scene_9_boy",
    "type": "story",
    "title": "Běžecká část: kdo to tu vymýšlel?",
    "text": "Bez ohledu na to, jestli ti radil Karel, Žaneta, nebo Vilda, dostaneš se nakonec do depa a vyrážíš na běh.\n\nPrvní metry jsou překvapivě fajn.\nPak si všimneš, že trať vede kolem stánku s klobásami, přes dětské hřiště a okolo nafukovací skluzavky.\n\nDěti ti mávají, MANGO se snaží běžet kousek s tebou a dobrovolník s cedulí „USMÍVEJ SE, JSI V POSLEDNÍ TŘETINĚ“ přizná:\n„Upřímně… nikdo neví, jestli tohle je fakt poslední třetina.“\n\nNajednou se ozve zmatek zepředu – něco se stalo u občerstvovačky.",
    "choices": [
      {
        "label": "Běžím k občerstvovačce zjistit, co se děje.",
        "nextId": "scene_10_teleport_dog"
      }
    ]
  },

  "scene_10_teleport_dog": {
    "id": "scene_10_teleport_dog",
    "type": "story",
    "title": "Občerstvovačka šílenství",
    "text": "Přiběhneš k občerstvovačce a uvidíš scénu jak z absurdního filmu.\n\nDobrovolníci si spletli kelímky – v jednom je ionťák, v druhém cola, v třetím kafe a ve čtvrtém…\nnějaká podezřelá domácí limonáda, po které jeden závodník běží dvakrát tak rychle a směje se bez důvodu.\n\nMANGO se pokusil ukrást banán, děti mu dělají krytí.\nZávodnice vedle tebe si polila číslo, takže teď oficiálně běží jako někdo úplně jiný.\n\nKluk z organizačního týmu vypadá zoufale:\n„Prosím vás, pomozte mi to tu trochu uklidnit, nebo mě šéf zabije.“\n\nJak se k tomu postavíš?",
    "choices": [
      {
        "label": "Zapojím děti i sebe – jako tým zorganizujeme občerstvovačku.",
        "nextId": "scene_11A_team"
      },
      {
        "label": "Přebírám iniciativu sama – děti a psa pošlu stranou a jdu to seřídit.",
        "nextId": "scene_11B_you_first"
      }
    ]
  },

  "scene_11A_team": {
    "id": "scene_11A_team",
    "type": "story",
    "title": "Týmová záchrana občerstvovačky",
    "text": "Rozdáš rychlé úkoly:\n„Tobiáši, kelímky s ionťákem sem, colu sem. Eliško, banány sem, MANGO z banánů pryč.“\n\nDěti se do toho vrhnou s překvapivou efektivitou.\nTy vysvětlíš závodníkům, co je co, a do dvou minut to vypadá, že to tady vede někdo, kdo ví, co dělá.\n\nKluk z organizačního týmu se na tebe dívá s úlevou:\n„Jestli někdy budu organizovat další ročník, chci vás v týmu.\nNebo spíš jako šéfa.“\n\nDáš si jeden kelímek ionťáku, jeden hluboký nádech a vyrážíš do posledního úseku běhu.",
    "choices": [
      {
        "label": "Vyrazím do finiše – i kdybych měla doběhnout s banánem v ruce.",
        "nextId": "scene_12_return"
      }
    ]
  },

  "scene_11B_you_first": {
    "id": "scene_11B_you_first",
    "type": "story",
    "title": "Solo zásah v poli šílenství",
    "text": "Otočíš se na děti:\n„Vy s MANGEM tady fanděte, já tohle jdu seřídit.“\n\nRychle rozdělíš kelímky, vysvětlíš dobrovolníkům systém,\n oddělíš kafe od ionťáku (životně důležité).\n\nZávodník, který vypil podivnou limonádu, se pořád směje a běží pryč,\nale aspoň už má v ruce správný kelímek.\n\nKluk z organizačního týmu jen zírá:\n„Vy jste asi z práce zvyklá, že?“\n\nAno. Ano jsi.\n\nVypiješ normální ionťák, krátce se protáhneš a vyrážíš do finiše.",
    "choices": [
      {
        "label": "Dám poslední úsek běhu a doběhnu, jak to půjde.",
        "nextId": "scene_12_return"
      }
    ]
  },

  "scene_12_return": {
    "id": "scene_12_return",
    "type": "story",
    "title": "Finiš: absurdní, ale tvůj",
    "text": "Poslední metry.\nTrať vede kolem nafukovací skluzavky, stánku s párky a nějakého místního DJ,\n který pouští písničky, co neznáš, ale zní až nebezpečně motivačně.\n\nNa cílové bráně svítí nápis „FINIŠ“ – někdo tam omylem nalepil dvě různé samolepky.\n\nDěti křičí: „MÁÁÁMA! TURBOVÁ! KAČKA! COKOLIV, HURÁ!“\nMANGO štěká, skáče a tváří se, že by klidně dal ještě jedno kolo.\n\nProběhneš cílem.\nNěkdo ti na krk pověsí medaili, která vypadá jako propagační předmět místního sponzora,\nale to je vlastně jedno.\n\nV hlavě si říkáš: „No… bylo to všechno, jen ne normální. Ale rozhodně nezapomenutelné.“",
    "choices": [
      {
        "label": "Ještě chci chvilku dovyprávět a zasmát se u společného shrnutí.",
        "nextId": "scene_13_end"
      }
    ]
  },

  "scene_13_end": {
    "id": "scene_13_end",
    "type": "end",
    "title": "Epilog: IronyMan Kačka",
    "text": "Sedíš v trávě u cíle.\nDěti do sebe cpou poslední banány, MANGO si ukořistil polystyrenový kelímek.\nNohy bolí, vlasy žijí vlastním životem, číslo máš nalepené kdoví kde.\n\nA někde mezi tím vším ti dochází:\n\n– zvládla jsi plavání v rybníku, kde by se většina lidí jen koukala z břehu,\n– přežila jsi kolo se značením, které navrhoval někdo po večírku,\n– doběhla jsi běh, kde občerstvovačka připomínala chemický pokus,\n– a ještě jsi u toho hlídala děti, psa a vlastní nervy.\n\nMožná to nebyl nejrychlejší triatlon.\nAle určitě to byl jeden z nejzábavnějších.\n\nTeď je ideální chvíle se s kolegyní zasmát nad tím,\nkterá část závodu nejvíc připomíná váš pracovní den –\na jestli byste si příště daly další kolo… v příběhu, nebo klidně v reálu.",
    "choices": []
  }
};
