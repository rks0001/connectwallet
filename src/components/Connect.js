import '../styles/connect.css';
import { React, useEffect, useState } from "react";
import { Contract, providers } from "ethers";

const Connect = () => {
    const [isWalletInstalled, setIsWalletInstalled] = useState(false);
    // state for keeping track of current connected account.
      const [account, setAccount] = useState(null);
  
    useEffect(() => {
          if (window.ethereum) {
              setIsWalletInstalled(true);
          }
      }, []);
  
    async function connectWallet() {
          window.ethereum
              .request({
                  method: "eth_requestAccounts",
              })
              .then((accounts) => {
                  setAccount(accounts[0]);
              })
              .catch((error) => {
                  alert("Something went wrong");
              });
      }
  

        if (account === null) {
            return (
              <>
              
                { 
                  isWalletInstalled ? (
                    <button className="btnconnect" onClick={connectWallet}>Connect Wallet</button>
                  ) : (
                    <p>Install Metamask wallet</p>
                  )
                }
              
              </>
              
            );
          }
            return (
              <div className='btncon'> 
                <span className="acc_over">Connected as: {account}</span>
              </div>
          ); 

}

export default Connect