import StockPriceChart from "./component/StockPriceChart";

const App = () => {
  const dates = [
    { x: new Date('2024-08-01').getTime(), y: 3.0 },
    { x: new Date('2024-08-02').getTime(), y: 3.2 },
    { x: new Date('2024-08-03').getTime(), y: 3.1 },
    { x: new Date('2024-08-04').getTime(), y: 3.4 },
    { x: new Date('2024-08-05').getTime(), y: 3.5 },
    { x: new Date('2024-08-06').getTime(), y: 3.0 },
    { x: new Date('2024-08-07').getTime(), y: 2.9 },
    { x: new Date('2024-08-08').getTime(), y: 3.0 },
    { x: new Date('2024-08-09').getTime(), y: 3.2 },
    // Add more data points here
  ];
  const dates2 = [
    { x: new Date('2024-08-01').getTime(), y: 2.0 },
    { x: new Date('2024-08-02').getTime(), y: 3.2 },
    { x: new Date('2024-08-03').getTime(), y: 2.1 },
    { x: new Date('2024-08-04').getTime(), y: 3.4 },
    { x: new Date('2024-08-05').getTime(), y: 2.5 },
    { x: new Date('2024-08-06').getTime(), y: 3.0 },
    { x: new Date('2024-08-07').getTime(), y: 2.9 },
    { x: new Date('2024-08-08').getTime(), y: 3.0 },
    { x: new Date('2024-08-09').getTime(), y: 2.2 },
    // Add more data points here
  ];

  return (
    <div>
      <h1>Stock Price Chart</h1>
      <StockPriceChart dates={dates} dates2={dates2} />
    </div>
  );
};

export default App;
