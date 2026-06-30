"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Eye, EyeOff, Loader2, Lock, Mail } from "lucide-react";

const LogInPage = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading || googleLoading) return;

    setLoading(true);

    try {
      const { data, error } = await authClient.signIn.email({
        email: formData.email.trim(),
        password: formData.password,
      });

      if (data?.user) {
        toast.success("Login successful");
        router.push("/");
        router.refresh();
      } else {
        toast.error(error?.message || "Invalid email or password");
      }
    } catch (err) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    if (loading || googleLoading) return;

    setGoogleLoading(true);

    try {
      const { data, error } = await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });

      if (data?.user) {
        toast.success("Google login successful");
        router.push("/");
        router.refresh();
      } else if (error) {
        toast.error(error.message || "Google login failed");
      }
    } catch (err) {
      toast.error("Google login error");
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-base-200 px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="w-full max-w-md"
      >
        <div className="card bg-base-100 shadow-2xl">
          <div className="card-body">
            <div className="mb-4 text-center">
              <h1 className="bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500 bg-clip-text text-3xl font-black text-transparent">
                Log In
              </h1>

              <p className="mt-2 text-base-content/60">
                Welcome back to your learning dashboard.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <label className="input input-bordered flex items-center gap-3">
                <Mail size={18} className="text-base-content/40" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  className="grow"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                />
              </label>

              <label className="input input-bordered flex items-center gap-3">
                <Lock size={18} className="text-base-content/40" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className="grow"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                  required
                />

                <button
                  type="button"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="text-base-content/40 transition hover:text-base-content"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </label>

              <div className="flex justify-end">
                <Link href="/forgot-password" className="text-sm font-semibold text-primary">
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={loading || googleLoading}
                className="btn w-full border-0 bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500 text-white"
              >
                {loading && <Loader2 size={18} className="animate-spin" />}
                {loading ? "Logging in..." : "Log In"}
              </button>
            </form>

            <div className="divider">OR</div>

            <button
              type="button"
              onClick={handleGoogleLogin}
              disabled={loading || googleLoading}
              className="btn w-full border border-base-300 bg-base-100 text-base-content hover:bg-base-200"
            >
              {googleLoading ? (
                <Loader2 size={18} className="animate-spin" />
              ) : (
                <img
                  src="https://www.google.com/favicon.ico"
                  alt=""
                  className="h-5 w-5"
                />
              )}
              Continue with Google
            </button>

            <p className="mt-4 text-center text-sm text-base-content/60">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="font-semibold text-primary">
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