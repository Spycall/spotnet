import React, { useState } from 'react';
import STRK from '../../../assets/icons/strk.svg';
import USDC from '../../../assets/icons/apy_icon.svg';
import './stake.css';
import { VaultLayout } from '../VaultLayout';
import { Button } from 'components/ui/Button';
import MetricCard from 'components/StakeCard/MetricCard';
import GasFee from 'components/GasFee/GasFee';
import BalanceCards from 'components/BalanceCards';

function Stake() {
  const [selectedNetwork, setSelectedNetwork] = useState('Starknet');
  const [amount, setAmount] = useState('0');

  const networks = [{ name: 'Starknet', image: STRK }];

  const handleChange = (e) => {
    setSelectedNetwork(e.target.value);
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;
    const regex = /^\d*\.?\d*$/;
    if (regex.test(value)) {
      setAmount(value);
    }
  };

  return (

    <>

    {/* Desktopview */}

  <VaultLayout>
  <div className="stake-wrapper">
    <div className="stake-container">
      <div className='main-container'>
        <div className="top-cards">
          <MetricCard title="STRK Balance" value="0.046731" icon={STRK} />
          <MetricCard title="APY Balance" value="0.046731" icon={USDC} />
        </div>
      </div>

      <h1 className="stake-title">Please submit your leverage details</h1>

      <div className="main-card">
        <div className="network-selector-container">
          <div className="network-selector">
            <div className="selected-network">
              <img
                src={networks.find((network) => network.name === selectedNetwork)?.image}
                alt={selectedNetwork}
                className="network-icon"
              />
              <span>{selectedNetwork}</span>
            </div>
            <svg
              className="chevron"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 9L12 15L18 9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="network-dropdown">
            {networks.map((network) => (
              <div key={network.name} className="network-option" onClick={() => handleChange(network)}>
                <img src={network.image} alt={network.name} className="network-icon" />
                <span>{network.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="amount-input" aria-labelledby="amount-input-label">
          <input
            type="text"
            id="amount-field"
            value={amount}
            onChange={handleAmountChange}
            pattern="^\d*\.?\d*$"
            className="amount-field"
            aria-describedby="currency-symbol"
            placeholder="0.00"
          />
          <span id="currency-symbol" className="currency">STRK</span>
        </div>

        <div className="apy-rate">$0.00 APY / year</div>
        <GasFee />
      </div>

      <Button variant="secondary" size="lg" className="stake-button">
        Stake
      </Button>
    </div>
  </div>
</VaultLayout>





{/* Mobile view */}
    
   
     <div className="mobile-vault-container">
    <div className="form-content-wrapper">


      {/* Balance Cards */}
      <div className='mobile-balances-container '>
        <div className='mobile-balances-scroller '>
        <BalanceCards walletId={null} />
        </div>
      </div>

      <h1 className="mobile-stake-title ">Please submit your stake</h1>

      {/* Staking Section */}
     <div className='mobile-border-container'>
     <div className="main-card">
        <div className="network-selector-container">
          <div className="network-selector">
            <div className="selected-network">
              <img
                src={networks.find((network) => network.name === selectedNetwork)?.image}
                alt={selectedNetwork}
                className="network-icon"
              />
              <span>{selectedNetwork}</span>
            </div>
            <svg
              className="chevron"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 9L12 15L18 9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="network-dropdown">
            {networks.map((network) => (
              <div key={network.name} className="network-option" onClick={() => handleChange(network)}>
                <img src={network.image} alt={network.name} className="network-icon" />
                <span>{network.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="amount-input" aria-labelledby="amount-input-label">
          <input
            type="text"
            id="amount-field"
            value={amount}
            onChange={handleAmountChange}
            pattern="^\d*\.?\d*$"
            className="amount-field"
            aria-describedby="currency-symbol"
            placeholder="0.00"
          />
          <span id="currency-symbol" className="mobile-currency">STRK</span>
        </div>

        <div className="apy-rate">$0.00 APY / year</div>
        <GasFee />
      </div>

     </div>

  
   <div className='parent-btn-container '>
   <Button variant="secondary" size="lg" className="mobile-stake-button">
        Stake
      </Button>
   </div>
    </div>
   
    
   </div>
    </>





  );
}

export default Stake;