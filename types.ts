export type Product = {
  id: number;
  title: string;
  category: string;
  price: number;
  description: string;
  brand: string;
  rating: number;
  image: string;
  specs: {
    battery: string;
    ram: string;
    storage: string;
    display: string;
    resolution: string;
    camera: string;
    os: string;
    is5G: boolean;
    fastCharging: boolean;
    biometric: string;
    weight: string;
    waterproof: string;
    refreshRate: string;
    chargingPower: string;
    chargingPort: string;
  };
};
