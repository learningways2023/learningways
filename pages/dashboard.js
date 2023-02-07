import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
const Dashboard = () => {
    return (
        <div>
           <Navbar />
           <div className='flex justify-center items-center my-10 text-black font-semibold text-xl'>
                Loged In
           </div>
           <Footer />
        </div>
    );
}

export default Dashboard;
