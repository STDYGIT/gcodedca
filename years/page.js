
        document.addEventListener("DOMContentLoaded", function () {
            const colors = [
                "linear-gradient(to top, #e14fad 0%, #f9d423 100%)",
                "linear-gradient(to top, #007adf 0%, #00ecbc 100%)",
                "linear-gradient(to right, #243949 0%, #517fa4 100%)",
                "linear-gradient(to top, #0c3483 0%, #a2b6df 100%, #6b8cce 100%, #a2b6df 100%);"
            ];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            document.body.style.backgroundImage = randomColor;
        });


        document.addEventListener('DOMContentLoaded', () => {
            const events = document.querySelectorAll('.event');
            const currentDate = new Date();
            let nextEvent = null;
            let minDiff = Infinity;

            events.forEach(event => {
                const dateText = event.querySelector('.date').textContent;
                const [day, month] = dateText.split(' ');
                const eventDate = new Date(currentDate.getFullYear(), new Date(Date.parse(month +" 1, 2024")).getMonth(), day);

                const diff = eventDate - currentDate;
                if (diff > 0 && diff < minDiff) {
                    minDiff = diff;
                    nextEvent = event;
                }
            });

            if (nextEvent) {
                nextEvent.classList.add('blink');
            }
        });

