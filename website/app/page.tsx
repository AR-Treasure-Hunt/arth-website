import Navbar from '@/components/Navbar'
import Story from '@/components/Story'
import Rounds from '@/components/Rounds'
import Past from '@/components/Past_Iterations'
import Footer from '@/components/Footer'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Story></Story>
       <Rounds></Rounds>
       <Past></Past>
       <Footer></Footer>
    </div>
  )
}

export default Home

// {
//   "TeamName": ,
//   "leader":  {
//     Fullname:,
//     College:,
//     Email:,
//     PhoneNumber,
//   },
//   "member1":{
//      Fullname:,
//     College:,
//     Email:,
//     PhoneNumber,
//   },
//   "member2":{
//      Fullname:,
//     College:,
//     Email:,
//     PhoneNumber,
//   }
// }

// {
//   data:{
//     teamCode: "P6T2R2"
//   }
// }