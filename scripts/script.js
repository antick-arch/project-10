console.log('connected');

const allLevels = () =>{
    fetch('https://openapi.programming-hero.com/api/levels/all')
    .then((res) => res.json())
    .then((data) => displayLevelBtn(data.data));
}
const displayLevelBtn = (lessons) =>{
    const lessonBtn = document.getElementById('level-container');
    lessonBtn.innerHTML = "";

    lessons.forEach(lesson => {
        const levelBtn = document.createElement('div');
        levelBtn.innerHTML = `
        <button class="btn btn-outline btn-primary"><i class="fa-brands fa-leanpub"></i>Lesson - ${lesson.level_no}</button>
        `
        lessonBtn.appendChild(levelBtn);
    });
}

allLevels();