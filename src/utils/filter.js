export const distanceFromSunFilter = (planets) => {
  planets.sort((a, b) => a.semimajorAxis - b.semimajorAxis);
};
export const radiusFilter = (planets) => {
  planets.sort((a, b) => a.equaRadius - b.equaRadius);
};