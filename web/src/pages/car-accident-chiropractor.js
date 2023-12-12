import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import Treatments from "../components/Repeating/Treatments";
import WhyUs from "../components/Repeating/WhyUs";
import Testimonials from "../components/Repeating/Testimonials";
import CallToAction from "../components/Repeating/CTA";
import RecentBlogPosts from "../components/Repeating/RecentBlogPosts";

const Page = ({ data }) => {
  const symptoms = [
    {
      text: "Headaches",
    },
    {
      text: "Stiffness",
    },
    {
      text: "Muscle tightness",
    },
    {
      text: "Pain between the shoulder blades",
    },
    {
      text: "Lower back pain",
    },
    {
      text: "Neck pain",
    },
    {
      text: "Shoulder pain",
    },
    {
      text: "Arm pain",
    },
    {
      text: "Numbness",
    },
    {
      text: "Tingling in the hands or feet",
    },
  ];
  return (
    <Layout headerStyle="overlap" headerLinkColor="white">
      <SearchEngineOptimization
        title="Car Accident Chiropractor San Diego | Inner Balance"
        description="Need help recovering from a car accident injury, such as whiplash? We provide non-invasive treatment that promotes the body’s potential to heal itself."
        openGraphImage={data.openGraphImage.publicURL}
        twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <section className="bg-primary-100 rounded-b-4xl md:rounded-b-8xl md:pt-36 pb-8 md:pb-14">
        <div className="container">
          <div className="grid md:grid-cols-2 items-center gap-y-8 md:gap-x-10 lg:gap-x-20">
            <div>
              <GatsbyImage
                image={data.heroDesktop.childImageSharp.gatsbyImageData}
                alt="Car Accident Chiropractor"
                className="md:rounded-8xl -mx-4 md:mx-0"
              />
            </div>
            <div>
              <h1>Car Accident Chiropractor</h1>
              <p className="text-primary-900 md:text-lg mb-0">
                The average auto accident can age the human spine by 10 years.
                If you have recently been involved in a car accident or auto
                accident, you may be suffering from whiplash, and injuries
                should be taken seriously. Our car accident chiropractor in San
                Diego can help!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-16 md:pt-20 mb-20 md:mb-16">
        <div className="container">
          <div className="grid md:grid-cols-2 items-center gap-y-8 md:gap-x-10 lg:gap-x-20 relative">
            <div>
              <h2>Symptoms to Look Out For</h2>
              <p className="md:text-lg">
                Whiplash occurs when you’re in an auto accident, and your spine
                or neck gets whipped back and forth. Injuries can take days,
                weeks, or months before they manifest. Some warning signs that
                you may be suffering from whiplash include:
              </p>
              <ul className="flex flex-col space-y-2">
                {symptoms.map((symptom, i) => {
                  return (
                    <li
                      key={i}
                      className="text-lg flex items-start before:min-w-[.75rem] before:h-3 before:bg-primary-300 before:rounded-full before:mr-2 before:mt-1.5"
                    >
                      {symptom.text}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="pt-4 md:pt-10 md:pb-6 md:h-[677px] relative">
              <div className="bg-gray-50 rounded-l-8xl h-full w-100vw absolute top-0 z-20"></div>
              <GatsbyImage
                image={data.symptoms.childImageSharp.gatsbyImageData}
                alt="Symptoms to Look Out For"
                className="z-20 pl-0 md:mx-8 relative -right-6 md:w-full md:h-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-b-4xl md:rounded-b-8xl mb-20 md:mb-32">
        <div className="container">
          <div className="grid md:grid-cols-2 items-center gap-y-12 md:gap-x-10 lg:gap-x-20">
            <div className="order-2 md:order-1">
              <GatsbyImage
                image={data.treatment.childImageSharp.gatsbyImageData}
                alt="Treatment"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2>Treatment For Auto Accidents</h2>
              <p className="md:text-lg">
                Our goal at Inner Balance Institute is to provide treatment that
                will promote the body’s potential to heal itself following an
                auto accident. Chiropractic care is non-invasive, non-surgical,
                drug-free and suitable for almost everyone. Spinal Decompression
                Therapy is also a non-invasive treatment that is offered at our
                facility.
              </p>
              <p className="md:text-lg">
                At Inner Balance Institute, we provide a safe and natural
                approach to your health care and provide solutions to your
                challenges. We use a number of techniques to build core strength
                and increase flexibility. These include chiropractic care,
                spinal decompression therapy, electric stimulation, and massage
                to reduce your pain and suffering naturally.
              </p>
              <p className="md:text-lg">
                We take most patients on a lien basis! This means there are no
                out-of-pocket expenses to you for your auto accident care.
                Schedule an appointment with one of Inner Balance Institute’s
                experienced chiropractors for a comprehensive examination. We
                then establish goals with you to determine the right treatment
                plan. For more than 20 years, Inner Balance has successfully
                treated personal injury and sciatic pain while helping our
                patients recover faster, better, and naturally.
              </p>
              <p className="md:text-lg mb-0">Se Habla Español!</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-b-4xl md:rounded-b-8xl mb-20 md:mb-32">
        <div className="container">
          <div className="grid md:grid-cols-12 gap-y-3 md:gap-x-10 lg:gap-x-20">
            <div className="md:col-start-1 md:col-span-4">
              <h2>How It Works</h2>
            </div>
            <div className="md:col-end-13 md:col-span-8 flex flex-col space-y-10">
              <div className="flex items-start space-x-10">
                <img src={data.step01.publicURL} alt="Step 01" />
                <div>
                  <h3 className="text-mobile-3xl md:text-3xl">Schedule</h3>
                  <p className="md:text-lg mb-0">
                    Give us a call or fill out our online form to schedule an
                    initial consultation. Once your appointment is confirmed,
                    we’ll send you your intake forms so you can fill them out
                    ahead of time for faster check-in.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-7">
                <img src={data.step02.publicURL} alt="Step 02" />
                <div>
                  <h3 className="text-mobile-3xl md:text-3xl">Show Up</h3>
                  <p className="md:text-lg mb-0">
                    Arrive for your exam with our board-certified doctor of
                    chiropractic. This may include digital x-rays, surface
                    electromyography and thermography, functional posture
                    assessment, and neurological and orthopedic tests.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-7">
                <img src={data.step03.publicURL} alt="Step 03" />
                <div>
                  <h3 className="text-mobile-3xl md:text-3xl">
                    Treatment Plan
                  </h3>
                  <p className="md:text-lg mb-0">
                    We set goals and expectations for your care plan. We provide
                    patients the resources they need to treat or prevent injury,
                    get aligned, and improve their quality of life!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Treatments />
      <Testimonials />
      <WhyUs />
      <CallToAction className="mb-16 md:mb-18" />
      <RecentBlogPosts className="mb-20 md:mb-22" />
    </Layout>
  );
};

export const query = graphql`
  {
    openGraphImage: file(
      relativePath: { eq: "open-graph/facebook/Auto Accidents.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Auto Accidents.jpg" }
    ) {
      publicURL
    }
    heroDesktop: file(
      relativePath: { eq: "auto-accidents/1.0 hero - Auto.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 570)
      }
    }
    symptoms: file(
      relativePath: { eq: "auto-accidents/2.0 symptoms Collage.png" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 618)
      }
    }
    treatment: file(relativePath: { eq: "auto-accidents/3.0 Treatment.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    step01: file(relativePath: { eq: "global/step-01.svg" }) {
      publicURL
    }
    step02: file(relativePath: { eq: "global/step-02.svg" }) {
      publicURL
    }
    step03: file(relativePath: { eq: "global/step-03.svg" }) {
      publicURL
    }
  }
`;
export default Page;
