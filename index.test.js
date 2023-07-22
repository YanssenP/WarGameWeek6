let expect = chai.expect;

describe('Week 6 Tests', () => {
    describe("Testing a deck", () => {
        let deck = new Deck()
deck.createDeck()
        it("should have 52 cards", () => {

            expect(deck.cards.length).to.equal(52)
        })


    })
})