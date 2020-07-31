export default class DateCalc {
    seconds;
    
    constructor(seconds) {
        this.seconds = seconds;
    }

    get twenty_four_hour() {
        return this.seconds % 24;
    }

    get ampm() {
        if (this.twenty_four_hour < 12) {
            return "am";
        } else {
            return "pm";
        }      
    }
    get hour() {
        if (this.twenty_four_hour === 0) {
            return 12;
        }
        if (this.twenty_four_hour < 12) {
            return this.twenty_four_hour;
        }
        return this.twenty_four_hour - 12;
    }

    get day() {
        let seconds_without_year_and_month = this.seconds - (this.year * (365 * 30 * 24)) - ((this.month - 1) * (30 * 24));
        console.log(seconds_without_year_and_month);
        return Math.floor(seconds_without_year_and_month / 24) + 1;
        
    }

    get month() {
        let seconds_without_year = this.seconds - (this.year * 365);
        return Math.floor(seconds_without_year / (30 * 24)) + 1;
    }

    get year() {
        return Math.floor(this.seconds / (365 * 30 * 24));
    }
}