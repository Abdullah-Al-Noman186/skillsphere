"use client";

import Link from "next/link";
import { GraduationCap } from "lucide-react";
import { motion } from "motion/react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

const Navbar = () => {
  const { data } = authClient.useSession();
  const user = data?.user;

  const navItems = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Courses",
      href: "/courses",
    },
    {
      name: "My Profile",
      href: "/my-profile",
    },
  ];

  const handleLogout = async () => {
    try {
      const { error } = await authClient.signOut();

      if (error) {
        toast.error(
          error.message || "Logout failed!"
        );
        return;
      }

      toast.success(
        "Logged out successfully 👋"
      );

      setTimeout(() => {
        window.location.href = "/";
      }, 1000);

    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <motion.nav
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-gradient-to-r from-indigo-950 via-purple-950 to-slate-950 backdrop-blur-md shadow-lg"
    >
      <div className="navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        
        <div className="navbar-start">

         
          <div className="dropdown lg:hidden">

            <label
              tabIndex={0}
              className="btn btn-ghost text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-3 shadow-xl bg-slate-900 rounded-box w-60 text-white z-[999]"
            >
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link href={item.href}>
                    {item.name}
                  </Link>
                </li>
              ))}

              <div className="divider my-1"></div>

              {user ? (
                <>
                  <li>
                    <button
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link href="/login">
                      Login
                    </Link>
                  </li>

                  <li>
                    <Link href="/register">
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>

         
          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <GraduationCap
              size={34}
              className="text-cyan-400"
            />

            <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
              SkillSphere
            </span>
          </Link>
        </div>

        
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-2">

            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="px-4 py-2 text-white rounded-xl hover:bg-white/10 hover:text-cyan-300 transition-all duration-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}

          </ul>
        </div>

        
        <div className="navbar-end hidden lg:flex gap-3">

          {user ? (
            <>
           
              <div
                className="tooltip tooltip-bottom"
                data-tip={user.name}
              >
                <img
                  src={
                    user.image ||
                    "https://i.ibb.co/4pDNDk1/avatar.png"
                  }
                  alt={user.name}
                  className="w-11 h-11 rounded-full border-2 border-cyan-400 object-cover"
                />
              </div>

              
              <button
                onClick={handleLogout}
                className="btn btn-error rounded-full"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              
              <Link
                href="/login"
                className="btn btn-outline border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black rounded-full"
              >
                Login
              </Link>

             
              <Link
                href="/register"
                className="btn rounded-full border-0 text-white bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500 hover:scale-105 transition-transform"
              >
                Register
              </Link>
            </>
          )}

        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;