import React from 'react';
    import Header from '../components/Header';

    const About = () => {
      return (
        <div className="container mx-auto">
          <Header />
          <main className="py-8">
            <h1>About Us</h1>
            <p>This is a simple example of how you can build a website in Next.js using Tailwind CSS.</p>
          </main>
          <Footer />
        </div>
      );
    };

    export default About;
