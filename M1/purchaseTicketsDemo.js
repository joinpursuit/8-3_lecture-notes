function purchaseTickets(ticketData, purchases) {
  let result =
    'Thank you for visiting the Dinosaur Museum!\n-------------------------------------------\n';
  let total = 0;

  for (let i = 0; i < purchases.length; i++) {
    let tempSum = 0;
    let entrant = purchases[i].entrantType;
    let ticket = purchases[i].ticketType;

    if (!ticketData[ticket]) {
      return `Ticket type 'incorrect-type' cannot be found.`;
    } else if (!ticketData[ticket].priceInCents[entrant]) {
      return `Entrant type 'incorrect-entrant' cannot be found.`;
    } else {
      result += `${capitalize(entrant)} ${capitalize(ticket)} Admission: `;
      tempSum += ticketData[ticket].priceInCents[entrant];
      let extrasReceipt = '';
      let extrasSum = 0;

      try {
        ({ extrasSum, extrasReceipt } = getExtrasReceiptAndSum(
          purchases[i].extras,
          ticketData,
          entrant,
        )); // <-- destructuring
        tempSum += extrasSum;
      } catch (e) {
        return e;
      }

      let dollarSum = (tempSum / 100).toFixed(2);
      result += `$${dollarSum}${extrasReceipt}\n`;
      total += tempSum;
    }
  }

  let dollarTotal = (total / 100).toFixed(2);
  result += `-------------------------------------------\nTOTAL: $${dollarTotal}`;
  return result;
}

const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const getExtrasReceiptAndSum = (extras, ticketData, entrant) => {
  let extrasSum = 0;
  let extrasReceipt = '';

  if (extras.length > 0) {
    let extrasArr = [];
    for (let extra of extras) {
      if (!ticketData.extras[extra]) {
        throw `Extra type 'incorrect-extra' cannot be found.`;
      } else {
        extrasArr.push(ticketData.extras[extra].description);
        extrasSum += ticketData.extras[extra].priceInCents[entrant];
      }
    }

    extrasReceipt += ` (${extrasArr.join(', ')})`;
  }
  return { extrasSum, extrasReceipt }; // return multiple values
};
