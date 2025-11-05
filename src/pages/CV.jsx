import "../../src/App.css";
import NavBar from "../components/NavBar";

export default function CV({ children }) {
  const navItems = [
    {
      id: 1,
      title: "Sobre mí",
      route: "/",
    },
    {
      id: 2,
      title: "Educación",
      route: "/education",
    },
    {
      id: 3,
      title: "Experiencia",
      route: "/experience",
    },
    {
      id: 4,
      title: "Proyectos",
      route: "/projects",
    },
  ];
  return (
    <div className="main-container">
      <div className="header">
        <h1>Sebastián Fuentes</h1>
        <p>
          <b>Ingeniero en Computación Administrativa</b>
        </p>
      </div>
      <NavBar items={navItems} />
      <br />
      {children}
    </div>
  );
}
