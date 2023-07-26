// Create an automation version of the classic card game war
// 2 players in this version
// use Classes Card, Deck, Player along with Properties and nethods that they may include
// Deal 26 cards to each Player from a Deck of 52 cards
// 
// No User Input when we run the code
//

//create a class for card and constructor for suit, rank, value
class Card {
    constructor(suit, rank, value) {
        this.suit = suit;
        this.rank = rank;
        this.value = value;
    }
}

//create a class for Deck
class Deck {
    constructor() {
        this.cards = [];
    }

    //createdeck function to fill the card array with 52 cards
    // and shuffledeck function to shuffle the array
    createDeck() {
        let suits = ['clubs', 'diamonds', 'hearts', 'spades'];
        let ranks = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
        let value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < ranks.length; j++) {
                this.cards.push(new Card(suits[i], ranks[i], value[i]));
            }
        }
    }
    shuffleDeck() {
        let location1, location2, tmp;
        for (let i = 0; i < 1000; i++) {
            location1 = Math.floor((Math.random() * this.cards.length));
            location2 = Math.floor((Math.random() * this.cards.length));
            tmp = this.cards[location1];
            this.cards[location1] = this.cards[location2];
            this.cards[location2] = tmp;
        }
    }
}

//create class player
class Player {
    constructor(name) {
        this.playerName = name;
        this.playerCards = [];
    }
}

//create board class
class Board {
    constructor() {
        this.cardsInMiddle = [];
        this.players = [];
    }
    start(playerOneName, playerTwoName) {
        //created 2 players
        this.players.push(new Player(playerOneName));
        this.players.push(new Player(playerTwoName));
        //create a deck.... put cards in the deck, shuffle the deck
        let d = new Deck();
        d.createDeck();
        d.shuffleDeck();
        //pass each player the cards
        this.players[0].playerCards = d.cards.slice(0, 26);
        this.players[1].playerCards = d.cards.slice(26, 52);

        /** tools: loop - which loop? 26 rounds: 
        deal 26 cards to each player by doing a loop desk that has been created and push the 2 cards for player1 and player2
        */




        //create variables for scores

        let player1Score = 0;
        let player2Score = 0;

        let player1 = this.players[0].playerCards
        let player2 = this.players[1].playerCards
        // each player plays a card, iterate through the turns and play the first element in the array

        while (player1.length > 0 && player2.length > 0) {
            let player1Card = player1.shift();
            let player2Card = player2.shift();

            // compare the cards and count to scores

            if (player1Card.value > player2Card.value) {
                player1Score++;

            } else if (player2Card.value > player1Card.value) {
                player2Score++;
            }

            //display the scores and declare the winner
            console.log(`player 1: ${player1Score} points`);
            console.log(`player 2: ${player2Score} points`);
        }
        if (player1Score > player2Score) {
            console.log("Player 1 wins!");

        } else if (player1Score < player2Score) {
            console.log("player2 wins!");

        } else {
            console.log("it's a tie!")
        }




    }

}
let warGame = new Board();
warGame.start('player1', 'player2');

console.log(warGame.players)








