// components/GallerySection.tsx
import clinicBed from "../images/clinic-bed.png";
import childTherapy from "../images/child-therapy.png";
import glasses from "../images/prescription-glasses.png";
import road from "../images/road.png";
import solarLamps from "../images/solar-lamps.png";
import farm from "../images/farm.png";
import supplies from "../images/supplies.png";
import founder from "../images/founderwchild.jpeg";

const images = [
  { src: clinicBed.src, alt: "Donated bed to the clinic" },
  { src: childTherapy.src, alt: "Child therapy" },
  {
    src: glasses.src,
    alt: "Prescription glasses to school children",
  },
  { src: road.src, alt: "Handing over paved road Keh Avenue" },
  { src: supplies.src, alt: "Provision of school supplies to the preschool" },
  { src: solarLamps.src, alt: "Solar lamps" },
  { src: founder.src, alt: "Dr. Ofori-Okai" },
  { src: farm.src, alt: "Work on school farms" },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="section-padding">
      <div className="container-width">
        <div className="text-center">
          <p className="uppercase tracking-widest text-green-700 font-semibold">
            Gallery
          </p>

          <h2 className="text-4xl font-bold mt-4">
            Moments from the Community
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {images.map((image) => (
            <div
              key={image.alt}
              className="overflow-hidden rounded-3xl shadow-lg"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-[400px] object-cover object-top hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
