const packOfGifts = ["videogames", "console"];
const reindeers = ["midu"];

// el pack de regalos pesa 4 + 4 + 4 = 12
// los renos pueden llevar (2 * 6) + (2 * 6) = 24
// por lo tanto, Santa Claus puede entregar 2 cajas de regalos

console.log(distributeGifts(packOfGifts, reindeers));

function distributeGifts(packOfGifts, reindeers) {
  let lengthGift = 0;
  let lengthReindeers = 0;
  let pack = 0;

  packOfGifts.map((gift) => {
    lengthGift = lengthGift + gift.length;
  });

  reindeers.map((reindeers) => {
    lengthReindeers = lengthReindeers + reindeers.length * 2;
  });

  return Math.floor(lengthReindeers / lengthGift);
}
