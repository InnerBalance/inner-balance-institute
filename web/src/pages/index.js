import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import HeroFullWidth from "../components/Hero/HeroFullWidth";
import Treatments from "../components/Repeating/Treatments";
import WhyUs from "../components/Repeating/WhyUs";
import Testimonials from "../components/Repeating/Testimonials";
import CallToAction from "../components/Repeating/CTA";
import ButtonSolid from "../components/Button/ButtonSolid";
import ButtonUnderline from "../components/Button/ButtonUnderline";
import Analytics from "../components/Analytics/Analytics.jsx";

const Page = ({ data }) => {
  const heroFullWidthImages = [
    getImage(data.heroDesktop.childImageSharp.gatsbyImageData),
    {
      ...getImage(data.heroMobile.childImageSharp.gatsbyImageData),
      media: `(max-width: 767px)`,
    },
  ];

  const services = [
    {
      image: data.autoAccidents.childImageSharp.gatsbyImageData,
      heading: "Auto Accidents",
      text: "Let our experts in both treatment and insurance processing guide you back to wellness.",
      link: "/car-accident-chiropractor/",
    },
    {
      image: data.sciatica.childImageSharp.gatsbyImageData,
      heading: "Sciatica",
      text: "Are you suffering from sciatica or sciatic pain? Our chiropractic professionals can help.",
      link: "/sciatica-chiropractor/",
    },
    {
      image: data.backPain.childImageSharp.gatsbyImageData,
      heading: "Back Pain",
      text: "Treat back pain to improve stability and provide mobility for your everyday motions.",
      link: "/back-pain-chiropractor/",
    },
    {
      image: data.shoulderPain.childImageSharp.gatsbyImageData,
      heading: "Shoulder Pain",
      text: "Alleviate pain and discomfort with a tailored treatment plan for shoulder pain.",
      link: "/shoulder-pain-chiropractor/",
    },
    {
      image: data.spinalStenosis.childImageSharp.gatsbyImageData,
      heading: "Spinal Stenosis",
      text: "Find relief from spinal stenosis with non-surgical, highly-effective spinal decompression therapy.",
      link: "/spinal-stenosis-chiropractor/",
    },
    {
      image: data.herniatedBulgingDiscs.childImageSharp.gatsbyImageData,
      heading: "Herniated & Bulging Discs",
      text: "Our chiropractors can treat herniated and bulging discs with safe and natural spinal decompression.",
      link: "/herniated-bulging-discs-chiropractor/",
    },
  ];

  return (
    <Layout headerStyle="overlap-hero" headerLinkColor="white">
      <SearchEngineOptimization
        title="Best Chiropractor San Diego | Inner Balance Institute"
        description="Choose Inner Balance Institute for treatment from a top chiropractor voted best in San Diego. We've been serving the San Diego community since 1997."
        openGraphImage={data.openGraphImage.publicURL}
        twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />
     <Analytics />
      <HeroFullWidth
        backgroundImages={heroFullWidthImages}
        backgroundPosition="50% 25%"
        padding="pt-72 md:pt-80 pb-8 md:pb-52"
        textAlignment="text-center md:text-left"
        textMaxWidth=""
        className="rounded-b-5xl md:rounded-b-8xl overflow-hidden"
      >
        <p className="text-mobile-7xl md:text-7xl font-heading font-bold uppercase text-white mb-3 md:mb-4">
          San Diego Chiropractor
        </p>
        <p className="md:text-3xl font-body font-semibold md:font-normal text-white mb-5 md:mb-8">
          Our award-winning clinic will bring your body back into balance.
        </p>
        <ButtonSolid
          as="button"
          modal="modal-contact"
          text="Get Started"
          className="w-full md:w-auto"
        />
      </HeroFullWidth>

      <section className="bg-white pt-8 md:pt-8 mb-12 md:mb-20">
        <div className="container">
          <div className="grid md:grid-cols-2 items-center gap-y-10 md:gap-x-8 lg:gap-x-12">
            <div className="order-2 md:order-1">
              <GatsbyImage
                image={data.intro.childImageSharp.gatsbyImageData}
                alt="Voted Best Chiropractor in San Diego, CA"
              />
            </div>
            <div className="order-1 md:order-2">
              <h1>
                Voted Best Chiropractor in{" "}
                <span className="whitespace-nowrap">San Diego</span>, CA
              </h1>
              <p className="text-primary-900 md:text-lg mb-0">
                Welcome to Inner Balance Institute. We’ve been providing
                chiropractic care to the San Diego community since 1997 and we
                are committed to the health of our patients! Our talented team
                is here to help, whether it’s for personal injuries, spinal
                decompression, or to support your overall health.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-20 md:mb-32">
        <div className="container">
          <header className="mb-12 md:mb-16 max-w-2xl">
            <h2>Injuries We Treat</h2>
            <p className="md:text-lg">
              At Inner Balance Institute, our chiropractors treat a variety of
              injuries and help prevent them. Here’s what we treat using
              non-invasive and effective techniques.
            </p>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-10 md:gap-y-14 md:gap-x-6 lg:gap-x-10">
            {services.map((service, i) => {
              return (
                <div className="group relative" key={i}>
                  <div className="relative mb-5">
                    <GatsbyImage
                      image={service.image}
                      alt={service.heading}
                      className="w-full"
                    />
                    <div className="absolute w-full h-full left-0 top-0 bg-primary-300/50 opacity-0 md:group-hover:opacity-100 transition-all duration-300 ease-linear"></div>
                  </div>
                  <h3 className="text-mobile-3xl md:text-3xl mb-4">
                    {service.heading}
                  </h3>
                  <p className="text-lg mb-0">{service.text}</p>
                  <AniLink fade to={service.link}>
                    <span className="absolute top-0 left-0 h-full w-full z-10"></span>
                  </AniLink>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Treatments />
      <WhyUs />
      <Testimonials />

      <section className="bg-white pt-8 md:pt-8 mb-20 md:mb-20">
        <div className="container">
          <div className="grid md:grid-cols-2 items-center gap-y-4 md:gap-x-10s lg:gap-x-20">
            <div>
              <h2>Your Partners in Wellness</h2>
              <p className="md:text-lg">
                At Inner Balance Institute, we’re partners on your journey back
                to wellness. Our goal is to relieve your pain, stress, and
                worries. Our approach is to educate you every step of the way
                through your chiropractic care with customized core stretching
                and strengthening exercises designed for your individual needs
                and nutritional guidance to improve vitality and energy.
              </p>
              <ButtonUnderline href="/about/" text="Learn More" />
            </div>
            <div>
              <GatsbyImage
                image={data.partners.childImageSharp.gatsbyImageData}
                alt="Voted Best Chiropractor in San Diego, CA"
              />
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </Layout>
  );
};

export const query = graphql`
  {
    openGraphImage: file(
      relativePath: { eq: "open-graph/facebook/Homepage.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Homepage.jpg" }
    ) {
      publicURL
    }
    heroDesktop: file(relativePath: { eq: "home/1.0 Hero Desktop.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    heroMobile: file(relativePath: { eq: "home/1.0 Hero Mobile.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    intro: file(relativePath: { eq: "home/2.0 Home - collage - new.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 534)
      }
    }
    autoAccidents: file(
      relativePath: { eq: "home/3.0 Home - Auto Accident.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 373)
      }
    }
    sciatica: file(relativePath: { eq: "home/3.2 Home - Sciatica.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 373)
      }
    }
    backPain: file(relativePath: { eq: "home/3.2 Home - Back Pain.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 373)
      }
    }
    shoulderPain: file(
      relativePath: { eq: "home/3.3 Home - Shoulder Pain.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 373)
      }
    }
    spinalStenosis: file(
      relativePath: { eq: "home/3.4 Home - Spinal stenosis.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 373)
      }
    }
    herniatedBulgingDiscs: file(
      relativePath: { eq: "home/3.5 Home - Hernieted and Bulging Disc.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 373)
      }
    }
    partners: file(relativePath: { eq: "home/4.0 Home - Wellness.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 607)
      }
    }
  }
`;
export default Page;
