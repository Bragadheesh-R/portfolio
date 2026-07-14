import "../styles/saturn.css";

export default function SaturnBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="saturn-wrap">
        <div className="saturn-planet" />
        <div className="saturn-ring ring-1" />
        <div className="saturn-ring ring-2" />
        <div className="saturn-ring ring-3" />
      </div>
    </div>
  );
}