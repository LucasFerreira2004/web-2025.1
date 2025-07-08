const tds = document.querySelectorAll("td");
let currentUp = null;
let flippedCards = [];
let isProcessing = false;
let points = 0;
tds.forEach(td => {
    td.addEventListener('click', async () => {
        if (td.classList.contains('discovered') || isProcessing) return;

        const img = td.querySelector('img');
        if (img.style.display === 'block') return;

        img.style.display = 'block';
        flippedCards.push(td);

        if (flippedCards.length === 1) {
            currentUp = td;
        } else if (flippedCards.length === 2) {
            isProcessing = true;

            const [first, second] = flippedCards;
            const pair1 = first.dataset.pair;
            const pair2 = second.dataset.pair;

            if (pair1 === pair2) {
                first.classList.add('discovered');
                second.classList.add('discovered');
                const pointsContainner = document.querySelector("#qtd-points");
                pointsContainner.innerHTML = ++points;
            } else {
                await sleep(500);
                first.querySelector('img').style.display = 'none';
                second.querySelector('img').style.display = 'none';
            }

            flippedCards = [];
            currentUp = null;
            isProcessing = false;
        }
    });
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
