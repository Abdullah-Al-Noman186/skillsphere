"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import toast from "react-hot-toast";
import {
  ArrowLeft,
  CheckCircle2,
  ImageIcon,
  Loader2,
  Save,
  User,
} from "lucide-react";

const UpdateProfilePage = () => {
  const router = useRouter();
  const { data, isPending } = authClient.useSession();

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (data?.user) {
      setName(data.user.name || "");
      setImage(data.user.image || "");
    }
  }, [data]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    try {
      const { error } = await authClient.updateUser({
        name: name.trim(),
        image: image.trim(),
      });

      if (error) {
        toast.error(error.message || "Profile update failed");
        return;
      }

      toast.success("Profile updated successfully");
      router.push("/my-profile");
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  if (isPending) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-base-200">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </section>
    );
  }

  return (
    <section className="flex min-h-screen items-center justify-center bg-base-200 px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 34 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="w-full max-w-4xl"
      >
        <div className="overflow-hidden rounded-2xl bg-base-100 shadow-2xl">
          <div className="bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500 px-6 py-8 text-white sm:px-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur">
                  <User size={16} />
                  Profile Settings
                </p>

                <h1 className="text-3xl font-black sm:text-4xl">
                  Update Profile
                </h1>

                <p className="mt-2 max-w-xl text-white/80">
                  Refresh your name and profile photo so your account feels
                  current.
                </p>
              </div>

              <Link
                href="/my-profile"
                className="btn btn-circle border-0 bg-white/15 text-white hover:bg-white/25"
              >
                <ArrowLeft size={20} />
              </Link>
            </div>
          </div>

          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[300px_1fr]">
            <div className="rounded-xl bg-base-200 p-6 text-center">
              <div className="avatar">
                <div className="h-36 w-36 rounded-full ring ring-primary ring-offset-4 ring-offset-base-200">
                  {image ? (
                    <img src={image} alt={name || "Profile preview"} />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-base-300">
                      <User size={52} className="text-base-content/40" />
                    </div>
                  )}
                </div>
              </div>

              <h2 className="mt-5 text-2xl font-black">
                {name || "Your Name"}
              </h2>

              <p className="mt-2 text-sm text-base-content/60">
                This preview updates as you type.
              </p>

              <div className="mt-6 rounded-lg bg-base-100 p-4 text-left">
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-success" />
                  <span className="text-sm font-medium">
                    Public profile ready
                  </span>
                </div>
              </div>
            </div>

            <form onSubmit={handleUpdate} className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Full Name
                </label>

                <label className="input input-bordered flex items-center gap-3">
                  <User size={18} className="text-base-content/40" />
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="grow"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </label>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Profile Image URL
                </label>

                <label className="input input-bordered flex items-center gap-3">
                  <ImageIcon size={18} className="text-base-content/40" />
                  <input
                    type="url"
                    placeholder="Paste image URL"
                    className="grow"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                  />
                </label>

                <p className="mt-2 text-xs text-base-content/50">
                  Use a direct image link for the best result.
                </p>
              </div>

              <div className="rounded-xl bg-base-200 p-5">
                <h3 className="font-bold">Profile Tips</h3>

                <ul className="mt-3 space-y-2 text-sm text-base-content/70">
                  <li className="flex gap-2">
                    <CheckCircle2 size={18} className="shrink-0 text-success" />
                    Use your real name so instructors can recognize you.
                  </li>

                  <li className="flex gap-2">
                    <CheckCircle2 size={18} className="shrink-0 text-success" />
                    Choose a clear square image for a clean avatar.
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <button
                  type="submit"
                  disabled={loading}
                  className="btn flex-1 border-0 bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500 text-white"
                >
                  {loading ? (
                    <Loader2 size={18} className="animate-spin" />
                  ) : (
                    <Save size={18} />
                  )}
                  {loading ? "Saving..." : "Save Changes"}
                </button>

                <Link href="/my-profile" className="btn btn-outline flex-1">
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default UpdateProfilePage;