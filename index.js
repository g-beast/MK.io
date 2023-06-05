const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
}
);

const outputDiv = document.getElementById('typing-container');

const txt = `
Oil change<nl>
Tire rotation<nl>
Brake inspection<nl>
Engine tune-up<nl>
Transmission service<nl>
Air conditioning service<nl>
Wheel alignment<nl>
Battery replacement<nl>
Diagnostic testing
`;

    const splitted = txt.split('<nl>');

    splitted.forEach(function(){
        const li = document.createElement('li');
        outputDiv.appendChild(li);
    });

    const paras = outputDiv.querySelectorAll('li');

    let i = 0;
    let currentPara = 0;

const intervalId = setInterval(function(){
    paras[currentPara].innerHTML += splitted[currentPara][i];
    i++;

    if(i === splitted[currentPara].length){
        currentPara++;
        i = 0;

        if (currentPara === splitted.length) {
            clearInterval(intervalId);
        }
    }

},150);