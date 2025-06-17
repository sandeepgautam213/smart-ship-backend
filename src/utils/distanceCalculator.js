exports.getDistanceBetweenPorts = (origin, destination) => {
  // Mock distance in nautical miles or km
  if (origin === "Singapore" && destination === "Dubai") {
    return 1200;
  }
  return 1000; // fallback
};
