const web3 = new Web3("https://cloudflare-eth.com");

async function walletConnect() {
  if (typeof window.ethereum !== "undefined") {
    console.log("MetaMask is installed!");
    var accounts = await ethereum.request({ method: "eth_requestAccounts" });
    alert(accounts[0]);
    document.getElementById("txtwaddress").value = accounts[0];
    document.getElementById("btncnt").value = "Connected";
  }
}

function post(path, params, method = "post") {
  // The rest of this code assumes you are not using a library.
  // It can be made less verbose if you use one.
  const form = document.createElement("form");
  form.method = method;
  form.action = path;

  for (const key in params) {
    if (params.hasOwnProperty(key)) {
      const hiddenField = document.createElement("input");
      hiddenField.type = "hidden";
      hiddenField.name = key;
      hiddenField.value = params[key];

      form.appendChild(hiddenField);
    }
  }

  document.body.appendChild(form);
  form.submit();
}

async function walletConnect1() {
  if (typeof window.ethereum !== "undefined") {
    console.log("MetaMask is installed!");
    var accounts = await ethereum.request({ method: "eth_requestAccounts" });
    alert(accounts[0]);
    // document.getElementById("txtwaddress").value = accounts[0];
    // document.getElementById("btncnt").value = "Connected";

    post("/u/login/", { waddress: accounts[0] });
    // const trainerId = event.target.dataset.trainerId;
    // data = { waddress: accounts[0] };

    // fetch("/u/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //   },
    //   body: JSON.stringify(data),
    // });
  }
}
