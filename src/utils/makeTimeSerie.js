export default function makeTimeSerie(
  data,
  field,
  name,
  color,
  visible = true,
  type = "scatter",
  mode = "lines+markers"
) {
  return {
    x: data.map(t => t.date),
    y: data.map(t => t[field]),
    type: "log",
    mode: "lines+markers",
    marker: { color },
    name: name || field,
    visible
  };
}
