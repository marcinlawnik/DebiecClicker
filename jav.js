
var time_diff = 0;
var shekeliStolen = 0;
var allTimeShekeli = 0;
var multiplier = 1;
var currentDPS = 0;

var goyMercCounter = 0;
var cheapJewCounter = 0;
var vacuumCleanerCounter = 0;

var beggarPloxCounter = 0;
var taxMenCounter = 0;
var creditCompanyCounter = 0;

var sinagogaCounter = 0;
var jewHospitalCounter = 0;
var mcDonaldsCounter = 0;
var massonCounter = 0;

// Prices
// Tier 1
var goyMercPrice = 50;
var cheapJewPrice = 300;
var vacuumCleanerPrice = 600;

// Tier 2
var beggarPloxPrice = 2000;
var taxMenPrice = 4000;
var creditCompanyPrice = 7500;

// Tier 3
var sinagogaPrice = 10000;
var jewHospitalPrice = 20000;
var mcDonaldsPrice = 50000;
var massonPrice = 200000;

// Consumables
var steamPrice = 750000;
var OdessaModePrice = 500000;


// Multipliers
// Tier 1
var goyMercMultiplier = 0;
var cheapJewMultiplier = 1;
var vacuumCleanerMultiplier = 2;

// Tier 2
var beggarPloxMultiplier = 3;
var taxMenMultiplier = 4;
var creditCompanyMultiplier = 5;

// Tier 3
var sinagogaMultiplier = 7;
var jewHospitalMultiplier = 9;
var mcDonaldsMultiplier = 11;
var massonMultiplier = 15;

// Consumables
var OdessaModeMultiplier = 30;
var steamMultiplier = 100;

// DPS counters
// Tier 1
var goyMercDPS = 1;
var cheapJewDPS = 2;
var vacuumCleanerDPS = 3;

// Tier 2
var beggarPloxDPS = 5;
var taxMenDPS = 7;
var creditCompanyDPS = 10;

// Tier 3
var sinagogaDPS = 12;
var jewHospitalDPS = 15;
var mcDonaldsDPS = 18;
var massonDPS = 25;

// Consumables
var OdessaModeDPS = 30;
var steamDPS = 1000;

// Other
var displayString = "ujebanych studentów";
var hasOdessaMode = false;
var hasSteamMode = false;


window.setInterval(tick, 1000);

function gibeShekel() {
    // this is for debugging
    shekeliStolen += multiplier;
    allTimeShekeli += multiplier;
    updateDisplay();
}

function updateDisplay() {

    time_diff = time_tick - base_time;
    // Display elements
    document.getElementById("shekelDisplay").innerHTML = beautify(shekeliStolen);
    document.getElementById("shekelFlavorText").innerHTML = displayString;
    document.getElementById("score").innerHTML = shekeliStolen;
    document.getElementById("janusz_time").innerHTML = seconds_to_time(time_diff);
    document.getElementById("janusz_time2").innerHTML = "<div>Przejebałeś z Januszem <b>" +seconds_to_time(time_diff) + "</b></div>";
    document.getElementById("multiplierDisplay").innerHTML = "<div>Studentów ujebanych za kliknięcie: <b>" + beautify(multiplier) + "</b></div>" ;
    document.getElementById("dpsDisplay").innerHTML = " <div>Studentów ujebanych na sekundę:  <b>" + beautify(currentDPS)+ "</b></div>";
    document.getElementById("allTimeDicksSucked").innerHTML = "(W sumie ujebałeś " + beautify(allTimeShekeli) + " studentów)";

    // Tier 1
    document.getElementById("buyGoyMercButton").innerHTML = "<b>Puść listę na wykładzie</b><br />" + beautify(goyMercPrice) + " studentów (+" + beautify(goyMercDPS) + "studentów)<br />Kupionych:: <b>"+beautify(goyMercCounter)+"</b>";

    document.getElementById("buyCheapJewButton").innerHTML = "<b>Wprowadź nieobowiązkowy dodatkowy materiał obowiązkowy</b><br />" + beautify(cheapJewPrice) + " studentów (+" + beautify(cheapJewMultiplier) + "klik, +" + beautify(cheapJewDPS) + "studentów)<br />Kupionych:: <b>"+beautify(cheapJewCounter)+"</b>";

    document.getElementById("buyVacuumCleanerButton").innerHTML = "<b>Nie przyjdź na własne konsultacje</b><br />" + beautify(vacuumCleanerPrice) + " studentów (+" + beautify(vacuumCleanerMultiplier) + "klik, +" + beautify(vacuumCleanerDPS) + "studentów)<br />Kupionych:: <b>"+beautify(vacuumCleanerCounter)+"</b>";

    // Tier 2
    document.getElementById("buyBeggarPloxButton").innerHTML = "<b>Zaliczenie od 70%</b><br />" + beautify(beggarPloxPrice) + " studentów (+" + beautify(beggarPloxMultiplier) + "klik, +" + beautify(beggarPloxDPS) + "studentów)<br />Kupionych:: <b>"+beautify(beggarPloxCounter)+"</b>";

    document.getElementById("buyTaxMenButton").innerHTML = "<b>Wymagaj swoich rysunków</b><br />" + beautify(taxMenPrice) + " studentów (+" + beautify(taxMenMultiplier) + "klik, +" + beautify(taxMenDPS) + "studentów)<br />Kupionych:: <b>"+beautify(taxMenCounter)+"</b>";

    document.getElementById("buyCreditCompanyButton").innerHTML = "<b>Egzamin ustny</b><br />" + beautify(creditCompanyPrice) + " studentów (+" + beautify(creditCompanyMultiplier) + "klik, +" +  beautify(creditCompanyDPS) + "studentów)<br />Kupionych:: <b>"+beautify(creditCompanyCounter)+"</b>";

    // Tier 3
    document.getElementById("buySinagogaButton").innerHTML = "<b>Wrzuć zadania ze swojej pracy doktorskiej</b><br />" + beautify(sinagogaPrice) + " studentów (+" + beautify(sinagogaMultiplier) + "klik, +" + beautify(sinagogaDPS) + "studentów)<br />Kupionych:: <b>"+beautify(sinagogaCounter)+"</b>";
    document.getElementById("buyJewHospitalButton").innerHTML = "<b>Nie przyjdź na egzamin, a potem powiedz, że nikt nie przyszedł</b><br />" + beautify(jewHospitalPrice) + " studentów (+" + beautify(jewHospitalMultiplier) + "klik, +" + beautify(jewHospitalDPS) + "studentów)<br />Kupionych:: <b>"+beautify(jewHospitalCounter)+"</b>";
    document.getElementById("buyMcDonaldsButton").innerHTML = "<b>Wyznacz wszystkie egzaminy poprawkowe w tym samym dniu</b><br />" + beautify(mcDonaldsPrice) + " studentów (+" + beautify(mcDonaldsMultiplier) + "klik, +" + beautify(mcDonaldsDPS) + "studentów)<br />Kupionych:: <b>"+beautify(mcDonaldsCounter)+"</b>";
    document.getElementById("buyMassonButton").innerHTML = "<b>Ogłoś wyniki pierwszego terminu w marcu</b><br />" + beautify(massonPrice) + " studentów (+" + beautify(massonMultiplier) + "klik, +" + beautify(massonDPS) + "studentów)<br />Kupionych:: <b>"+beautify(massonCounter)+"</b>";

    // Consumables
    if (hasSteamMode == false)
        document.getElementById("buySteamButton").innerHTML = "<b>Zlikwiduj cały kierunek</b><br />" + beautify(steamPrice) + " studentów (2 razy więcej ujebanych studentów)";
    if (hasOdessaMode == false)
        document.getElementById("buyOdessaModeButton").innerHTML = "<b>Przygotuj test - wielokrotny wybór i żadna odpowiedź nie jest poprawna</b><br />" + beautify(OdessaModePrice) + " studentów (Efekt: ???)";

    toggleButtons();
    updateSlogan();
}

function buy(whatToBuy) {
    // Tier 1
    if(whatToBuy == "goyMerc") {
        if(shekeliStolen >= goyMercPrice) {
            goyMercCounter += 1;
            shekeliStolen -= goyMercPrice;
            multiplier += goyMercMultiplier;
            currentDPS += goyMercDPS;
            goyMercPrice = Math.round(goyMercPrice * 1.1);
        }
    } else if(whatToBuy == "cheapJew") {
        if(shekeliStolen >= cheapJewPrice) {
            cheapJewCounter += 1;
            shekeliStolen -= cheapJewPrice;
            multiplier += cheapJewMultiplier;
            currentDPS += cheapJewDPS;
            cheapJewPrice = Math.round(cheapJewPrice * 1.1);
        }
    } else if(whatToBuy == "vacuumCleaner") {
        if(shekeliStolen >= vacuumCleanerPrice) {
            vacuumCleanerCounter += 1;
            shekeliStolen -= vacuumCleanerPrice;
            multiplier += vacuumCleanerMultiplier;
            currentDPS += vacuumCleanerDPS;
            vacuumCleanerPrice = Math.round(vacuumCleanerPrice * 1.1);
        }
        // Tier 2
    } else if(whatToBuy == "beggarPlox") {
        if(shekeliStolen >= beggarPloxPrice) {
            beggarPloxCounter += 1;
            shekeliStolen -= beggarPloxPrice;
            multiplier += beggarPloxMultiplier;
            currentDPS += beggarPloxDPS;
            beggarPloxPrice = Math.round(beggarPloxPrice * 1.1);
        }
    } else if(whatToBuy == "taxMen") {
        if(shekeliStolen >= taxMenPrice) {
            taxMenCounter += 1;
            shekeliStolen -= taxMenPrice;
            multiplier += taxMenMultiplier;
            currentDPS += taxMenDPS;
            taxMenPrice = Math.round(taxMenPrice * 1.1);
        }
    } else if(whatToBuy == "creditCompany") {
        if(shekeliStolen >= creditCompanyPrice) {
            creditCompanyCounter += 1;
            shekeliStolen -= creditCompanyPrice;
            multiplier += creditCompanyMultiplier;
            currentDPS += creditCompanyDPS;
            creditCompanyPrice = Math.round(creditCompanyPrice * 1.1);
        }
        // Tier 3
    } else if(whatToBuy == "sinagoga") {
        if(shekeliStolen >= sinagogaPrice) {
            sinagogaCounter += 1;
            shekeliStolen -= sinagogaPrice;
            multiplier += sinagogaMultiplier;
            currentDPS += sinagogaDPS;
            sinagogaPrice = Math.round(sinagogaPrice * 1.1);
        }
    } else if(whatToBuy == "jewHospital") {
        if(shekeliStolen >= jewHospitalPrice) {
            jewHospitalCounter += 1;
            shekeliStolen -= jewHospitalPrice;
            multiplier += jewHospitalMultiplier;
            currentDPS += jewHospitalDPS;
            jewHospitalPrice = Math.round(jewHospitalPrice * 1.1);
        }
    } else if(whatToBuy == "mcDonalds") {
        if(shekeliStolen >= mcDonaldsPrice) {
            mcDonaldsCounter += 1;
            shekeliStolen -= mcDonaldsPrice;
            multiplier += mcDonaldsMultiplier;
            currentDPS += mcDonaldsDPS;
            mcDonaldsPrice = Math.round(mcDonaldsPrice * 1.1);
        }
    } else if(whatToBuy == "masson") {
        if(shekeliStolen >= massonPrice) {
            massonCounter += 1;
            shekeliStolen -= massonPrice;
            multiplier += massonMultiplier;
            currentDPS += massonDPS;
            massonPrice = Math.round(massonPrice * 1.1);
        }
        // Consumables

    } else if(whatToBuy == "OdessaMode") {
        if(shekeliStolen >= OdessaModePrice) {
            shekeliStolen -= OdessaModePrice;
            multiplier += OdessaModeMultiplier;
            currentDPS += OdessaModeDPS;

            if(hasSteamMode == true) {
                displayString = "Od wprowadzenia turbo-egzaminu ujebałeś:";
            } else {
                displayString = "Represje ujebały już:";
            }


            document.getElementById("buyOdessaModeButton").setAttribute("onclick","music_play2()");
            document.getElementById("buyOdessaModeButton").innerHTML = "Juz niedaleko! (kliknij)";
            OdessaModePrice = 0;

            hasOdessaMode = true;
        }
    } else if(whatToBuy == "steam") {
        if(shekeliStolen >= steamPrice) {
            shekeliStolen -= steamPrice;
            multiplier += steamMultiplier;
            currentDPS += steamDPS;

            if(hasOdessaMode == true) {
                displayString = "Od zlikwidowania kierunku ujebałeś:";
            } else {
                displayString = "Represje ujebały już:";
            }


            document.getElementById("buySteamButton").setAttribute("onclick","call_janusz()");
            document.getElementById("buySteamButton").innerHTML = "Twoja wygrana (kliknij)";
            steamPrice = 0;
            hasSteamMode = true;
        }
    }

    updateDisplay();
}
//createGrafix(whatToBuy);^^
function toggleButtons() {
    // Tier 1
    if(shekeliStolen < goyMercPrice) {
        document.getElementById("buyGoyMercButton").disabled = true;
    } else {
        document.getElementById("buyGoyMercButton").disabled = false;
    }

    if(shekeliStolen < cheapJewPrice) {
        document.getElementById("buyCheapJewButton").disabled = true;
    } else {
        document.getElementById("buyCheapJewButton").disabled = false;
    }

    if(shekeliStolen < vacuumCleanerPrice) {
        document.getElementById("buyVacuumCleanerButton").disabled = true;
    } else {
        document.getElementById("buyVacuumCleanerButton").disabled = false;
    }
    // Tier 2
    if(shekeliStolen < beggarPloxPrice) {
        document.getElementById("buyBeggarPloxButton").disabled = true;
    } else {
        document.getElementById("buyBeggarPloxButton").disabled = false;
    }

    if(shekeliStolen < taxMenPrice) {
        document.getElementById("buyTaxMenButton").disabled = true;
    } else {
        document.getElementById("buyTaxMenButton").disabled = false;
    }

    if(shekeliStolen < creditCompanyPrice) {
        document.getElementById("buyCreditCompanyButton").disabled = true;
    } else {
        document.getElementById("buyCreditCompanyButton").disabled = false;
    }
    // Tier 3
    if(shekeliStolen < sinagogaPrice) {
        document.getElementById("buySinagogaButton").disabled = true;
    } else {
        document.getElementById("buySinagogaButton").disabled = false;
    }

    if(shekeliStolen < jewHospitalPrice) {
        document.getElementById("buyJewHospitalButton").disabled = true;
    } else {
        document.getElementById("buyJewHospitalButton").disabled = false;
    }

    if(shekeliStolen < mcDonaldsPrice) {
        document.getElementById("buyMcDonaldsButton").disabled = true;
    } else {
        document.getElementById("buyMcDonaldsButton").disabled = false;
    }

    if(shekeliStolen < massonPrice) {
        document.getElementById("buyMassonButton").disabled = true;
    } else {
        document.getElementById("buyMassonButton").disabled = false;
    }

    // Consumables
    if(shekeliStolen < steamPrice) {
        document.getElementById("buySteamButton").disabled = true;
    } else {
        document.getElementById("buySteamButton").disabled = false;
    }

    if(shekeliStolen < OdessaModePrice) {
        document.getElementById("buyOdessaModeButton").disabled = true;
    } else {
        document.getElementById("buyOdessaModeButton").disabled = false;
    }

    document.getElementById("send_score").disabled = false;
}

function tick() {
    if(window_focus==true || dialog_opened==false){
        shekeliStolen += currentDPS;
        allTimeShekeli += currentDPS;
        time_tick++;
    }
    updateDisplay();
}

function beautify(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function seconds_to_time(time){
    var hours = Math.floor(time / 3600);
    time = time - hours * 3600;
    var minutes = Math.floor(time / 60);
    var seconds = time - minutes * 60;
    return hours + " h " + minutes + " m " + seconds + " s";
}

function createGrafix(which) {
    var newGrafix = document.createElement("img");

    newGrafix.className = "grafix";
    newGrafix.setAttribute("style", "width:60px; height:60px");
    newGrafix.src = "./grafika/" + which + ".png";

    var flavorText;
    flavorText = "Tusk #"+beautify(goyMercCounter);
    newGrafix.setAttribute("alt", flavorText);
    newGrafix.setAttribute("title", flavorText);

    document.getElementById("grafixContainer").appendChild(newGrafix);

}

function updateSlogan() {
    var slogan = document.getElementById("slogan");

    if(allTimeShekeli <= 250) {
        slogan.innerHTML = "Gra nie ma na celu obrażania i zniesławiania jakiejkolwiek osoby, instytucji lub Janusza.";
    } else if(allTimeShekeli <= 500) {
        slogan.innerHTML = "Zostałeś przydzielony na AGH.";
    } else if(allTimeShekeli <= 1000) {
        slogan.innerHTML = "Studenci zaczynają się niepokoić ilością i szybkością omawianego materiału.";
    } else if(allTimeShekeli <= 5000) {
        slogan.innerHTML = "Pojawiają się pierwsze głosy krytyki na twój temat.";
    } else if(allTimeShekeli <= 10000) {
        slogan.innerHTML = "Studenci nie wiedzą co dzieje się na wykładzie.";
    } else if(allTimeShekeli <= 20000) {
        slogan.innerHTML = "Ćwiczeniowcy załamują ręcę nad twoimi pomysłami.";
    } else if(allTimeShekeli <= 35000) {
        slogan.innerHTML = "Na wykładzie ktoś krzyknął 'co ci zrobiłem ty ch**u'.";
    } else if(allTimeShekeli <= 50000) {
        slogan.innerHTML = "Na twój temat powstają smutne piosenki.";
    } else if(allTimeShekeli <= 100000) {
        slogan.innerHTML = "Inni wykładowcy patrzą z zazdrością na kolejki pod twoim gabinetem.";
    } else if(allTimeShekeli <= 200000) {
        slogan.innerHTML = "Kadra naukowa ma cię za dziwaka.";
    } else if(allTimeShekeli <= 350000) {
        slogan.innerHTML = "Zrujnowałeś już wiele ludzkich istnień.";
    } else if(allTimeShekeli <= 500000) {
        slogan.innerHTML = "Przestajesz zwracać uwagę co piszesz na tablicy.";
    } else if(allTimeShekeli <= 750000) {
        slogan.innerHTML = "Pierwsze przypadki samobójstw.";
    } else if(allTimeShekeli <= 1000000) {
        slogan.innerHTML = "Studenci rozłożyli obóz i masowo protestują pod wydziałem matematyki stosowanej.";
    } else if(allTimeShekeli <= 1250000) {
        slogan.innerHTML = "Dostajesz gratulacje od premiera za milionowe wpływy z warunków do budżetu.";
    } else if(allTimeShekeli <= 1500000) {
        slogan.innerHTML = "Uwaliłeś najwięcej studentów w historii uczelni jeszcze przed sesją.";
    } else if(allTimeShekeli <= 1750000) {
        slogan.innerHTML = "Wykładowcy z Korei Północnej przyjeżdżają podglądać twoje metody.";
    } else if(allTimeShekeli <= 2000000) {
        slogan.innerHTML = "Już nikt nie dotrwał do inżyniera od 3 lat.";
    } else if(allTimeShekeli <= 2500000) {
        slogan.innerHTML = "Zrozpaczeni rodzice studentów błagają żebyś odszedł oferując miliard dolarów i prywatny odrzutowiec.";
    } else if(allTimeShekeli <= 3000000) {
        slogan.innerHTML = "W kraju zostali już tylko studenci studiów humanistycznych.";
    } else {
        slogan.innerHTML = "Już czas przestać ujebywać swoich studentów. Ktoś musi studiować.";
    }
}