import HeroSection from "@/components/HeroSection";
import ProductSection from "@/components/ProductSection";
import rudraksha from "@/assets/rudraksha-collection.jpg";
import sweets from "@/assets/spiritual-sweets.jpg";
import books from "@/assets/spiritual-books.jpg";
import rashi from "@/assets/rashi-logos.jpg";

const Home = () => {
  const rudrakshProducts = [
    {
      id: "1",
      image: rudraksha,
      title: "5 Mukhi Rudraksha",
      price: "299",
      originalPrice: "399",
      rating: 5,
      description: "Authentic Nepal Rudraksha for peace and prosperity"
    },
    {
      id: "2", 
      image: rudraksha,
      title: "7 Mukhi Rudraksha",
      price: "599",
      originalPrice: "799",
      rating: 5,
      description: "Sacred bead for wealth and abundance"
    },
    {
      id: "3",
      image: rudraksha,
      title: "Rudraksha Mala 108 Beads",
      price: "1299",
      originalPrice: "1599",
      rating: 5,
      description: "Complete mala for meditation and chanting"
    },
    {
      id: "4",
      image: rudraksha,
      title: "1 Mukhi Rudraksha",
      price: "2999",
      originalPrice: "3999",
      rating: 5,
      description: "Rare and powerful bead for spiritual enlightenment"
    }
  ];

  const sweetProducts = [
    {
      id: "5",
      image: sweets,
      title: "Mathura Peda",
      price: "199",
      originalPrice: "259",
      rating: 5,
      description: "Traditional blessed sweets from Mathura"
    },
    {
      id: "6",
      image: sweets,
      title: "Kesar Peda",
      price: "299",
      originalPrice: "359",
      rating: 5,
      description: "Saffron-infused divine sweets"
    },
    {
      id: "7",
      image: sweets,
      title: "Mishri Dana",
      price: "99",
      originalPrice: "129",
      rating: 4,
      description: "Pure rock candy for offerings"
    },
    {
      id: "8",
      image: sweets,
      title: "Coconut Laddu",
      price: "179",
      originalPrice: "229",
      rating: 5,
      description: "Fresh coconut blessed sweets"
    }
  ];

  const bookProducts = [
    {
      id: "9",
      image: books,
      title: "Ramayana - Complete Edition",
      price: "499",
      originalPrice: "699",
      rating: 5,
      description: "Complete epic with beautiful illustrations"
    },
    {
      id: "10",
      image: books,
      title: "Bhagavad Gita",
      price: "299",
      originalPrice: "399",
      rating: 5,
      description: "Sacred text with commentary"
    },
    {
      id: "11",
      image: books,
      title: "Hanuman Chalisa",
      price: "99",
      originalPrice: "149",
      rating: 5,
      description: "Devotional hymns and prayers"
    },
    {
      id: "12",
      image: books,
      title: "Mahabharata Set",
      price: "1299",
      originalPrice: "1799",
      rating: 5,
      description: "Complete epic in beautiful binding"
    }
  ];

  const rashiProducts = [
    {
      id: "13",
      image: rashi,
      title: "Aries Rashi Yantra",
      price: "399",
      originalPrice: "599",
      rating: 5,
      description: "Sacred geometry for Aries zodiac"
    },
    {
      id: "14",
      image: rashi,
      title: "Leo Rashi Pendant",
      price: "599",
      originalPrice: "799",
      rating: 5,
      description: "Golden pendant for Leo natives"
    },
    {
      id: "15",
      image: rashi,
      title: "Complete Rashi Chart",
      price: "999",
      originalPrice: "1299",
      rating: 5,
      description: "All 12 zodiac symbols in sacred design"
    },
    {
      id: "16",
      image: rashi,
      title: "Personalized Rashi Stone",
      price: "799",
      originalPrice: "999",
      rating: 4,
      description: "Gemstone based on your birth chart"
    }
  ];

  return (
    <div style={{ minHeight: '100vh' }}>
      <HeroSection />
      
      <ProductSection
        title="Sacred Rudraksha Collection"
        subtitle="Authentic blessed beads from the holy lands for spiritual growth and divine protection"
        products={rudrakshProducts}
        viewAllLink="/rudraksha"
      />

      <div style={{ background: 'linear-gradient(180deg, rgba(255, 179, 102, 0.1), rgba(255, 215, 0, 0.3))' }}>
        <ProductSection
          title="Divine Sweets & Prasadam"
          subtitle="Traditional blessed sweets prepared with devotion and served as sacred offerings"
          products={sweetProducts}
          viewAllLink="/sweets"
        />
      </div>

      <ProductSection
        title="Sacred Books & Literature"
        subtitle="Holy texts, spiritual guides, and devotional literature for your spiritual journey"
        products={bookProducts}
        viewAllLink="/books"
      />

      <div style={{ background: 'linear-gradient(180deg, rgba(255, 179, 102, 0.1), rgba(255, 215, 0, 0.3))' }}>
        <ProductSection
          title="Rashi & Zodiac Items"
          subtitle="Personalized spiritual items based on your zodiac sign and birth chart"
          products={rashiProducts}
          viewAllLink="/rashi"
        />
      </div>
    </div>
  );
};

export default Home;