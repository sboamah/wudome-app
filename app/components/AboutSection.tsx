// components/AboutSection.tsx
"use client";
import village from "../images/village.png";
import founder from "../images/founder.jpeg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-width">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {/* Slide 1 */}

            <CarouselItem>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="text-green-700 font-semibold">
                    ABOUT THE INITIATIVE
                  </span>

                  <h3 className="text-4xl font-bold mt-4">
                    Sustainable Community Enrichment Project
                  </h3>

                  <p className="mt-6 text-lg text-gray-700 leading-8">
                    Founded by Dr. Gabriel Kwadwo Ofori-Okai, this initiative
                    supports peasant farmers, students, and women entrepreneurs
                    in Wudome Peki, Ghana.
                  </p>

                  <p className="mt-4 text-gray-600 leading-8">
                    Through microloans, educational support, sustainable farming
                    programs, and technology donations, the project creates
                    long-term opportunities for rural communities.
                  </p>
                </div>

                <div className="relative">
                  <img
                    src={village.src}
                    alt="Village in Ghana"
                    className="rounded-3xl shadow-lg w-full h-[400px] object-cover"
                  />
                </div>
              </div>
            </CarouselItem>

            {/* Slide 2 */}

            <CarouselItem>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <img
                    src={founder.src}
                    alt="Dr. Gabriel Ofori-Okai"
                    className="rounded-3xl shadow-lg w-full h-[400px] object-cover object-top"
                  />
                </div>

                <div>
                  <span className="text-green-700 font-semibold">
                    ABOUT THE FOUNDER
                  </span>

                  <h3 className="text-4xl font-bold mt-4">
                    Dr. Gabriel Kwadwo Ofori-Okai
                  </h3>

                  <p className="mt-6 text-gray-700 leading-8">
                    Dr. Ofori-Okai was born in Nkawkaw, Ghana and has deep
                    family roots in Peki Wudome. His father was born in Peki
                    Wudome, creating a lifelong connection to the community.
                  </p>

                  <p className="mt-4 text-gray-700 leading-8">
                    He studied Chemistry at the Technical University of Berlin
                    and later worked at the University at Albany, Schenectady
                    International Group, and GE Global Research Center in
                    Niskayuna.
                  </p>

                  <p className="mt-4 text-gray-700 leading-8">
                    After retirement, he dedicated his efforts to giving back by
                    supporting education, women entrepreneurs, and peasant
                    farmers in the community that helped shape his family.
                  </p>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>

          <div className="flex justify-center mt-10 gap-4">
            <CarouselPrevious className="relative left-0 top-0 translate-y-0" />
            <CarouselNext className="relative right-0 top-0 translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
