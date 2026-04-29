import PromoSection from "../components/lib/main/PromoSection"
import AboutPlants from "../components/lib/main/AboutPlants"
import OfferSection from "../components/lib/main/OfferSection"

async function getPlants() {
  const res = await fetch('http://127.0.0.1:1337/api/plants?populate=*', { 
    cache: 'no-store' 
  });
  
  if (!res.ok) return [];
  const json = await res.json();
  return json.data;
}

export default async function Home() {
  const plants = await getPlants();

  return (
    <>
      <PromoSection />
      <AboutPlants />
      <OfferSection plants={plants} />
    </>
  )
}