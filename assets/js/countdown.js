// Function for the timer

"use strict";

function set_countdown() {

    const text_object = document.getElementsByClassName('countdown-text');

    const curr_time = Date.now();

    const registration_time = new Date("June 25, 2023 17:00:00");
    const start_time = new Date("July 14, 2023 17:00:00");
    const end_time = new Date("July 16, 2023 13:30:00");


    const difference_registration = registration_time - curr_time;
    const difference_start = start_time - curr_time;
    const difference_end = end_time - curr_time;

    let difference;
    let start_text;
    let end_text;

    if (difference_registration > 0) {
        start_text = "Noch ";
        difference = difference_registration;
        end_text = " bis zum Anmeldeschluss!"
    } else if (difference_start > 0) {
        start_text = "Noch ";
        difference = difference_start;
        end_text = " bis zum Start der Challenge!"
    } else if (difference_end > 0) {
        start_text = "";
        difference = -difference_start;
        end_text = " seit dem Start der Challenge!"
    } else {
        start_text = "";
        difference = -difference_end;
        end_text = " seit dem Ende der Challenge!"
    }

    let day = Math.floor(difference / (1000 * 60 * 60 * 24));
    let rest = difference % (1000 * 60 * 60 * 24)
    let hour = Math.floor(rest / (1000 * 60 * 60));
    rest = difference % (1000 * 60 * 60)
    let min = Math.floor(rest / (1000 * 60));
    rest = difference % (1000 * 60)
    let sec = Math.floor(rest / (1000));

    let day_text = " Tag";
    let hour_text = " Stunde";
    if (day > 1) {
        day_text += "e";
    }
    if (hour > 1) {
        hour_text += "n";
    }

    const separator = ":";

    let text = start_text + '<span class="important">' + String(day) + '</span>' + day_text + " " +
        '<span class="important">' + String(hour) + '</span>' + separator +
        '<span class="important">' + String(min).padStart(2, "0") + '</span>' + separator +
        '<span class="important">' + String(sec).padStart(2, "0") + '</span>' + hour_text + end_text;

    for (let i = 0; i < text_object.length; i++) {
        text_object[i].innerHTML = text;
    }

}

const interval = setInterval(set_countdown,
    1000);
