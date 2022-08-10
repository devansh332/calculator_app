import Head from "next/head";
import Image from "next/image";
import React from "react";
import ContactUs from "../components/ContactUs";
import HomeWrapper from "../components/HomeWrapper";
import MainContent from "../components/MainContent";
import NavBar from "../components/NavBar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <HomeWrapper>
        <NavBar></NavBar>
        <MainContent></MainContent>
        <ContactUs></ContactUs>
      </HomeWrapper>
    </>
  );
}
