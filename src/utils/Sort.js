export const sortByDistance = (planets) => {
  planets.sort((a, b) => a.semimajorAxis - b.semimajorAxis);
  return planets;
};
export const sortByRadius = (planets) => {
  planets.sort((a, b) => a.equaRadius - b.equaRadius);
  return planets;
};
export const sortByGravity = (planets) => {
  planets.sort((a, b) => a.gravity - b.gravity);
  return planets;
};
