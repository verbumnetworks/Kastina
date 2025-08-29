"use client";

import PageBanner from "../../components/banner/PageBanner";
import PiousOrganizationsSection from "../../components/organization/PiousOrganisationSection";

export default function OurPeoplePage() {
  return (
    <main>
      <PageBanner
        title="Societies & Organizations in the Diocese"
        subtitle="These organizations contribute immensely to the spiritual and social life of the Diocese"
        backgroundImage="/assets/pic27.jpg"
      />

      {/* Core Values Section */}
      <PiousOrganizationsSection />
    </main>
  );
}
