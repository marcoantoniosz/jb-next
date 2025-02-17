import React from "react";
import Link from "next/link";
import Image from "next/image";

import { propertyData } from "../data/data";
import {FiHome, FiHeart, FiCamera} from '../assets/icons/vander'

export default function PropertyTwo(){
    return(
        <>
            <div className="row justify-content-center">
                <div className="col">
                    <div className="section-title text-center mb-4 pb-2">
                        <h4 className="title mb-3">Imóveis em destaque</h4>
                    </div>
                </div>
            </div>

            <div className="row g-4 mt-0">
                {propertyData.slice(0,6).map((item, index) =>{
                    return(
                        <div className="col-lg-6 col-12" key={index}>
                            <div className="card property property-list border-0 shadow position-relative overflow-hidden rounded-3">
                                <div className="d-md-flex">
                                    <div className="property-image position-relative overflow-hidden shadow flex-md-shrink-0 rounded-3 m-2">
                                        <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid h-100 w-100" alt=""/>
                                        <ul className="list-unstyled property-icon">
                                            <li className=""><Link href="#" className="btn btn-sm btn-icon btn-pills btn-primary"><FiHome className="icons"/></Link></li>
                                            <li className="mt-1"><Link href="#" className="btn btn-sm btn-icon btn-pills btn-primary"><FiHeart className="icons"/></Link></li>
                                            <li className="mt-1"><Link href="#" className="btn btn-sm btn-icon btn-pills btn-primary"><FiCamera className="icons"/></Link></li>
                                        </ul>
                                    </div>
                                    <div className="card-body content p-3">
                                        <Link href={`/property-detail/${item.id}`} className="title fs-5 text-dark fw-medium">{item.title}</Link>

                                        <ul className="list-unstyled mt-3 py-3 border-top border-bottom d-flex align-items-center justify-content-between">
                                            <li className="d-flex align-items-center me-3">
                                                <i className="mdi mdi-arrow-expand-all fs-5 me-2 text-primary"></i>
                                                <span className="text-muted">8000sqf</span>
                                            </li>
            
                                            <li className="d-flex align-items-center me-3">
                                                <i className="mdi mdi-bed fs-5 me-2 text-primary"></i>
                                                <span className="text-muted">4 Beds</span>
                                            </li>
            
                                            <li className="d-flex align-items-center">
                                                <i className="mdi mdi-shower fs-5 me-2 text-primary"></i>
                                                <span className="text-muted">4 Baths</span>
                                            </li>
                                        </ul>
                                        <ul className="list-unstyled d-flex justify-content-between mt-2 mb-0">
                                            <li className="list-inline-item mb-0">
                                                <span className="text-muted">Price</span>
                                                <p className="fw-medium mb-0">$5000</p>
                                            </li>
                                            <li className="list-inline-item mb-0 text-muted">
                                                <span className="text-muted">Rating</span>
                                                <ul className="fw-medium text-warning list-unstyled mb-0">
                                                    <li className="list-inline-item mb-0"><i className="mdi mdi-star"></i></li>
                                                    <li className="list-inline-item mb-0"><i className="mdi mdi-star"></i></li>
                                                    <li className="list-inline-item mb-0"><i className="mdi mdi-star"></i></li>
                                                    <li className="list-inline-item mb-0"><i className="mdi mdi-star"></i></li>
                                                    <li className="list-inline-item mb-0"><i className="mdi mdi-star"></i></li>
                                                    <li className="list-inline-item mb-0 text-dark">5.0(30)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
                
                
                <div className="col-12 mt-4 pt-2">
                    <div className="text-center">
                        <Link href="/list" className="mt-3 fs-6 text-primary">Ver mais<i className="mdi mdi-arrow-right align-middle"></i></Link>
                    </div>
                </div>
            </div>
        </>
    )
}