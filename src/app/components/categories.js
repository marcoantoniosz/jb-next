import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Categories(){

    let data = [
        {
            image:'/images/property/residential.jpg',
            name:'Centro',
            listings:'46 Listings'
        },
        {
            image:'/images/property/land.jpg',
            name:'Melo',
            listings:'124 Listings'
        },
        {
            image:'/images/property/commercial.jpg',
            name:'Edgar Pereira',
            listings:'265 Listings'
        },
        {
            image:'/images/property/industrial.jpg',
            name:'Ibituruna',
            listings:'452 Listings'
        },
        {
            image:'/images/property/investment.jpg',
            name:'Morada do sol',
            listings:'12 Listings'
        },
    ]
    return(
        <>
        <div className="row justify-content-center">
            <div className="col">
                <div className=" text-center section-title pb-2">
                    <h4 className="title">Bairros</h4>
                </div>
            </div>
        </div>

        <div className="row row-cols-lg-5 row-cols-md-3 row-cols-sm-2 row-cols-1 g-4 mt-0">
            {data.map((item, index) => {
                return(
                    <div className="col" key={index}>
                        <div className="categories position-relative overflow-hidden rounded-3 shadow">
                            <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>

                            <div className="p-3">
                                <Link href="" className="title text-dark fs-5 fw-medium">{item.name}</Link>
                                <p className="text-muted small mb-0">{item.listings}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
        </>
    )
}