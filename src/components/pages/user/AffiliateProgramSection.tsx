import React from 'react';
import Image from '../../../assets/Images/affiliateimg.png';
import ImageTwo from '../../../assets/Images/affiliateform.png';
import ImageThree from '../../../assets/Images/Scroll.png';



 export const AffiliateProgramSection: React.FC = React.memo(() => {
  return (
    <div className='w-full h-auto text-white pt-[30px] pb-[200px]  flex flex-col items-center justify-top  relative'> 
       <section className='lg:w-[90%] lg:h-[446px] h-[700px] affiliate-section rounded-[16px] lg:grid lg:grid-cols-2 overflow-hidden '>
          <div className='flex lg:justify-center lg:items-left flex-col lg:pl-[50px] pl-[20px] '>
            <h1 className='lg:text-[54px] text-[43px] lg:font-bold leading-[49px] lg:leading-none pt-[30px]' style={{fontFamily:'Unbounded'}}>Join Our Affiliate 
            Program Today!</h1>
            <p className='text-[18px] lg:pb-[22px] pt-[15px] lg:pt-[10px] pb-[12px]'>Earn commissions on every referral!</p>
            <button className='text-[20px] lg:font-medium seller-button lg:px-[19px] py-[13px] rounded-[1000px] w-[182px] '>Become a Seller</button>
          </div>
          <div className='relative  pt-[25px] lg:pt-[0px]'>
            <img src={Image} alt="" className='absolute lg:left-[200px] lg:bottom-[0px] left-[-21px] ' style={{zIndex:'-10'}}/>
            <img src={ImageTwo} alt="" style={{zIndex:'11'}} className='absolute lg:top-[316px] lg:right-[200px] top-[250px] right-[20px] w-[300px] lg:w-auto' />
          </div>
       </section>
       <img src={ImageThree} className='absolute  lg:top-[430px] lg:left-[0px] w-[100%]  top-[690px]  h-[100px] lg:h-auto object-cover'   />
    </div>
  );
});



