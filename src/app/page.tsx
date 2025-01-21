
/* import Image from 'next/image'; */
import Header from '../app/components/Header';
import Sofa1 from '../app/components/Sofa1';
import Sofa2 from '../app/components/Sofa2';
import Set1 from '../app/components/Set1';
import Sofa3 from '../app/components/Sofa3';
import Miscelenious from '../app/components/Misc';
import ProductFilter from '../app/components/ProductFilter';
import Program from '../app/components/Program';
import OurPromise from '../app/components/OurPromise';
import Footer from '../app/components/Footer'

export default function Home() {
  return (
    <div className="bg-yellow-100 min-h-screen">

      <Header />
      <Sofa1 />
      <Sofa2 />
      <Set1 />
      <ProductFilter />
      <Sofa3 />
      <Miscelenious />
      <Program />
      <OurPromise />
      <Footer />

    </div>
  );
}

