import { NavLink, Outlet } from "react-router-dom";
import "./AppLayout.css";

function AppLayout() {
  return (
    <div className="app-layout">
      <header className="app-header">
        <NavLink to="/" className="app-logo">
          ReverbDoc AI
        </NavLink>

        <nav className="app-navigation">
          <NavLink to="/">Home</NavLink>
        </nav>
      </header>

      <main className="app-main">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;