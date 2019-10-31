//modal window
const sendForm = document.querySelector("form");


setData();

function setData() {
    setMeter();
    addSightsList();
    showRange();
    setGallery();
    validateForm();
    sendForm.addEventListener('submit', (e) => {
        setContacts();
        setDate();
        setCountry();
        setSights();
        setGuideMark();
        setEmotions();

    });
}

// start
function setContacts() {
    const inputName = document.querySelector('#name').value;
    const inputSurname = document.querySelector('#surname').value;
    const inputFatherName = document.querySelector('#father_name').value;
    const dialogContacts = document.querySelector('.contacts');
    const inputPhone = document.querySelector('#phone').value;
    const inputEmail = document.querySelector('#email').value;
    const dialogTitle = document.querySelector('.full-name');

    dialogContacts.innerText = `${inputPhone}  ${inputEmail}`;
    dialogTitle.innerText = `${inputSurname} ${inputName} ${inputFatherName}`

}

//done

//start

function setDate() {
    const dialogDate = document.querySelector('.date_of_travel');
    const inputDate = document.querySelector('#date');

   dialogDate.innerText = inputDate.value;
}

//done

// start

function setCountry() {
    const optionCountry = document.querySelectorAll('option');
    const dialogVisitedCountry = document.querySelector('.visited-country');

   optionCountry.forEach((item) => {
        return item.selected ? dialogVisitedCountry.innerText = item.innerHTML : item;

    });
}

//done

// start

function setSights() {
    const dialogVisitedSights = document.querySelector('.visited-sights');
    const sightsCheckbox = document.querySelectorAll('.places-list label input');
    sightsCheckbox.forEach((item) => {
        item.checked ? dialogVisitedSights.innerText += ` ${item.value} ` : item
    })
}

//done

// show meter and set it's value

function setMeter() {
    const radio = document.querySelectorAll('.radio-wrapper input[type="radio"]');
    const meter = document.querySelector('#meter');
    const meterPercent = document.querySelector('.meter-percent')

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

// show input range

function showRange() {
    const yourLangRange = document.querySelector('#your-lang__range');
    const yourLangCheckbox = document.querySelector('#your-lang__checkbox');
    const foreignLangCheckbox = document.querySelector('#foreign-lang__checkbox');
    const foreignLangRange = document.querySelector('#foreign-lang__range');

    yourLangCheckbox.addEventListener('change', () => {
        yourLangCheckbox.checked ? yourLangRange.style.opacity = "1" : yourLangRange.style.opacity = "0";
        yourLangRange.value = 0;
    });

    foreignLangCheckbox.addEventListener('change', () => {
        foreignLangCheckbox.checked ? foreignLangRange.innerHTML = 'Пользовались' : foreignLangRange.innerHTML = 'Не пользовались';
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


function setGallery() {
    document.querySelector('.file').addEventListener('change', handleFileSelect, false);
}

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

//done

// add list with sights

function addSightsList() {
    const select = document.querySelector('#select-places-list');
    const places = document.querySelector('.places-list');
    select.addEventListener('change', (event) => {
        places.innerHTML='';
       countryList.places[event.target.selectedIndex - 1].sights.forEach(item => {
            const sightItem = document.createElement('li');
            const sightCheckbox = document.createElement('input');
            const sightName = document.createElement('span');
            const labelCheckbox = document.createElement('label');
            sightName.innerText = item.name;
            sightCheckbox.setAttribute('type', 'checkbox');
            labelCheckbox.setAttribute('class', 'checkbox');
            sightCheckbox.setAttribute('value', item.name);
            sightCheckbox.setAttribute('id', item.name);
            labelCheckbox.setAttribute('for', item.name);
            sightCheckbox.parentElement = item;
            labelCheckbox.appendChild(sightCheckbox);
            labelCheckbox.appendChild(sightName);
            sightItem.appendChild(labelCheckbox);
            places.appendChild(sightItem);

           let sightImg = document.querySelector('.sights-img-wrapper');
           sightItem.addEventListener('mouseover', () => {
               sightImg.style.display = 'block';
               sightImg.style.background = `url(${item.photo}) center center / cover`;
               sightImg.style.position = 'absolute'

           });

           sightItem.addEventListener('mouseout', () => {
                sightImg.style.display = 'none';
           })
       })
    });
    createOption();
    followCursor();
}

//done



function followCursor() {
    document.addEventListener('mousemove', (e) => {
        let sightImg = document.querySelector('.sights-img-wrapper');
        sightImg.style.left = e.pageX + 20 + 'px';
        sightImg.style.top = e.pageY + 'px';
    });

}

// add option in select with country name

function createOption() {
    const select = document.querySelector('#select-places-list');
    countryList.places.forEach(place => {
        const sightOpt = document.createElement('option');
        sightOpt.innerText = place.country;
        select.add(sightOpt);
    });
}


function validateForm() {
    const form = document.querySelector('.form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const fields = document.querySelectorAll('.field');
        const dialog = document.querySelector('.information');
        const closeDialog = document.querySelector('.close-dialog');
        const bgDialog = document.querySelector('.bg_dialog');
        const errors = form.querySelectorAll('.error');
        const modalError = document.querySelector('.error');

        closeDialog.addEventListener('click', () => {
            bgDialog.style.display = "none";
            dialog.close();
        });

        window.onclick = function(event) {
            if (event.target === bgDialog) {
                bgDialog.style.display = "none";

            }
        }
        errors.forEach(item => item.remove());

        const errorTitle = document.createElement('h3');
        errorTitle.innerHTML = 'Ошибка';
        const errorMsg = document.createElement('p');
        errorMsg.innerHTML  = 'При заполнении произошла ошибка';
        const errorBtn = document.createElement('button');
        errorBtn.className = 'btn';
        errorBtn.addEventListener('click', () => {
            modalError.style.display = 'none';
        });
        errorBtn.innerHTML = 'ОК';
        modalError.appendChild(errorTitle);
        modalError.appendChild(errorMsg);
        modalError.appendChild(errorBtn);
        modalError.className = 'modal-error';


        fields.forEach(item => {
            if (!item.value) {
                let error = document.createElement('span');
                error.className = 'error';
                error.style.color = 'red';
                error.style.fontSize = '12px';
                error.innerHTML = 'Поле не заполнено';
                item.parentElement.insertBefore(error, item);
                modalError.style.display = 'block';
            } else {
                bgDialog.style.display = "block";
                dialog.style.top = "30%";
                dialog.show();

            }
        });
    })
}












