// components/ImpactSection.tsx
const stats = [
    { number: "50+", label: "Women Supported" },
    { number: "50", label: "Computers Donated" },
    { number: "200+", label: "Books Distributed" },
    { number: "1000+", label: "Students Impacted" },
  ];
  
  export default function ImpactSection() {
    return (
      <section
        id="impact"
        className="section-padding bg-green-900 text-white"
      >
        <div className="container-width">
          <div className="text-center">
            <p className="uppercase tracking-widest text-green-300">
              Impact
            </p>
  
            <h2 className="text-4xl font-bold mt-4">
              Measurable Change
            </h2>
          </div>
  
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-16">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center"
              >
                <div className="text-5xl font-bold">
                  {stat.number}
                </div>
  
                <div className="mt-4 text-green-200">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }