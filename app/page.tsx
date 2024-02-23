'use client'
import React from "react"
import Hero from "../components/hero"
import Tease from "../components/tease"
import Work from "../components/work"
import 'flowbite';
import About from "../components/about"


export default function Page() {
    return <div>
      <Hero/>
      <Tease/>
      <Work/>
      <About/>
    </div>
  }