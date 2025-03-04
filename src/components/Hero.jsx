import React from 'react';
import EmailForm from './EmailForm';

function Hero() {
  return (
    <div className="px-14 py-4 dark:bg-black">
      <h1 className="dark:text-white text-4xl font-bold">CostGuard</h1>
      <p className="dark:text-white mb-5">Easily Track Your Expenses</p>
      <EmailForm />
    </div>
   ); 
}

export default Hero;