import React, { Component } from "react";

import HtmlSvg from "./svg/HtmlSvg";
import CssSvg from "./svg/CssSvg";

class SVG {
  constructor(tech, svg) {
    this.tech = tech;
    this.svg = svg;
  }
}

export const HTML = [new SVG("HTML", <HtmlSvg />)];

export const CSS = [new SVG("CSS", <CssSvg />)];
