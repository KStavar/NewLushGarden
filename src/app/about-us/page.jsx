import AboutProducts from "@/components/lib/about/AboutProducts"
import Review from "@/components/lib/about/Review"

async function getReviews() {
  try {
    const res = await fetch('http://127.0.0.1:1337/api/reviews', { 
      cache: 'no-store',
    });
    
    if (!res.ok) throw new Error('Failed to fetch');
    const json = await res.json();
    return json.data;
  } catch (error) {
    console.error("Strapi Error:", error);
    return []; 
  }
}

export default async function AboutUsPage() {
  const reviews = await getReviews();

  return (
    <main>
      <AboutProducts />
      <Review reviews={reviews} />
    </main>
  )
}