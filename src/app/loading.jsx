export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="text-center">

        {/* Spinner */}
        <span className="loading loading-spinner loading-lg text-primary"></span>

        {/* Text */}
        <p className="mt-4 text-lg font-semibold text-base-content/70">
          Loading SkillSphere...
        </p>

      </div>
    </div>
  );
}