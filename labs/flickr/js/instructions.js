const displayInstructions = () => {
    document.querySelector('.instructions').className = 'instructions active';
    document.querySelector('body').style.overflow = 'hidden';
};
const hideInstructions = () => {
    document.querySelector('.instructions').className = 'instructions';
    document.querySelector('body').style.overflow = 'auto';
};

document.querySelector(".instructions .close").onclick=hideInstructions;
document.querySelector('#instructions-button').onclick = displayInstructions;