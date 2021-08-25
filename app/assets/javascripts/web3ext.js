// BigBlueButton open source conferencing system - http://www.bigbluebutton.org/.
//
// Copyright (c) 2018 BigBlueButton Inc. and by respective authors (see below).
//
// This program is free software; you can redistribute it and/or modify it under the
// terms of the GNU Lesser General Public License as published by the Free Software
// Foundation; either version 3.0 of the License, or (at your option) any later
// version.
//
// BigBlueButton is distributed in the hope that it will be useful, but WITHOUT ANY
// WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A
// PARTICULAR PURPOSE. See the GNU Lesser General Public License for more details.
//
// You should have received a copy of the GNU Lesser General Public License along
// with BigBlueButton; if not, see <http://www.gnu.org/licenses/>.

const vaiyotokenaddress = "0xBA19f24dFCf7f795D90c0404d104680dB28BAC2b";
const web3 = new Web3(
  new Web3.providers.HttpProvider(
    // "https://mainnet.infura.io/v3/515bc6d0df73416e938446fd12ae9234"
    "https://bsc-dataseed.binance.org"
  )
);
getBalance = async function (account) {
  var balance = 0;
  if (web3 !== "undefined") {
    await web3.eth.getBalance(account, function (err, result) {
      if (err) {
        console.log(err);
      } else {
        balance = web3.utils.fromWei(result, "ether");
      }
    });
  }
  return balance;
};
