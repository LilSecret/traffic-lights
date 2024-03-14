export function FunctionalTrafficLight() {
  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        <div className="circle black"></div>
        <div className="circle yellow"></div>
        <div className="circle green"></div>
      </div>
      <button className="next-state-button">Next State</button>
    </div>
  );
}
