import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Homepage() {
  return (
    <div>
        <Header />
            <h1>Welcome to My Homepage</h1>
            <p>This is a basic homepage for your application.</p>
        <Footer />
    </div>
  );
}

export default Homepage;
