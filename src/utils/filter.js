export const distanceFromSunFilter = (planets) => {
  planets.sort((a, b) => a.semimajorAxis - b.semimajorAxis);
  return planets;
};
export const radiusFilter = (planets) => {
  planets.sort((a, b) => a.equaRadius - b.equaRadius);
  return planets;
};
export const gravityFilter = (planets) => {
  planets.sort((a, b) => a.gravity - b.gravity);
  return planets;
};
