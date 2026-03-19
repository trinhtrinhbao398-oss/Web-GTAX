import heroCity from "@/assets/hero-city.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroCity}
          alt="Free City Roleplay"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto animate-slide-up">
        <p className="text-neon-orange font-display text-sm md:text-base tracking-[0.3em] uppercase mb-4">
          Chào mừng đến với
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-glow text-primary mb-6 leading-tight">
          FREE CITY
          <br />
          <span className="text-foreground">ROLEPLAY</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground font-body max-w-2xl mx-auto mb-10 leading-relaxed">
          Thành phố tự do — nơi mọi câu chuyện bắt đầu. Nhập vai, tạo cuộc sống mới
          và trở thành bất kỳ ai bạn muốn trong thế giới roleplay sống động nhất.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#features"
            className="px-8 py-4 bg-primary text-primary-foreground font-display font-bold text-sm tracking-wider uppercase rounded-sm box-glow hover:scale-105 transition-transform duration-300"
          >
            Khám Phá Ngay
          </a>
          <a
            href="#about"
            className="px-8 py-4 border border-primary/40 text-primary font-display font-bold text-sm tracking-wider uppercase rounded-sm hover:bg-primary/10 transition-colors duration-300"
          >
            Tìm Hiểu Thêm
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse-glow" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
