const TronWeb = require("tronweb");
const tronWeb = new TronWeb(
  "https://api.shasta.trongrid.io",
  "https://api.shasta.trongrid.io",
  "https://api.shasta.trongrid.io",
  "55913312d852a4d12b437d13815fb19183a39aad95316aaa9f57df73ea67815f"
);

(async () => {
  issuerAddress = "TCD5PzBwe7dmFBNbPrX7DLVwsFNtdgdFaf";
  tx = await tronWeb.transactionBuilder.createSmartContract(
    {
      feeLimit: 1000000000,
      callValue: 0,
      tokenId: "",
      tokenValue: 0,
      abi: [
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              name: "_sender",
              type: "address",
            },
            {
              indexed: false,
              name: "_receiver",
              type: "address",
            },
            {
              indexed: false,
              name: "_amount",
              type: "uint256",
            },
          ],
          name: "SomeEvent",
          type: "event",
        },
        {
          constant: false,
          inputs: [
            {
              name: "_receiver",
              type: "address",
            },
            {
              name: "_someAmount",
              type: "uint256",
            },
          ],
          name: "emitNow",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      bytecode:
        "0x608060405234801561001057600080fd5b50610145806100206000396000f300608060405260043610610041576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063bed7111f14610046575b600080fd5b34801561005257600080fd5b50610091600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610093565b005b3373ffffffffffffffffffffffffffffffffffffffff167f9f08738e168c835bbaf7483705fb1c0a04a1a3258dd9687f14d430948e04e3298383604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a250505600a165627a7a7230582033629e2b0bba53f7b5c49769e7e360f2803ae85ac80e69dd61c7bb48f9f401f30029",
    },
    issuerAddress
  );
  const signTx = await tronWeb.trx.sign(
    tx,
    "55913312d852a4d12b437d13815fb19183a39aad95316aaa9f57df73ea67815f"
  );

  const result = await tronWeb.trx.sendRawTransaction(signTx, {});

  console.log(result);
})();
