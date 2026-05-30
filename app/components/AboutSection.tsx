// components/AboutSection.tsx
import village from '../images/village.png';
export default function AboutSection() {
    return (
      <section
        id="about"
        className="section-padding bg-white"
      >
        <div className="container-width grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase tracking-widest text-green-700 font-semibold">
              About the Initiative
            </p>
  
            <h2 className="text-4xl font-bold mt-4">
              A Community-Driven Mission Rooted in Ghana
            </h2>
  
            <p className="mt-6 text-lg text-gray-700 leading-8">
              Founded by Dr. Gabriel Kwadwo Ofori-Okai,
              this initiative supports peasant farmers,
              students, and women entrepreneurs in
              Wudome Peki, Ghana.
            </p>
  
            <p className="mt-4 text-gray-600 leading-8">
              Through microloans, educational support,
              sustainable farming programs, and technology
              donations, the project creates long-term
              opportunities for rural communities.
            </p>
          </div>
  
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={village.src}
              alt="Village in Ghana"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    );
  }