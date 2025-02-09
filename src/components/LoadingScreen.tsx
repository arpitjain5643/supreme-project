export const LoadingScreen = () => (
    <div
      role="status"
      aria-live="assertive"
      className="loading-screen"
      tabIndex={0} // Ensures keyboard focus
    >
      <h1>Loading, please wait...</h1>
    </div>
  );