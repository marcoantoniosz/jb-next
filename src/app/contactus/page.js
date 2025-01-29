import React from "react";
import Link from "next/link";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ScrollTop from "../components/scrollTop";

import { FiPhone, FiHexagon, FiMapPin, FiMail } from "../assets/icons/vander";
export default function ContactUs() {
  return (
    <>
      <Navbar
        navClass="defaultscroll sticky"
        logolight={true}
        menuClass="navigation-menu nav-left nav-light"
      />
      <section
        className="bg-half-170 d-table w-100"
        style={{ backgroundImage: "url('/images/bg/04.jpg')" }}
      >
        <div className="bg-overlay bg-gradient-overlay-2"></div>
        <div className="container">
          <div className="row mt-5 justify-content-center">
            <div className="col-12">
              <div className="title-heading text-center">
                <p className="text-white-50 para-desc mx-auto mb-0">
                  alguma d&uacute;vida?
                </p>
                <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark">
                  Contate-nos
                </h5>
              </div>
            </div>
          </div>
          <div className="position-middle-bottom">
            <nav aria-label="breadcrumb" className="d-block">
              <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                <li className="breadcrumb-item">
                  <Link href="/">JB Imóveis</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Contato
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
      <div className="position-relative">
        <div className="shape overflow-hidden text-white">
          <svg
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
      <section className="section pb-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="p-4 rounded-3 shadow">
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Seu nome <span className="text-danger">*</span>
                        </label>
                        <input
                          name="name"
                          id="name"
                          type="text"
                          className="form-control"
                          placeholder="Nome :"
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Seu email <span className="text-danger">*</span>
                        </label>
                        <input
                          name="email"
                          id="email"
                          type="email"
                          className="form-control"
                          placeholder="Email :"
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="mb-3">
                        <label className="form-label">Assunto</label>
                        <input
                          name="subject"
                          id="subject"
                          className="form-control"
                          placeholder="Assunto :"
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Mensagem <span className="text-danger">*</span>
                        </label>
                        <textarea
                          name="comments"
                          id="comments"
                          rows="4"
                          className="form-control"
                          placeholder="Mensagem :"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="d-grid">
                        <button
                          type="submit"
                          id="submit"
                          name="send"
                          className="btn btn-primary"
                        >
                          Enviar mensagem
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-100 mt-60">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="position-relative features text-center mx-lg-4 px-md-1">
                <div className="feature-icon position-relative overflow-hidden d-flex justify-content-center">
                  <FiHexagon className="hexagon" />
                  <div className="position-absolute top-50 start-50 translate-middle">
                    <FiPhone className="fea icon-m-md text-primary" />
                  </div>
                </div>

                <div className="mt-4">
                  <h5 className="mb-3">Telefone</h5>
                  <Link href="tel:+55383222-1446" className="text-primary">
                    38 3222-1446
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="position-relative features text-center mx-lg-4 px-md-1">
                <div className="feature-icon position-relative overflow-hidden d-flex justify-content-center">
                  <FiHexagon className="hexagon" />
                  <div className="position-absolute top-50 start-50 translate-middle">
                    <FiMail className="fea icon-m-md text-primary" />
                  </div>
                </div>

                <div className="mt-4">
                  <h5 className="mb-3">Email</h5>
                  <Link
                    href="mailto:contact@example.com"
                    className="text-primary"
                  >
                    atendimento@jbimobiliaria.com.br
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="position-relative features text-center mx-lg-4 px-md-1">
                <div className="feature-icon position-relative overflow-hidden d-flex justify-content-center">
                  <FiHexagon className="hexagon" />
                  <div className="position-absolute top-50 start-50 translate-middle">
                    <FiMapPin className="fea icon-m-md text-primary" />
                  </div>
                </div>

                <div className="mt-4">
                  <h5 className="mb-3">Localização</h5>
                  <p className="text-muted">
                  Rua Santa Maria, 314, Todos os Santos <br />
                  Montes Claros - MG
                  </p>
                  <Link
                    href="https://maps.app.goo.gl/7gBRRPbHDGXhpNzk7"
                    target="_blank"
                    className="lightbox text-primary"
                    data-type="iframe"
                    data-group="iframe"
                    data-width="1024px"
                    data-height="576px"
                  >
                    Ver no Mapa
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid mt-100 mt-60">
          <div className="row">
            <div className="col-12 p-0">
              <div className="card map border-0">
                <div className="card-body p-0">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d955.2854617672514!2d-43.869778409965534!3d-16.719772782730757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xab54aaa65348d5%3A0x6b4ae4a55194bd1f!2sJB%20Im%C3%B3veis%20Empreendimentos%20Ltda.!5e0!3m2!1spt-BR!2sbr!4v1736516337226!5m2!1spt-BR!2sbr"
                    style={{ border: "0" }}
                    title="JB Imóveis"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <ScrollTop />
    </>
  );
}
