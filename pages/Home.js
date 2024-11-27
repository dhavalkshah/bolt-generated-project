import React from 'react';
    import Header from '../components/Header';
    import About from '../components/About';

    const Home = () => {
      return (
        <div className="container mx-auto">
          <Header />
          <main className="py-8">
            <h1>Welcome to My Next.js Website</h1>
            <p>This is a simple example of how you can build a website in Next.js using Tailwind CSS.</p>
          </main>
          <Footer />
        </div>
      );
    };

    export default Home;
