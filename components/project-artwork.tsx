import { cn } from '@/lib/utils'

const C = {
  sky: '#141311',
  hill: '#1f1d1a',
  lot: '#2b2925',
  road: '#1a1917',
  line: '#a39d92',
  edge: '#67625a',
  wall: '#ddd6c8',
  lit: '#f3efe6',
  stamp: '#b8321d',
  pole: '#67625a',
}

const stars: [number, number][] = [
  [7, 5],
  [19, 10],
  [33, 3],
  [47, 8],
  [56, 4],
  [91, 9],
  [11, 16],
]

const roadDashes = Array.from({ length: 12 }, (_, i) => i * 8 + 2)
const awning = Array.from({ length: 10 }, (_, i) => 18 + i * 4)

/** Original site study drawn on a 96×60 grid; deliberately not presented as gameplay. */
export function ProjectArtwork({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 96 60"
      shapeRendering="crispEdges"
      preserveAspectRatio="xMidYMid slice"
      className={cn('block h-full w-full', className)}
      role="img"
      aria-label="Pixel illustration of a small fried-chicken restaurant beside an empty road at night."
    >
      <rect width="96" height="38" fill={C.sky} />
      {stars.map(([x, y]) => (
        <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill={C.line} />
      ))}
      <rect x="74" y="6" width="4" height="4" fill={C.wall} />
      <rect x="73" y="7" width="1" height="2" fill={C.wall} />
      <rect x="76" y="6" width="2" height="2" fill={C.sky} />

      <rect x="0" y="31" width="22" height="7" fill={C.hill} />
      <rect x="12" y="28" width="16" height="10" fill={C.hill} />
      <rect x="60" y="32" width="36" height="6" fill={C.hill} />
      <rect x="70" y="29" width="14" height="9" fill={C.hill} />

      <rect y="38" width="96" height="8" fill={C.lot} />
      <rect x="42" y="38" width="18" height="2" fill="#3a3733" />
      <rect x="44" y="40" width="14" height="1" fill="#34312d" />

      <rect y="46" width="96" height="1" fill={C.edge} />
      <rect y="47" width="96" height="9" fill={C.road} />
      {roadDashes.map((x) => (
        <rect key={x} x={x} y="51" width="4" height="1" fill={C.line} />
      ))}
      <rect y="56" width="96" height="4" fill={C.hill} />

      <rect x="16" y="21" width="44" height="2" fill={C.wall} />
      {awning.map((x, i) => (
        <rect key={x} x={x} y="23" width="4" height="2" fill={i % 2 === 0 ? C.stamp : C.lit} />
      ))}
      <rect x="18" y="25" width="40" height="13" fill={C.wall} />
      <rect x="18" y="37" width="40" height="1" fill={C.edge} />

      <rect x="21" y="27" width="20" height="8" fill={C.edge} />
      <rect x="22" y="28" width="18" height="6" fill={C.lit} />
      <rect x="22" y="32" width="18" height="2" fill={C.line} />
      <rect x="29" y="28" width="2" height="2" fill={C.sky} />
      <rect x="28" y="30" width="4" height="2" fill={C.sky} />

      <rect x="43" y="28" width="5" height="4" fill={C.edge} />
      <rect x="44" y="29" width="3" height="2" fill={C.lit} />
      <rect x="46" y="29" width="1" height="1" fill={C.stamp} />

      <rect x="50" y="28" width="6" height="10" fill={C.edge} />
      <rect x="51" y="29" width="4" height="9" fill="#4a4640" />
      <rect x="54" y="33" width="1" height="1" fill={C.lit} />

      <rect x="59" y="29" width="5" height="9" fill={C.line} />
      <rect x="59" y="29" width="5" height="1" fill={C.stamp} />
      <rect x="60" y="31" width="3" height="4" fill={C.lit} />
      <rect x="61" y="32" width="1" height="2" fill={C.stamp} />

      <rect x="69" y="15" width="2" height="23" fill={C.pole} />
      <rect x="62" y="7" width="16" height="9" fill={C.stamp} />
      <rect x="63" y="8" width="14" height="7" fill={C.stamp} stroke={C.lit} strokeWidth="0.5" />
      <rect x="65" y="10" width="4" height="3" fill={C.lit} />
      <rect x="69" y="11" width="3" height="1" fill={C.lit} />
      <rect x="72" y="10" width="1" height="1" fill={C.lit} />
      <rect x="72" y="12" width="1" height="1" fill={C.lit} />

      <rect x="86" y="18" width="1" height="28" fill={C.pole} />
      <rect x="82" y="18" width="5" height="1" fill={C.pole} />
      <rect x="82" y="19" width="2" height="1" fill={C.lit} />
      <rect x="81" y="44" width="4" height="2" fill="#34312d" />
    </svg>
  )
}
