  let plusla =document.querySelector('#bobox1')
  let loader=document.querySelector('.box1');
  let orbe=document.querySelector('.boite')
  let acceuil=document.querySelector('.acceuil');
  var modal=document.querySelector('.modal');
  var score=0;
  let reponce=['Html','css','Javascript','Sql','Python','Java','Bash','PowerShell','C#','Php','C++','TypeScript','C','Ruby','Go','Assembly','Swift','Kotlin','R','Vba','Objective-C','Scala','Rust','Dart','Elixir','Clojure','WebAssembly'];
  var pagejeu= document.querySelector('.pagejeu');
  var afterGame= document.querySelector('.afterGame');
  var result=document.querySelector('.result');
  var relaunch = document.querySelector('.relaunch');
  var input='';
  var countFound=document.querySelector('#score');
  var error=0;
  var checkCountRotate=0;
  let errorClass=['error1','error2','error3'];
  var langageTrouves = document.querySelector('.petiteboite');
  var modal2=document.querySelector('.modal2');
  var modalContent2= document.querySelector('.modalContent2');
  var resultatTrouves=[];
  var modal3=document.querySelector('.modal3');
  var modal4=document.querySelector('.modal4');
  var croix=document.querySelector('.croix');
  var mention=document.querySelector('#mention');
  var modal5=document.querySelector('.modal5');
  var politique=document.querySelector('#polique');
  var modal6=document.querySelector('.modal6')
  var coche=document.querySelector('.coche');
  var responsivePop=document.querySelector('.responsive')
  const tabdescription=[
    {name:"Html",description:"Le HyperText Markup Language, généralement abrégé HTML ou, dans sa dernière version, HTML5, est le langage de balisage conçu pour représenter les pages web.Ce langage permet :d’écrire de l’hypertexte, d’où son nom, structurer sémantiquement la page, mettre en forme le contenu, créer des formulaires de saisie,d’inclure des ressources multimédias dont des images, des vidéos, et des programmes informatiques, créer des documents interopérables avec des équipements très variés de manière conforme aux exigences de l’accessibilité du web. Il est souvent utilisé conjointement avec le langage de programmation JavaScript et des feuilles de style en cascade (CSS). HTML est inspiré du Standard Generalized Markup Language (SGML). Il s'agit d'un format ouvert.",src:"logos/html.svg"},
    {name:"Css",description:"Les feuilles de style en cascade[1], généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML. Les standards définissant CSS sont publiés par le World Wide Web Consortium (W3C). Introduit au milieu des années 1990, CSS devient couramment utilisé dans la conception de sites web et bien pris en charge par les navigateurs web dans les années 2000.",src:"logos/css.svg"},
    {name:"Javascript",description:"JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives et à ce titre est une partie essentielle des applications web. Avec les langages HTML et CSS, JavaScript est au coeur des langages utilisés par les développeurs web. Une grande majorité des sites web l'utilisent et la majorité des navigateurs web disposent d'un moteur JavaScript[5] pour l'interpréter.JavaScript est aussi employé pour les serveurs Web avec l'utilisation (par exemple) de Node.js[7] ou de Deno[8].JavaScript a été créé en 1995 par Brendan Eich et intégré au navigateur web Netscape Navigator 2.0. L'implémentation concurrente de JavaScript par Microsoft dans Internet Explorer jusqu'à sa version 9 se nommait JScript, tandis que celle d'Adobe Systems se nommait ActionScript. JavaScript a été standardisé sous le nom d'ECMAScript en juin 1997 par Ecma International dans le standard ECMA-262. La version en vigueur de ce standard depuis juin 2022 est la 13e édition.C 'est un langage orienté objet à prototype : les bases du langage et ses principales interfaces sont fournies par des objets. Cependant, à la différence d'un langage orienté objets,les objets de base ne sont pas des instances de classes.En outre,les fonctions sont des objets de première classe.Le langage supporte le paradigme objet, impératif et fonctionnel.JavaScript est le langage possédant le plus large écosystème grâce à son gestionnaire de dépendances npm, avec environ 500 000 paquets en août 2017 ",src:"logos/js.svg"},
    {name:"Sql",description:"SQL (sigle de Structured Query Language, en français langage de requête structurée) est un langage informatique normalisé servant à exploiter des bases de données relationnelles. La partie langage de manipulation des données de SQL permet de rechercher, d'ajouter, de modifier ou de supprimer des données dans les bases de données relationnelles. Outre le langage de manipulation des données: le langage de définition des données permet de créer et de modifier l'organisation des données dans la base de données, le langage de contrôle de transaction permet de commencer et de terminer des transactions, le langage de contrôle des données permet d'autoriser ou d'interdire l'accès à certaines données à certaines personnes. Créé en 1974, normalisé depuis 1986, le langage est reconnu par la grande majorité des systèmes de gestion de bases de données relationnelles (abrégé SGBDR) du marché. SQL fait partie de la même famille que les langages ALPHA (dont il est le descendant), SQUARE, QUEL (intégré à Ingres) ou QBE (Zloof). Il a été appelé SEQUEL à sa naissance, mais ce nom a été changé en SQL du fait que SEQUEL était une marque déposée de l'avionneur Hawker-Siddeley.",src:"logos/SQL.svg"},
    {name:"Python",description:"Python (prononcé /pi.tɔ̃/) est un langage de programmation interprété, multi-paradigme et multiplateformes. Il favorise la programmation impérative structurée, fonctionnelle et orientée objet. Il est doté d'un typage dynamique fort, d'une gestion automatique de la mémoire par ramasse-miettes et d'un système de gestion d'exceptions ; il est ainsi similaire à Perl, Ruby, Scheme, Smalltalk et Tcl.Le langage Python est placé sous une licence libre proche de la licence BSD4 et fonctionne sur la plupart des plates-formes informatiques, des smartphones aux ordinateurs centraux, de Windows à Unix avec notamment GNU/Linux en passant par macOS, ou encore Android, iOS, et peut aussi être traduit en Java ou .NET. Il est conçu pour optimiser la productivité des programmeurs en offrant des outils de haut niveau et une syntaxe simple à utiliser.Il est également apprécié par certains pédagogues qui y trouvent un langage où la syntaxe, clairement séparée des mécanismes de bas niveau, permet une initiation aisée aux concepts de base de la programmation.",src:"logos/Python.png"},
    {name:"Java",description:"Java est un langage de programmation orienté objet créé par James Gosling et Patrick Naughton, employés de Sun Microsystems, avec le soutien de Bill Joy (cofondateur de Sun Microsystems en 1982), présenté officiellement le 23 mai 1995 au SunWorld. La société Sun a été ensuite rachetée en 2009 par la société Oracle qui détient et maintient désormais Java.Une particularité de Java est que les logiciels écrits dans ce langage sont compilés vers une représentation binaire intermédiaire qui peut être exécutée dans une machine virtuelle Java (JVM) en faisant abstraction du système d'exploitation.",src:"logos/Java.svg"},
    {name:"Bash",description:"Bash (acronyme de Bourne-Again shell) est un interpréteur en ligne de commande de type script. C'est le shell Unix du projet GNU. Fondé sur le Bourne shell, Bash lui apporte de nombreuses améliorations, provenant notamment du Korn shell et du C shell. Bash est un logiciel libre publié sous licence publique générale GNU. Il est l'interprète par défaut sur de nombreux Unix libres, notamment sur les systèmes GNU/Linux. C'était aussi le shell par défaut de Mac OS X, remplacé avec macOS Catalina (10.15) par zsh. Il a été d'abord porté sous Microsoft Windows par le projet Cygwin, et depuis Windows 10 constitue une option à part entière du système d'exploitation, nommée Windows Subsystem for Linux.",scr:"logos/Bash.png"},
    {name:"Powershell",description:"Windows PowerShell, anciennement Microsoft Command Shell (MSH), nom de code Monad, est une suite logicielle développée par Microsoft qui intègre une interface en ligne de commande, un langage de script nommé PowerShell ainsi qu'un kit de développement. Il est inclus dans Windows 7, Windows 8.1, Windows 10 et Windows 11 (y compris les versions grand public) et s'appuie sur le framework Microsoft .NET.",src:"logos/PowerShell.png"},
    {name:"C#",description:"C# (C sharp en anglais britannique) est un langage de programmation orientée objet, commercialisé par Microsoft depuis 20023 et destiné à développer sur la plateforme Microsoft .NET. Il est dérivé du C++ et très proche du Java dont il reprend la syntaxe générale ainsi que les concepts, y ajoutant des notions telles que la surcharge des opérateurs, les indexeurs et les délégués. Il est utilisé notamment pour développer des applications web sur la plateforme ASP.NET.",src:"logos/Csharp.svg"},
    {name:"php",description:"PHP: Hypertext Preprocessor29, plus connu sous son sigle PHP (sigle auto-référentiel), est un langage de programmation libre30, principalement utilisé pour produire des pages Web dynamiques via un serveur HTTP29, mais pouvant également fonctionner comme n'importe quel langage interprété de façon locale. PHP est un langage impératif orienté objet. PHP a permis de créer un grand nombre de sites web célèbres, comme Facebook et Wikipédia31. Il est considéré comme une des bases de la création de sites web dits dynamiques mais également des applications web.",src:"logos/PHP.svg"},
    {name:"C++",description:"C++ est un langage de programmation compilé permettant la programmation sous de multiples paradigmes, dont la programmation procédurale, la programmation orientée objet et la programmation générique. Ses bonnes performances, et sa compatibilité avec le C en font un des langages de programmation les plus utilisés dans les applications où la performance est critique. Créé initialement par Bjarne Stroustrup dans les années 1980, le langage C++ est aujourd'hui normalisé par l'ISO. Sa première normalisation date de 1998 (ISO/CEI 14882:1998), ensuite amendée par l'erratum technique de 2003 (ISO/CEI 14882:2003). Une importante mise à jour a été ratifiée et publiée par l'ISO en septembre 2011 sous le nom de ISO/IEC 14882:2011, ou C++113. Depuis, des mises à jour sont publiées régulièrement : en 2014 (ISO/CEI 14882:2014, ou C++144), en 2017 (ISO/CEI 14882:2017, ou C++175) puis en 2020 (ISO/IEC 14882:2020, ou C++206).",src:"logos/C++.svg"},
    {name:"Typescript",description:"TypeScript est un langage de programmation libre et open source développé par Microsoft qui a pour but d'améliorer et de sécuriser la production de code JavaScript. Il s'agit d'un sur-ensemble syntaxique strict de JavaScript (c'est-à-dire que tout code JavaScript correct peut être utilisé avec TypeScript). Le code TypeScript est transcompilé en JavaScript, et peut ainsi être interprété par n'importe quel navigateur web ou moteur JavaScript. TypeScript a été cocréé par Anders Hejlsberg, principal inventeur de C# 3,4,5,6,7. TypeScript permet un typage statique optionnel des variables et des fonctions, la création de classes et d'interfaces, l'import de modules, tout en conservant l'approche non-contraignante de JavaScript. Il supporte la spécification ECMAScript 6.TypeScript prend en charge les fichiers de définition qui peuvent contenir des informations sur le type des bibliothèques JavaScript existantes, tout comme les fichiers d'en-tête C++ peuvent décrire la structure des fichiers objets8 existants. Cela permet à d'autres programmes d'utiliser les valeurs définies dans les fichiers comme s'il s'agissait d'entités TypeScript de type statique. Il existe des fichiers d'en-tête tiers pour les bibliothèques populaires telles que jQuery et D3.js. Des en-têtes TypeScript pour les modules de base Node.js sont également disponibles, permettant le développement de programmes Node.js dans TypeScript.Le compilateur TypeScript est lui-même écrit en TypeScript et compilé en JavaScript. Il est sous licence Apache License 2.0. TypeScript est inclus en tant que langage de programmation de première classe dans Microsoft Visual Studio 2013 Update 2 et versions ultérieures, à côté de C# et d'autres langages Microsoft. Une extension officielle permet également à Visual Studio 2012 de prendre en charge TypeScript. Anders Hejlsberg, architecte principal de C# et créateur de Delphi et Turbo Pascal, a travaillé sur le développement de TypeScript.",src:"logos/Typescript.svg"},
    {name:"C",description:"C est un langage de programmation impératif généraliste, de bas niveau. Inventé au début des années 1970 pour réécrire Unix, C est devenu un des langages les plus utilisés, encore de nos jours. De nombreux langages plus modernes comme C++, C#, Java et PHP ou JavaScript ont repris une syntaxe similaire au C et reprennent en partie sa logique. C offre au développeur une marge de contrôle importante sur la machine (notamment sur la gestion de la mémoire) et est de ce fait utilisé pour réaliser les « fondations » (compilateurs, interpréteurs…) de ces langages plus modernes.",src:"logos/C.svg"},
    {name:"Ruby",description:"Ruby est un langage de programmation libre. Il est interprété, orienté objet et multi-paradigme. Le langage a été standardisé au Japon en 2011 (JIS X 3017:2011)5, et en 2012 par l'Organisation internationale de normalisation (ISO 30170:2012)6.",src:"logos/Ruby.svg"},
    {name:"Go",description:"Go est un langage de programmation compilé et concurrent inspiré de C et Pascal. Ce langage a été développé par Google6 à partir d’un concept initial de Robert Griesemer (en), Rob Pike et Ken Thompson. Go possède deux implémentations : la première utilise gc, le compilateur Go ; la seconde utilise gccgo, « frontend » GCC écrit en C++. Go est écrit en C en utilisant yacc et GNU Bison pour l’analyse syntaxique7 jusqu’à la version 1.4, et en Go lui-même pour les versions suivantes (1.5). Logo de Google Go\n    Mascotte de Google Go. Un objectif de Go est donné par Rob Pike, l’un de ses trois créateurs, qui dit à propos des développeurs inexpérimentés8 : « Ils ne sont pas capables de comprendre un langage brillant, mais nous voulons les amener à réaliser de bons programmes. Ainsi, le langage que nous leur donnons doit être facile à comprendre et facile à adopter » Go veut faciliter et accélérer la programmation à grande échelle : en raison de sa simplicité, il est donc concevable de l’utiliser aussi bien pour écrire des applications, des scripts ou de grands systèmes. Cette simplicité est nécessaire aussi pour assurer la maintenance et l’évolution des programmes sur plusieurs générations de développeurs. S’il vise aussi la rapidité d’exécution, indispensable à la programmation système, il considère le multithreading comme le moyen le plus robuste d’assurer sur les processeurs actuels cette rapidité9 tout en rendant la maintenance facile par séparation de tâches simples exécutées indépendamment afin d’éviter de créer des « usines à gaz ». Cette conception permet également le fonctionnement sans réécriture sur des architectures multi-cœurs en exploitant immédiatement l’augmentation de puissance correspondante.",src:"logos/Go.svg"},
    {name:"Assembly",description:"Un langage d'assemblage ou langage assembleur est, en programmation informatique, le langage de plus bas niveau qui représente le langage machine sous une forme lisible par un humain. Les combinaisons de bits du langage machine sont représentées par des symboles dits « mnémoniques », c'est-à-dire faciles à retenir. Le programme assembleur convertit ces mnémoniques en langage machine, ainsi que les valeurs (écrites en décimal) en binaire et les libellés d'emplacements en adresses, en vue de créer par exemple un fichier objet ou un fichier exécutable. Dans la pratique courante, le même terme assembleur est utilisé à la fois pour désigner le langage d'assemblage et le programme assembleur qui le traduit. On parle ainsi de « programmation en assembleur ». La traduction une fois pour toutes par beaucoup d'interpréteurs de chaque nom de variable rencontré dans une instruction (évoluée) par la position mémoire associée et de chaque constante (écrite par l'utilisateur en décimal) en binaire est typique d'une opération d'assemblage, bien que le nom d'assembleur ne soit pas couramment utilisé dans ce cas précis.",img:"logos/Assembly.svg"},
    {name:"Swift",description:"Swift est un langage de programmation objet compilé, multi-paradigmes, qui se veut simple, performant et sûr. Il est développé en open source.Le projet de développement de Swift est géré par Apple, qui en est également le principal contributeur ; mais de nombreux membres de la communauté Swift, ainsi que d'autres acteurs, tels que Google et IBM, participent également à son développement. Swift est officiellement supporté sur les systèmes d'exploitation Ubuntu, iOS, macOS, watchOS et tvOS. Un support non officiel (géré par la communauté) existe pour d'autres plateformes Linux, telles que Debian et Fedora.Un manuel officiel en anglais est disponible en ligne6. Swift dispose d'une interopérabilité avec le langage C ainsi qu'avec l'Objective-C sur les plateformes d'Apple. Le compilateur de Swift utilise LLVM pour la génération du code machine.",src:"logos/swift.png"},
    {name:"Kotlin",description:"Kotlin est un langage de programmation orienté objet et fonctionnel, avec un typage statique qui permet de compiler pour la machine virtuelle Java, JavaScript, et vers plusieurs plateformes en natif (grâce à LLVM). Son développement provient principalement d'une équipe de programmeurs chez JetBrains basée à Saint-Pétersbourg en Russie (son nom vient de l'île de Kotline, près de St. Pétersbourg). Google annonce pendant la conférence Google I/O 2017 que Kotlin devient le second langage de programmation officiellement pris en charge par Android3 après Java. Le 8 mai 2019, toujours lors de la conférence Google I/O, Kotlin devient officiellement le langage de programmation voulu et recommandé par le géant américain Google pour le développement des applications Android4. Pivotal Software annonce le 4 janvier 2017 le support officiel de Kotlin sur la cinquième version du Framework Spring5.",src:"logos/Kotlin.svg"},
    {name:"R",description:"R est un langage de programmation et un logiciel libre destiné aux statistiques et à la science des données soutenu par la R Foundation for Statistical Computing. Il fait partie de la liste des paquets GNU3 et est écrit en C, Fortran et R. GNU R est un logiciel libre distribué selon les termes de la licence GNU GPL. Le site officiel fournit des binaires pour Linux, Windows et macOS, et des portages existent pour d'autres systèmes d'exploitation. Le langage R est largement utilisé par les statisticiens, les data miners, data scientists pour le développement de logiciels statistiques et l'analyse des données. En janvier 2022, R est classé 12e dans l'index TIOBE qui mesure la popularité des langages de programmation.",src:"logos/R.png"},
    {name:"VBA",description:"Visual Basic for Applications (VBA) est une implémentation de Microsoft Visual Basic qui est intégrée dans toutes les applications de Microsoft Office, dans quelques autres applications Microsoft comme Visio et au moins partiellement dans quelques autres applications comme AutoCAD, WordPerfect, MicroStation, Solidworks ou encore ArcGIS. Il remplace et étend les capacités des langages macro spécifiques aux plus anciennes applications comme le langage WordBasic intégré à une ancienne version du logiciel Word, et peut être utilisé pour contrôler la quasi-totalité de l'IHM des applications hôtes, ce qui inclut la possibilité de manipuler les fonctionnalités de l'interface utilisateur comme les menus, et de personnaliser les boîtes de dialogue et les formulaires utilisateurs. Comme son nom l'indique, VBA est très lié à Visual Basic (les syntaxes et concepts des deux langages se ressemblent), mais ne peut normalement qu'exécuter du code dans une application hôte Microsoft Office (et non pas d'une application autonome, il requiert donc une licence de la suite bureautique Microsoft). Il peut cependant être utilisé pour contrôler une application à partir d'une autre (par exemple, créer automatiquement un document Word à partir de données Excel). Le code ainsi exécuté est stocké dans des instances de documents, on l'appelle également macro. VBA est fonctionnellement riche et extrêmement flexible, mais il possède d'importantes limitations, comme son support limité des fonctions de rappel (callbacks), ainsi qu'une gestion des erreurs archaïque, utilisation de handlers d'erreurs en lieu et place d'un mécanisme d'exceptions. Même si ces limitations rendent ce langage très peu utilisé par les développeurs informaticiens soucieux d'utiliser des outils avant tout performants, sa simplicité et sa facilité d'accès ont séduit certaines professions, notamment dans la finance.",src:"logos/VBA.svg"},
    {name:"Objective-C",description:"Objective-C est un langage de programmation orienté objet réflexif. C'est une extension du C ANSI, comme le C++, mais qui se distingue de ce dernier par sa distribution dynamique des messages, son typage faible ou fort, son typage dynamique et son chargement dynamique. Contrairement au C++, il ne permet pas l'héritage multiple mais il existe toutefois des moyens de combiner les avantages de C++ et d'Objective-C. Aujourd'hui, il est principalement utilisé dans les systèmes d'exploitation d'Apple : macOS et son dérivé iOS, basés sur la bibliothèque de classes Cocoa mais il existe aussi une bibliothèque de classes libre GNUstep sous GNU/Linux. Cocoa et GNUstep sont les successeurs de l'API OpenStep, utilisée dans les systèmes d'exploitation NeXTSTEP (à l'origine de macOS) et son pendant libre OPENSTEP.",src:"logos/Objective-c.svg"},
    {name:"Scala",description:"Scala est un langage de programmation multi-paradigme conçu à l'École polytechnique fédérale de Lausanne (EPFL) pour exprimer les modèles de programmation courants dans une forme concise et élégante. Son nom vient de l'anglais Scalable language qui signifie à peu près « langage adaptable » ou « langage qui peut être mis à l'échelle ». Il peut en effet être vu comme un métalangage. Scala intègre les paradigmes de programmation orientée objet et de programmation fonctionnelle, avec un typage statique. Il concilie ainsi ces deux paradigmes habituellement opposés (à de rares exceptions près, telle que le langage OCaml) et offre au développeur la possibilité de choisir le paradigme le plus approprié à son problème. Il est prévu pour être compilé en bytecode Java (exécutable sur la JVM), ou .NET. Seule la plateforme Java est supportée officiellement par l'EPFL. Si on souhaite l'utiliser exclusivement avec la JVM, il est alors possible d'utiliser les bibliothèques écrites en Java de façon complètement transparente. Ainsi, Scala bénéficie de la maturité et de la diversité des bibliothèques qui ont fait la force de Java depuis une dizaine d'années. De plus, il est possible d'invoquer du code écrit en Scala à partir de programmes écrits en Java ce qui facilite la transition de Java à Scala. Les développeurs habitués à un seul paradigme (par exemple ceux ayant utilisé principalement Java qui, lui, repose sur la programmation orientée objet) peuvent trouver ce langage déroutant et difficile car il nécessite l'apprentissage de concepts différents si on veut pouvoir exploiter tout son potentiel. Néanmoins, il est tout à fait possible de l'utiliser dans un premier temps comme remplaçant de Java, en profitant alors de sa syntaxe épurée, puis d'utiliser les différents « nouveaux » concepts au fur et à mesure de leur apprentissage.",src:"logos/Scala.svg"},
    {name:"Rust",description:"Rust est un langage de programmation compilé multi-paradigme conçu et développé par Mozilla Research depuis 20105. Il a été conçu pour être « un langage fiable, concurrent, pratique »6,7, supportant les styles de programmation purement fonctionnel, modèle d'acteur, procédural, ainsi qu'orienté objet sous certains aspects8.En 2020, ses domaines de prédilection sont la programmation système, les applications en ligne de commande, les applications Web via WebAssembly, les services réseaux et les systèmes embarqués. Du fait de la politique de Mozilla9, Rust est entièrement développé de façon ouverte (les ingénieurs de Mozilla Research publient leurs idées et les décisions prises lors des réunions) et sollicite les remarques et contributions de la communauté. La conception du langage est graduellement améliorée au travers des retours de l'équipe travaillant sur le moteur de rendu Servo10 et de façon pragmatique lors de l'écriture du compilateur. Bien que le projet soit financé par Mozilla, la majorité des contributions proviennent de la communauté.",src:"logos/Rust.png"},
    {name:"Dart",description:"Dart est un langage de programmation optimisé pour les applications sur plusieurs plateformes. Il est développé par Google et est utilisé pour créer des applications mobiles, de bureau, de serveur et web. Dart est un langage orienté objet à ramasse-miettes avec une syntaxe de type C++1. Dart peut se compiler en code natif ou en JavaScript. Il prend en charge les interfaces, les mixins,les classes abstraites, les génériques réifiés et l'inférence de type2.",src:"logos/Dart.svg"},
    {name:"Elixir",description:"Elixir est un langage de programmation multi-paradigme fonctionnant sur la machine virtuelle Erlang (BEAM). Il est créé en 2011 par le développeur José Valim, personnalité du monde Ruby et l'un des premiers contributeurs au framework de programmation Ruby on Rails. Il intègre les paradigmes de programmation fonctionnelle, programmation concurrente et programmation orientée processus (en), et supporte la métaprogrammation via un système de macros et le polymorphisme via un système dit de protocoles.",src:"logos/Elixir.png"},
    {name:"Clojure",description:"Clojure est un langage de programmation fonctionnel compilé, multi-plateforme et destiné à la création de programmes sûrs et facilement distribuables. C’est un dialecte de Lisp. Il transpile vers du bytecode Java, du code JavaScript et du bytecode .NET. Clojure est donc disponible sur la JVM, le CLR, les navigateurs et Node.js.",src:"logos/Clojuresvg.svg"},
    {name:"Webassembly",description:"WebAssembly, abrégé wasm, est un standard du World Wide Web pour le développement d’applications. Il est conçu pour compléter JavaScript avec des performances supérieures. Le standard consiste en un bytecode, sa représentation textuelle et un environnement d'exécution dans un bac à sable compatible avec JavaScript. Il peut être exécuté dans un navigateur Web et en dehors. WebAssembly est standardisé dans le cadre du World Wide Web Consortium.Comme WebAssembly ne spécifie qu'un langage de bas niveau, le bytecode est généralement produit en compilant un langage de plus haut niveau. Parmi les premiers langages supportés figurent Rust avec le projet/module (crate) wasm-bindgen ainsi que le C et C++, compilés avec Emscripten (basé sur LLVM). De nombreux autres langages de programmation possèdent aujourd'hui un compilateur WebAssembly, parmi lesquels : C#, Go, Java, Lua, Python ou Ruby.Les navigateurs Web compilent le bytecode wasm dans le langage machine de l'hôte sur lequel ils sont utilisés avant de l'exécuter.",src:"logos/WebAssembly.svg"}];
  
  zoom({
    active: "zoom-active", // Class added to container when it is zoomed
    transition: "zoom-transition", // Class added to images when they are being animated, class is removed after animation is finished
    visible: "visible", // Class added to images after they are loaded,
    zoom: "zoom" // Image container class
  }, {
    scaleDefault: 2, // Used on doubleclick, doubletap and resize
    scaleDifference: 0.5, // Used on wheel zoom
    scaleMax: 10, // Maximum zoom
    scaleMin: 1, // Minimum zoom
    scrollDisable: true, // Disable page scrolling when zooming an image
    transitionDuration: 200, // This should correspond with zoom-transition transition duration
    doubleclickDelay: 300 // // Delay between clicks - used when scripts decides if user performed doubleclick or not
  }, (function ($container, zoomed) {
 // Callback, gets triggered whenever active class is added/removed from container, value of zoomed is true or false
  }));

setTimeout(remplacertruc, 4000);
    function remplacertruc(){
        plusla.classList.add('box1')
        acceuil.classList.remove('acceuil')
    } 
         // ca c'est pour mes trois point du loader
let toto ='...'
function typingText(text, speed) {
    var i = 0;
    var timer = setInterval(function () {
        if (i < text.length) {
            document.getElementById("typed").innerHTML += text.charAt(i);
            i++;
        } else {
            i=0
            document.getElementById("typed").innerHTML=""
        }
    }, speed);
}
typingText(toto,800);
document.querySelector('#commencon').addEventListener('click',function(){
    acceuil.classList.add('none')
    pagejeu.classList.remove('none')
})
function check() {
    for (let index = 0; index < resultatTrouves.length; index++) {
        if (input.toLowerCase()=== resultatTrouves[index].toLowerCase()) {
            return true
        }
    } 
    return false 
}
window.addEventListener('keydown', function(event){

if (modal3.classList.contains('none')=== false) {
    return;
}
if(modal4.classList.contains('none')=== false){
    return;
}
if (modal2.classList.contains('none')=== false){
    return;
}
if(pagejeu.classList.contains('none')){
    return;
}
    checkCountRotate = 0;
    event.stopPropagation()
    modal.classList.remove('none')
    document.querySelector(".text").focus();
if (document.querySelector('.text').value !== ''){
    if (event.code === 'Enter') {
        input=document.querySelector('.text').value;
        document.querySelector('.modal').classList.toggle('none')
        document.querySelector('.text').value = ""
        
        for (let i = 0; i < reponce.length; i++) {
           if (check() === true) {
               modal3.classList.toggle('none')
               break
           }
            if (input.toLowerCase() === reponce[i].toLowerCase()) {
                document.querySelector('.modalContent4>h2').textContent=tabdescription[i].name;
                document.querySelector('.modalContent4>p').textContent=tabdescription[i].description;
                document.querySelector('.modalContent4>.lg').src=tabdescription[i].src;
                if(coche.checked === true){
                    setTimeout(ferme, 2000);
                        function ferme(){
                        modal4.classList.toggle('none')
                    }
                }
                document.querySelector('.modal4').classList.toggle('none'),
                score++ 
                if(score===reponce.length){
                    result.textContent='You Win!';
                    pagejeu.classList.add('none');
                    afterGame.classList.remove('none');
                }
                countFound.textContent = score
                    resultatTrouves.push(reponce[i])
                    modalContent2.innerHTML+= '<p>'+reponce[i]+'</p>'
                return;
            } 
            checkCountRotate++;
        }
        if (checkCountRotate===reponce.length) {
            switch (error) {
                case 0:
                    document.querySelector('.text').value = "";
                    error++;
                    document.querySelector('.error1').classList.add('lightBlue');
                    break;
                case 1:
                    document.querySelector('.text').value="";
                    error++;
                    document.querySelector('.error2').classList.add('lightBlue');
                    break;
                case 2:
                    document.querySelector('.text').value="";
                    error++;
                    document.querySelector('.error3').classList.add('lightBlue');
                    result.textContent='You Lose!';
                    pagejeu.classList.add('none');
                    afterGame.classList.remove('none');
                    break;
            }
        }
        
    }}
})
  relaunch.addEventListener('click', function(){
      score =0;
      countFound.textContent = score;
      afterGame.classList.add('none');
      acceuil.classList.remove('none');
      error=0;
      for (let index = 0; index < errorClass.length; index++) {
            document.querySelector('.'+errorClass[index]).classList.remove('lightBlue');  
      }
  })
document.querySelector('.modal_content').addEventListener('click',function(event){
    event.stopPropagation()
    document.querySelector('.modal').classList.toggle('none')
})
langageTrouves.addEventListener('click',function(){
    modal2.classList.toggle('none');
})
modal2.addEventListener('click',function(){
    modal2.classList.toggle('none');
})

modal3.addEventListener('click',function(){
    modal3.classList.toggle('none');
})
croix.addEventListener('click',function(){
    modal4.classList.toggle('none');
})
pagejeu.addEventListener('wheel',function(){
    document.querySelector('.fill').style.height= 100 - document.querySelector('.media').dataset.scale*10+'%';
})
mention.addEventListener('click',function(){
    modal5.classList.toggle('none');
})
modal5.addEventListener('click',function(){
    modal5.classList.toggle('none');
})
politique.addEventListener('click',function(){
    modal6.classList.toggle('none');
})
modal6.addEventListener('click', function(){
    modal6.classList.toggle('none');
})
new ResizeObserver((entries) => {
    if (entries[0].contentRect.width <= 900) {
      console.log("entries[0]");
      responsivePop.classList.add("none");
      acceuil.classList.add('none')
      boite.classList.Add('none')
    } else {
      responsivePop.classList.remove("none");
      acceuil.classList.remove("none")
    }
  }).observe(document.body);