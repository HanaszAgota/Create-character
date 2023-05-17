function updateCharacterSheet() {
    const name = document.getElementById('name').value;
    const gender = document.getElementById('gender').value;
    const race = document.getElementById('race').value;
    const charClass = document.getElementById('class').value;

    document.getElementById('char-name').textContent = name;
    document.getElementById('char-gender').src = getGenderIcon(gender);
    document.getElementById('char-race').src = getRaceIcon(race);
    document.getElementById('char-class').src = getClassIcon(charClass);
}

function getGenderIcon(gender) {
    switch (gender) {
        case 'male':
            return '/pictures/male.png';
        case 'female':
            return '/pictures/female.png';
        default:
            return '/pictures/unknown.png';
    }
}

function getRaceIcon(race) {
    switch (race) {
        case 'bear':
            return '/pictures/winnie.jpeg';
        case 'pig':
            return '/pictures/pig.jpeg';
        case 'tiger':
            return '/pictures/tiger.jpeg';
        case 'füles':
            return '/pictures/füles.png'
        default:
            return 'unknown.png';
    }
}

function getClassIcon(charClass) {
    switch (charClass) {
        case 'happy':
            return '/pictures/happy.png';
        case 'melancolic':
            return '/pictures/melancolic.png';
        case 'funny':
            return '/pictures/funny.png';
        case 'sad':
            return '/pictures/sad.png'
        default:
            return '/pictures/unknown.png';
    }
}