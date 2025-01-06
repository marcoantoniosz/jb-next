"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function TextAnimation() {
  return (
    <h4 className="heading fw-bold text-white title-dark mb-3">
      Te ajudaremos a
      <br />
      <TypeAnimation
        sequence={["comprar", 1000, "alugar", 1000, "vender", 1000]}
        wrapper="span"
        speed={5}
        repeat={Infinity}
        className="typewrite text-primary ms-2"
        cursor={false}
      />{" "}
      a casa dos sonhos
    </h4>
  );
}
