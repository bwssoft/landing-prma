import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TopBanner from "@/components/Banners/TopBanner";
import Button from "@/components/Buttons/Button";
import MiddleBanner from "@/components/Banners/MiddleBanner";
import Card from "@/components/Card";
import Cards from "@/components/Section/Cards";
import BottomBanner from "@/components/Banners/BottomBanner";
import About from "@/components/About";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  return (
    <>
      <Navbar />
      <TopBanner />
      <Cards />
      <About />
      <MiddleBanner />
      <BottomBanner />

      <Footer />
    </>
  );
}
