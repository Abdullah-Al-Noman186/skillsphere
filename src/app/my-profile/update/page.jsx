"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";

const UpdateProfilePage = () => {
  const router = useRouter();

  const { data } = authClient.useSession();

  const [name, setName] = useState(
    data?.user?.name || ""
  );

  const [image, setImage] = useState(
    data?.user?.image || ""
  );

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const { data: updatedUser, error } =
        await authClient.updateUser({
          name,
          image,
        });

      if (error) {
        setMessage(error.message);
        return;
      }

      setMessage("Profile updated successfully!");

      setTimeout(() => {
        router.push("/my-profile");
        router.refresh();
      }, 1500);
    } catch (error) {
      setMessage("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="card w-full max-w-lg bg-base-100 shadow-2xl"
      >
        <div className="card-body">

          <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500 bg-clip-text text-transparent">
            Update Profile
          </h1>

          <form
            onSubmit={handleUpdate}
            className="space-y-4 mt-6"
          >
            <input
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
            />

            <input
              type="text"
              placeholder="Image URL"
              className="input input-bordered w-full"
              value={image}
              onChange={(e) =>
                setImage(e.target.value)
              }
            />

            {image && (
              <div className="flex justify-center">
                <img
                  src={image}
                  alt="Preview"
                  className="w-24 h-24 rounded-full object-cover border-4 border-primary"
                />
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn w-full bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500 text-white border-0"
            >
              {loading
                ? "Updating..."
                : "Update Information"}
            </button>
          </form>

          {message && (
            <p className="text-center mt-4 text-success">
              {message}
            </p>
          )}

        </div>
      </motion.div>
    </section>
  );
};

export default UpdateProfilePage;