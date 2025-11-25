const caseStudies = [
  {
    client: 'FinTech Startup',
    title: 'Real-time fraud detection pipeline',
    description: 'Built a streaming data pipeline processing 100K events/second, reducing fraud detection time from 5 minutes to under 1 second.',
    results: ['99.9% uptime', '50% cost reduction', '10x faster processing'],
    tags: ['Apache Kafka', 'AWS', 'Python'],
  },
  {
    client: 'E-commerce Platform',
    title: 'Data warehouse modernization',
    description: 'Migrated legacy data warehouse to modern cloud infrastructure, enabling real-time analytics for business stakeholders.',
    results: ['70% faster queries', '$100K annual savings', 'Real-time dashboards'],
    tags: ['Snowflake', 'dbt', 'Airflow'],
  },
  {
    client: 'Healthcare SaaS',
    title: 'HIPAA-compliant data infrastructure',
    description: 'Designed and implemented secure, compliant data architecture for sensitive healthcare data with audit trails.',
    results: ['HIPAA certified', 'Zero data breaches', 'Complete audit trail'],
    tags: ['GCP', 'Security', 'Compliance'],
  },
];

export function Work() {
  return (
    <section id="work" className="py-32 px-6 lg:px-12 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-20">
          <span className="inline-block px-4 py-2 bg-white/10 text-white text-sm tracking-wide mb-6">
            CASE STUDIES
          </span>
          <h2 className="mb-6">
            Real results for real companies
          </h2>
          <p className="text-gray-400">
            See how we've helped companies transform their data infrastructure and unlock new capabilities.
          </p>
        </div>

        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white/5 p-10 hover:bg-white/10 transition-colors border border-white/10"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                <div className="flex-1">
                  <p className="text-sm text-gray-400 mb-2">{study.client}</p>
                  <h3 className="text-white mb-4">
                    {study.title}
                  </h3>
                  <p className="text-gray-400 mb-6">
                    {study.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white/10 text-white text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:w-64 flex-shrink-0">
                  <p className="text-sm text-gray-400 mb-3">Key results:</p>
                  <ul className="space-y-2">
                    {study.results.map((result, i) => (
                      <li key={i} className="text-white flex items-start">
                        <span className="mr-2 text-gray-400">→</span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-2 text-sm">More case studies coming soon</p>
        </div>
      </div>
    </section>
  );
}
