// Create an automation version of the classic card game war
// 2 players in this version
// use Classes Card, Deck, Player along with Properties and nethods that they may include
// Deal 26 cards to each Player from a Deck of 52 cards
// 
// No User Input when we run the code
//


class Card {
    constructor(suit, rank, value) {
        this.suit = suit;
        this.rank = rank;
        this.value = value;
    }
}
class Deck {
    constructor() {
        this.cards = [];  
    }      
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
class Player {
    constructor(name) {
        this.playerName = name;
        this.playerCards = [];
    }
}
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

        const player1 = [];
        const player2 = [];
        for (let i= 0; i < 26; i++) {
            player1.push(Deck[i]);
            player2.push(Deck[i + 26]);


        //create variables for scores

        let player1Score = 0;
        let player2Score = 0;


        // each player plays a card, iterate through the turns and play the first element in the array
 
         while (player1.length > 0 && player2.length > 0) {
            let player1Card = player1.shift();
            let player2card = player2.shift();

        // compare the cards and count to scores

        if(value.indexOf(player1Card.value) > value.indexOf(player2Card.value)) { Card =
            player1Score++;

         } else if (value.indexOf(player1Card.value) < value.indexOf(player2Card.value)) { Card =
            player2Score++;
          }   

        //display the scores and declare the winner
        console.log(`player 1: ${player1Score} points`);
        console.log(`player 2: ${player2Score} points`);
        if (player1Score > player2Score) {
            console.log("Player 1 wins!");

        } else if (player1Score < player2Score) {
            console.log("player2 wins!");

        } else { 
            console.log("it's a tie!")
        }

        }
       

        }

    }
}
let warGame = new Board();
warGame.start('Tom', 'Jerry');
console.log(warGame.players);

   
 
          
         //  compare card values and count to scores

 
 
          
 
 
          /** determiner a winner for the round
          * play another round... how many rounds are there?
          * what happens when all the rounds are over? declare a winner for the game? 
          * how are we tracking who wins?
          */
         
 
         //for loop does something 26 times
    
             //p1 plays a card.... p2 plays a card....
             //compare them
             //if/else to determine a winner
             //how are you tracking the points per round??
        
         //all 26 rounds are done after the loop
         //what do you do after the rounds are over?
 
 
 