import HeroSection from "@/components/HeroSection";
import Section from "@/components/ProductSection/Section"
import ZodiacSection from "@/components/ZodiacSection";
import rudraksha from "@/assets/rudraksha-collection.jpg";
import sweets from "@/assets/spiritual-sweets.jpg";
import books from "@/assets/spiritual-books.jpg";
import rashi from "@/assets/rashi-logos.jpg";

const Home = () => {
  // const rudrakshProducts = [
  //   {
  //     id: "1",
  //     image: rudraksha,
  //     title: "5 Mukhi Rudraksha",
  //     price: "299",
  //     originalPrice: "399",
  //     rating: 5,
  //     description: "Authentic Nepal Rudraksha for peace and prosperity"
  //   },
  //   {
  //     id: "2", 
  //     image: rudraksha,
  //     title: "7 Mukhi Rudraksha",
  //     price: "599",
  //     originalPrice: "799",
  //     rating: 5,
  //     description: "Sacred bead for wealth and abundance"
  //   },
  //   {
  //     id: "3",
  //     image: rudraksha,
  //     title: "Rudraksha Mala 108 Beads",
  //     price: "1299",
  //     originalPrice: "1599",
  //     rating: 5,
  //     description: "Complete mala for meditation and chanting"
  //   },
  //   {
  //     id: "4",
  //     image: rudraksha,
  //     title: "1 Mukhi Rudraksha",
  //     price: "2999",
  //     originalPrice: "3999",
  //     rating: 5,
  //     description: "Rare and powerful bead for spiritual enlightenment"
  //   },
  // ];

  // const sweetProducts = [
  //   {
  //     id: "5",
  //     image: sweets,
  //     title: "Mathura Peda",
  //     price: "199",
  //     originalPrice: "259",
  //     rating: 5,
  //     description: "Traditional blessed sweets from Mathura"
  //   },
  //   {
  //     id: "6",
  //     image: sweets,
  //     title: "Kesar Peda",
  //     price: "299",
  //     originalPrice: "359",
  //     rating: 5,
  //     description: "Saffron-infused divine sweets"
  //   },
  //   {
  //     id: "7",
  //     image: sweets,
  //     title: "Mishri Dana",
  //     price: "99",
  //     originalPrice: "129",
  //     rating: 4,
  //     description: "Pure rock candy for offerings"
  //   },
  //   {
  //     id: "8",
  //     image: sweets,
  //     title: "Coconut Laddu",
  //     price: "179",
  //     originalPrice: "229",
  //     rating: 5,
  //     description: "Fresh coconut blessed sweets"
  //   }
  // ];

  // const bookProducts = [
  //   {
  //     id: "9",
  //     image: books,
  //     title: "Ramayana - Complete Edition",
  //     price: "499",
  //     originalPrice: "699",
  //     rating: 5,
  //     description: "Complete epic with beautiful illustrations"
  //   },
  //   {
  //     id: "10",
  //     image: books,
  //     title: "Bhagavad Gita",
  //     price: "299",
  //     originalPrice: "399",
  //     rating: 5,
  //     description: "Sacred text with commentary"
  //   },
  //   {
  //     id: "11",
  //     image: books,
  //     title: "Hanuman Chalisa",
  //     price: "99",
  //     originalPrice: "149",
  //     rating: 5,
  //     description: "Devotional hymns and prayers"
  //   },
  //   {
  //     id: "12",
  //     image: books,
  //     title: "Mahabharata Set",
  //     price: "1299",
  //     originalPrice: "1799",
  //     rating: 5,
  //     description: "Complete epic in beautiful binding"
  //   }
  // ];

  // const rashiProducts = [
  //   {
  //     id: "13",
  //     image: rashi,
  //     title: "Aries Rashi Yantra",
  //     price: "399",
  //     originalPrice: "599",
  //     rating: 5,
  //     description: "Sacred geometry for Aries zodiac"
  //   },
  //   {
  //     id: "14",
  //     image: rashi,
  //     title: "Leo Rashi Pendant",
  //     price: "599",
  //     originalPrice: "799",
  //     rating: 5,
  //     description: "Golden pendant for Leo natives"
  //   },
  //   {
  //     id: "15",
  //     image: rashi,
  //     title: "Complete Rashi Chart",
  //     price: "999",
  //     originalPrice: "1299",
  //     rating: 5,
  //     description: "All 12 zodiac symbols in sacred design"
  //   },
  //   {
  //     id: "16",
  //     image: rashi,
  //     title: "Personalized Rashi Stone",
  //     price: "799",
  //     originalPrice: "999",
  //     rating: 4,
  //     description: "Gemstone based on your birth chart"
  //   }
  // ];




  const rudrakshProducts = [
    {
      id: "1",
      name: "Amethyst Crystal Cluster",
      description: "Natural amethyst cluster perfect for meditation and spiritual cleansing. Promotes tranquility and inner peace.",
      price: 89.99,
      originalPrice: 129.99,
      image: rudraksha.src,
      category: "Crystals",
      rating: 4.8,
      reviewCount: 156,
      inStock: true,
      isNew: true,
      isFeatured: true,
      tags: ["healing", "meditation", "energy"],
      benefits: ["Promotes mental clarity", "Enhances spiritual awareness", "Reduces stress and anxiety"]
    },
    {
      id: "2",
      name: "Sage Smudge Bundle Set",
      description: "Ethically sourced white sage bundles for cleansing negative energy and purifying sacred spaces.",
      price: 24.99,
      originalPrice: 34.99,
      image: rudraksha.src,
      category: "Sage & Incense",
      rating: 4.9,
      reviewCount: 203,
      inStock: true,
      isFeatured: false,
      tags: ["cleansing", "purification", "ritual"],
      benefits: ["Clears negative energy", "Purifies living spaces", "Enhances meditation practice"]
    },
    {
      id: "3",
      name: "Tibetan Singing Bowl",
      description: "Handcrafted brass singing bowl with wooden striker. Creates beautiful resonant tones for meditation.",
      price: 67.50,
      image: rudraksha.src,
      category: "Sound Healing",
      rating: 4.7,
      reviewCount: 89,
      inStock: true,
      isNew: false,
      tags: ["meditation", "sound", "healing"],
      benefits: ["Promotes deep relaxation", "Balances chakras", "Enhances focus"]
    },
    {
      id: "4",
      name: "Rose Quartz Heart Stone",
      description: "Beautiful rose quartz heart-shaped stone, known as the stone of unconditional love and healing.",
      price: 19.99,
      originalPrice: 29.99,
      image: rudraksha.src,
      category: "Crystals",
      rating: 4.6,
      reviewCount: 142,
      inStock: false,
      isFeatured: false,
      tags: ["love", "healing", "heart"],
      benefits: ["Attracts love and compassion", "Heals emotional wounds", "Opens the heart chakra"]
    },
  ];

  const sweetProducts = [
    {
      id: "1",
      name: "Amethyst Crystal Cluster",
      description: "Natural amethyst cluster perfect for meditation and spiritual cleansing. Promotes tranquility and inner peace.",
      price: 89.99,
      originalPrice: 129.99,
      image: sweets.src,
      category: "Crystals",
      rating: 4.8,
      reviewCount: 156,
      inStock: true,
      isNew: true,
      isFeatured: true,
      tags: ["healing", "meditation", "energy"],
      benefits: ["Promotes mental clarity", "Enhances spiritual awareness", "Reduces stress and anxiety"]
    },
    {
      id: "2",
      name: "Sage Smudge Bundle Set",
      description: "Ethically sourced white sage bundles for cleansing negative energy and purifying sacred spaces.",
      price: 24.99,
      originalPrice: 34.99,
      image: sweets.src,
      category: "Sage & Incense",
      rating: 4.9,
      reviewCount: 203,
      inStock: true,
      isFeatured: false,
      tags: ["cleansing", "purification", "ritual"],
      benefits: ["Clears negative energy", "Purifies living spaces", "Enhances meditation practice"]
    },
    {
      id: "3",
      name: "Tibetan Singing Bowl",
      description: "Handcrafted brass singing bowl with wooden striker. Creates beautiful resonant tones for meditation.",
      price: 67.50,
      image: sweets.src,
      category: "Sound Healing",
      rating: 4.7,
      reviewCount: 89,
      inStock: true,
      isNew: false,
      tags: ["meditation", "sound", "healing"],
      benefits: ["Promotes deep relaxation", "Balances chakras", "Enhances focus"]
    },
    {
      id: "4",
      name: "Rose Quartz Heart Stone",
      description: "Beautiful rose quartz heart-shaped stone, known as the stone of unconditional love and healing.",
      price: 19.99,
      originalPrice: 29.99,
      image: sweets.src,
      category: "Crystals",
      rating: 4.6,
      reviewCount: 142,
      inStock: false,
      isFeatured: false,
      tags: ["love", "healing", "heart"],
      benefits: ["Attracts love and compassion", "Heals emotional wounds", "Opens the heart chakra"]
    },
  ];

  const bookProducts = [
    {
      id: "1",
      name: "Amethyst Crystal Cluster",
      description: "Natural amethyst cluster perfect for meditation and spiritual cleansing. Promotes tranquility and inner peace.",
      price: 89.99,
      originalPrice: 129.99,
      image: books.src,
      category: "Crystals",
      rating: 4.8,
      reviewCount: 156,
      inStock: true,
      isNew: true,
      isFeatured: true,
      tags: ["healing", "meditation", "energy"],
      benefits: ["Promotes mental clarity", "Enhances spiritual awareness", "Reduces stress and anxiety"]
    },
    {
      id: "2",
      name: "Sage Smudge Bundle Set",
      description: "Ethically sourced white sage bundles for cleansing negative energy and purifying sacred spaces.",
      price: 24.99,
      originalPrice: 34.99,
      image: books.src,
      category: "Sage & Incense",
      rating: 4.9,
      reviewCount: 203,
      inStock: true,
      isFeatured: false,
      tags: ["cleansing", "purification", "ritual"],
      benefits: ["Clears negative energy", "Purifies living spaces", "Enhances meditation practice"]
    },
    {
      id: "3",
      name: "Tibetan Singing Bowl",
      description: "Handcrafted brass singing bowl with wooden striker. Creates beautiful resonant tones for meditation.",
      price: 67.50,
      image: books.src,
      category: "Sound Healing",
      rating: 4.7,
      reviewCount: 89,
      inStock: true,
      isNew: false,
      tags: ["meditation", "sound", "healing"],
      benefits: ["Promotes deep relaxation", "Balances chakras", "Enhances focus"]
    },
    {
      id: "4",
      name: "Rose Quartz Heart Stone",
      description: "Beautiful rose quartz heart-shaped stone, known as the stone of unconditional love and healing.",
      price: 19.99,
      originalPrice: 29.99,
      image: books.src,
      category: "Crystals",
      rating: 4.6,
      reviewCount: 142,
      inStock: false,
      isFeatured: false,
      tags: ["love", "healing", "heart"],
      benefits: ["Attracts love and compassion", "Heals emotional wounds", "Opens the heart chakra"]
    },
  ];

  const rashiProducts = [
    {
      id: "1",
      name: "Amethyst Crystal Cluster",
      description: "Natural amethyst cluster perfect for meditation and spiritual cleansing. Promotes tranquility and inner peace.",
      price: 89.99,
      originalPrice: 129.99,
      image: books.src,
      category: "Crystals",
      rating: 4.8,
      reviewCount: 156,
      inStock: true,
      isNew: true,
      isFeatured: true,
      tags: ["healing", "meditation", "energy"],
      benefits: ["Promotes mental clarity", "Enhances spiritual awareness", "Reduces stress and anxiety"]
    },
    {
      id: "2",
      name: "Sage Smudge Bundle Set",
      description: "Ethically sourced white sage bundles for cleansing negative energy and purifying sacred spaces.",
      price: 24.99,
      originalPrice: 34.99,
      image: books.src,
      category: "Sage & Incense",
      rating: 4.9,
      reviewCount: 203,
      inStock: true,
      isFeatured: false,
      tags: ["cleansing", "purification", "ritual"],
      benefits: ["Clears negative energy", "Purifies living spaces", "Enhances meditation practice"]
    },
    {
      id: "3",
      name: "Tibetan Singing Bowl",
      description: "Handcrafted brass singing bowl with wooden striker. Creates beautiful resonant tones for meditation.",
      price: 67.50,
      image: books.src,
      category: "Sound Healing",
      rating: 4.7,
      reviewCount: 89,
      inStock: true,
      isNew: false,
      tags: ["meditation", "sound", "healing"],
      benefits: ["Promotes deep relaxation", "Balances chakras", "Enhances focus"]
    },
    {
      id: "4",
      name: "Rose Quartz Heart Stone",
      description: "Beautiful rose quartz heart-shaped stone, known as the stone of unconditional love and healing.",
      price: 19.99,
      originalPrice: 29.99,
      image: books.src,
      category: "Crystals",
      rating: 4.6,
      reviewCount: 142,
      inStock: false,
      isFeatured: false,
      tags: ["love", "healing", "heart"],
      benefits: ["Attracts love and compassion", "Heals emotional wounds", "Opens the heart chakra"]
    },
  ];


  return (
    <div style={{ minHeight: '100vh' }}>
      <HeroSection />

      <Section
        title="Sacred Rudraksha Collection"
        subtitle="Authentic blessed beads from the holy lands for spiritual growth and divine protection"
        products={rudrakshProducts}
        viewAllLink="/rudraksha"
      />

      <div style={{ background: 'linear-gradient(180deg, rgba(255, 179, 102, 0.1), rgba(255, 215, 0, 0.3))' }}>
        <Section
          title="Divine Sweets & Prasadam"
          subtitle="Traditional blessed sweets prepared with devotion and served as sacred offerings"
          products={sweetProducts}
          viewAllLink="/sweets"
        />
      </div>

      <Section
        title="Sacred Books & Literature"
        subtitle="Holy texts, spiritual guides, and devotional literature for your spiritual journey"
        products={bookProducts}
        viewAllLink="/books"
      />


      <div style={{ background: 'linear-gradient(180deg, rgba(255, 179, 102, 0.1), rgba(255, 215, 0, 0.3))' }}>
        <Section
          title="Rashi & Zodiac Items"
          subtitle="Personalized spiritual items based on your zodiac sign and birth chart"
          products={rashiProducts}
          viewAllLink="/rashi"
        />
      </div>
      <ZodiacSection />
    </div>
  );
};

export default Home;