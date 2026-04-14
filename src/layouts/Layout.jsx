import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Outlet } from "react-router-dom";
import supabase from "@/supabase/supabaseClient";

const Layout = () => {
  console.log(supabase);
  return (
    <>
      <Header />
      <div className="max-w-5xl mx-auto h-svh container flex flex-col">
        <main className="pt-5 sm:pt-10 flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
