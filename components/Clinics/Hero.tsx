import React from "react";
import CustomButton from "../ui/CustomButton";

export default function ClinicHero () {
    const cards = [
    {
      title: "Enroll Your Clinic",
      description: "Start a new application to join our network of healthcare providers",
      link: "/",
      linkTitle: "Start New Application"
    },
    {
        title: "Resume Application",
        description: "Pick up where you left off and complete enrolling your clinic",
        link: "/",
        linkTitle: "Resume Application"
      },  
    ]
  return (
    <>
      <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-black ">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <img
                      src="/hero1.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img
                      src="/hero2.jpeg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <img
                      src="/hero3.jpeg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>

                    <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                        <div className="mt-10 lg:mt-0">
                            <span className="block mb-4 text-lg font-semibold text-gray-600">
                                Why Choose Us
                            </span>
                            <h2 className="mb-5 text-3xl font-bold text-gray-400 sm:text-[40px]/[48px]">
                                Make your customers happy by giving services.
                            </h2>
                            <p className="mb-5 text-base text-gray-400">
                                It is a long established fact that a reader will be distracted
                                by the readable content of a page when looking at its layout.
                                The point of using Lorem Ipsum is that it has a more-or-less.
                            </p>
                            <p className="mb-8 text-base text-gray-400 ">
                                A domain name is one of the first steps to establishing your
                                brand. Secure a consistent brand image with a domain name that
                                matches your business.
                            </p>
                            <div className="grid gap-6 md:grid-cols-2 sm:grid-cols-1">
                                {cards.map((card, i) => (
                                    <div key={i} className="bg-gray-900 p-4 rounded-lg shadow-2xl">
                                        <h3 className="text-2xl font-semibold text-white">{card.title}</h3>
                                        <p className="text-gray-400 text-xs py-3">{card.description}</p>
                                        <CustomButton
                                            title={card.linkTitle}
                                            href={card.link}
                                            className="bg-sky-300 hover:bg-indigo-600"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
