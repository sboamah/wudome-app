// components/AboutSection.tsx
"use client";
import village from "../images/village.png";
import founder from "../images/founder.jpeg";
import logo from "../images/SCEPLogo.png";
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
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div>
                  <span className="text-green-700 font-semibold">
                    ABOUT THE INITIATIVE
                  </span>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-4">
                    Sustainable Community Enrichment Project
                  </h3>

                  <p className="mt-4 text-sm sm:text-base text-gray-700 leading-7">
                    Founded by Dr. Gabriel Kwadwo Ofori-Okai, this initiative
                    supports peasant farmers, students, and entrepreneurs in
                    Wudome Peki, Ghana and beyond.
                  </p>

                  <p className="mt-4 text-sm sm:text-base text-gray-700 leading-7">
                    Through microloans, educational support, sustainable farming
                    programs, and technology donations, the project creates
                    long-term opportunities for rural communities.
                  </p>
                </div>

                <div className="relative">
                  <img
                    src={village.src}
                    alt="Village in Ghana"
                    className="
  rounded-3xl
  shadow-sm
  w-full
  h-[250px]
  sm:h-[350px]
  md:h-[450px]
  lg:h-[550px]
  object-cover
  object-top
"
                  />
                </div>
              </div>
            </CarouselItem>

            {/* Slide 2 */}

            <CarouselItem>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <img
                    src={founder.src}
                    alt="Dr. Gabriel Ofori-Okai"
                    className="
                    rounded-3xl
                    shadow-sm
                    w-full
                    h-[250px]
                    sm:h-[350px]
                    md:h-[450px]
                    lg:h-[550px]
                    object-cover
                    object-top
                  "
                  />
                </div>

                <div className="order-1 lg:order-2">
                  <span className="text-green-700 font-semibold">
                    ABOUT THE FOUNDER
                  </span>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-4">
                    Dr. Gabriel Kwadwo Ofori-Okai
                  </h3>

                  <p className="mt-4 text-sm sm:text-base text-gray-700 leading-7">
                    Dr. Ofori-Okai was born in Nkawkaw, Ghana. His father was
                    born in Wudome Peki, creating a lifelong connection to the
                    community.
                  </p>

                  <p className="mt-4 text-sm sm:text-base text-gray-700 leading-7">
                    He studied Chemistry at the Technical University of Berlin
                    and later worked at the University at Albany, Schenectady
                    International Group, and GE Global Research Center in
                    Niskayuna. After retirement, he dedicated his efforts to
                    giving back in the community that helped shape his family.
                  </p>
                </div>
              </div>
            </CarouselItem>

            {/* Slide 3 */}

            <CarouselItem>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <img
                    src={logo.src}
                    alt="Logo for SCEP"
                    className="
                    w-full
                    h-[250px]
                    sm:h-[350px]
                    md:h-[450px]
                    lg:h-[550px]
                    object-contain
                    object-center
                  "
                  />
                </div>

                <div className="order-1 lg:order-2">
                  <span className="text-green-700 font-semibold">MISSION</span>
<h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-4">
                    Uniting Generations, Enriching Communities
                  </h3>
                  <p className="mt-4 text-sm sm:text-base text-gray-700 leading-7">
                    Every generation within the community actively takes part in
                    all our activities, coming together as a unified holistic
                    team. 
                  </p>
                     <p className="mt-4 text-sm sm:text-base text-gray-700 leading-7">
                     This spirit of collaboration is central to our
                    organization's mission — the Sustainable Community Enrichment
                    Project — where inclusivity and teamwork drive all our
                    endeavors.
                  </p>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>

          <div className="flex justify-center mt-5 gap-4">
            <CarouselPrevious className="relative left-0 top-0 translate-y-0" />
            <CarouselNext className="relative right-0 top-0 translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
