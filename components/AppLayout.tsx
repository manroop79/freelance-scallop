import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Carousel from './Carousel';
import Featured from './Featured';
import WhyScallop from './WhyScallop';
import KeyFeatures from './KeyFeatures';
import ScallopEarn from './ScallopEarn';
import ScallopNFT from './ScallopNFT';
import ScallopExchange from './ScallopExchange';
import ScallopCoin from './ScallopCoin';
import ScallopAccounts from './ScallopAccounts';
import ScallopCards from './ScallopCards';
import ScallopPayments from './ScallopPayments';
import HardwareWallet from './HardwareWallet';
import ScallopGuarantee from './ScallopGuarantee';
import ScallopChain from './ScallopChain';
import GlobalAccount from './GlobalAccount';
import RoadMap from './RoadMap';
import Team from './Team';
import Exchanges from './Exchanges';
import Footer from './Footer-1';
import Bottom from './Footer-2';

const AppLayout = () => {
  return (
    <main className='relative flex flex-col justify-center my-auto overflow-hidden'>
      <Navbar />
      {/* <div className='bg-white'> */}
        <Hero />
        <Carousel />
        <Featured />
        <WhyScallop />
        <KeyFeatures />
        <ScallopEarn />
        <ScallopNFT />
        <ScallopExchange />
        <ScallopCoin />
        <ScallopAccounts />
        <ScallopCards />
        <ScallopPayments />
        <HardwareWallet />
        <ScallopGuarantee />
        <ScallopChain />
        <GlobalAccount />
        <RoadMap />
        <Team />
        <Exchanges />
        <Footer />
        <Bottom />
      {/* </div> */}
    </main>
  );
};

export default AppLayout;