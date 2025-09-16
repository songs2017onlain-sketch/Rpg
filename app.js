let player = {
    name: '',
    race: '',
    class: '',
    location: 'Город',
    inventory: [],
    skills: [],
};

function chooseCharacter(race, charClass) {
    player.race = race;
    player.class = charClass;
    player.name = prompt(`Введите имя для ${race} - ${charClass}:`);
    document.getElementById('player-info').innerText = `Имя: ${player.name}\nРаса: ${player.race}\nКласс: ${player.class}`;
    document.getElementById('character-selection').style.display = 'none';
    document.getElementById('game').style.display = 'block';
}

function move(location) {
    player.location = location;
    alert(`Вы переместились в ${location}`);
}

function sendMessage() {
    const msgInput = document.getElementById('msg-input');
    const message = msgInput.value.trim();
    if (message) {
        const msgDiv = document.createElement('div');
        msgDiv.textContent = `${player.name}: ${message}`;
        document.getElementById('messages').appendChild(msgDiv);
        msgInput.value = '';
    }
                                              }
