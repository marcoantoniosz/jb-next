import React from "react";
import Link from "next/link";
import Image from "next/image";

import Navbar from "./components/navbar";
import FeaturedProperties from "./components/featuredProperties";
import ClientOne from "./components/clientOne";
import AboutUs from "./components/about";
import GetInTuch from "./components/getInTuch";
import Footer from "./components/footer";

import SelectThree from "./components/select/selectThree";
import TextAnimation from "./components/textAnimation";
import ScrollTop from "./components/scrollTop";
import Categories from "./components/categories";

import PropertiesPage from "./components/p";

export default function Home() {
  return (
    <>
      <Navbar
        navClass="defaultscroll sticky"
        menuClass="navigation-menu nav-left"
      />

      {/* Hero Start */}
      <section className="position-relative mt-5 pt-4">
        <div className="container-fluid px-md-4 px-2 mt-2">
          <div
            className="bg-home-one d-table w-100 shadow rounded-3 overflow-hidden"
            id="home"
          >
            <div
              className="bg-overlay image-wrap "
              id="hero-images"
              style={{ backgroundImage: "url('/images/bg/03.jpg')" }}
            ></div>
            <div className="bg-overlay bg-black opacity-50"></div>

            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12">
                  <div className="title-heading">
                    <TextAnimation />
                    <p className="para-desc text-white title-dark mb-0">
                      Sua porta para bons negócios.
                      <br />
                      Especialista em vendas, aluguel e avaliação de imóveis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Start */}

      <section className="section pt-5">
        {/* Filters */}
        <div className="container">
          <SelectThree />
        </div>
        {/* Filters */}

        <div className="container mt-100 mt-60">
          <PropertiesPage />
        </div>

        {/* Section 2 - Categories */}
        <div className="container mt-100 mt-60">
          <Categories />
        </div>
        {/* Section 2 - Categories */}

        {/* Section 1 - Blog */}
        <div className="container mt-100 mt-60">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <div className="row g-3 align-items-center">
                <div className="col-lg-7 col-6">
                  <Image
                    src="/images/hero.jpg"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    className="img-fluid rounded-3"
                    alt="townter"
                    title="Townter"
                  />
                </div>

                <div className="col-lg-5 col-6">
                  <div className="row g-3">
                    <div className="col-lg-12 col-md-12">
                      <Image
                        src="/images/1.jpg"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                        className="img-fluid rounded-3"
                        alt="townter"
                        title="Townter"
                      />
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <Image
                        src="/images/logo-icon.png"
                        width={100}
                        height={100}
                        className="img-fluid"
                        alt="townter"
                        title="Townter"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="section-title ms-lg-5">
                <h6 className="text-primary fw-medium mb-2">
                  Aprenda o passo a passo.
                </h6>
                <h4 className="title mb-3">
                  Como fazer um contrato de locação?
                </h4>
                <p className="text-muted para-desc mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus at nisi sit amet erat pretium posuere.{" "}
                </p>

                <div className="mt-4">
                  <Link href="/aboutus" className="btn btn-pills btn-primary">
                    Leia <i className="mdi mdi-arrow-right align-middle"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Section 1 - Blog */}

        {/* Section 3 - HIW */}
        <div className="container mt-100 mt-60">
          <AboutUs />
        </div>
        {/* Section 3 - HIW */}

        {/* Section 5 - Feedbacks */}
        <div className="container mt-100 mt-60">
          <ClientOne />
        </div>
        {/* Section 5 - Feedbacks */}

        {/* Section 7 - Get In Touch */}
        <div className="container mt-100 mt-60">
          <GetInTuch />
        </div>
        {/* Section 7 - Get In Touch */}
      </section>
      <Footer />
      <ScrollTop />
    </>
  );
}
