//SPDX-License-Identifier: UNLICENSED

pragma  solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

import "@openzeppelin/contracts/access/Ownable.sol";

contract RzouNFT is ERC721, Ownable{
    uint256 public mintPrice;
    uint256 public totalSupply;
    uint256 public maxSupply;
    uint256 public maxPerWallet;
    bool public isPublicMint;
    string internal baseTokenUri;
    address payable public witdhrawWallet;

    mapping(address=>uint) public walletMint;

    constructor() payable ERC721('RzouNFT','RZ'){
        mintPrice=0.1 ether;
        totalSupply=0;
        maxSupply=1000;
        maxPerWallet=3;
    }

    function setIsPublicMintEnable(bool _isPublicMint) external onlyOwner {
        isPublicMint=_isPublicMint;
    }
    function setBaseTokenUri(string calldata _BaseTokenUri) external onlyOwner {
        baseTokenUri=_BaseTokenUri;
    }

    function tokenURI(uint _tokenId) public view override returns(string memory){
        require(_exists(_tokenId),"Token does not exist");
        return string(abi.encodePacked(baseTokenUri,Strings.toString(_tokenId),".json"));
    }
    function withdraw() external onlyOwner{
        (bool success,)=witdhrawWallet.call{value:address(this).balance}("");
        require(success,"Withdraw failed");
    }

    function mint(uint _qte) public payable{
        require(isPublicMint,"Minting not eenable");
        require(msg.value== _qte * mintPrice,"Value error");
        require(totalSupply+_qte <=maxSupply,"sold out");
        require(walletMint[msg.sender]+_qte <=maxPerWallet,"exceeeed max wallet");

        for(uint i=0;i<_qte;i++){
            uint256 newTokenId=totalSupply+1;
            totalSupply++;
            _safeMint(msg.sender,newTokenId); 
        }

    }
}