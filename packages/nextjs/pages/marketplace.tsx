import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";

const ExampleUI: NextPage = () => {
    const cardsData = [
    { 
      id: 1,
      imageUrl: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
      offerType: "Offer type",
      badgeType: "Points",
      title: "Fantasy testnet points",
    },
    { 
      id: 2,
      imageUrl: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
      offerType: "Offer type",
      badgeType: "Points",
      title: "Thruster points",
    },
    { 
      id: 3,
      imageUrl: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
      offerType: "Offer type",
      badgeType: "Points",
      title: "Wasabi points",
    },
    { 
      id: 4,
      imageUrl: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
      offerType: "Offer type",
      badgeType: "Points",
      title: "Juice points",
    },
    
  ];

  return (
    <>
      <MetaHeader
        title="Marketplace"
      >
      </MetaHeader>
      <div>
        <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4">Welcome to the Marketplace</h1>
      <div className="grid lg:grid-cols-3 gap-4">
        {cardsData.map(card => (
          <div key={card.id} className="card w-96 glass relative">
            <div className="icon-container absolute flex top-2 right-2">
              <img
                    className="w-6 h-6 me-2.5 "
                    src="https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=031"
                    alt="Bitcoin Logo"
                    />
                    <img
                    className="w-6 h-6 me-2.5 "
                    src="https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=029"
                    alt="Eth Logo"
                    />
                    <img
                    className="w-6 h-6 me-2.5 "
                    src="https://cryptologos.cc/logos/tether-usdt-logo.svg?v=029"
                    alt="USDt Logo"
                    />
                    <img
                    className="w-6 h-6 me-2.5 "
                    src="https://cryptologos.cc/logos/aave-aave-logo.svg?v=029"
                    alt="Aave Logo"
                    />
            </div>
            <figure>
              <img src={card.imageUrl} alt="Offer"/>
            </figure>
            <div className="card-body " style={{marginTop: "-2rem"}}>
              <p>{card.offerType}</p>
              <div className="badge badge-secondary" style={{marginTop: "-1rem"}}>{card.badgeType}</div>
              <h2 className="card-title" >{card.title}</h2>
              <div className="card-actions justify-end" style={{marginTop: "-2rem", marginBottom: "-1rem"}}>
                <button className="btn btn-primary">Open</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
      </div>
    </>
  );
};

export default ExampleUI;
