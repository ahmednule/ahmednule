function buildLine(
  seed: number,
  amplitude: number,
  frequency: number,
  yBase: number,
  width: number,
  steps: number
) {
  const points: string[] = [];
  for (let i = 0; i <= steps; i++) {
    const x = (i / steps) * width;
    const y =
      yBase +
      Math.sin(i * frequency + seed) * amplitude +
      Math.sin(i * frequency * 2.3 + seed * 1.7) * (amplitude * 0.35);
    points.push(`${x.toFixed(1)},${y.toFixed(1)}`);
  }
  return points.join(" ");
}

/**
 * Signature background element: elevation contour lines, evoking the
 * topographic survey maps used for farmland and watershed engineering,
 * the terrain Ahmed's IoT and agri-tech systems are actually deployed on.
 */
export default function Contours({
  className = "",
  lineCount = 9,
  color = "var(--line)",
}: {
  className?: string;
  lineCount?: number;
  color?: string;
}) {
  const width = 1200;
  const height = 700;
  const lines = Array.from({ length: lineCount }, (_, i) => {
    const seed = i * 1.3;
    const amplitude = 26 + i * 4.5;
    const frequency = 0.055 - i * 0.0015;
    const yBase = (height / (lineCount + 1)) * (i + 1);
    return {
      points: buildLine(seed, amplitude, frequency, yBase, width, 60),
      opacity: 0.9 - i * 0.06,
    };
  });

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {lines.map((line, i) => (
        <polyline
          key={i}
          points={line.points}
          fill="none"
          stroke={color}
          strokeWidth={1}
          opacity={Math.max(line.opacity, 0.18)}
        />
      ))}
    </svg>
  );
}
