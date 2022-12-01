const gifts = ["book", "game", "socks"];
const wrapped = wrapping(gifts);

function wrapping(gifts) {
  const wrappedGift = [];

  gifts.map((gift) => {
    let papelCantidad = gift.length + 2;
    let papel = "*".repeat(papelCantidad);
    wrappedGift.push(`${papel}\n*${gift}*\n${papel}`);
  });

  return wrappedGift;
}

console.log(wrapped);
