console.log('connected');

const allLevels = () => {
    fetch('https://openapi.programming-hero.com/api/levels/all')
        .then((res) => res.json())
        .then((data) => displayLevelBtn(data.data));
}

const fetchData = (id) => {
    const url = `https://openapi.programming-hero.com/api/level/${id}`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => displayCards(data.data));
}

const displayCards = (words) => {
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = "";
    words.forEach(word => {
        const cards = document.createElement('div');
        cards.innerHTML = `
        <div id="cards" class="p-14 flex flex-col items-center bg-white">
            <h3 class="font-semibold text-3xl">${word.word}</h3>
            <p class="font-medium text-xl">Meaning /Pronounciation</p>
            <h3 class="font-bangla font-semibold text-3xl text-black/65">${word.meaning} / ${word.pronunciation}</h3>
        </div>
        `
        cardContainer.appendChild(cards);
    });


}

const displayLevelBtn = (lessons) => {
    const lessonBtn = document.getElementById('level-container');
    lessonBtn.innerHTML = "";

    lessons.forEach(lesson => {
        const levelBtn = document.createElement('div');
        levelBtn.innerHTML = `
        <button onclick="fetchData(${lesson.level_no})" class="btn btn-outline btn-primary"><i class="fa-brands fa-leanpub"></i>Lesson - ${lesson.level_no}</button>
        `
        lessonBtn.appendChild(levelBtn);
    });
}

allLevels();