import { Users, Shield, Zap } from "lucide-react";

const stats = [
  { icon: Users, value: "10,000+", label: "Người chơi" },
  { icon: Shield, value: "24/7", label: "Hoạt động" },
  { icon: Zap, value: "60ms", label: "Ping trung bình" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-neon-orange font-display text-xs tracking-[0.3em] uppercase mb-3">
            Về chúng tôi
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-glow text-primary mb-6">
            THẾ GIỚI CỦA BẠN
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Free City Roleplay là server roleplay hàng đầu, nơi bạn có thể trải nghiệm
            cuộc sống thành phố với hệ thống gameplay phong phú, cộng đồng thân thiện
            và những câu chuyện không giới hạn.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-card border border-border rounded-sm p-8 text-center hover:border-primary/40 hover:box-glow transition-all duration-500"
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
              <p className="text-4xl font-display font-black text-foreground mb-2">
                {stat.value}
              </p>
              <p className="text-muted-foreground font-body text-lg uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
