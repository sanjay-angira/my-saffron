const ZodiacSection = () => {
  return (
    <section style={{ padding: "4rem 0", background: "linear-gradient(135deg, rgba(245, 92, 27, 0.1), rgba(255, 122, 61, 0.2))", minHeight: "400px" }}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Discover Your Zodiac Sign</h2>
          <p className="section-subtitle">
            Explore personalized spiritual items and guidance based on your zodiac sign
          </p>
        </div>

        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", 
          gap: "1.5rem", 
          marginBottom: "3rem" 
        }}>
          {["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"].map((sign) => (
            <div 
              key={sign}
              style={{
                background: "white",
                borderRadius: "1rem",
                padding: "1.5rem",
                textAlign: "center",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                border: "1px solid #e0e0e0",
                transition: "all 0.3s ease",
                cursor: "pointer"
              }}
            >
              <div style={{ fontSize: "3rem", marginBottom: "1rem", color: "var(--saffron-primary)" }}>
                {sign === "Aries" && "♈"}
                {sign === "Taurus" && "♉"}
                {sign === "Gemini" && "♊"}
                {sign === "Cancer" && "♋"}
                {sign === "Leo" && "♌"}
                {sign === "Virgo" && "♍"}
                {sign === "Libra" && "♎"}
                {sign === "Scorpio" && "♏"}
                {sign === "Sagittarius" && "♐"}
                {sign === "Capricorn" && "♑"}
                {sign === "Aquarius" && "♒"}
                {sign === "Pisces" && "♓"}
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "600", color: "var(--brown)", marginBottom: "0.5rem" }}>
                {sign}
              </h3>
              <button className="btn btn-outline btn-sm">
                View Items
              </button>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <button className="btn btn-primary btn-lg">
            Explore All Zodiac Items
          </button>
        </div>
      </div>
    </section>
  );
};

export default ZodiacSection;