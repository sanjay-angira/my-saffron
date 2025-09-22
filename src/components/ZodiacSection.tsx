const ZodiacSection = () => {
  const zodiacSigns = [
    "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
    "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"
  ];

  const icons: Record<string, string> = {
    Aries: "♈", Taurus: "♉", Gemini: "♊", Cancer: "♋",
    Leo: "♌", Virgo: "♍", Libra: "♎", Scorpio: "♏",
    Sagittarius: "♐", Capricorn: "♑", Aquarius: "♒", Pisces: "♓"
  };

  return (
    <section
      style={{
        padding: "4rem 20px",
        background: "linear-gradient(135deg, rgba(245, 92, 27, 0.1), rgba(255, 122, 61, 0.2))",
        minHeight: "400px"
      }}
    >
      <div className="container">
        <div className="section-header text-center mb-8">
          <h2 className="section-title text-2xl font-bold">Discover Your Zodiac Sign</h2>
          <p className="section-subtitle text-gray-600">
            Explore personalized spiritual items and guidance based on your zodiac sign
          </p>
        </div>

        {/* ✅ Use Tailwind grid system */}
        <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-6 gap-6 mb-12">
          {zodiacSigns.map((sign) => (
            <div
              key={sign}
              className="bg-white rounded-xl p-6 text-center shadow-md border border-gray-200 transition-transform duration-300 cursor-pointer hover:scale-105"
            >
              <div className="text-5xl mb-4 text-[var(--saffron-primary)]">
                {icons[sign]}
              </div>
              <h3 className="text-lg font-semibold text-[var(--brown)] mb-2">
                {sign}
              </h3>
              <button className="btn btn-outline btn-sm">View Items</button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="btn btn-primary btn-lg">Explore All Zodiac Items</button>
        </div>
      </div>
    </section>
  );
};

export default ZodiacSection;
