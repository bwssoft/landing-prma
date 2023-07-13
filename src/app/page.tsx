"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TopBanner from "@/components/Banners/TopBanner";
import MiddleBanner from "@/components/Banners/MiddleBanner";
import Cards from "@/components/Section/Cards";
import BottomBanner from "@/components/Banners/BottomBanner";
import About from "@/components/About";
import Flashcards from "@/components/Flashcards";
import CarCards from "@/components/Section/CarCards";
import React from "react";
import PhoneBanner from "@/components/Banners/PhoneBanner";

export default function Home() {
  return (
    <>
      <Navbar />
      <TopBanner />
      <Cards />
      <About />
      <CarCards />
      <MiddleBanner />
      <PhoneBanner />
      <BottomBanner />

      <Footer />
    </>
  );
}
