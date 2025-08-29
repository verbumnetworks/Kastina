"use client";

import PageBanner from "../../components/banner/PageBanner";
import HistorySection from "./History";
import DeaneriesSection from "./Parishes";
import PoliciesSection from "./PoliciesSection";
import AboutBishopPreview from "./AboutBishop";
import CoatOfArmsSection from "./CoatOfArm";

// const ministries = [
//   {
//     title: 'Governing Body Of The Diocese',
//     img: '/assets/popeleo.jpeg', // update with your actual path
//     link: '/people',
//   },
//   {
//     title: 'OTHER CHURCHES (RITES)',
//     img: '/assets/popeleo2.jpeg', // update with your actual path
//     link: '/other-rites',
//   },
//   {
//     title: 'VISITING CLERGY',
//     img: '/assets/popeleo3.jpeg', // update with your actual path
//     link: '/visiting-clergy',
//   },
// ];

export default function page() {
  return (
    <section>
      <PageBanner
        title="About Us"
        subtitle="Learn more about our mission and values"
      />
      <HistorySection />
      <AboutBishopPreview />
      <CoatOfArmsSection />
      <DeaneriesSection />
      <PoliciesSection />
    </section>
  );
}
