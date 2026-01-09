type Prop = {
  id: number,
  name: string,
  pricePerMonth: number,
  features: string[],
  highlighted: boolean
}

const PriceCard = (props: Prop) => {
  const { name, pricePerMonth, features, highlighted } = props;
  
  return (
    <div className={`price-card ${highlighted ? 'highlighted' : ''}`}>
      <h2 className="card-name">{name}</h2>
      <p className="card-price">
        {pricePerMonth === 0 ? 'Free' : `$${pricePerMonth}`}
      </p>
      <ul className="card-features">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button className="card-button">Try for Free</button>
    </div>
  )
}

export default PriceCard