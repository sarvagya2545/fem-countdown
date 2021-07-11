export default class Timer {
    constructor(finalTime) {
        this.finalTime = new Date(finalTime).getTime();
        this.currentTime = new Date().getTime();
        this.setUpTimerNodes();
        this.setUpTimer();

        const timeDiffs = this.returnTimeDiffs();
        this.prevTimesDiffs = timeDiffs;
        this.currentTimeDiffs = timeDiffs;
    }

    setUpTimerNodes() {
        this.nodes = {
            'day': document.querySelector('[data-type="days"]'),
            'hr': document.querySelector('[data-type="hours"]'),
            'min': document.querySelector('[data-type="minutes"]'),
            'sec': document.querySelector('[data-type="seconds"]')
        }
    }

    returnTimeDiffs() {
        let timeDiff = this.finalTime - this.currentTime; // milliseconds difference
        let secondsDiff = (timeDiff / 1000) % 60;
        let minutesDiff = parseInt((timeDiff / 1000 / 60) % 60);
        let hrsDiff = parseInt((timeDiff / 1000 / 60 / 60) % 24);
        let daysDiff = parseInt((timeDiff / 1000 / 60 / 60 / 24));

        return { sec: secondsDiff, min: minutesDiff, hr: hrsDiff, day: daysDiff };
    }

    flipTimer(node) {
        let unit = parseInt(this.currentTimeDiffs[node]).toLocaleString('en-US', {minimumIntegerDigits: 2});
        let unitUp = parseInt(this.currentTimeDiffs[node] + 1).toLocaleString('en-US', {minimumIntegerDigits: 2});
        let unitDown = parseInt(this.currentTimeDiffs[node] - 1).toLocaleString('en-US', {minimumIntegerDigits: 2});

        if(unitUp === '60') unitUp == '00';

        this.nodes[node]
            .querySelectorAll('.flip__card--prev')
            .forEach(time => time.innerHTML = unitUp)
        ;
        this.nodes[node]
            .querySelectorAll('.flip__card--next')
            .forEach(time => time.innerHTML = unit)
        ;
        this.nodes[node].classList.toggle('animate');
        if(node != 'sec') setTimeout(() => {
            this.nodes[node]
                .querySelectorAll('.flip__card--prev')
                .forEach(time => time.innerHTML = unit)
            ;
            this.nodes[node]
                .querySelectorAll('.flip__card--next')
                .forEach(time => time.innerHTML = unitDown)
            ;
            this.nodes[node].classList.toggle('animate');
        }, 500);
    }

    updateUI() {
        // console.log(this.prevTimesDiffs, this.currentTimeDiffs);
        if(this.prevTimesDiffs.sec !== this.currentTimeDiffs.sec) {
            // update seconds timer
            this.flipTimer('sec');
        }

        if(this.prevTimesDiffs.min !== this.currentTimeDiffs.min) {
            // update minutes timer
            this.flipTimer('min');
        }

        if(this.prevTimesDiffs.hr !== this.currentTimeDiffs.hr) {
            // update hours timer
            this.flipTimer('hr');
        }

        if(this.prevTimesDiffs.day !== this.currentTimeDiffs.day) {
            // update days timer
            this.flipTimer('day');
        }

        this.prevTimesDiffs = this.currentTimeDiffs;
    }

    setUpTimer() {
        this.interval = setInterval(() => {

            if(this.finalTime < this.currentTime) {
                this.timerEnd();
                return clearInterval(this.interval);
            }

            this.currentTime = new Date().getTime();

            this.currentTimeDiffs = this.returnTimeDiffs();

            this.updateUI();

        }, 500);

        // setInterval(() => {
        //     this.timerNode
        //         .querySelectorAll('.flip__card--prev')
        //         .forEach(time => time.innerHTML = this.currentTime + 1)
        //     ;
        //     this.timerNode
        //         .querySelectorAll('.flip__card--next')
        //         .forEach(time => time.innerHTML = this.currentTime + 2)
        //     ;

        //     this.currentTime += this.step;
        // }, this.delay);
        // setInterval(() => {
        //     this.timerNode.classList.toggle('animate');
        // }, this.delay / 2);
    }

    timerEnd() {

    }
};