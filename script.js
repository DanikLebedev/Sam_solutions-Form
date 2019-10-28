//modal window
const sendForm = document.querySelector("form");


setData();



function setData() {
    setMeter();
    showDialog();
    changeSights();
    showRange();
    showSightsImg();
    followCursor();
    sendForm.addEventListener('submit', () => {
        setContacts();
        setDate();
        setCountry();
        setSights();
        setGuideMark();
        setEmotions();
    });
}

//start

function showDialog() {
    const dialog = document.querySelector('dialog');
    const closeDialog = document.querySelector('.close-dialog');
    const bgDialog = document.querySelector('.bg_dialog');

    sendForm.addEventListener('submit', (e) => {
        bgDialog.style.display = "block";
        dialog.style.top = "30%";
        dialog.show();
        e.preventDefault()
    });

    closeDialog.addEventListener('click', (e) => {
        bgDialog.style.display = "none";
        dialog.close();
        e.preventDefault()
    });

    window.onclick = function(event) {
        if (event.target === bgDialog) {
            bgDialog.style.display = "none";
        }
    }
}

//done

//start

function setContacts() {
    let inputName = document.querySelector('#name').value;
    let inputSurname = document.querySelector('#surname').value;
    let inputFatherName = document.querySelector('#father_name').value;
    let dialogcontacts = document.querySelector('.contacts');
    let inputPhone = document.querySelector('#phone').value;
    let inputEmail = document.querySelector('#email').value;
    let dialogTitle = document.querySelector('.full-name');

    dialogcontacts.innerText = `${inputPhone} (${inputEmail}) `;
    dialogTitle.innerText = `${inputSurname} ${inputName} ${inputFatherName}`

}

//done

//start

function setDate() {
    const dialogDate = document.querySelector('.date_of_travel');
    const inputDate = document.querySelector('#date')

   dialogDate.innerText = inputDate.value;
}

//done

// start

function setCountry() {
    let optionCountry = document.querySelectorAll('option');
    let dialogVisitedCountry = document.querySelector('.visited-country');

   optionCountry.forEach((item) => {
        return item.selected ? dialogVisitedCountry.innerText = item.innerHTML : item;

    });
}

//done

// start

function setSights() {
    let dialogVisitedSights = document.querySelector('.visited-sights');
    let sightsCheckbox = document.querySelectorAll('.sights input[type="checkbox"]');
    sightsCheckbox.forEach((item) => {
        item.checked ? dialogVisitedSights.innerText += ` ${item.value} ` : item
    })
}

//done

// start

function changeSights() {
    let selectCountry = document.querySelector('#country');
    let firstChangedSight = document.querySelector('.first_changed-sight');
    let secondChangedSight = document.querySelector('.second_changed-sight');
    let thirdChangedSight = document.querySelector('.third_changed-sight');
    let sightsCheckbox = document.querySelectorAll('.sights input[type="checkbox"]');

    selectCountry.addEventListener('change', () => {
        if (selectCountry.value === 'Ita') {
            firstChangedSight.innerText = "Колизей";
            sightsCheckbox[0].value = "Колизей";
            secondChangedSight.innerText = "Римский форум";
            sightsCheckbox[1].value = "Римский форум";
            thirdChangedSight.innerText = "Пизанская башня";
            sightsCheckbox[2].value = "Пизанская башня";
        }

        if (selectCountry.value === 'Est') {
            firstChangedSight.innerText = "Таллинская ратуша";
            sightsCheckbox[0].value = "Таллинская ратуша";
            secondChangedSight.innerText = "Лахемаа";
            sightsCheckbox[1].value = "Лахемаа";
            thirdChangedSight.innerText = "Замок Тоомпеа";
            sightsCheckbox[2].value = "Замок Тоомпеа";
        }

        if (selectCountry.value === 'Bel') {
            firstChangedSight.innerText = "Гора лысая";
            sightsCheckbox[0].value = "Гора лысая";
            secondChangedSight.innerText = "Национальная библиотека";
            sightsCheckbox[1].value = "Национальная библиотека";
            thirdChangedSight.innerText = "Гродненский зоопарк";
            sightsCheckbox[2].value = "Гродненский зоопарк";
        }

    });
}

// Need to fix via forEach

// start

function setMeter() {
    let radio = document.querySelectorAll('.radio-wrapper input[type="radio"]');
    let meter = document.querySelector('#meter');
    let meterPercent = document.querySelector('.meter-percent')

    radio.forEach(item => {
        item.addEventListener('change', () => {
            meter.style.opacity = '1';
            if (item.value === 'good') {
               meterPercent.innerText = meter.value = 80;
            }
            if (item.value === 'bad') {
                meterPercent.innerText = meter.value = 20;
            }
            if (item.value === 'no-answer') {
                meterPercent.innerText =  meter.value = 60;
            }
        })
    })
}

//done

// start

function showRange() {
    let yourLangRange = document.querySelector('#your-lang__range');
    let yourLangCheckbox = document.querySelector('#your-lang__checkbox');
    let foreignLangCheckbox = document.querySelector('#foreign-lang__checkbox');
    let foreignLangRange = document.querySelector('#foreign-lang__range');

    yourLangCheckbox.addEventListener('change', () => {
        yourLangCheckbox.checked ? yourLangRange.style.opacity = "1" : yourLangRange.style.opacity = "0";
        yourLangRange.value = 0;
    });

    foreignLangCheckbox.addEventListener('change', () => {
        foreignLangCheckbox.checked ? foreignLangRange.style.opacity = "1" : foreignLangRange.style.opacity = "0";
        foreignLangRange.value = 0;
    })
}

//done

// start

function setGuideMark() {
    let yourLangRange = document.querySelector('#your-lang__range');
    let dialogGuideMark = document.querySelector('.guide-mark');

    dialogGuideMark.innerText = yourLangRange.value;
}

//done

function setEmotions() {
    let dialogEmotions = document.querySelector('.travel-emotions');
    let textEmotions = document.querySelector('#feedback');

    dialogEmotions.innerText = textEmotions.value;
}

//done

//start

function showSightsImg() {
    let sightsNames = document.querySelectorAll('.sights label');
    let sightsNamesInput = document.querySelectorAll('.sights label input');
    let sightImg = document.querySelector('.sights-img-wrapper');

    sightsNames.forEach(item => {
        if (item.id === 'first-sight__label') {
            item.addEventListener('mouseover', () => {
                sightImg.style.display = 'block';
                if (sightsNamesInput[0].value === 'Гора лысая') {
                    sightImg.style.backgroundImage = 'url("https://upload.wikimedia.org/wikipedia/commons/c/c8/Dziar%C5%BEynskaja_hara.jpg")'
                } else if (sightsNamesInput[0].value === 'Колизей') {
                    sightImg.style.backgroundImage = 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Colosseum_in_Rome%2C_Italy_-_April_2007.jpg/300px-Colosseum_in_Rome%2C_Italy_-_April_2007.jpg")'
                } else if (sightsNamesInput[0].value === "Таллинская ратуша") {
                    sightImg.style.backgroundImage = 'url("https://static1.visitestonia.com/images/12667/raekoda3_.jpeg")'
                }
            });
        }

        if (item.id === 'second-sight__label') {
            item.addEventListener('mouseover', () => {
                sightImg.style.display = 'block';
                if (sightsNamesInput[1].value === 'Национальная библиотека') {
                    sightImg.style.backgroundImage = 'url("https://www.nlb.by/upload/iblock/830/01_nlb.jpg")'
                } else if (sightsNamesInput[1].value === 'Римский форум') {
                    sightImg.style.backgroundImage = 'url("https://upload.wikimedia.org/wikipedia/commons/5/5a/Forum_Romanum_Rom.jpg")'
                } else if (sightsNamesInput[1].value === "Лахемаа") {
                    sightImg.style.backgroundImage = 'url("https://www.votpusk.ru/country/ctimages/new/EE13.jpg")'
                }
            });
        }

        if (item.id === 'third-sight__label') {
            item.addEventListener('mouseover', () => {
                sightImg.style.display = 'block';
                if (sightsNamesInput[2].value === 'Гродненский зоопарк') {
                    sightImg.style.backgroundImage = 'url("http://zetgrodno.com/d/206020/d/hrodnazoo.jpg")'
                } else if (sightsNamesInput[2].value === 'Пизанская башня') {
                    sightImg.style.backgroundImage = 'url("https://s15.stc.all.kpcdn.net/share/i/12/10466364/inx960x640.jpg")'
                } else if (sightsNamesInput[2].value === "Замок Тоомпеа") {
                    sightImg.style.backgroundImage = 'url("http://estoniia.ru/wp-content/uploads/2016/07/toompea-05.jpg")'
                }
            });
        }

        item.addEventListener('mouseout', () => {
            sightImg.style.display = 'none';
        })
    });
}

// Need to fix via forEach


function followCursor() {
    document.addEventListener('mousemove', (e) => {
        let sightImg = document.querySelector('.sights-img-wrapper');
        sightImg.style.left = e.pageX + 20 + 'px';
        sightImg.style.top = e.pageY + 'px';

    });
}

//done


//start
document.querySelector('.file').addEventListener('change', handleFileSelect, false);

function handleFileSelect(evt) {
    let files = evt.target.files;

    for (let i = 0, f; f = files[i]; i++) {

        if (!f.type.match('image.*')) {
            continue;
        }

        let reader = new FileReader();

        reader.onload = (function(theFile) {
            return function(e) {
                // Render thumbnail.
                let span = document.createElement('span');
                span.innerHTML = ['<img src="', e.target.result,
                    '" title="', escape(theFile.name), '"/>'].join('');
                document.querySelector('.gallery__img-wrapper').insertBefore(span, null);
            };
        })(f);

        reader.readAsDataURL(f);
    }
}



















