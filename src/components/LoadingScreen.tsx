export const LoadingScreen = () => (
  <div
    role="status"
    aria-live="assertive"
    className="flex flex-col items-center justify-center min-h-screen bg-gray-100"
    tabIndex={0} // Ensures keyboard focus
  >
    {/* Loader */}
    <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin mb-4"></div>

    {/* Content in between */}
    <h1 className="text-lg font-semibold text-gray-700">Loading, please wait...</h1>
  </div>
);
