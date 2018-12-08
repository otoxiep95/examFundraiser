"use strict";

let userId = 1;

let endpoint =
  "http://5bfd357c827c3800139ae907.mockapi.io/treefund/user/" +
  userId +
  "/donations";

let donationForm = document.querySelector(".donation-form");

donationForm.addEventListener("submit", e => {
  /* DONT REFRESH PAGE */
  e.preventDefault();

  /* create a Donation Object */
  const donationObject = {
    category: donationForm.elements.location.value,
    trees: Number(donationForm.elements.treenumber.value),
    date: new Date().toISOString()
  };

  postDonation(donationObject);
});
donationForm.elements.treenumber.addEventListener("input", e => {
  console.log(e);
  console.log("change");
  let treeNum = donationForm.elements.treenumber.value;
  console.log(treeNum);
  document.querySelector(".price").textContent = treeNum * 10 + "kr";
});

function getPrice() {
  let treeNum = donationForm.elements.treenumber.value;
  console.log(treeNum);
}

/* POST THE DONATION TO THE DATABASE */
function postDonation(newDonation) {
  console.log(newDonation);
  console.log(endpoint);

  fetch(endpoint, {
    method: "post",
    body: JSON.stringify(newDonation),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(d => {});
}
