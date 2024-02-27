import "./Account.css";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import AccountSidebar from "../../components/AccountComponents/AccountSidebar/AccountSidebar";

export default function AccountLayout() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <section className="min-h-[70vh] container py-2 lg:py-5">
      <div className="lg:flex items-start gap-2">
        <aside
          className={`account_sidebar ${sidebar && "account_sidebar_show"}`}
        >
          <AccountSidebar />
        </aside>
        <main className="account_content">
          <Outlet />
        </main>
      </div>
    </section>
  );
}
