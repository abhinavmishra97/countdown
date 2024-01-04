let endDate = document.getElementById('end-date').innerText;
let endTime = document.getElementById('end-time').innerText;
document.getElementById('end-date').innerText = endDate;
document.getElementById('end-time').innerText = endTime;

const inputs = document.querySelectorAll('.timer-box');

// function for countdown timer
function ticking(endDate,endTime) {
    const whole = endDate + ' ' + endTime;

    const current = new Date();
    const final = new Date(whole);
    console.log(endDate);
    console.log(endTime);
    console.log(final);

    const diff = (final - current) / 1000;

    if (diff <= 0) return;
    inputs[0].value = Math.floor(diff / 60 / 60 / 24);
    inputs[1].value = Math.floor((diff / 60 / 60 ) % 24);
    inputs[2].value = Math.floor((diff / 60 ) % 60);
    inputs[3].value = Math.floor(diff  % 60 );
    
}

ticking(endDate,endTime);

setInterval(() => { ticking(endDate,endTime) }, 1000);

const dateBox = document.querySelector('.dateBox');
const selectDate = document.querySelector('.selectDate');

// functionn for selecting date
function dateSelection(endTime) {
    dateBox.classList.add('show');
    selectDate.classList.add('show');

    // on clicking cancel button after selecting date
    document.getElementById('cancelBtn').addEventListener('click', () => {
        dateBox.classList.remove('show'); 
        selectDate.classList.remove('show');
    })

    // on clicking ok button after selecting date
    document.getElementById('okBtn').addEventListener('click', () => {
    endDate = document.querySelector('.calender').value;

        if (endDate.trim() === '') {
            endDate = document.getElementById('end-date').innerText;
            dateBox.classList.remove('show');
            selectDate.classList.remove('show');
        }
        else {
            document.getElementById('end-date').innerText = endDate;
            dateBox.classList.remove('show');
        }

        ticking(endDate,endTime);
    })
}

const selectTime = document.querySelector('.selectTime');

// function for selecting time
function timeSelection() {
    dateBox.classList.add('show');
    selectTime.classList.add('show');

    // functionn on clicking cancel button after selecting time
    document.getElementById('cancelBtn-time').addEventListener('click', () => {
        dateBox.classList.remove('show');  
        selectTime.classList.remove('show');
    })

    // function on clicking ok button after selecting time
    document.getElementById('okBtn-time').addEventListener('click', () => {
        endTime = document.querySelector('.calender-time').value;
        if (endTime.trim() === '') {
            endTime = document.getElementById('end-time').innerText;
        }
        else {
            document.getElementById('end-time').innerText = endTime;
        }
        dateSelection(endTime);
        dateBox.classList.remove('show');
        selectTime.classList.remove('show');
        
    })
}