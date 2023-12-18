import Hero from '../../components/Hero';
import Main from '../../components/Main';
import Sponsor from '../../components/Sponsor';
import Detail from '../../components/Detail';

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      <Hero />
      <Detail />
      <Main />
      <Sponsor />
    </div>
  );
}
