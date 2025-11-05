import iconExcel from "../assets/icon_excel.svg";
import iconVB from "../assets/icon_vb.svg";
import iconSAP from "../assets/icon_sap.svg";
import iconSQL from "../assets/icon_sql.svg";
import iconDotNet from "../assets/icon_dotnet.svg";
import iconCSharp from "../assets/icon_csharp.svg";
import iconReact from "../assets/icon_react.svg";
import iconAntDesign from "../assets/icon_antdesign.svg";
import iconJs from "../assets/icon_js.svg";
import iconDiploma from "../assets/icon_diploma.svg";
import iconSat from "../assets/icon_sat.svg";
import iconFigma from "../assets/icon_figma.svg";
import iconIis from "../assets/icon_iis.svg";
import iconNode from "../assets/icon_node.svg";

import anime from "animejs/lib/anime.es.js";
import { useState, useEffect, useMemo } from "react";

export default function Projects() {
  /* ==== DATA ==== */
  const items = useMemo(
    () => [
      {
        id: 1,
        title: "Implementación Hyperion",
        desc: "Se implementó la herramienta de Oracle para facilitar procesos de contabilidad",
        logros: [
          {
            id: 101,
            title: "Mapeo Hyperion",
            desc: "Creé un excel que relacionaba automáticamente las cuentas de SAP con Hyperion, lo cual ahorró horas de trabajo.",
            techs: [
              {
                id: 1001,
                title: "Excel",
                image: iconExcel,
              },
              {
                id: 1002,
                title: "Macros (Visual Basic)",
                image: iconVB,
              },
              {
                id: 1003,
                title: "DI API (SAP)",
                image: iconSAP,
              },
              {
                id: 1004,
                title: "SQL Query",
                image: iconSQL,
              },
            ],
          },
          {
            id: 102,
            title: "Generación Balanzas",
            desc: "Creé una aplicación que genera una balanza para alimentar al sistema Oracle HFM",
            techs: [
              {
                id: 1011,
                title: ".NET Framework",
                image: iconDotNet,
              },
              {
                id: 1012,
                title: "Windows Forms",
                image: iconCSharp,
              },
              {
                id: 1013,
                title: "DI API (SAP)",
                image: iconSAP,
              },
              {
                id: 1014,
                title: "SQL Query",
                image: iconSQL,
              },
            ],
          },
        ],
      },
      {
        id: 2,
        title: "Solicitud de Pago",
        desc: "Recodificación completa de un sistema legacy.",
        logros: [
          {
            id: 201,
            title: "Desarrollo Frontend",
            desc: "Diseñé, desarrollé y desplegué en producción toda la parte del cliente.",
            techs: [
              {
                id: 2001,
                title: "React",
                image: iconReact,
              },
              {
                id: 2002,
                title: "Ant Design",
                image: iconAntDesign,
              },
              {
                id: 2003,
                title: "IIS",
                image: iconIis,
              },
              {
                id: 2004,
                title: "Figma",
                image: iconFigma,
              },
            ],
          },
          {
            id: 202,
            title: "Desarrollo Backend",
            desc: "Desarrollé y desplegué la parte del servidor",
            techs: [
              {
                id: 2011,
                title: ".NET Framework",
                image: iconDotNet,
              },
              {
                id: 2012,
                title: "DI API (SAP)",
                image: iconSAP,
              },
              {
                id: 2013,
                title: "Facturación CFDI",
                image: iconSat,
              },

              {
                id: 2014,
                title: "SQL Query",
                image: iconSQL,
              },
            ],
          },
          {
            id: 203,
            title: "Premio a la Innovación",
            desc: "Con este proyecto recibí un premio por parte del Programa de Innovación Continua, ya que no solo se optimizaron procesos, sino que se generaron ahorros por más de $200,000 pesos.",
            techs: [
              {
                id: 2111,
                title: "Reconocimiento",
                image: iconDiploma,
              },
            ],
          },
        ],
      },
      {
        id: 3,
        title: "Control de Documentos",
        desc: "Desarrollé una aplicación para solicitud y creación de contratos.",
        logros: [
          {
            id: 301,
            title: "Desarrollo Frontend",
            desc: "Diseñé, desarrollé y desplegué en producción toda la parte del cliente.",
            techs: [
              {
                id: 3001,
                title: "React",
                image: iconReact,
              },
              {
                id: 3002,
                title: "Ant Design",
                image: iconAntDesign,
              },
              {
                id: 3003,
                title: "IIS",
                image: iconIis,
              },
              {
                id: 3004,
                title: "Figma",
                image: iconFigma,
              },
            ],
          },
          {
            id: 302,
            title: "Desarrollo Backend",
            desc: "Diseñé, desarrollé y desplegué la parte del servidor",
            techs: [
              {
                id: 3011,
                title: "Node JS",
                image: iconNode,
              },
              {
                id: 3012,
                title: "IIS",
                image: iconIis,
              },
              {
                id: 3013,
                title: "JavaScript",
                image: iconJs,
              },

              {
                id: 3014,
                title: "SQL Query",
                image: iconSQL,
              },
            ],
          },
        ],
      },
    ],
    []
  );

  /* ==== PAGINACIÓN DE PROYECTOS ==== */
  const [page, setPage] = useState(0); // página actual (0-based)
  const pageSize = 1; // 1 proyecto por página
  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));

  const visibleItems = useMemo(() => {
    const start = page * pageSize;
    return items.slice(start, start + pageSize);
  }, [items, page, pageSize]);

  const prevPage = () => setPage((p) => Math.max(0, p - 1));
  const nextPage = () => setPage((p) => Math.min(totalPages - 1, p + 1));
  const goToPage = (p) =>
    setPage(() => Math.min(Math.max(0, p), totalPages - 1));

  /* ==== ÍNDICE DE LOGRO POR PROYECTO ==== */
  const [idx, setIdx] = useState(() => items.map(() => 0));

  // Si cambia items, mantén índices en rango
  useEffect(() => {
    setIdx((prev) =>
      items.map((it, k) =>
        Math.min(prev[k] ?? 0, (it?.logros?.length ?? 1) - 1)
      )
    );
  }, [items]);

  /* ==== ANIMACIÓN MICRO-INTERACCIÓN BOTONES ==== */
  const pulseBtn = (el) => {
    if (!el) return;
    anime.remove(el);
    anime({
      targets: el,
      scale: [
        { value: 0.96, duration: 90, easing: "easeOutQuad" },
        { value: 1, duration: 120 },
      ],
      translateY: [
        { value: -2, duration: 90 },
        { value: 0, duration: 120 },
      ],
      boxShadow: [
        { value: "0 10px 24px rgba(0,0,0,.12)", duration: 90 },
        { value: "0 4px 12px rgba(0,0,0,.10)", duration: 120 },
      ],
    });
  };

  /* ==== NAVEGACIÓN DE LOGROS POR PROYECTO ==== */
  const prevLogro = (k) =>
    setIdx((arr) => {
      const current = arr[k] ?? 0;
      const nextI = Math.max(0, current - 1);
      const copy = [...arr];
      copy[k] = nextI;
      return copy;
    });

  const nextLogro = (k) =>
    setIdx((arr) => {
      const len = items[k].logros.length;
      const current = arr[k] ?? 0;
      const nextI = Math.min(len - 1, current + 1);
      const copy = [...arr];
      copy[k] = nextI;
      return copy;
    });

  if (!items.length) return null;

  /* ==== RENDER ==== */
  return (
    <div className="projects">
      <div className="projects-control-general">
        <div
          className="project-controls"
          style={{
            display: "flex",
            gap: 8,
            alignItems: "center",
            marginBottom: 12,
          }}
        >
          <button
            onClick={(e) => (pulseBtn(e.currentTarget), prevPage())}
            disabled={page === 0}
            className="controls-button"
          >
            {"<"}
          </button>
          <span>
            Página {page + 1} / {totalPages}
          </span>
          <button
            onClick={(e) => (pulseBtn(e.currentTarget), nextPage())}
            disabled={page === totalPages - 1}
            className="controls-button"
          >
            {">"}
          </button>
        </div>
        {/* Botones para saltar a OTROS proyectos (excluye el actual) */}
        <div
          className="projects-other-buttons"
          style={{
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
            margin: "8px 0 16px",
          }}
        >
          {Array.from({ length: items.length }, (_, p) => p)
            .filter((p) => p !== page) // solo los otros proyectos
            .map((p) => (
              <button
                key={items[p].id ?? p}
                onClick={(e) => {
                  pulseBtn(e.currentTarget); // opcional
                  goToPage(p); // ← cambia al proyecto p
                }}
                aria-label={`Ver proyecto ${p + 1}`}
                className={`project-controls-button`}
              >
                {items[p].title || `Proyecto ${p + 1}`}
              </button>
            ))}
        </div>
      </div>

      {/* Proyectos visibles en esta página (pageSize = 1 → 1 proyecto) */}
      {visibleItems.map((item, visIndex) => {
        // k: índice global del proyecto (no solo dentro del slice)
        const k = page * pageSize + visIndex;
        const i = idx[k] ?? 0; // logro activo de este proyecto
        const len = item.logros.length;
        const activo = item.logros[i];

        return (
          <div key={item.id} className="project-card">
            <div className="project-card-header">
              <h1>{item.title}</h1>
            </div>

            <p>
              {item.desc}
              <br />
              <br />
              <b>Logros en el proyecto:</b>
            </p>

            <div className="project-highlight-card-container">
              {/* Tarjeta del logro activo */}
              <div key={activo.id} className="project-highlight-card">
                <div className="project-highlight-card-header">
                  <h1>{activo.title}</h1>
                </div>
                <div className="project-highlight-card-body">
                  <p>{activo.desc}</p>
                </div>
                <div className="project-chip-container">
                  {activo.techs.map((tech) => (
                    <div key={tech.id} className="project-tech-chip">
                      <img src={tech.image} className="project-tech-icon" />
                      <p>{tech.title}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Controles del carrusel de logros */}
              <div>
                <div
                  className="project-controls"
                  style={{
                    display: "flex",
                    gap: 8,
                    alignItems: "center",
                    marginTop: 8,
                  }}
                >
                  <button
                    onClick={(e) => {
                      pulseBtn(e.currentTarget);
                      prevLogro(k);
                    }}
                    disabled={i === 0}
                    aria-label="Anterior"
                    className="controls-button"
                  >
                    {"<"}
                  </button>

                  <span>
                    {i + 1} / {len}
                  </span>

                  <button
                    onClick={(e) => {
                      pulseBtn(e.currentTarget);
                      nextLogro(k);
                    }}
                    disabled={i === len - 1}
                    aria-label="Siguiente"
                    className="controls-button"
                  >
                    {">"}
                  </button>
                </div>

                <div
                  className="project-button-container"
                  style={{
                    display: "flex",
                    gap: 8,
                    flexWrap: "wrap",
                    marginTop: 8,
                  }}
                >
                  {Array.from({ length: len }, (_, j) => j)
                    .filter((j) => j !== i) // solo los otros logros
                    .map((j) => (
                      <button
                        key={item.logros[j].id ?? j}
                        onClick={(e) => {
                          pulseBtn(e.currentTarget);
                          setIdx((arr) => {
                            const copy = [...arr];
                            copy[k] = j;
                            return copy;
                          });
                        }}
                        aria-label={`Ver logro ${j + 1}`}
                        className={`project-controls-button ${
                          j === i ? "active" : ""
                        }`}
                      >
                        {item.logros[j].title || `Logro ${j + 1}`}
                      </button>
                    ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {totalPages > 1 && (
        <div
          className="projects-pager-numbers"
          style={{
            display: "flex",
            gap: 6,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 12,
          }}
        ></div>
      )}
    </div>
  );
}
