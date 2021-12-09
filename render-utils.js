export function renderMushroom() {
    const div = document.createElement('div');
    div.classList.add('mushroom');

    return div;
}

export function renderFriend(friend) {
    // make three elements: an outer div, a place for the name, and a place for an emoji
    // add friend, name, and emoji classes to the appropriate elements

    const div = document.createElement('div');
    const nameEl = document.createElement('p');
    const emojiEl = document.createElement('p');

    div.classList.add('friend');
    nameEl.classList.add('name');
    emojiEl.classList.add('emoji');

    // put the friend's name in the nameEl

    nameEl.textContent = friend.name;
    
    // for each friend, set the emojiEl's text content to a different emoji depending on their satisfaction level

    if (friend.satisfaction === 1) {
        emojiEl.textContent = '😒';
    }

    if (friend.satisfaction === 2) {
        emojiEl.textContent = '😐';
    }

    if (friend.satisfaction === 3) {
        emojiEl.textContent = '😀';
    }

    // append the emojiEl and nameEl to the outer div
    div.append(nameEl, emojiEl);

    // return the outer div
    return div;
}