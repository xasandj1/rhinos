import React from 'react';
import {Header, About, Join, Benefits, Roadmap, Team, Faq} from './components'
import Footer from './components/Footer/Footer';

function App() {
   return (
      <>
         <Header />
         <main>
            <About />
            <Join />
            <Benefits />
            <Roadmap />
            <section className='bg'>
            <Team/>
            <Faq />
            </section>
         </main>
         <Footer />
      </>
   );
}

export default App;
