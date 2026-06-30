"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { GraduationCap, Menu, X, LogOut } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

const Navbar = () => {
  const { data } = authClient.useSession();
  const user = data?.user;

  const pathname = usePathname();

  // Scroll aware navbar
  const [scrolled, setScrolled] = useState(false);

  // Mobile menu
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

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
        toast.error(error.message || "Logout failed!");
        return;
      }

      toast.success("Logged out successfully 👋");

      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    } catch {
      toast.error("Something went wrong!");
    }
  };

  return (
    <>
      {/* ===================== NAVBAR ===================== */}
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.45 }}
        className="fixed top-0 left-0 right-0 z-[999]"
      >
        <div className="max-w-7xl mx-auto px-4 pt-4">
          <motion.nav
            animate={{
              scale: scrolled ? 0.985 : 1,
            }}
            transition={{ duration: 0.25 }}
            className={`navbar rounded-2xl border transition-all duration-300
            ${
              scrolled
                ? "border-white/10 bg-slate-950/80 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
                : "border-white/5 bg-slate-900/55 backdrop-blur-xl"
            }`}
          >
            {/* ===================== LEFT ===================== */}
            <div className="navbar-start">
              {/* Mobile Toggle */}
              <button
                onClick={() =>
                  setMobileOpen(!mobileOpen)
                }
                className="btn btn-ghost btn-circle lg:hidden text-white hover:bg-white/10"
              >
                {mobileOpen ? (
                  <X size={22} />
                ) : (
                  <Menu size={22} />
                )}
              </button>

              {/* Logo */}
              <Link
                href="/"
                className="flex items-center gap-3 group"
              >
                <motion.div
                  whileHover={{
                    rotate: -10,
                    scale: 1.1,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                  }}
                  className="relative"
                >
                  <div className="absolute inset-0 rounded-full blur-xl bg-cyan-500/40" />

                  <GraduationCap
                    size={34}
                    className="relative text-cyan-400"
                  />
                </motion.div>

                <span className="text-xl sm:text-2xl font-black tracking-tight bg-gradient-to-r from-cyan-400 via-violet-400 to-blue-400 bg-clip-text text-transparent">
                  SkillSphere
                </span>
              </Link>
            </div>

            {/* ===================== CENTER ===================== */}
            <div className="navbar-center hidden lg:flex">
              <ul className="flex items-center gap-2">
                {navItems.map((item) => {
                  const active =
                    pathname === item.href;

                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="relative"
                      >
                        <motion.div
                          whileHover={{
                            y: -2,
                          }}
                          className={`relative px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300
                          ${
                            active
                              ? "text-white"
                              : "text-slate-300 hover:text-white"
                          }`}
                        >
                          {item.name}

                          {active && (
                            <motion.div
                              layoutId="active-pill"
                              className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/20 via-violet-500/20 to-blue-500/20 border border-cyan-400/20"
                              transition={{
                                type: "spring",
                                bounce: 0.25,
                                duration: 0.5,
                              }}
                            />
                          )}
                        </motion.div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* ===================== RIGHT ===================== */}
            <div className="navbar-end hidden lg:flex gap-3">
              {user ? (
                <>
                  {/* Avatar */}
                  <div
                    className="tooltip tooltip-bottom"
                    data-tip={user.name}
                  >
                    <div className="relative">
                      <img
                        src={
                          user.image ||
                          "https://i.ibb.co/4pDNDk1/avatar.png"
                        }
                        alt={user.name}
                        className="w-11 h-11 rounded-full object-cover border-2 border-cyan-400 shadow-lg shadow-cyan-500/20"
                      />

                      {/* Online indicator */}
                      <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-slate-900" />
                    </div>
                  </div>

                  {/* Logout */}
                  <button
                    onClick={handleLogout}
                    className="btn rounded-xl border border-red-400/20 bg-red-500/10 text-red-300 hover:bg-red-500 hover:text-white transition-all"
                  >
                    <LogOut size={18} />
                    Logout
                  </button>
                </>
              ) : (
                <>
                  {/* Login */}
                  <Link
                    href="/login"
                    className="btn rounded-xl border border-cyan-400/30 bg-white/5 text-cyan-300 hover:bg-cyan-500 hover:text-white hover:border-cyan-500 transition-all duration-300"
                  >
                    Login
                  </Link>

                  {/* Register */}
                  <Link
                    href="/register"
                    className="btn rounded-xl border-0 text-white bg-gradient-to-r from-cyan-500 via-violet-500 to-blue-500 hover:scale-105 hover:shadow-xl hover:shadow-violet-500/30 transition-all duration-300"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </motion.nav>
        </div>
      </motion.header>

      {/* Spacer */}
      <div className="h-24" />

      {/* ===================== MOBILE MENU ===================== */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.25,
            }}
            className="fixed top-24 left-4 right-4 z-[998] lg:hidden"
          >
            <div className="rounded-2xl border border-white/10 bg-slate-950/90 backdrop-blur-2xl shadow-2xl p-3">
              <ul className="menu gap-2">
                {navItems.map((item) => {
                  const active =
                    pathname === item.href;

                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        onClick={() =>
                          setMobileOpen(false)
                        }
                        className={`rounded-xl ${
                          active
                            ? "bg-gradient-to-r from-cyan-500/20 via-violet-500/20 to-blue-500/20 text-white"
                            : "text-slate-300 hover:bg-white/10"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}

                <div className="divider my-1" />

                {user ? (
                  <>
                    <div className="flex items-center gap-3 px-3 py-2">
                      <div className="relative">
                        <img
                          src={
                            user.image ||
                            "https://i.ibb.co/4pDNDk1/avatar.png"
                          }
                          alt={user.name}
                          className="w-10 h-10 rounded-full border border-cyan-400 object-cover"
                        />

                        <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-400 border border-slate-900" />
                      </div>

                      <div>
                        <p className="text-white font-medium">
                          {user.name}
                        </p>

                        <p className="text-xs text-slate-400">
                          Signed in
                        </p>
                      </div>
                    </div>

                    <li>
                      <button
                        onClick={() => {
                          setMobileOpen(false);
                          handleLogout();
                        }}
                        className="text-red-300"
                      >
                        <LogOut size={18} />
                        Logout
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link
                        href="/login"
                        onClick={() =>
                          setMobileOpen(false)
                        }
                      >
                        Login
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/register"
                        onClick={() =>
                          setMobileOpen(false)
                        }
                      >
                        Register
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;