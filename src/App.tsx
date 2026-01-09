import { useEffect, useState } from "react";
import PriceCard from "./components/PriceCard";

interface PricingData {
  id: number;
  name: string;
  pricePerMonth: number;
  features: string[];
  highlighted: boolean;
}

const App = () => {
  const [pricingData, setPricingData] = useState<PricingData[]>([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setPricingData(data))
  }, []);

  return (
    <div className="app-container">
      {pricingData.map((data) => (
        <PriceCard key={data.id} {...data} />
      ))}
    </div>
  );
};

export default App;