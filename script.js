function makeChange(amount) {
	
  amount = Number(amount);

  let change = { q:0, d:0, n:0, p:0 };

  change.q = Math.floor(amount/25);
  amount = amount%25;

  change.d = Math.floor(amount/10);
  amount = amount%10;

  change.n = Math.floor(amount/5);
  amount = amount%5;

  change.p = amount;

  return change;
}

// Using prompt input
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));


// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
