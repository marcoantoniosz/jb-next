"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiHome, FiHeart, FiCamera } from "react-icons/fi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./c.css";


const sliderSettings = {
  dots: true,
  accessibility: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true, // Add arrows
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true, // Add arrows for other breakpoints if needed
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true, // Add arrows for breakpoints
      },
    },
  ],
};

export default function PropertiesPage() {
  const [properties, setProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    async function fetchData() {
      
    }
    fetchData();
  }, []);

  const featuredProperties = properties.slice(0, 12);

  return (
    <div>
      <h1>Imóveis em destaque</h1>
      {featuredProperties.length > 0 ? (
        <div>
          <Slider {...sliderSettings}>
            {featuredProperties.map((item, index) => (
              <div key={index} className="carousel-item">
                <div className="card property border-0 shadow position-relative overflow-hidden rounded-3">
                  <div className="property-image position-relative overflow-hidden shadow">
                    <Image
                      src={
                        Array.isArray(item.images) && item.images.length > 0
                          ? `${item.images[0]}`
                          : "/default.jpg"
                      }
                      width={400} // Set a consistent width
                      height={200} // Set a consistent height
                      style={{ objectFit: "cover" }} // Ensure consistent object fit
                      alt=""
                    />

                    <ul className="list-unstyled property-icon">
                      <li>
                        <Link
                          href="#"
                          className="btn btn-sm btn-icon btn-pills btn-primary"
                        >
                          <FiHome className="icons" />
                        </Link>
                      </li>
                      <li className="mt-1">
                        <Link
                          href="#"
                          className="btn btn-sm btn-icon btn-pills btn-primary"
                        >
                          <FiHeart className="icons" />
                        </Link>
                      </li>
                      <li className="mt-1">
                        <Link
                          href="#"
                          className="btn btn-sm btn-icon btn-pills btn-primary"
                        >
                          <FiCamera className="icons" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body content p-4">
                    <Link
                      href={`/property-detail/${item.ImovelId}`}
                      className="title fs-5 property-title text-dark fw-medium"
                    >
                      {item.TipoImovel} no bairro {item.BairroDsc1}
                    </Link>
                    <ul className="list-unstyled mt-3 py-3 border-top border-bottom d-flex align-items-center justify-content-between">
                      <li className="d-flex align-items-center me-3">
                        <i className="mdi mdi-arrow-expand-all fs-5 me-2 text-primary"></i>
                        <span className="text-muted">
                          {item.AreaRealPrivativa}m²
                        </span>
                      </li>
                      <li className="d-flex align-items-center me-3">
                        <i className="mdi mdi-bed fs-5 me-2 text-primary"></i>
                        <span className="text-muted">{item.Quartos}</span>
                      </li>
                      <li className="d-flex align-items-center">
                        <i className="mdi mdi-shower fs-5 me-2 text-primary"></i>
                        <span className="text-muted">{item.Banhos}</span>
                      </li>
                    </ul>
                    <ul className="list-unstyled d-flex justify-content-between mt-2 mb-0">
                      <li className="list-inline-item mb-0">
                        <span className="text-muted">Preço</span>
                        <p className="fw-medium mb-0">
                          R${item.ValorImovel.toLocaleString("pt-BR")}
                        </p>
                      </li>
                      <li className="list-inline-item mb-0 text-muted">
                        <span className="text-muted">ID</span>
                        <p className="fw-medium mb-0">{item.ImovelId}</p>
                      </li>
                      <li className="list-inline-item mb-0 text-muted">
                        <button className="btn btn-primary h-20">
                          Detalhes
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      ) : (
        <p>No properties available.</p>
      )}
    </div>
  );
}
