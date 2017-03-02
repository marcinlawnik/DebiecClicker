
var time_diff = 0;
var ujebaniStudenciObecnie = 0;
var ujebaniStudenciSuma = 0;
var mnoznik = 1;
var ujebaniStudenciNaSekunde = 0;

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

// Ceny
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


// Mnożniki
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

// Dodatki ujebania na sekundę
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

function ujebStudenta() {
    // this is for debugging
    ujebaniStudenciObecnie += mnoznik;
    ujebaniStudenciSuma += mnoznik;
    updateDisplay();
}

function updateDisplay() {

    time_diff = time_tick - base_time;
    // Display elements
    document.getElementById("shekelDisplay").innerHTML = beautify(ujebaniStudenciObecnie);
    document.getElementById("shekelFlavorText").innerHTML = displayString;
    document.getElementById("score").innerHTML = ujebaniStudenciObecnie;
    document.getElementById("janusz_time").innerHTML = seconds_to_time(time_diff);
    document.getElementById("janusz_time2").innerHTML = "<div>Przejebałeś z Januszem <b>" +seconds_to_time(time_diff) + "</b></div>";
    document.getElementById("multiplierDisplay").innerHTML = "<div>Studentów ujebanych za kliknięcie: <b>" + beautify(mnoznik) + "</b></div>" ;
    document.getElementById("dpsDisplay").innerHTML = " <div>Studentów ujebanych na sekundę:  <b>" + beautify(ujebaniStudenciNaSekunde)+ "</b></div>";
    document.getElementById("allTimeDicksSucked").innerHTML = "(W sumie ujebałeś " + beautify(ujebaniStudenciSuma) + " studentów)";

    // Tier 1
    document.getElementById("buyGoyMercButton").innerHTML = "<b>Każ stworzyć rząd zerowy</b><br />" + beautify(goyMercPrice) + " studentów (+" + beautify(goyMercDPS) + "studentów)<br />Kupionych:: <b>"+beautify(goyMercCounter)+"</b>";

    document.getElementById("buyCheapJewButton").innerHTML = "<b>Otwórz okno (orły nie wyfruną)</b><br />" + beautify(cheapJewPrice) + " studentów (+" + beautify(cheapJewMultiplier) + "klik, +" + beautify(cheapJewDPS) + "studentów)<br />Kupionych:: <b>"+beautify(cheapJewCounter)+"</b>";

    document.getElementById("buyVacuumCleanerButton").innerHTML = "<b>Nie miej czasu podczas konsultacji</b><br />" + beautify(vacuumCleanerPrice) + " studentów (+" + beautify(vacuumCleanerMultiplier) + "klik, +" + beautify(vacuumCleanerDPS) + "studentów)<br />Kupionych:: <b>"+beautify(vacuumCleanerCounter)+"</b>";

    // Tier 2
    document.getElementById("buyBeggarPloxButton").innerHTML = "<b>Zaliczenie od 70%</b><br />" + beautify(beggarPloxPrice) + " studentów (+" + beautify(beggarPloxMultiplier) + "klik, +" + beautify(beggarPloxDPS) + "studentów)<br />Kupionych:: <b>"+beautify(beggarPloxCounter)+"</b>";

    document.getElementById("buyTaxMenButton").innerHTML = "<b>Dorzuć nieznaną nikomu dekompozycję na egzaminie</b><br />" + beautify(taxMenPrice) + " studentów (+" + beautify(taxMenMultiplier) + "klik, +" + beautify(taxMenDPS) + "studentów)<br />Kupionych:: <b>"+beautify(taxMenCounter)+"</b>";

    document.getElementById("buyCreditCompanyButton").innerHTML = "<b>Pojedź do Berlina zamiast przyjść na wykład</b><br />" + beautify(creditCompanyPrice) + " studentów (+" + beautify(creditCompanyMultiplier) + "klik, +" +  beautify(creditCompanyDPS) + "studentów)<br />Kupionych:: <b>"+beautify(creditCompanyCounter)+"</b>";

    // Tier 3
    document.getElementById("buySinagogaButton").innerHTML = "<b>Każ obejrzeć 3/4 wykładu na EPUEPSie</b><br />" + beautify(sinagogaPrice) + " studentów (+" + beautify(sinagogaMultiplier) + "klik, +" + beautify(sinagogaDPS) + "studentów)<br />Kupionych:: <b>"+beautify(sinagogaCounter)+"</b>";
    document.getElementById("buyJewHospitalButton").innerHTML = "<b>Zorganizuj egzamin w sali obok półkolonii dla dzieci</b><br />" + beautify(jewHospitalPrice) + " studentów (+" + beautify(jewHospitalMultiplier) + "klik, +" + beautify(jewHospitalDPS) + "studentów)<br />Kupionych:: <b>"+beautify(jewHospitalCounter)+"</b>";
    document.getElementById("buyMcDonaldsButton").innerHTML = "<b>Wyznacz wszystkie egzaminy poprawkowe w tym samym dniu</b><br />" + beautify(mcDonaldsPrice) + " studentów (+" + beautify(mcDonaldsMultiplier) + "klik, +" + beautify(mcDonaldsDPS) + "studentów)<br />Kupionych:: <b>"+beautify(mcDonaldsCounter)+"</b>";
    document.getElementById("buyMassonButton").innerHTML = "<b>Ogłoś wyniki pierwszego terminu w marcu</b><br />" + beautify(massonPrice) + " studentów (+" + beautify(massonMultiplier) + "klik, +" + beautify(massonDPS) + "studentów)<br />Kupionych:: <b>"+beautify(massonCounter)+"</b>";

    // Consumables
    if (hasSteamMode == false)
        document.getElementById("buySteamButton").innerHTML = "<b>Zlikwiduj cały kierunek</b><br />" + beautify(steamPrice) + " studentów (2 razy więcej ujebanych studentów)";
    if (hasOdessaMode == false)
        document.getElementById("buyOdessaModeButton").innerHTML = "<b>Przygotuj test - wielokrotny wybór i żadna odpowiedź nie jest poprawna</b><br />" + beautify(OdessaModePrice) + " studentów (Efekt: ???)";

    zaktualizujPrzyciski();
    zmienNapis();
    // zdarzenieLosowe();
}

function prawdopodobienstwoProblemu(ujebaniStudenciSuma) {
    if(ujebaniStudenciSuma <= 1000) {
        return 0;
    } else if(ujebaniStudenciSuma <= 5000) {
        return 0.05;
    } else if(ujebaniStudenciSuma <= 20000) {
        return 0.1;
    } else if(ujebaniStudenciSuma <= 35000) {
        return 0.15;
    } else if(ujebaniStudenciSuma <= 100000) {
        return 0.2;
    } else if(ujebaniStudenciSuma <= 500000) {
        return 0.3;
    } else if(ujebaniStudenciSuma <= 750000) {
        return 0.35;
    } else if(ujebaniStudenciSuma <= 1000000) {
        return 0.36;
    } else if(ujebaniStudenciSuma <= 1250000) {
        return 0.37;
    } else if(ujebaniStudenciSuma <= 1500000) {
        return 0.4;
    } else if(ujebaniStudenciSuma <= 1750000) {
        return 0.42;
    } else if(ujebaniStudenciSuma <= 2500000) {
        return 0.5;
    } else {
        return 0;
    }
}

function zdarzenieLosowe() {
    var prawdopodobienstwo = prawdopodobienstwoProblemu(ujebaniStudenciSuma);
    if(Math.random() < prawdopodobienstwo) {
        //No bywa, coś się spierdoliło
        //Ubywa studentów
        var ilePrzeszlo = Math.floor((Math.random()*200) + 1);
        ujebaniStudenciSuma -= ilePrzeszlo;
        ujebaniStudenciObecnie -= ilePrzeszlo;
        alert(ilePrzeszlo + " studentom udało się przemycić ściągę, mniej ujebania.");
    } else {
        // Akurat się udało
    }
}

function kup(coKupic) {
    // Tier 1
    if(coKupic == "goyMerc") {
        if(ujebaniStudenciObecnie >= goyMercPrice) {
            goyMercCounter += 1;
            ujebaniStudenciObecnie -= goyMercPrice;
            mnoznik += goyMercMultiplier;
            ujebaniStudenciNaSekunde += goyMercDPS;
            goyMercPrice = Math.round(goyMercPrice * 1.1);
        }
    } else if(coKupic == "cheapJew") {
        if(ujebaniStudenciObecnie >= cheapJewPrice) {
            cheapJewCounter += 1;
            ujebaniStudenciObecnie -= cheapJewPrice;
            mnoznik += cheapJewMultiplier;
            ujebaniStudenciNaSekunde += cheapJewDPS;
            cheapJewPrice = Math.round(cheapJewPrice * 1.1);
        }
    } else if(coKupic == "vacuumCleaner") {
        if(ujebaniStudenciObecnie >= vacuumCleanerPrice) {
            vacuumCleanerCounter += 1;
            ujebaniStudenciObecnie -= vacuumCleanerPrice;
            mnoznik += vacuumCleanerMultiplier;
            ujebaniStudenciNaSekunde += vacuumCleanerDPS;
            vacuumCleanerPrice = Math.round(vacuumCleanerPrice * 1.1);
        }
        // Tier 2
    } else if(coKupic == "beggarPlox") {
        if(ujebaniStudenciObecnie >= beggarPloxPrice) {
            beggarPloxCounter += 1;
            ujebaniStudenciObecnie -= beggarPloxPrice;
            mnoznik += beggarPloxMultiplier;
            ujebaniStudenciNaSekunde += beggarPloxDPS;
            beggarPloxPrice = Math.round(beggarPloxPrice * 1.1);
        }
    } else if(coKupic == "taxMen") {
        if(ujebaniStudenciObecnie >= taxMenPrice) {
            taxMenCounter += 1;
            ujebaniStudenciObecnie -= taxMenPrice;
            mnoznik += taxMenMultiplier;
            ujebaniStudenciNaSekunde += taxMenDPS;
            taxMenPrice = Math.round(taxMenPrice * 1.1);
        }
    } else if(coKupic == "creditCompany") {
        if(ujebaniStudenciObecnie >= creditCompanyPrice) {
            creditCompanyCounter += 1;
            ujebaniStudenciObecnie -= creditCompanyPrice;
            mnoznik += creditCompanyMultiplier;
            ujebaniStudenciNaSekunde += creditCompanyDPS;
            creditCompanyPrice = Math.round(creditCompanyPrice * 1.1);
        }
        // Tier 3
    } else if(coKupic == "sinagoga") {
        if(ujebaniStudenciObecnie >= sinagogaPrice) {
            sinagogaCounter += 1;
            ujebaniStudenciObecnie -= sinagogaPrice;
            mnoznik += sinagogaMultiplier;
            ujebaniStudenciNaSekunde += sinagogaDPS;
            sinagogaPrice = Math.round(sinagogaPrice * 1.1);
        }
    } else if(coKupic == "jewHospital") {
        if(ujebaniStudenciObecnie >= jewHospitalPrice) {
            jewHospitalCounter += 1;
            ujebaniStudenciObecnie -= jewHospitalPrice;
            mnoznik += jewHospitalMultiplier;
            ujebaniStudenciNaSekunde += jewHospitalDPS;
            jewHospitalPrice = Math.round(jewHospitalPrice * 1.1);
        }
    } else if(coKupic == "mcDonalds") {
        if(ujebaniStudenciObecnie >= mcDonaldsPrice) {
            mcDonaldsCounter += 1;
            ujebaniStudenciObecnie -= mcDonaldsPrice;
            mnoznik += mcDonaldsMultiplier;
            ujebaniStudenciNaSekunde += mcDonaldsDPS;
            mcDonaldsPrice = Math.round(mcDonaldsPrice * 1.1);
        }
    } else if(coKupic == "masson") {
        if(ujebaniStudenciObecnie >= massonPrice) {
            massonCounter += 1;
            ujebaniStudenciObecnie -= massonPrice;
            mnoznik += massonMultiplier;
            ujebaniStudenciNaSekunde += massonDPS;
            massonPrice = Math.round(massonPrice * 1.1);
        }
        // Consumables

    } else if(coKupic == "OdessaMode") {
        if(ujebaniStudenciObecnie >= OdessaModePrice) {
            ujebaniStudenciObecnie -= OdessaModePrice;
            mnoznik += OdessaModeMultiplier;
            ujebaniStudenciNaSekunde += OdessaModeDPS;

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
    } else if(coKupic == "steam") {
        if(ujebaniStudenciObecnie >= steamPrice) {
            ujebaniStudenciObecnie -= steamPrice;
            mnoznik += steamMultiplier;
            ujebaniStudenciNaSekunde += steamDPS;

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
function zaktualizujPrzyciski() {
    // Tier 1
    if(ujebaniStudenciObecnie < goyMercPrice) {
        document.getElementById("buyGoyMercButton").disabled = true;
    } else {
        document.getElementById("buyGoyMercButton").disabled = false;
    }

    if(ujebaniStudenciObecnie < cheapJewPrice) {
        document.getElementById("buyCheapJewButton").disabled = true;
    } else {
        document.getElementById("buyCheapJewButton").disabled = false;
    }

    if(ujebaniStudenciObecnie < vacuumCleanerPrice) {
        document.getElementById("buyVacuumCleanerButton").disabled = true;
    } else {
        document.getElementById("buyVacuumCleanerButton").disabled = false;
    }
    // Tier 2
    if(ujebaniStudenciObecnie < beggarPloxPrice) {
        document.getElementById("buyBeggarPloxButton").disabled = true;
    } else {
        document.getElementById("buyBeggarPloxButton").disabled = false;
    }

    if(ujebaniStudenciObecnie < taxMenPrice) {
        document.getElementById("buyTaxMenButton").disabled = true;
    } else {
        document.getElementById("buyTaxMenButton").disabled = false;
    }

    if(ujebaniStudenciObecnie < creditCompanyPrice) {
        document.getElementById("buyCreditCompanyButton").disabled = true;
    } else {
        document.getElementById("buyCreditCompanyButton").disabled = false;
    }
    // Tier 3
    if(ujebaniStudenciObecnie < sinagogaPrice) {
        document.getElementById("buySinagogaButton").disabled = true;
    } else {
        document.getElementById("buySinagogaButton").disabled = false;
    }

    if(ujebaniStudenciObecnie < jewHospitalPrice) {
        document.getElementById("buyJewHospitalButton").disabled = true;
    } else {
        document.getElementById("buyJewHospitalButton").disabled = false;
    }

    if(ujebaniStudenciObecnie < mcDonaldsPrice) {
        document.getElementById("buyMcDonaldsButton").disabled = true;
    } else {
        document.getElementById("buyMcDonaldsButton").disabled = false;
    }

    if(ujebaniStudenciObecnie < massonPrice) {
        document.getElementById("buyMassonButton").disabled = true;
    } else {
        document.getElementById("buyMassonButton").disabled = false;
    }

    // Consumables
    if(ujebaniStudenciObecnie < steamPrice) {
        document.getElementById("buySteamButton").disabled = true;
    } else {
        document.getElementById("buySteamButton").disabled = false;
    }

    if(ujebaniStudenciObecnie < OdessaModePrice) {
        document.getElementById("buyOdessaModeButton").disabled = true;
    } else {
        document.getElementById("buyOdessaModeButton").disabled = false;
    }

    // document.getElementById("send_score").disabled = false;
}

function tick() {
    if(window_focus==true || dialog_opened==false){
        ujebaniStudenciObecnie += ujebaniStudenciNaSekunde;
        ujebaniStudenciSuma += ujebaniStudenciNaSekunde;
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

function zmienNapis() {
    var slogan = document.getElementById("slogan");

    if(ujebaniStudenciSuma <= 250) {
        slogan.innerHTML = "Gra nie ma na celu obrażania i zniesławiania jakiejkolwiek osoby, instytucji lub Adama.";
    } else if(ujebaniStudenciSuma <= 500) {
        slogan.innerHTML = "Jesteś zwykłym profesorem jakich wielu.";
    } else if(ujebaniStudenciSuma <= 1000) {
        slogan.innerHTML = "Pokazujesz studentom wyciąg z regulaminu studiów.";
    } else if(ujebaniStudenciSuma <= 2000) {
        slogan.innerHTML = "Zakazujesz pisać do siebie e-maile.";
    } else if(ujebaniStudenciSuma <= 3000) {
        slogan.innerHTML = "Grozisz studentom procesem za fałszowanie podpisów.";
    } else if(ujebaniStudenciSuma <= 4000) {
        slogan.innerHTML = "Studenci zaczynają się niepokoić ilością i szybkością omawianego materiału.";
    } else if(ujebaniStudenciSuma <= 5000) {
        slogan.innerHTML = "Pojawiają się pierwsze głosy krytyki na twój temat.";
    } else if(ujebaniStudenciSuma <= 10000) {
        slogan.innerHTML = "Studenci nie wiedzą co dzieje się na wykładzie.";
    } else if(ujebaniStudenciSuma <= 20000) {
        slogan.innerHTML = "Podejrzewasz, że twoi doktorzy próbują chronić studentów przed tobą.";
    } else if(ujebaniStudenciSuma <= 35000) {
        slogan.innerHTML = "Na wykładzie ktoś krzyknął 'co ci zrobiłem ty ch**u'.";
    } else if(ujebaniStudenciSuma <= 50000) {
        slogan.innerHTML = "Ptaki przestają ćwierkać kiedy wychodzisz z budynku.";
    } else if(ujebaniStudenciSuma <= 100000) {
        slogan.innerHTML = "Przed twoim gabinetem funkcjonuje stały komitet kolejkowy.";
    } else if(ujebaniStudenciSuma <= 200000) {
        slogan.innerHTML = "Kadra naukowa ma cię za dziwaka.";
    } else if(ujebaniStudenciSuma <= 350000) {
        slogan.innerHTML = "Studenci szukają sposobów na twój egzamin.";
    } else if(ujebaniStudenciSuma <= 400000) {
        slogan.innerHTML = "Twoje nazwisko jest na wydziale synonimem warunku.";
    } else if(ujebaniStudenciSuma <= 500000) {
        slogan.innerHTML = "Przestajesz zwracać uwagę co piszesz na tablicy.";
    } else if(ujebaniStudenciSuma <= 750000) {
        slogan.innerHTML = "Powtarzanie twojego przedmiotu oficjalnie wpisano do planu studiów.";
    } else if(ujebaniStudenciSuma <= 1000000) {
        slogan.innerHTML = "Powstaje wydziałowy telefon zaufania dla twoich ofiar.";
    } else if(ujebaniStudenciSuma <= 1250000) {
        slogan.innerHTML = "UAM otwiera kierunek Automatyka i Robotyka dla uchodźców z Politechniki.";
    } else if(ujebaniStudenciSuma <= 1500000) {
        slogan.innerHTML = "Uwaliłeś najwięcej studentów w historii uczelni jeszcze przed sesją.";
    } else if(ujebaniStudenciSuma <= 1750000) {
        slogan.innerHTML = "Wykładowcy z Korei Północnej przyjeżdżają podglądać twoje metody.";
    } else if(ujebaniStudenciSuma <= 2000000) {
        slogan.innerHTML = "Średnia wieku na 1 roku to 35 lat.";
    } else if(ujebaniStudenciSuma <= 2500000) {
        slogan.innerHTML = "Zrozpaczeni rodzice studentów błagają żebyś odszedł oferując miliard dolarów i prywatny odrzutowiec.";
    } else if(ujebaniStudenciSuma <= 3000000) {
        slogan.innerHTML = "W kraju zostali już tylko studenci studiów humanistycznych.";
    } else {
        slogan.innerHTML = "Spierdalasz do Korei Północnej i projektujesz rakiety dla Kim Dzong Una.";
    }
}