import React from 'react';
import Banner from '../components/home/Banner';
import HomeBody from '../components/home/HomeBody';
import { useSelector } from 'react-redux';


const HomePage = () => {
  const {user} = useSelector((state) => state.userState);
  return (
    <div>
    <Banner/>
    <HomeBody/>
    </div>
  )
}

export default HomePage