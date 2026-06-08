"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const LogInPage = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // EMAIL LOGIN
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const { data, error } = await authClient.signIn.email({
        email: formData.email,
        password: formData.password,
      });

      if (data?.user) {
        toast.success("Login successful 🎉");

        setTimeout(() => {
          router.push("/");
        }, 800);
      } else {
        toast.error(
          error?.message || "Invalid email or password"
        );
      }
    } catch (err) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // GOOGLE LOGIN
  const handleGoogleLogin = async () => {
    setLoading(true);

    try {
      const { data, error } =
        await authClient.signIn.social({
          provider: "google",
        });

      if (data?.user) {
        toast.success(
          "Google login successful 🚀"
        );

        setTimeout(() => {
          router.push("/");
        }, 800);
      } else {
        toast.error(
          error?.message ||
            "Google login failed"
        );
      }
    } catch (err) {
      toast.error("Google login error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-base-200 px-4">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="card bg-base-100 shadow-2xl">

          <div className="card-body">

          
            <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500 bg-clip-text text-transparent">
              Log In
            </h2>

            <p className="text-center text-base-content/60 mb-4">
              Welcome back 🚀
            </p>

           
            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="input input-bordered w-full"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered w-full"
                value={formData.password}
                onChange={handleChange}
                required
              />

              <button
                type="submit"
                disabled={loading}
                className="btn w-full bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500 text-white border-0"
              >
                {loading
                  ? "Logging in..."
                  : "Log In"}
              </button>
            </form>

           
            <div className="divider">
              OR
            </div>

            
            <button
              type="button"
              onClick={handleGoogleLogin}
              disabled={loading}
              className="btn w-full bg-white text-black border border-gray-300 hover:bg-gray-100"
            >
              <img
                src="https://www.google.com/favicon.ico"
                alt="Google"
                className="w-5 h-5"
              />
              Continue with Google
            </button>

            
            <p className="text-center text-sm mt-4 text-base-content/60">
              Don’t have an account?{" "}
              <Link
                href="/register"
                className="text-primary font-semibold"
              >
                Register
              </Link>
            </p>

          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default LogInPage;