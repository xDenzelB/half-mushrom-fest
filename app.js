// import functions and grab DOM elements
import { renderMushroom, renderFriend } from './render-utils.js';
import findFriendByName from './data-utils.js';

const friendsEl = document.querySelector('.friends');
const friendInputEl = document.getElementById('friend-input');
const mushroomsEl = document.querySelector('.mushrooms');
const addMushroomButton = document.getElementById('add-mushroom-button');
const addFriendButton = document.getElementById('add-friend-button');
// initialize state

let mushroomCount = 3;

const friendData = [
    {
        name: 'Steven',
        satisfaction: 2
    },
    {
        name: 'Emilia',
        satisfaction: 3
    },
    {
        name: 'Barak',
        satisfaction: 1
    },
    {
        name: 'Aiden',
        satisfaction: 2
    },
];


addFriendButton.addEventListener('click', () => {
    // get the name from the input
    const name = friendInputEl.value;
    const newBud = {
        name: name || `Friend #${Math.floor(Math.random() * 1000)}`,
        satisfaction: 1
    };
    // create a new friend object
    friendData.push(newBud);
    
    // push it into the friends state array, passed in as an argument
    friendInputEl.value = '';

    // reset the input
    // display all the friends (use a function here)
    displayFriends();
});


addMushroomButton.addEventListener('click', () => {
    if (Math.random() > .5) {
        alert('found a mushroom!');

        mushroomCount++;
        displayMushrooms();
    } else {
        alert('no luck!');
    }
});


function displayFriends() {
    // clear out the friends in DOM
    friendsEl.textContent = '';

    // for each friend in state . . .
    for (let friend of friendData) {
        const friendEl = renderFriend(friend);

        // this is a clickable list, so . . .
        //     add an event listener to each friend
        //         on click, go find the clicked friend in state
        friendEl.addEventListener('click', () => {
            
            const budInState = findFriendByName(friend.name, friendData);

            if (mushroomCount === 0) {
                alert('Go grab more mushrooms!');

            }
            if (mushroomCount > 0 && budInState.satisfaction < 3) {
                budInState.satisfaction++;
                mushroomCount--;

                displayFriends();
                displayMushrooms();
            }
        });

        friendsEl.append(friendEl);
        
        //         and if the friend's satisfaction level is below 3 and you have mushrooms left
        //             increment the friends satisfaction and decrement your mushrooms
        //             mushroomCount--;
        //             then display your friends and mushrooms with the updated state
    
        // append the friendEl to the friends list in DOM
    }
    
}


function displayMushrooms() { 
    // clear out the mushroom div
    mushroomsEl.textContent = '';

    for (let i = 0; i < mushroomCount; i++) {
        const mushroomEl = renderMushroom(); 
        // for each mushroom in your mushroom state, render and append a mushroom
        mushroomsEl.append(mushroomEl);
    }
}

displayFriends();
displayMushrooms();
