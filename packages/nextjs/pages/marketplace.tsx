import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";

const ExampleUI: NextPage = () => {
  const cardsData = [
    { 
      id: 1,
      imageUrl: "https://pbs.twimg.com/profile_images/1635879999264940033/_pozth32_400x400.jpg",
      offerType: "5000 for 0.5 ETH",
      badgeType: "Points",
      title: "EigenLayer",
    },
    { 
      id: 2,
      imageUrl: "https://pbs.twimg.com/profile_images/1653925693418532864/4PmOBjg9_400x400.png",
      offerType: "1000 for 0.01 ETH",
      badgeType: "Airdrop Allocation",
      title: "zkLink",
    },
    { 
      id: 3,
      imageUrl: "https://pbs.twimg.com/profile_images/1752599337891516416/soAtF4Lv_400x400.jpg",
      offerType: "15000 for 0.15 ETH",
      badgeType: "Airdrop Allocation",
      title: "MON",
    },
    { 
      id: 4,
      imageUrl: "https://pbs.twimg.com/profile_images/1742465326934327296/dhKg5pH3_400x400.jpg",
      offerType: "600 for 0.02 ETH",
      badgeType: "Airdrop Allocation",
      title: "ZeroLend",
    },
  ];

  return (
    <>
       <MetaHeader
        title="Planck"
      >
      </MetaHeader>
      <div className="flex">
        <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <ul className="space-y-2 font-medium">
                <li>
                    <a href="/" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                        <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                        <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                    </svg>
                    <span className="ms-3 text-4xl">Planck</span>
                    </a>
                </li>
                <li>
                    <a href="/dashboard" className="pt-6 flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                    </svg>

                    <span className="flex-1 ms-3 whitespace-nowrap">Derivative Market</span>
                    </a>
                </li>
                <li>
                    <a href="/marketplace" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                    <span className="flex-1 ms-3 whitespace-nowrap">Pre-Market</span>
                    </a>
                </li>
            </ul>
            <div className="px-3 py-36 mt-auto">
            <p className="text-gray-500 text-xs text-center">All rights reserved</p>
            <h3 className="text-gray-500 text-sm text-center">@Belisarius </h3>
            <p className="text-gray-500 text-xs text-center">Build at Scaling Ethereum Hackathon</p>
            <h3 className="text-white text-md text-center">Planck</h3>
            </div>
        </div>
        </aside>
    <div className=" container mx-auto mt-8 ml-64">
      <h1 className="text-3xl font-semibold mb-4 ml-2">Welcome to the Marketplace</h1>
      <div className="grid lg:grid-cols-3 gap-4 pl-2 pr-4">
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
                <button className="btn btn-primary">Buy</button>
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
