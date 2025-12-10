import Navbar from '@/components/Navbar'
import Story from '@/components/Story'
import Rounds from '@/components/Rounds'
import Past_Iterations from '@/components/Past_Iterations'
import Footer from '@/components/Footer'
import FAQ from '@/components/FAQ'
import Year from '@/components/Year_2023'
import Past from '@/components/Past'

import React from 'react'

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Story></Story>
      <Rounds></Rounds>
      <Past_Iterations></Past_Iterations>
      <Year></Year>
      <Past></Past>
      <FAQ></FAQ>  
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