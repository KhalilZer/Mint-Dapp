import React from 'react';
import {useState,useEffect} from "react";
import {ethers,BigNumber} from "ethers";
import RzouNFT from "../RzouNFT.json"

const RzouNFT_address="0x5FbDB2315678afecb367f032d93F642f64180aa3";

const PagePrincipale = ({acc,set}) => {
    const [mintAmount, setMintAmount] = useState(1);
    const [errors, setErrors] = useState();
    const [success, setSuccess] = useState();
    const isConnected=Boolean(acc[0]);
      
   
  
    async function callMint(){
        if(typeof window.ethereum!="undefined"){
            const provider=new ethers.providers.Web3Provider(window.ethereum);
            const signer= provider.getSigner();
            const contract=new ethers.Contract(RzouNFT_address,RzouNFT.abi,signer);

            try {
                const res=await contract.mint(BigNumber.from(mintAmount))
                console.log(res);
                setSuccess("Your transaction is passed");
                
            } catch (error) {
                console.log(error)
                setErrors("Ya une eurreur lors de MINT");
            }
        }
    }

    function incrementHndl(){
        if(mintAmount>=3)  return ;
        setMintAmount(mintAmount+1);
    }
    function decrementHndl(){
        if(mintAmount<=1) return ;
        setMintAmount(mintAmount-1);
    }
  return (
    <div className='md:h-screen md:mt-0 mt-40 flex items-center justify-center text-center  text-white'>
        <div className=''>
              <h1>Rzou NFT</h1>
              <p>Mint your Rzou NFT with a ggod price </p>  
        {isConnected ? (
            <div className='my-4 flex flex-col'> 
                <div className=''>
                    <button onClick={decrementHndl} className="bg-yellow-500 rounded-md text-lg p-3 px-6 mx-3 hover:bg-yellow-700"> - </button>
                    <input className=' w-3/12 md:w-8/12 rounded-md text-center bg-transparent text-lg border-2 border-yellow-500 p-2' type="text" value={mintAmount} onChange={(e)=>{setMintAmount(e.target.value)}} />
                    <button onClick={incrementHndl} className="bg-yellow-500 rounded-md text-lg p-3 px-6 mx-3 hover:bg-yellow-700"> + </button>
                </div>
                <button  onClick={callMint} className=" w-2/3 self-center md:h-full bg-blue-500 rounded-xl text-lg p-5 my-5 hover:bg-transparent hover:border-2 hover:border-blue-500 ">MINT NOW</button>
            </div>
        ):(
           <div>
                <h2>You Must be connected for Mint</h2>
           </div>

        )}
        </div>
    </div>
  )
}

export default PagePrincipale
