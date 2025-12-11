const storyNodes = {
  "scene_1_start": {
    "id": "scene_1_start",
    "type": "story",
    "title": "IronyMan",
    "text": "Kačí, sobotní ráno.\nJsi v depu závodu „Sázava Naruby Cup“.\nOrganizátor hrdě hlásí, že jde o revoluční formát: nejdřív kolo, pak běh a plavání až na konec pro ty, co to fakt nevzdají.\n\nKolem tebe stojí závodníci na všech možných strojích:\n– silničky,\n– horská kola,\n– skládací kolo,\n– někdo dokonce přitáhl městské kolo se zvonkem „pro případ krize“.\n\nNa helmě máš přilepenou startovní nálepku, na dresu jiné číslo a na ruce fixou něco, co vypadá jako rodné číslo.\nDobrovolník do megafonu křičí, megafon není zapnutý, ale všichni nějak cítí, že je čas vyrazit.\n\nCo uděláš jako první v tomhle cirkusu?",
    "choices": [
      {
        "label": "Tvářím se, že je to úplně normální, sednu na kolo a zařadím se do davu.",
        "nextId": "scene_2A_depo_confusion"
      },
      {
        "label": "Ještě jednou zkontroluju, jestli jsem si fakt nevzala cizí kolo.",
        "nextId": "scene_2B_bike_check"
      },
      {
        "label": "Zvednu ruku a zeptám se organizátora, jestli je tohle pořadí disciplín vtip nebo koncept.",
        "nextId": "scene_2C_briefing_chaos"
      }
    ]
  },

  "scene_2A_depo_confusion": {
    "id": "scene_2A_depo_confusion",
    "type": "story",
    "title": "Depo: identita Boženy",
    "text": "Vyrážíš z depa.\nKoutkem oka zahlédneš startovní listinu přilepenou na plotě.\nU svého čísla čteš: „Božena Turbová, kategorie LEGENDY 60+“.\n\nDobrovolnice ti mává: „Boženo, jste náš černý kůň!“\n\nChvíli přemýšlíš, jestli ti někdo v noci nehacknul občanku.\nAle kolo už se točí, takže řešit identitu teď je přepych.\n\nJak se k tomu postavíš v hlavě?",
    "choices": [
      {
        "label": "Přijmu alter ego Boženy Turbové a jedu, jako bych měla šedesát a nadhled.",
        "nextId": "scene_3A_wedding_mix"
      },
      {
        "label": "Rozhodnu se, že jsem prostě Kačka, co si jen půjčila jméno legendy.",
        "nextId": "scene_3B_roundabout_hell"
      },
      {
        "label": "Uložím si to do šuplíku „věci, které dnes nevyřeším“ a šlápnu do pedálů.",
        "nextId": "scene_3C_gravel_inferno"
      }
    ]
  },

  "scene_2B_bike_check": {
    "id": "scene_2B_bike_check",
    "type": "story",
    "title": "Kolo, které možná není tvoje",
    "text": "Zastavíš se na okraji depa a zamyšleně zkoumáš své kolo.\nNa rámu je nalepená samolepka „Jana 2019“. Tvoje jméno to úplně není.\n\nVedle tebe se ozve závodník:\n„Hele, já mám zas kolo s nálepkou Kačka 2022. Myslím, že jsme si všichni kolektivně půjčili identitu.“\n\nPodíváš se na něj, na svoje kolo, na závod…\nUvědomíš si, že tohle je přesně ten typ chaosu, který bys v práci řešila třemi tabulkami.\n\nTeď ale ne.\n\nCo uděláš?",
    "choices": [
      {
        "label": "Ignoruju nálepky, důležité je, že to má dvě kola a brzdy.",
        "nextId": "scene_3A_wedding_mix"
      },
      {
        "label": "V duchu si odškrtnu „kontrola kola“ a zařadím se zpátky do proudu.",
        "nextId": "scene_3B_roundabout_hell"
      },
      {
        "label": "Rozhodnu se, že to beru jako půjčené alter ego i s kolem, a rozjedu to.",
        "nextId": "scene_3C_gravel_inferno"
      }
    ]
  },

  "scene_2C_briefing_chaos": {
    "id": "scene_2C_briefing_chaos",
    "type": "story",
    "title": "Brífink, který nic nevysvětlil",
    "text": "Dojdeš k organizátorovi se startovním megafonem.\n\n„Promiňte, začínáme vážně kolem?“ ptáš se.\n\nOrganizátor:\n„Ano! Je to revoluční! Lidi už nebaví klasika. My jdeme proti proudu.\nNěkde se musí začít, tak začneme tam, kde to nejvíc bolí.“\n\nZa tebou někdo poznamená: „Já myslel, že nejvíc bolí pondělní porada.“\nVšichni souhlasně přikývnou.\n\nBrífink skončí větou: „Prostě jedete za šipkami. Víc vědět nepotřebujete.“\n\nJak z toho odejdeš?",
    "choices": [
      {
        "label": "Rozhodnu se, že čím míň vím, tím míň se mám čeho bát, a naskočím na kolo.",
        "nextId": "scene_3A_wedding_mix"
      },
      {
        "label": "V duchu si řeknu: „Dobře, tak dneska se prostě nechám překvapit.“",
        "nextId": "scene_3B_roundabout_hell"
      },
      {
        "label": "Přepnu se do módu: „Budu to brát jako sociologický experiment“ a vyrazím.",
        "nextId": "scene_3C_gravel_inferno"
      }
    ]
  },

  "scene_3A_wedding_mix": {
    "id": "scene_3A_wedding_mix",
    "type": "story",
    "title": "Triatlon & svatba: společná akce",
    "text": "Trať tě dovede k velké bráně.\nZ jedné strany je nápis „NOVOMANŽELÉ“, z druhé „TRIATLON NARUBY“.\nNěkdo to zjevně objednal jako společnou akci.\n\nPo pravé straně stojí nevěsta, po levé závodníci v lycře.\nFotograf fotí úplně všechno, co se pohne – máš pocit, že jsi právě součástí svatebního alba.\n\nHudba střídá romantické balady a techno.\nNikdo si není jistý, kdo komu vlastně fandí.\n\nJak se tu zachováš?",
    "choices": [
      {
        "label": "Projdu bránou s úsměvem a budu dělat, že jsem součást svatby i triatlonu zároveň.",
        "nextId": "scene_4A_foodstation_mad"
      },
      {
        "label": "Zeptám se fotografa, kde je víc dramatu – tam bude i moje trať.",
        "nextId": "scene_4B_photo_point"
      },
      {
        "label": "Radši zrychlím, ať neskončím omylem v gratulacích.",
        "nextId": "scene_4C_local_support"
      }
    ]
  },

  "scene_3B_roundabout_hell": {
    "id": "scene_3B_roundabout_hell",
    "type": "story",
    "title": "Kruhový objezd bez úniku",
    "text": "Vjedeš na obří kruhový objezd.\nUprostřed stojí socha cyklisty s plaveckou čepicí a běžeckými botami.\n\nNa asfaltu jsou křídou nakreslené šipky:\n„JEŠTĚ KOLO“, „FAKT JEŠTĚ KOLO“ a „TOHLE NENÍ VÝJEZD“.\n\nKolem tebe krouží pár závodníků, kteří už možná zapomněli, proč vlastně vyjeli.\nJeden ti volá: „Myslím, že tady bydlím!“\n\nJak se z toho vysvobodíš?",
    "choices": [
      {
        "label": "Naslepo zvolím odbočku, která vypadá aspoň trochu jako výjezd.",
        "nextId": "scene_4A_foodstation_mad"
      },
      {
        "label": "Zpomalím a odbočím tam, kde vidím nejméně lidí v krizi.",
        "nextId": "scene_4B_photo_point"
      },
      {
        "label": "Hrdinsky dám ještě jedno kolečko a pak vezmu první šipku jiným směrem.",
        "nextId": "scene_4C_local_support"
      }
    ]
  },

  "scene_3C_gravel_inferno": {
    "id": "scene_3C_gravel_inferno",
    "type": "story",
    "title": "Polňačka pochybností",
    "text": "Trať se zničehonic mění v polní cestu.\nAsfalt zmizel, místo něj štěrk, bláto a pár podezřelých kaluží.\n\nŠipka na stromě říká „TUDY (MOŽNÁ)“.\nZávodník před tebou jede slalom mezi dírami a křičí: „Tohle určitě navrhoval někdo po večírku!“\n\nKolo poskakuje, ty přemýšlíš, jestli tenhle povrch náhodou nepatří do jiné sportovní disciplíny.\n\nJak se v tom zorientuješ?",
    "choices": [
      {
        "label": "Přijmu to jako součást triatlonu „na český způsob“ a jedu dál.",
        "nextId": "scene_4A_foodstation_mad"
      },
      {
        "label": "Hledám aspoň jednu šipku, která vypadá jistě – a té se držím.",
        "nextId": "scene_4B_photo_point"
      },
      {
        "label": "V duchu zanadávám, ale řeknu si, že aspoň bude historka, a pokračuju.",
        "nextId": "scene_4C_local_support"
      }
    ]
  },

  "scene_4A_foodstation_mad": {
    "id": "scene_4A_foodstation_mad",
    "type": "story",
    "title": "Občerstvovačka chemických pokusů",
    "text": "Přijíždíš k občerstvovačce.\n\nNa stole je voda, ionťák, banány… a velká miska s nápisem:\n„NOVÝ EXPERIMENTÁLNÍ GEL – NEPTAT SE NA SLOŽENÍ“.\n\nDobrovolník se usmívá tím typem úsměvu, který říká: „Já bych to nebral, ale je to zdarma.“\n\nZa tebou někdo volá: „Hele, tohle jsem pil loni, pamatuju si jen první půlku závodu!“\n\nJak se rozhodneš u stolu?",
    "choices": [
      {
        "label": "Vezmu klasiku: voda + banán, hraju na jistotu.",
        "nextId": "scene_5A_transition_zen"
      },
      {
        "label": "Dám si trochu ionťáku a budu doufat, že je to jen přebarvený sirup.",
        "nextId": "scene_5B_transition_panic"
      },
      {
        "label": "Zkusím experimentální gel a uvidím, jestli mi dá křídla nebo flashbacky.",
        "nextId": "scene_5C_transition_mess"
      }
    ]
  },

  "scene_4B_photo_point": {
    "id": "scene_4B_photo_point",
    "type": "story",
    "title": "Fotopoint slávy a zoufalství",
    "text": "Projíždíš kolem fotopointu.\n\nFotograf křičí: „USMÍVAT! TOHLE BUDE NA WEBU!“\n\nOkolo tebe se dějí scény:\n– jeden závodník se snaží současně pít z kelímku a pózovat,\n– jiný má helmu obráceně a vůbec o tom neví,\n– třetí má na zádech nápis „NEMUSÍM, CHCI“ a výraz „musím“.\n\nFotograf má prst pořád na spoušti.\nJsi si jistá, že alespoň jedna fotka bude zcela nepoužitelná – a tedy dokonalá.\n\nJak projedeš fotopointem?",
    "choices": [
      {
        "label": "Usměju se na maximum, jako kdyby tohle byl můj profilový obrázek na LinkedIn.",
        "nextId": "scene_5A_transition_zen"
      },
      {
        "label": "Udělám grimasu „co se to sakra děje“ a nechám osud fotek na algoritmu.",
        "nextId": "scene_5B_transition_panic"
      },
      {
        "label": "Úplně to ignoruju a soustředím se jen na to, abych nesjela do škarpy.",
        "nextId": "scene_5C_transition_mess"
      }
    ]
  },

  "scene_4C_local_support": {
    "id": "scene_4C_local_support",
    "type": "story",
    "title": "Místní fanclub a komentátoři",
    "text": "Trať tě vede kolem skupinky místních.\n\nSedí na židlích, popíjejí kafe a komentují výkon závodníků:\n„Tenhle vypadá, že jede pro pivo… tenhle pro životní restart… a támhleta? Ta je normálně v pohodě.“\n\nKdyž jedeš kolem, jeden z nich prohodí:\n„Podle výrazu už jste mentálně v cíli, to je dobré znamení!“\n\nJe to zvláštní kombinace pochvaly a diagnózy.\n\nJak tenhle komentář vezmeš?",
    "choices": [
      {
        "label": "Zakřičím zpět něco ve stylu: „Jo, ale tělo to ještě neví!“",
        "nextId": "scene_5A_transition_zen"
      },
      {
        "label": "Jen se zasměju, zamávám a jedu, ať to mám rychle za sebou.",
        "nextId": "scene_5B_transition_panic"
      },
      {
        "label": "V duchu si řeknu, že mají pravdu, a přepnu do režimu „dojeď to jak dospělá“.",
        "nextId": "scene_5C_transition_mess"
      }
    ]
  },

  "scene_5A_transition_zen": {
    "id": "scene_5A_transition_zen",
    "type": "story",
    "title": "Přechod na běh: zen v depu",
    "text": "Kolo je za tebou.\nV depu sundáš helmu, postavíš kolo do stojanu a potichu si říkáš:\n„Prosím, ať si ho nikdo omylem neodnese.“\n\nVšechno děláš relativně v klidu.\nBoty na běh, rychlé protažení, malý nádech, výdech.\n\nVedle tebe někdo panicky hledá svůj startovní pás a rozmotává ho z řídítek úplně jiného kola.\nTy máš na pár vteřin pocit, že jsi zenový mistr organizace.\n\nJak vyběhneš?",
    "choices": [
      {
        "label": "V klidu – tempo, ve kterém můžu ještě vtipkovat sama se sebou.",
        "nextId": "scene_6A_run_bubbles"
      },
      {
        "label": "Trochu zrychlím, ať to vypadá, že vím, co dělám.",
        "nextId": "scene_6B_run_dj"
      },
      {
        "label": "Rozhodnu se, že běh bude moje terapie a v hlavě si rovnám život.",
        "nextId": "scene_6C_run_cat"
      }
    ]
  },

  "scene_5B_transition_panic": {
    "id": "scene_5B_transition_panic",
    "type": "story",
    "title": "Přechod na běh: lehká panika",
    "text": "Dobíháš do depa.\nChvíli nevíš, kde máš kolo, pak nevíš, kde máš boty, pak nevíš, kde máš hlavu.\n\nNajednou máš boty na sobě, helmu v ruce a startovní číslo nakřivo.\nNěkdo vedle tebe si bere tvoje pití, ty zase skoro odneseš cizí ručník.\n\nJe to malý chaos, ale ty v něm umíš dýchat – tohle je skoro jako pondělní ráno.\n\nJak vyrazíš na běh?",
    "choices": [
      {
        "label": "Potlačím paniku, zasměju se tomu v duchu a prostě vyběhnu.",
        "nextId": "scene_6A_run_bubbles"
      },
      {
        "label": "Vyběhnu rychleji, než stihnu přemýšlet o tom, jak moc jsem rozcuchaná.",
        "nextId": "scene_6B_run_dj"
      },
      {
        "label": "Vyrazím pomalu, potřebuju se nejdřív srovnat s tím, že ještě nekončím.",
        "nextId": "scene_6C_run_cat"
      }
    ]
  },

  "scene_5C_transition_mess": {
    "id": "scene_5C_transition_mess",
    "type": "story",
    "title": "Přechod na běh: experimentální režim",
    "text": "V depu ti dochází, že experimentální gel začíná působit.\nNejsi si jistá jak, ale určitě nějak.\n\nBěžecké boty máš na nohách, i když si nepamatuješ jejich obouvání.\nHelmu odkládáš na kolo, které doufáš, že je tvoje.\n\nSvět je mírně jasnější, barvy jsou trochu sytější a běh vypadá jako dobrý nápad.\n\nJak se vrhneš na trať?",
    "choices": [
      {
        "label": "Vyběhnu skoro nadšeně – když už, tak už.",
        "nextId": "scene_6A_run_bubbles"
      },
      {
        "label": "Dám si kontrolované tempo a budu poslouchat, co mi říká tělo.",
        "nextId": "scene_6B_run_dj"
      },
      {
        "label": "Rozhodnu se, že to celý vezmu jako surreální zážitek a prostě to odklusám.",
        "nextId": "scene_6C_run_cat"
      }
    ]
  },

  "scene_6A_run_bubbles": {
    "id": "scene_6A_run_bubbles",
    "type": "story",
    "title": "Běh: zóna bublifuků",
    "text": "Vyrazíš na běh.\nPrvní úsek vede kolem dětského hřiště.\n\nDěti foukají bublifuk, bubliny ti létají kolem hlavy jako vizuální efekty.\nJeden malý kluk vykřikne: „Podívej, běžící paní v pěně!“\n\nMáš pocit, že běžíš reklamou na prací prášek.\n\nCo s touhle scénou uděláš v hlavě?",
    "choices": [
      {
        "label": "Usměju se na děti a začnu bubliny brát jako oficiální dekoraci mého závodu.",
        "nextId": "scene_7A_run_loop_signs"
      },
      {
        "label": "Zlehka zrychlím, aby mi vlasy nechytaly tolik mýdla.",
        "nextId": "scene_7B_run_mindcoach"
      },
      {
        "label": "Budu dělat, že jsem v hudebním klipu a bubliny jsou speciální efekty.",
        "nextId": "scene_7C_run_quotes"
      }
    ]
  },

  "scene_6B_run_dj": {
    "id": "scene_6B_run_dj",
    "type": "story",
    "title": "Běh: DJ motivační chaos",
    "text": "Další úsek vede kolem místního DJ.\n\nMá malý pult, dva repráky a playlist, který střídá:\n– Eye of the Tiger,\n– polku,\n– a pak random remix znělky Večerníčku.\n\nNikdo neví proč, ale funguje to.\n\nZávodníci kolem tebe automaticky zrychlí, zpomalí nebo se zmateně rozhlédnou podle toho, co zrovna hraje.\n\nJak na to zareaguješ?",
    "choices": [
      {
        "label": "Poběžím do rytmu, i kdyby to zrovna byla polka.",
        "nextId": "scene_7A_run_loop_signs"
      },
      {
        "label": "V duchu si z toho udělám srandu a použiju to jako energii.",
        "nextId": "scene_7B_run_mindcoach"
      },
      {
        "label": "Zkusím se soustředit jen na svoje kroky a hudbu brát jako šum.",
        "nextId": "scene_7C_run_quotes"
      }
    ]
  },

  "scene_6C_run_cat": {
    "id": "scene_6C_run_cat",
    "type": "story",
    "title": "Běh: kočka na vodítku",
    "text": "Běžíš a najednou vidíš něco, co jsi nečekala.\n\nU cesty jde pán a venčí kočku na vodítku.\nKočka tě sleduje s pohledem „já jsem si taky myslela, že to bude lepší den“.\n\nPán ti zamává: „Běžíte dobře, paní, ona běhá míň než vy.“\n\nCelá situace je tak absurdní, že se musíš rozhodnout, jak si ji uložíš do paměti.",
    "choices": [
      {
        "label": "Vyprsknu smíchy a běžím dál, protože tohle se nedá nekomentovat.",
        "nextId": "scene_7A_run_loop_signs"
      },
      {
        "label": "Poděkuju pánovi za nejdivnější povzbuzení dne.",
        "nextId": "scene_7B_run_mindcoach"
      },
      {
        "label": "V hlavě si řeknu: „Jestli je tohle normální, tak jsem v bezpečí.“ a běžím.",
        "nextId": "scene_7C_run_quotes"
      }
    ]
  },

  "scene_7A_run_loop_signs": {
    "id": "scene_7A_run_loop_signs",
    "type": "story",
    "title": "Běh: cedule nekonečna",
    "text": "Trať tě zavede k rozcestí.\n\nJsou tam tři cedule:\n„JEŠTĚ KOLO“, „URČITĚ POSLEDNÍ KOLO“ a „MOŽNÁ UŽ CÍL“.\n\nStojí tam dobrovolník, který má na obličeji výraz člověka, co ztratil pojem o čase.\n„Upřímně,“ říká, „já už ani nevím, kolik kol kdo běží. Ale všichni nakonec nějak doběhnou.“\n\nJak tuhle existenciální křižovatku uchopíš?",
    "choices": [
      {
        "label": "Vezmu „JEŠTĚ KOLO“, ať mám čisté svědomí, že jsem si to fakt odběhla.",
        "nextId": "scene_8A_run_to_pond"
      },
      {
        "label": "Zkusím „URČITĚ POSLEDNÍ KOLO“ a budu věřit vesmíru.",
        "nextId": "scene_8B_swim_briefing"
      },
      {
        "label": "Řeknu si, že „MOŽNÁ UŽ CÍL“ je filosoficky nejzajímavější, a běžím tam.",
        "nextId": "scene_8C_floating_circus"
      }
    ]
  },

  "scene_7B_run_mindcoach": {
    "id": "scene_7B_run_mindcoach",
    "type": "story",
    "title": "Běh: kout mentální podpory",
    "text": "Poblíž trati vidíš stánek „MENTÁLNÍ PODPORA ZDARMA“.\n\nDva dobrovolníci drží cedule:\n„DÝCHEJ, TO SE HODÍ“ a „UŽ JSI DÁL NEŽ VČERA NA GAUČI“.\n\nJeden na tebe zavolá:\n„Jak se cítíte na škále 1–10, kde 1 je spím a 10 je brečím?“\n\nBěžíš, ale zároveň cítíš, že by se to dalo použít jako life-coaching moment.\n\nCo s tím uděláš?",
    "choices": [
      {
        "label": "Zakřičím náhodné číslo a poběžím dál, ať mají do statistik něco zajímavého.",
        "nextId": "scene_8A_run_to_pond"
      },
      {
        "label": "Představím si, že je to retro supervizní meeting a běžím o trochu lehčí.",
        "nextId": "scene_8B_swim_briefing"
      },
      {
        "label": "Jen na ně mrknu a pomyslím si: „Jo, žiju, díky za optání.“",
        "nextId": "scene_8C_floating_circus"
      }
    ]
  },

  "scene_7C_run_quotes": {
    "id": "scene_7C_run_quotes",
    "type": "story",
    "title": "Běh: les motivačních citátů",
    "text": "Trať vede krátkým lesíkem.\n\nNa stromech visí papíry s motivačními nápisy:\n„BĚŽÍŠ LÍP, NEŽ VYPADÁŠ“,\n„NEZASTAVUJ, ANEBO ZASTAV, JÁ NEJSEM TVOJE MÁMA“,\n„ŽIVOT JE MARATON, ALE DNEŠEK JE JEN NARUBY TRIATLON“.\n\nJe to tak absurdní, že se směješ nahlas.\n\nJak si to přeložíš pro sebe?",
    "choices": [
      {
        "label": "Vezmu to jako potvrzení, že mám fakt dobrý smysl pro humor, že jsem tady.",
        "nextId": "scene_8A_run_to_pond"
      },
      {
        "label": "Zvolím si jeden citát jako svůj dnešní mantru a běžím dál.",
        "nextId": "scene_8B_swim_briefing"
      },
      {
        "label": "Vyberu si ten o mámě a řeknu si, že doma si za to dám dezert navíc.",
        "nextId": "scene_8C_floating_circus"
      }
    ]
  },

  "scene_8A_run_to_pond": {
    "id": "scene_8A_run_to_pond",
    "type": "story",
    "title": "Běh k vodě: hlas z amplionu",
    "text": "Dobíháš k úseku u rybníka.\n\nZ amplionu se ozývá hlas organizátora:\n„Vážení závodníci, připravte se na poslední část našeho naruby dobrodružství – plavání.\nAno, víme, že to nedává smysl. Ano, stejně to uděláme.“\n\nNěkteří běžci se jen hystericky smějí.\n\nJak si to přešifruješ?",
    "choices": [
      {
        "label": "Řeknu si, že plavání je jen trochu studený wellness, a jdu do toho.",
        "nextId": "scene_9A_swim_chaos"
      },
      {
        "label": "Začnu vyjednávat sama se sebou, kolik temp stačí, aby se to „počítalo“.",
        "nextId": "scene_9B_swim_wade"
      },
      {
        "label": "V duchu zkontroluju všechny své životní volby a pak se rozhodnu podle pocitu.",
        "nextId": "scene_9C_swim_spectator"
      }
    ]
  },

  "scene_8B_swim_briefing": {
    "id": "scene_8B_swim_briefing",
    "type": "story",
    "title": "Instruktáž: plavání jako dezert",
    "text": "Přiběhneš k ceduli:\n„PLAVÁNÍ JE DOBROVOLNÉ, ALE MEDAILE VYPADÁ LÍP PO NAMOČENÍ.“\n\nStojí tam organizátorka s papírem.\n„Můžete se jen smočit, můžete dát kolečko, můžete si jen opláchnout ego.\nVšechny varianty jsou validní.“\n\nJe to poprvé, co ti někdo oficiálně schválil polovičaté řešení.\n\nJak se v tom zorientuješ?",
    "choices": [
      {
        "label": "Rozhodnu se dát aspoň mini okruh, ať mám pocit kompletnosti.",
        "nextId": "scene_9A_swim_chaos"
      },
      {
        "label": "Naplánuju strategické smočení po kotníky a tvářím se, že to je mindfulness.",
        "nextId": "scene_9B_swim_wade"
      },
      {
        "label": "Řeknu si, že můj dnešní výkon už je dostatečně absurdní i bez vody.",
        "nextId": "scene_9C_swim_spectator"
      }
    ]
  },

  "scene_8C_floating_circus": {
    "id": "scene_8C_floating_circus",
    "type": "story",
    "title": "Rybník: plovoucí cirkus",
    "text": "Dojdeš k břehu.\n\nNa hladině jsou:\n– tři plavci,\n– dva nafukovací plameňáci,\n– jeden opuštěný kruh,\n– a bójka, která vypadá, že by radši byla jinde.\n\nZ publika se ozývá smích, pískot a občasná rada „NEDÝCHEJ VODU!“.\n\nJe to spíš festival než sport.\n\nJak si nastavíš hlavu?",
    "choices": [
      {
        "label": "Vezmu to jako poslední level počítačové hry a skočím do toho.",
        "nextId": "scene_9A_swim_chaos"
      },
      {
        "label": "Jen se dotknu vody rukou, abych mohla říct, že jsem „plavala“.",
        "nextId": "scene_9B_swim_wade"
      },
      {
        "label": "Rozhodnu se dělat komentátorku z břehu a sledovat ostatní šílence.",
        "nextId": "scene_9C_swim_spectator"
      }
    ]
  },

  "scene_9A_swim_chaos": {
    "id": "scene_9A_swim_chaos",
    "type": "story",
    "title": "Plavání: chaos posledního kola",
    "text": "Jdeš do vody.\nJe chladná, trochu zelená a má chuť „vesnický rybník“.\n\nPlaveš.\nObčas tě někdo cákne, občas ty cákneš jeho, někde poblíž někdo křičí „JÁ NEUMÍM COUBAT!“ a není jasné, co tím myslí.\n\nUděláš pár temp, najdeš si rytmus, tělo protestuje míň než hlava.\n\nNakonec se vyškrábeš ven.\n\nJsi mokrá, zadýchaná a máš pocit, že tvoje vnitřní Božena právě získala další level.\n\nCo si v tu chvíli řekneš?",
    "choices": [
      {
        "label": "„OK, tohle bylo šílený, ale aspoň kompletní.“",
        "nextId": "scene_10A_post_reflection_wet"
      },
      {
        "label": "„Jestli tohle přežiju, jsem oficiálně imunní vůči pondělním poradám.“",
        "nextId": "scene_10B_post_reflection_mix"
      },
      {
        "label": "„Jdu zjistit, jestli je tady někde ručník a kafe.“",
        "nextId": "scene_10C_medal_ceremony"
      }
    ]
  },

  "scene_9B_swim_wade": {
    "id": "scene_9B_swim_wade",
    "type": "story",
    "title": "Plavání: verze „mokrý kompromis“",
    "text": "Stojíš na břehu a řekneš si:\n„Dobře, jdeme na to… ale po svém.“\n\nSundáš boty, vejdeš do vody po kolena.\nUdělaš jeden symbolický dřep, trochu se ohodíš vodou a pro jistotu si opláchneš obličej.\n\nDobrovolník u břehu se usměje:\n„To se počítá. Vítejte v kategorii ‚inteligentní přístup‘.“\n\nZ vody vycházíš s pocitem, že jsi udělala minimum, které je vlastně maximum, co jsi dnes chtěla.\n\nJak to komentuješ sama sobě?",
    "choices": [
      {
        "label": "„Tohle je přesně moje míra plavání po kole a běhu.“",
        "nextId": "scene_10A_post_reflection_wet"
      },
      {
        "label": "„Miluju, když mi někdo oficiálně posvětí polovičaté řešení.“",
        "nextId": "scene_10B_post_reflection_mix"
      },
      {
        "label": "„Jdu si pro medaili a tvářím se, že to byl můj plán od začátku.“",
        "nextId": "scene_10C_medal_ceremony"
      }
    ]
  },

  "scene_9C_swim_spectator": {
    "id": "scene_9C_swim_spectator",
    "type": "story",
    "title": "Plavání: suchý komentátor",
    "text": "Zůstaneš na břehu.\n\nDíváš se na plavce, plameňáky a bójky a říkáš si:\n„Ne. Dneska už toho bylo dost.“\n\nDobrovolník pokrčí rameny:\n„I to je volba. Medaile máme i za účast v realitě.“\n\nUsadíš se na kraj, protáhneš nohy a jen sleduješ, co se děje.\nJe to jako live přenos tvého vlastního života – trochu chaos, trochu odvaha, hodně absurdity.\n\nJak si to přeložíš do vlastního jazyka?",
    "choices": [
      {
        "label": "„Ne vždycky musím jít až na dno. Dneska stačilo dojít sem.“",
        "nextId": "scene_10A_post_reflection_wet"
      },
      {
        "label": "„Důležité je, že jsem šla do hry. Voda počká na jindy.“",
        "nextId": "scene_10B_post_reflection_mix"
      },
      {
        "label": "„Jdu si to shrnout k cílové bráně, ať máme co probírat u kafe.“",
        "nextId": "scene_10C_medal_ceremony"
      }
    ]
  },

  "scene_10A_post_reflection_wet": {
    "id": "scene_10A_post_reflection_wet",
    "type": "story",
    "title": "Po vodě: mokrá, ale živá",
    "text": "Stojíš kousek od břehu.\nJsi mokrá v různé kombinaci částí těla, ale žiješ.\n\nNohy bolí, ruce jsou unavené, hlava je překvapivě lehká.\nVšechno, co se dnes stalo, se ti přehrává jako hodně zvláštní film.\n\nKolo na začátku, svatba, kruháč, experimentální gely, běh mezi bublifuky a DJem…\nA teď plavání jako dezert.\n\nJe to šílené, ale tvoje.\n\nCo si odneseš dál?",
    "choices": [
      {
        "label": "Rozhodnu se, že tohle je historka, kterou chci vyprávět u kafe s velkým smíchem.",
        "nextId": "scene_11_end"
      },
      {
        "label": "Řeknu si, že jestli zvládnu tohle, zvládnu i další životní triatlony.",
        "nextId": "scene_11_end"
      },
      {
        "label": "V hlavě si dám Boženě Turbové metál za statečnost a jdu do cíle.",
        "nextId": "scene_11_end"
      }
    ]
  },

  "scene_10B_post_reflection_mix": {
    "id": "scene_10B_post_reflection_mix",
    "type": "story",
    "title": "Po vodě / nevodě: chaos, který dává smysl",
    "text": "Stojíš někde mezi břehem, depem a cílem.\n\nNejsi si jistá, jestli jsi plavání dala „naplno“, „napůl“ nebo „symbolicky“.\nAle jedno víš – celý dnešní závod je dokonale absurdní kombinace všeho, co znáš:\n\n– lehký chaos jako v práci,\n– improvizace jako doma s dětmi,\n– nutnost dokončit, i když to nedává úplně smysl.\n\nA přesto jsi tady, pořád ve hře.\n\nJak si to shrneš?",
    "choices": [
      {
        "label": "„Možná to nebyl učebnicový výkon, ale byl upřímně můj.“",
        "nextId": "scene_11_end"
      },
      {
        "label": "„Nemusím být pořád stoprocentní, stačí být dostatečně blázen na to to zkusit.“",
        "nextId": "scene_11_end"
      },
      {
        "label": "„Tohle je přesně ten druh zkušenosti, který se hodí připomenout, až budu mít pocit, že jsem slabá.“",
        "nextId": "scene_11_end"
      }
    ]
  },

  "scene_10C_medal_ceremony": {
    "id": "scene_10C_medal_ceremony",
    "type": "story",
    "title": "Medaile za účast v realitě",
    "text": "Přijdeš do prostoru cíle.\n\nDobrovolník ti pověsí na krk medaili ve tvaru něčeho mezi plaveckou čepicí a logem sponzora.\n\nModerátor do mikrofonu říká:\n„A tady přichází naše legenda… nebo Kačka… nebo Božena… jedno z toho, ale rozhodně to dala!“\n\nLidi tleskají – ne protože znali tvůj čas, ale protože ví, jak vypadá člověk, co to prostě nevzdal.\n\nJak ten moment pro sebe pojmenuješ?",
    "choices": [
      {
        "label": "„Tohle není o čase, tohle je o tom, že jsem dneska fakt dorazila.“",
        "nextId": "scene_11_end"
      },
      {
        "label": "„Možná bych měla mít v šuplíku speciální medaili i na některé pracovní dny.“",
        "nextId": "scene_11_end"
      },
      {
        "label": "„Jdu si to uložit do hlavy jako připomínku, že jsem mnohem silnější, než si často myslím.“",
        "nextId": "scene_11_end"
      }
    ]
  },

  "scene_11_end": {
    "id": "scene_11_end",
    "type": "end",
    "title": "Konec triatlonu naruby",
    "text": "Triatlon naruby máš za sebou.\nKolo na začátku, běh uprostřed, plavání na konci (nebo ne) – a mezi tím svatby, kruháče, experimenty, citáty a čistá absurdita.\n\nSedíš, stojíš nebo ležíš někde poblíž cílové brány.\nMedaile se ti houpe na krku, čas už nikoho nezajímá a smích je hlavní metrika.\n\nV hlavě si říkáš:\n„Jestli zvládnu tohle, zvládnu i další projekty, další týdny, další nesmysly.\nA hlavně – mám kolem sebe lidi, se kterými se tomu můžu zasmát.“\n\nTenhle příběh končí.\nTeď je ideální chvíle sednout si s kolegyní, dát si cokoliv dobrého k pití\n a společně si projet, ve které scéně se viděla nejvíc – na kole, v depu, na běhu nebo u rybníka.",
    "choices": []
  }
};
