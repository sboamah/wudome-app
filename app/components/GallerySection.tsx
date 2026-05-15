// components/GallerySection.tsx
const images = [
    "/gallery-1.jpg",
    "/gallery-2.jpg",
    "/gallery-3.jpg",
    "/gallery-4.jpg",
  ];
  
  export default function GallerySection() {
    return (
      <section
        id="gallery"
        className="section-padding"
      >
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
                key={image}
                className="overflow-hidden rounded-3xl shadow-lg"
              >
                <img
                  src={image}
                  alt=""
                  className="w-full h-[400px] object-cover hover:scale-105 transition duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }