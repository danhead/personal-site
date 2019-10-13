export const timings = {
  linear: 'linear',
  easeInOutQuad: "cubic-bezier(0.455, 0.03, 0.515, 0.955)",
}

export const speeds = {
  instant: "0s",
  slow: "0.5s",
  medium: "0.3s",
  fast: "0.1s",
}

export const transition = ({
  speed = "medium",
  timing = "easeInOutQuad",
  delay = "instant",
} = {}) => {
  return `${speeds[speed]} ${timings[timing]} ${speeds[delay]}`
}
