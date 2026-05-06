import './RoseBouquet.css';

const Rose = ({ className }: { className: string }) => (
  <div className={`rose ${className}`}>
    <div className="stem">
      <div className="leaf left"></div>
      <div className="leaf right"></div>
    </div>
    <div className="flower-head"></div>
  </div>
);

export function RoseBouquet() {
  return (
    <div className="rose-container">
      <div className="particles"></div>
      
      <div className="bouquet-wrapper">
        <Rose className="rose1" />
        <Rose className="rose2" />
        <Rose className="rose3" />
        <Rose className="rose4" />
        <Rose className="rose5" />
        <Rose className="rose6" />
        <Rose className="rose7" />
        <div className="bow"></div>
      </div>

      <div className="glass-card">
        <h1>Gracias por la Maravillosa Cita 🌹</h1>
        <p>
          Me la pasé increíble contigo. Cada momento fue mágico,
          y no puedo dejar de sonreír al recordarlo.
        </p>
        <p>
          Espero que podamos repetirlo muy pronto.
        </p>
        <span className="signature">Atentamente, tu amorcito 💋</span>
      </div>
    </div>
  );
}
