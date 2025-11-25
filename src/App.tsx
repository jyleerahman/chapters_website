import { Hero } from './components/Hero';
import { Solutions } from './components/Solutions';
import { Portfolio } from './components/Portfolio';
import { Team } from './components/Team';
import { JoinUs } from './components/JoinUs';
import { Blog } from './components/Blog';
import { Inquire } from './components/Inquire';
import { Navigation } from './components/Navigation';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Hero />
      <Solutions />
      <Portfolio />
      <Team />
      <JoinUs />
      <Blog />
      <Inquire />
    </div>
  );
}
