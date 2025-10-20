import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar({ title = "My App", links = [] }) {
  return (
    <aside className="sidebar" role="navigation" aria-label="Sidebar">
      <div className="sidebar-header">{title}</div>
      <nav className="nav">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => (isActive ? "active" : undefined)}
            end
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
      <div className="sidebar-footer">© {new Date().getFullYear()}</div>
    </aside>
  );
}

export default Sidebar;
