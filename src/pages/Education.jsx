import React from "react";

export default function Education() {
  const items = [
    {
      id: 1,
      school: "Universidad Tecmilenio",
      career: "Ingeniero en Computación Administrativa",
      year: "2022 - 2025",
    },
    {
      id: 2,
      school: "U.A.N.L. (F.I.M.E.)",
      career: "Técnico en Desarrollo Web",
      year: "2021 - 2022",
    },
    {
      id: 3,
      school: "U.A.N.L. (F.I.M.E.)",
      career: "Técnico Industrial en Electricidad y Electrónica Especializada",
      year: "2017 - 2019",
    },
  ];
  return (
    <div className="education-card-container">
      {items?.map((item) => (
        <div className="education-card" key={item.id}>
          <div className="education-card-header">
            <h2>{item.school}</h2>
          </div>
          <div className="education-card-body">
            <h4>{item.career}</h4>
          </div>
          <div className="education-card-footer">
            <span>{item.year}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
