import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NavBar({ items }) {
  const [activePath, setActivePath] = useState();
  const navigate = useNavigate();

  const getItemClass = (path) => {
    const classItems = "nav-item";
    const classItemsSelected = "nav-item-selected";
    return path === activePath ? classItemsSelected : classItems;
  };

  useEffect(() => {
    setActivePath(location.pathname);
  }, []);

  return (
    <div className="nav-bar">
      {items?.map((item) => (
        <div
          key={item.id}
          className={getItemClass(item.route)}
          onClick={() => {
            setActivePath(item.route);
            navigate(item.route);
          }}
        >
          <a>{item.title}</a>
        </div>
      ))}
    </div>
  );
}
