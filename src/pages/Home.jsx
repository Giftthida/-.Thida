import React from 'react'
import MainLayout from '../Layouts/MainLayout';
import photo from './โลโก้.jpg';

const Home = () => {
  return (
    <MainLayout>
      
      <img src={photo} className="App-photo" width=" " height=" " alt="photo"/>
    </MainLayout>
  )
}

export default Home