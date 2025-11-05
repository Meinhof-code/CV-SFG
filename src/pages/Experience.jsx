// Experience.jsx (fix: perspective + sin translate genérico)
import { useEffect, useMemo, useRef, useState } from "react";
import anime from "animejs/lib/anime.es.js";

export default function Experience() {
  const [i, setI] = useState(0);

  const cardRef = useRef(null);
  const shortsRef = useRef(null);
  const listRef = useRef(null);
  const prevBtnRef = useRef(null);
  const nextBtnRef = useRef(null);

  const items = useMemo(
    () => [
      {
        id: 1,
        role: "Analista de Sistemas",
        company: "Villacero - Torre Valle",
        date: "Dic 2023 - Act.",
        experiencie: [
          {
            id: 100,
            bullet: `Desarrollo de aplicaciones para distintas plataformas (web,
              escritorio y móvil), con el fin de optimizar procesos financieros,
              reduciendo tiempos al mínimo en la mayoría de los casos.`,
          },
          {
            id: 101,
            bullet: `Creación y optimización de reportes financieros para facilitar la
              toma de decisiones basadas en datos, cada reporte está ajustado
              dependiendo al giro del negocio.`,
          },
          {
            id: 102,
            bullet: `Administración, mantenimiento y soporte a usuarios de SAP Business One y SQL Server.`,
          },
          {
            id: 103,
            bullet: `Generación de ahorros al utilizar la DI API de SAP Business One y crear aplicaciones que integran la facturación CFDI 4.0 y SAP`,
          },
        ],
      },
      {
        id: 2,
        role: "Practicante Desarrollo",
        company: "Villacero - Torre Ocampo",
        date: "Jun 2013 – Dic 2023",
        experiencie: [
          {
            id: 200,
            bullet: `Soporte y actualización de sistemas de gestión de calidad de plantas industriales.`,
          },
          {
            id: 201,
            bullet: `Mantenimiento de servidores virtuales asegurando su correcto funcionamiento en producción.`,
          },
          {
            id: 202,
            bullet: `Desarrollo de aplicaciones web y Power Apps.`,
          },
          {
            id: 203,
            bullet: `Mantenimiento, actualización y soporte de Lotus.`,
          },
        ],
      },
      {
        id: 3,
        role: "Campus Intern",
        company: "Universidad Tecmilenio",
        date: "Ene 2023 – Abr 2023",
        experiencie: [
          {
            id: 300,
            bullet: `Gestión de activos.`,
          },
          {
            id: 301,
            bullet: `Manejo de reportes.`,
          },
          {
            id: 302,
            bullet: `Soporte de Windows y MacOS a usuarios.`,
          },
          {
            id: 303,
            bullet: `Documentación de procesos.`,
          },
        ],
      },
    ],
    []
  );

  const prev = () => setI((x) => Math.max(0, x - 1));
  const next = () => setI((x) => Math.min(items.length - 1, x + 1));

  const key = useMemo(() => items[i]?.id ?? i, [i, items]);

  useEffect(() => {
    const card = cardRef.current;
    const shorts = shortsRef.current;
    const list = listRef.current;
    if (!card || !shorts || !list) return;

    anime.remove([
      card,
      shorts.querySelectorAll("h1,h2,h3"),
      list.querySelectorAll("li"),
    ]);

    // ⬅️ FIX: usar 'perspective' (no 'transformPerspective')
    anime.set(card, {
      opacity: 0,
      rotateX: -8,
      translateY: 12,
      perspective: 900,
      transformOrigin: "50% 80%",
    });

    anime.set(shorts.querySelectorAll("h1,h2,h3"), {
      opacity: 0,
      translateY: 10,
    });
    anime.set(list.querySelectorAll("li"), {
      opacity: 0,
      translateY: 8,
      scale: 0.98,
    });

    const tl = anime.timeline({ easing: "easeOutQuad" });

    tl.add({
      targets: card,
      opacity: [0, 1],
      rotateX: [-8, 0],
      translateY: [12, 0],
      duration: 420,
    })
      .add(
        {
          targets: shorts.querySelectorAll("h1,h2,h3"),
          opacity: [0, 1],
          translateY: [10, 0],
          delay: anime.stagger(60),
          duration: 380,
        },
        "-=150"
      )
      .add(
        {
          targets: list.querySelectorAll("li"),
          opacity: [0, 1],
          translateY: [8, 0],
          scale: [0.98, 1],
          delay: anime.stagger(60),
          duration: 360,
        },
        "-=200"
      );
  }, [key]);

  const pulseBtn = (ref) => {
    const btn = ref.current;
    if (!btn) return;
    anime.remove(btn);
    anime({
      targets: btn,
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

  if (!items.length) return null;

  return (
    <div className="regular-container">
      <div className="experience-card" ref={cardRef} key={key}>
        <div className="experience-card-shorts" ref={shortsRef}>
          <h1 style={{ color: "#2979ff" }}>{items[i].role}</h1>
          <h2>{items[i].company}</h2>
          <h3>{items[i].date}</h3>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid black",
            background: "black",
          }}
        ></div>
        <ul className="experience-card-content" ref={listRef}>
          {items[i].experiencie.map((exp) => (
            <li key={exp.id}>
              <p>{exp.bullet}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="controls">
        <button
          ref={prevBtnRef}
          onClick={() => {
            pulseBtn(prevBtnRef);
            prev();
          }}
          disabled={i === 0}
          aria-label="Anterior"
          className="controls-button"
        >
          {"<"}
        </button>

        <span>
          {i + 1} / {items.length}
        </span>

        <button
          ref={nextBtnRef}
          onClick={() => {
            pulseBtn(nextBtnRef);
            next();
          }}
          disabled={i === items.length - 1}
          aria-label="Siguiente"
          className="controls-button"
        >
          {">"}
        </button>
      </div>
    </div>
  );
}
