import { CheckCircle } from 'lucide-react';

const credentials = [
  'Former data engineers at Google, Uber, and Netflix',
  '15+ years combined experience',
  'Processed petabytes of data',
  'Built systems for 100M+ users',
];

export function About() {
  return (
    <section id="about" className="py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-2 bg-gray-100 text-gray-800 text-sm tracking-wide mb-6">
              ABOUT US
            </span>
            <h2 className="text-black mb-6">
              Battle-tested expertise from the world's top tech companies
            </h2>
            <p className="text-gray-600 mb-8">
              We've built data infrastructure at scale for some of the world's most demanding 
              platforms. Now we bring that expertise to help growing companies build their 
              data foundations the right way from day one.
            </p>
            <p className="text-gray-600 mb-8">
              No junior consultants. No hand-offs. You work directly with senior engineers 
              who have solved the problems you're facing.
            </p>

            <div className="space-y-4">
              {credentials.map((credential, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-black flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{credential}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-100 aspect-[4/5] flex items-center justify-center">
            <div className="text-center text-gray-400">
              <p className="text-sm">Team photo or infographic</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
