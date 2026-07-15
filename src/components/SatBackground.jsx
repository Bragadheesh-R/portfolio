import "../styles/saturn.css";

export default function SaturnBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="saturn-wrap">
        <div className="atom-core">
          <div className="nucleus-glow" />
          <div className="saturn-planet">
            <div className="saturn-planet-top" />
            <div className="saturn-planet-bottom" />
          </div>

          <div className="orbit-group orbit-group-1">
            <div className="orbit-ring" />
            <div className="electron electron-bright" />
          </div>
          <div className="orbit-group orbit-group-2">
            <div className="orbit-ring" />
            <div className="electron electron-shift-1" />
          </div>
          <div className="orbit-group orbit-group-3">
            <div className="orbit-ring" />
            <div className="electron electron-shift-2" />
          </div>
        </div>
      </div>
    </div>
  );
}