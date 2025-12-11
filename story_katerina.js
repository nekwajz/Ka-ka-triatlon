const storyNodes = {
  "scene_1_start": {
    "id": "scene_1_start",
    "type": "story",
    "title": "Start: Triatlon naruby",
    "text": "Kačí, sobotní ráno.\nJsi na triatlonu „Sázava Naruby Cup“.\nOrganizátor hrdě hlásí, že je to „inovativní formát“ – začíná se kolem, pak běh a plavání nechali jako bonus pro odvážné.\n\nStojíš v depu.\nNa sobě máš helmu, v ruce boty, kolem tebe kola všech možných tvarů.\nJeden chlap má silničku, druhý skládací kolo, třetí elektrokoloběžku a tvrdí, že je to „v rámci regulí“.\n\nTobiáš ti nalepil číslo na záda vzhůru nohama.\nEliška MANGOVI (psovi) připevnila reflexní vestu s nápisem „Oficiální morální podpora“.\n\nRozhodčí do megafonu křičí:\n„Závodníci na kola! Jestli máte pocit, že je to celé špatně, tak máte pravdu!“\n\nCo uděláš jako první?",
    "choices": [
      {
        "label": "Tvářit se, že je to normální, sednout na kolo a zařadit se do chumlu.",
        "nextId": "scene_2_registration"
      },
      {
        "label": "Ještě jednou zkontrolovat, že máš správné kolo a že Mango nejede s tebou v košíku.",
        "nextId": "scene_2_registration"
      },
      {
        "label": "Zvednout ruku a zeptat se organizátora, jestli si je JISTÝ pořadím disciplín.",
        "nextId": "scene_2_registration"
      }
    ]
  },

  "scene_2_registration": {
    "id": "scene_2_registration",
    "type": "story",
    "title": "Depo: kolo, chaos a Božena",
    "text": "Vyrážíš z depa.\n\nKdyž míjíš registrační stan, mává na tebe dobrovolnice s megafonem:\n„Kačko! Teda… Boženo! Máš krásnou helmu!“\n\nPodíváš se na startovní listinu, která visí na plotě.\nU svého čísla čteš: „Božena Turbová, kategorie: Legenda 60+“.\n\nTobiáš nadšeně vykřikne: „Mami, ty jsi LEGENDA! Teď to musíš dojet!“\nEliška: „Až budeš mít šedesát, chtěla bych vypadat jako ty!“\nMANGO se snaží sežrat roh papíru se startovní listinou.\n\nRozhodčí píská start kola.\n\nJak k tomu přistoupíš?",
    "choices": [
      {
        "label": "Rozhodnu se přijmout identitu Boženy Turbové a jet jako legenda.",
        "nextId": "scene_3_bike_line"
      },
      {
        "label": "Ignoruju papíry, v hlavě si řeknu: „Jsem prostě Kačka, co jede kolo.“",
        "nextId": "scene_3_bike_line"
      },
      {
        "label": "Udělám si v hlavě status meeting sama se sebou a pak prostě šlápnu do pedálů.",
        "nextId": "scene_3_bike_line"
      }
    ]
  },

  "scene_3_bike_line": {
    "id": "scene_3_bike_line",
    "type": "story",
    "title": "Kolo: peleton šílenství",
    "text": "Vyjedeš.\n\nPřed tebou závodník v dresu „JÁ UŽ NEMŮŽU 2018“, za tebou někdo, kdo si na řídítka přidělal repráček a pouští si motivační techno.\n\nTrať vede nejdřív po cyklostezce, pak po polní cestě, pak podezřele připomíná vjezd do soukromého dvora.\n\nNa první křižovatce stojí dobrovolník a drží dvě cedule najednou:\n„TRIATLON →“ a „SVATBA ←“.\nTváří se, že neví, která je která.\n\nCo uděláš?",
    "choices": [
      {
        "label": "Zavolám na něj: „Která cesta je těžší?“ – a pojedu tou.",
        "nextId": "scene_4_misroute"
      },
      {
        "label": "Odvodím podle logiky – triatlon bude ta cesta, kde to vypadá horší.",
        "nextId": "scene_4_misroute"
      },
      {
        "label": "Rozhodnu se, že tohle je test charakteru, a prostě se svezu za někým, kdo vypadá, že ví kam.",
        "nextId": "scene_4_misroute"
      }
    ]
  },

  "scene_4_misroute": {
    "id": "scene_4_misroute",
    "type": "story",
    "title": "Špatně značený okruh",
    "text": "Po pár kilometrech pochopíš, že se něco stalo.\n\nMíjíš stánek s nápisem „SVATEBNÍ CHLEBÍČKY“, pak zahradní altán, kde ti někdo zamává v bílých šatech,\na pak ceduli „OMLOUVÁME SE, TADY NENÍ TRIATLON“.\n\nZa tebou funí další závodník:\n„Já si myslím, že to je bonusový okruh na morální sílu.“\n\nV dálce vidíš jiný proud závodníků, kteří jedou zjevně správně.\n\nJak situaci vyřešíš?",
    "choices": [
      {
        "label": "Zastavím, zhluboka se nadechnu a zkusím se nějak napojit zpátky na hlavní trať.",
        "nextId": "scene_5_food_station"
      },
      {
        "label": "Zeptám se svatebčanů na cestu, protože ti vždycky ví, kde je dobré jídlo a hlavní děj.",
        "nextId": "scene_5_food_station"
      },
      {
        "label": "Prohlásím to za ofiko „Kaččin extra okruh“ a po chvíli se prostě vrátím stejnou cestou.",
        "nextId": "scene_5_food_station"
      }
    ]
  },

  "scene_5_food_station": {
    "id": "scene_5_food_station",
    "type": "story",
    "title": "Občerstvovačka za odměnu",
    "text": "Dostaneš se zpátky na hlavní trať a přijíždíš k občerstvovačce.\n\nNa stole jsou banány, gely, kelímky s ionťákem, cola, voda… a podezřelý tác s nápisem „NEBRAT (FAKT)“.\nDobrovolník si zrovna maže chleba něčím, co vypadá jako tavený sýr s hořčicí.\n\nDěti ti mávají za páskou.\nTobiáš: „Mami, běž si pro turbo pití!“\nEliška: „Já chci banán, ale jen ten, co není z triatlonu.“\n\nCo uděláš u občerstvovačky?",
    "choices": [
      {
        "label": "Vezmu klasiku: voda + banán, hraju na jistotu.",
        "nextId": "scene_6_family_chaos"
      },
      {
        "label": "Zkusím ionťák a budu doufat, že to není ta věc z tácu „NEBRAT (FAKT)“.",
        "nextId": "scene_6_family_chaos"
      },
      {
        "label": "Zeptám se dobrovolníka, co je to „NEBRAT (FAKT)“, a při odpovědi raději nic nevezmu.",
        "nextId": "scene_6_family_chaos"
      }
    ]
  },

  "scene_6_family_chaos": {
    "id": "scene_6_family_chaos",
    "type": "story",
    "title": "Rodinný support tým",
    "text": "V depu tě čeká rodinný fanclub.\n\nTobiáš ti nabízí ručníček, který si zjevně půjčil z nějaké jiné deky.\nEliška ti podává brýle na běh, i když žádné nepotřebuješ.\nMANGO má v tlamě tvou náhradní ponožku a tváří se, že ji nikdy nevydá.\n\n„Mami, jak se cítíš?“ ptají se děti.\nUpřímná odpověď by byla: „Jako Božena Turbová po třech životních etapách.“\n\nDo toho organizátor hlásí:\n„Pozor, inovace! Po kole přichází hned BĚH. Plavání až na konec, kdo přežije.“\n\nJak zareaguješ?",
    "choices": [
      {
        "label": "Zasměju se tomu a řeknu, že aspoň budu na běhu ještě relativně suchá.",
        "nextId": "scene_7_transition_weird"
      },
      {
        "label": "Oznámím dětem, že jestli to přežiju, doma si dávám pohov celý den.",
        "nextId": "scene_7_transition_weird"
      },
      {
        "label": "V duchu si udělám retrospektivu života a pak si prostě obuju běžecké boty.",
        "nextId": "scene_7_transition_weird"
      }
    ]
  },

  "scene_7_transition_weird": {
    "id": "scene_7_transition_weird",
    "type": "story",
    "title": "Přechod na běh (v sucho-mokro modu)",
    "text": "Přezouváš se.\nHelmet dolů, boty na běh, kolo zaparkované.\n\nVedle tebe jeden závodník omylem vyběhne v cyklotretrách a přemýšlí, proč mu to nejde.\nJiný se snaží běžet s helmou na hlavě a tvrdí, že „to je pro aerodynamiku“.\n\nTy se nadechneš a vyrazíš na běžecký okruh.\nTrať vede kolem rybníka, přes most a kolem stánku s langoši.\nNa mostě visí nápis: „USMÍVEJ SE, MŮŽE BÝT HŮŘ… TŘEBA PŘIJDE PLAVÁNÍ.“\n\nJak přistoupíš k běhu?",
    "choices": [
      {
        "label": "Vezmu to tempem „můžu ještě mluvit a nadávat“ – pohodový běh.",
        "nextId": "scene_8_run_start_wrong"
      },
      {
        "label": "Zkusím vlnu závodního tempa aspoň na pár metrů, ať mám pocit, že závodím.",
        "nextId": "scene_8_run_start_wrong"
      },
      {
        "label": "Rozhodnu se brát každý kilometr jako bonusový level ve hře „nezblázni se“.",
        "nextId": "scene_8_run_start_wrong"
      }
    ]
  },

  "scene_8_run_start_wrong": {
    "id": "scene_8_run_start_wrong",
    "type": "story",
    "title": "Běžecký okruh: kde to vymýšleli?",
    "text": "Běžíš.\n\nTrať vede kolem dětí foukajících bublifuk, okolo pána, který venčí kočku na vodítku,\na kolem místní kapely, která hraje na playback motivy z Rockyho, ale evidentně to slyší jen oni.\n\nDobrovolník u odbočky má v ruce dvě šipky – obě ukazují stejným směrem, ale nápisy jsou „JEŠTĚ KOLO“ a „MOŽNÁ CÍL“.\n\nTobiáš z povzdálí křičí:\n„Mami, já bych běžel na ‚MOŽNÁ CÍL‘, to zní jako dobrá strategie!“\n\nCo uděláš?",
    "choices": [
      {
        "label": "Zeptám se dobrovolníka, kolik už jsem kol běžela, a rozhodnu podle jeho výrazu.",
        "nextId": "scene_9_finish_area"
      },
      {
        "label": "Řeknu si, že jsem si to stejně užila dost, a zamířím na ‚MOŽNÁ CÍL‘.",
        "nextId": "scene_9_finish_area"
      },
      {
        "label": "Pro jistotu dám ještě kousek navíc a pak se napojím směrem k cíli, ať mám čisté svědomí.",
        "nextId": "scene_9_finish_area"
      }
    ]
  },

  "scene_9_finish_area": {
    "id": "scene_9_finish_area",
    "type": "story",
    "title": "Cílová zóna… nebo generálka?",
    "text": "Doběhneš do prostoru, který vypadá jako cíl.\nJe tu brána, páska, nafukovací oblouk s nápisem „FINIŠ / MOŽNÁ VZDUCH“.\n\nDJ pouští osmdesátkové hity, dobrovolníci mávají pomerančovými měsíčky.\nAle u stánku organizátorů visí cedule:\n„UPOZORNĚNÍ: Plavání probíhá AŽ PO BĚHU. Všechny, kdo se tváří příliš živě, prosíme k vodě.“\n\nDěti na tebe křičí:\n„Mami, ty ještě budeš PLAVAT?!“\nMANGO vypadá, že je připravený skočit do vody za tebe.\n\nJak zareaguješ na tuhle informaci?",
    "choices": [
      {
        "label": "Zasměju se nahlas a řeknu: „Dobře, tak dneska plavu jako dezert.“",
        "nextId": "scene_10_swim_madness"
      },
      {
        "label": "Zeptám se organizátora, jestli je plavání povinné, nebo jestli existuje „Božena výjimka“.",
        "nextId": "scene_10_swim_madness"
      },
      {
        "label": "Okamžitě se zeptám dětí, jestli jsou psychicky připraveny vidět mě ještě jednou trpět.",
        "nextId": "scene_10_swim_madness"
      }
    ]
  },

  "scene_10_swim_madness": {
    "id": "scene_10_swim_madness",
    "type": "story",
    "title": "Plavání jako bonusový level",
    "text": "Stojíš znovu u vody.\nVětšina normálních triatlonů začíná tady. Tady končí.\n\nRybník vypadá lehce unaveně.\nNa hladině plavou tři plavci, jeden nafukovací plameňák a něco, co možná byla bójka.\n\nRozhodčí s klidným hlasem říká:\n„Plave se jen krátký okruh. Pokud ještě máte duši, můžete ji nechat tady.“\n\nDěti ti mávají, MANGO se snaží vypadat jako plavecký trenér.\n\nCo si v hlavě nastavíš před tímhle „dezertem“?",
    "choices": [
      {
        "label": "Řeknu si, že to prostě odplavu jakýmkoli stylem, který mě udrží nad hladinou.",
        "nextId": "scene_11_debrief"
      },
      {
        "label": "Rozhodnu se to brát jako otužovací wellness se silným prvkem komedie.",
        "nextId": "scene_11_debrief"
      },
      {
        "label": "V duchu si odříkám mantru: „Je to jen rybník, ne Atlantik, je to jen rybník…“",
        "nextId": "scene_11_debrief"
      }
    ]
  },

  "scene_11_debrief": {
    "id": "scene_11_debrief",
    "type": "story",
    "title": "Po plavání: žiješ!",
    "text": "Jdeš do vody.\nJe studená, trochu zelená, lehce existenciální.\n\nUděláš pár temp, někdo ti cákne na hlavu, jedna vlna ti vjede do pusy,\na jeden kapr se na tebe podívá s výrazem: „Já tu bydlím, co ty?“\n\nNakonec se vyškrábeš z vody ven.\n\nDěti jásají, jako kdybys právě vyhrála mistrovství světa.\nMANGO štěká a snaží se tě osušit svojí srstí.\nOrganizátor ti pověsí na krk medaili ve tvaru… reklamního loga místního sponzora.\n\nZávod je oficiálně za tebou.\n\nCo si v tu chvíli uvědomíš?",
    "choices": [
      {
        "label": "Že to byl nejvíc praštěný triatlon, ale zároveň přesně tvůj styl příběhu.",
        "nextId": "scene_12_epilogue_bridge"
      },
      {
        "label": "Že jestli zvládneš tohle, zvládneš i pondělní meetingy.",
        "nextId": "scene_12_epilogue_bridge"
      },
      {
        "label": "Že Božena Turbová je vlastně docela dobré alter ego a možná by si zasloužila merch.",
        "nextId": "scene_12_epilogue_bridge"
      }
    ]
  },

  "scene_12_epilogue_bridge": {
    "id": "scene_12_epilogue_bridge",
    "type": "story",
    "title": "Epilog v trávě",
    "text": "Sedíš v trávě u cíle.\n\nDěti se hádají, kdo si smí víc hrát s medailí.\nMANGO leží na zádech a tváří se, že byl ten opravdový hrdina dne.\n\nV hlavě se ti přehrává celý závod:\n– start na kole v nesmyslném pořadí,\n– registrace, kde jsi byla legenda Božena,\n– bloudění kolem svatby,\n– občerstvovačka se stolkem „NEBRAT (FAKT)“,\n– běh mezi bublifukem, kočkou na vodítku a langoši,\n– a plavání jako dezert, když máš už všechno za sebou.\n\nA někde pod tím vším si říkáš:\n„Jo. Tohle je přesně ten typ příběhu, co chci jednou vyprávět u kafe.\nA rozhodně ne sama.“\n\nJe čas to celé společně uzavřít a zasmát se tomu.",
    "choices": [
      {
        "label": "Pobavíme se nad tím, která část závodu byla nejvíc „typická pro náš pracovní život“.",
        "nextId": "scene_13_end"
      },
      {
        "label": "Zasním se, jak by vypadalo třetí kolo – třeba úplně bez sportu, jen jako komedie.",
        "nextId": "scene_13_end"
      },
      {
        "label": "Rozhodnu se, že Božena Turbová se vrátí. Ale jen pokud bude i kafe a dort.",
        "nextId": "scene_13_end"
      }
    ]
  },

  "scene_13_end": {
    "id": "scene_13_end",
    "type": "end",
    "title": "Konec triatlonu naruby",
    "text": "Triatlon naruby je za tebou.\nZávod, kde bylo všechno špatně – a právě proto tak dokonale zapamatovatelné.\n\nZůstává pocit únavy, úlevy a hlavně toho, že se nad tím dá brutálně zasmát.\nSpolečně.\n\nTeď je ideální chvíle dát si kafe, víno nebo cokoliv, co patří ke šťastnému konci,\na probrat, které rozhodnutí by Kačka udělala i v reálu… a které jen v tomhle úplně střeleném příběhu.",
    "choices": []
  }
};
