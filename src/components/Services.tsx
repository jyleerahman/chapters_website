import { Database, Workflow, LineChart, Shield } from 'lucide-react';

const services = [
  {
    icon: Database,
    title: 'Data Pipeline Architecture',
    description: 'Design scalable, fault-tolerant data pipelines tailored to your business needs. From batch processing to real-time streaming.',
    deliverables: ['Architecture design', 'Technology recommendations', 'Implementation roadmap'],
  },
  {
    icon: Workflow,
    title: 'ETL/ELT Development',
    description: 'Build robust data transformation workflows that ensure data quality and reliability across your entire organization.',
    deliverables: ['Custom ETL pipelines', 'Data quality checks', 'Automated orchestration'],
  },
  {
    icon: LineChart,
    title: 'Data Warehouse Optimization',
    description: 'Optimize your existing data infrastructure for performance, cost-efficiency, and scalability as your data grows.',
    deliverables: ['Performance audits', 'Query optimization', 'Cost reduction strategies'],
  },
  {
    icon: Shield,
    title: 'Data Governance & Security',
    description: 'Implement best practices for data governance, access control, and compliance to protect your most valuable asset.',
    deliverables: ['Security frameworks', 'Access policies', 'Compliance documentation'],
  },
];

export function Services() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-32 px-6 lg:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-20">
          <span className="inline-block px-4 py-2 bg-white text-gray-800 text-sm tracking-wide mb-6">
            WHAT WE DO
          </span>
          <h2 className="text-black mb-6">
            Services built for modern data teams
          </h2>
          <p className="text-gray-600">
            Whether you're starting from scratch or optimizing an existing setup, 
            we provide end-to-end data engineering solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-10 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-black flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-black mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <div className="space-y-2">
                  <p className="text-sm text-gray-500">Key deliverables:</p>
                  <ul className="space-y-1">
                    {service.deliverables.map((item, i) => (
                      <li key={i} className="text-sm text-gray-700 flex items-start">
                        <span className="mr-2">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Not sure which service you need?
          </p>
          <button
            onClick={scrollToContact}
            className="px-8 py-4 bg-black text-white hover:bg-gray-800 transition-colors"
          >
            Let's Talk About Your Project
          </button>
        </div>
      </div>
    </section>
  );
}
