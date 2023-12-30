import Nav from "./components/Nav"
import { Hero,Footer,CustomerReviews,PopularProducts,Services,SpecialOffers,Subscribe,SuperQuality } from "./sections"



function App() {
 

  return (
    <main className="relative">
      <Nav/>

      <section className="x1:padding-l wide:padding-r padding-b">
        <Hero/>
      </section>

      <section className="padding">
        <PopularProducts/>
      </section>

      <section className="padding">
        <SuperQuality/>
      </section>

      <section className="padding-x py-10 bg-slate-50">
        <Services/>
        
      </section>

      <section className="padding">
        <SpecialOffers/>
      </section>

      <section className="padding bg-pale-blue">
        <CustomerReviews/>
      </section>

      <section className="padding-x sm:py-32 py-16">
        <Subscribe/>
      </section>

      <section className="bg-black padding-x padding-t pb-8">
        <Footer/>
      </section>

    </main>
  )
}

export default App