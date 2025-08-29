"use client";

import SectionHeading from "@/app/components/heading/SectionHeading";
import { cormorant } from "@/font";

export default function DeaneriesSection() {
  const deaneries = [
    {
      name: "Katsina Deanery",
      parishes: [
        "St. Joseph’s Parish, Shagari Low cost, Katsina",
        "St. Joseph’s Parish, Jibia",
        "St. Jacob’s Catholic Chaplaincy, Army Barracks, Katsina",
        " St. Martin’s Cathedral, Katsina",
        "St. Gabriel’s Parish, Daura",
        "St. James’ Dandagoro, Katsina",
        "St. Mary’s Parish, Dutsinma",
      ],
    },
    {
      name: "Funtua Deanery",
      parishes: [
        "St Paul’s Pastoral Area, Tafoki",
        "St. Thomas Aquinas Catholic Chaplaincy, Federal Polytechnic Kaura Namoda",
        "St. Theresa’s Parish, Funtua",
        "St. John of the Cross Parish, Gidan Kurma",
        "St. Joseph’s Parish Gidan Maichibi",
        "St. Peter’s Parish, Kaura Namoda",
        "St. Mary’s Parish, Gidan Korau",
        "Our Lady of Perpetual Help, Bakori",
        "Holy Cross Parish, Dandume",
      ],
    },
    {
      name: "Malumfashi Deanery",
      parishes: [
        "St. Jerome’s Parish, GidanYawa",
        "St. Patrick’s Church, Gidan Maikambu",
        "St. Joseph’s Parish,  Layin Minista",
        "St. Vincent Ferrer Church, Malumfashi",
        "St. Patrick’s Parish, Gamzago",
        " St. John Bosco Parish,  Malamawa",
        "  St. Anthony’s Parish, Gidan Bala",
        "St. Patrick's Parish, Sandamu",
      ],
    },
  ];
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Our Structure"
          subtitle="The Diocese of Katsina is divided into pastoral deaneries for
            effective evangelization and administration."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deaneries.map((deanery, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-6 rounded shadow-sm hover:cursor-pointer hover:shadow-2xl"
            >
              <h3
                className={`${cormorant.className} text-2xl font-semibold text-[#228B22] mb-4`}
              >
                {deanery.name}
              </h3>
              <ul className="space-y-2 text-gray-700 list-disc list-inside">
                {deanery.parishes.map((parish, i) => (
                  <li key={i}>{parish}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
