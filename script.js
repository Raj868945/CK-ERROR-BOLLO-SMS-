function submitOrder() {
  const country = document.getElementById("country").value;
  const price = document.getElementById("price").value;
  const txn = document.getElementById("txnid").value;

  if (!txn) {
    alert("Enter transaction ID");
    return;
  }

  const text =
`New Order
Country: ${country}
Price: ${price}
TxnID: ${txn}`;

  window.open(
    "https://wa.me/919046579718?text=" + encodeURIComponent(text)
  );

  document.getElementById("msg").innerText =
    "Order sent! Admin will contact you.";
}
