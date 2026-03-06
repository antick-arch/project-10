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
        .then((data) => {
            removeActive();
            const clickBtn = document.getElementById(`lesson-btn-${id}`);
            clickBtn.classList.add("active");
            displayCards(data.data);
        });
}

const removeActive =()=>{
    const lessonButtons = document.querySelectorAll('.lesson-btn');
    lessonButtons.forEach(btn=>btn.classList.remove("active"));
}

const displayCards = (words) => {
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = "";
    if (words.length == 0) {
        cardContainer.innerHTML = `
        <div id="cards" class="p-10 flex flex-col items-center col-span-full space-y-3">
            <i class="fa-solid fa-triangle-exclamation text-6xl text-black/50"></i>
            <p class="font-bangla text-black/70">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
            <h2 class="text-4xl font-medium font-bangla">নেক্সট Lesson এ যান</h2>
        </div>
        `
    }
    words.forEach(word => {
        const cards = document.createElement('div');
        cards.innerHTML = `
        <div id="cards" class="p-14 flex flex-col items-center bg-white">
            <h3 class="font-semibold text-3xl">${word.word ? word.word : 'পাওয়া যায় নি'}</h3>
            <p class="font-medium text-xl">Meaning /Pronounciation</p>
            <h3 class="font-bangla font-semibold text-3xl text-black/65">${word.meaning ? word.meaning : 'পাওয়া যায় নি'} / ${word.pronunciation ? word.pronunciation : 'পাওয়া যায় নি'}</h3>
            <div class="flex justify-between w-full mt-10">
                <div class="w-14 h-14 flex items-center justify-center bg-[#1A91FF]/20"><button onclick="my_modal_5.showModal()" class="text-2xl fa-solid fa-circle-info"></button></div>
                <div class="w-14 h-14 flex items-center justify-center bg-[#1A91FF]/20"><button onclick="my_modal_5.showModal()" class="text-2xl fa-solid fa-volume-high"></button></div>
            </div>
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
        <button id="lesson-btn-${lesson.level_no}" onclick="fetchData(${lesson.level_no})" class="btn btn-outline btn-primary lesson-btn"><i class="fa-brands fa-leanpub"></i>Lesson - ${lesson.level_no}</button>
        `
        lessonBtn.appendChild(levelBtn);
    });
}

allLevels();