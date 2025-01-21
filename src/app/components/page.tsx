
/* import Image from 'next/image'; */
import Header from '../components/Header';
import Sofa1 from '../components/Sofa1';
import Sofa2 from '../components/Sofa2';
import Set1 from '../components/Set1';
import Sofa3 from '../components/Sofa3';
import Miscelenious from '../components/Misc';
import Program from '../components/Program';
import Last from '../components/Footer'

export default function Home() {
  return (
    <div className="bg-yellow-100 min-h-screen">

      <Header />
      <Sofa1 />
      <Sofa2 />
      <Set1 />
      <Sofa3 />
      <Miscelenious />
      <Program />
      <Last />

    </div>
  );
}

