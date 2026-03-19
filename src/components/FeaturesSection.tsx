import { Briefcase, Car, Home, Swords, HeartPulse, Building2 } from "lucide-react";

const features = [
  {
    icon: Briefcase,
    title: "Nghề nghiệp đa dạng",
    desc: "Cảnh sát, bác sĩ, thợ cơ khí, doanh nhân — hàng chục nghề nghiệp với hệ thống phát triển sâu.",
  },
  {
    icon: Car,
    title: "Hệ thống xe cộ",
    desc: "Hàng trăm mẫu xe custom, từ xe hơi đến mô tô và xe đặc chủng.",
  },
  {
    icon: Home,
    title: "Bất động sản",
    desc: "Mua bán nhà cửa, căn hộ và cửa hàng — xây dựng đế chế riêng.",
  },
  {
    icon: Swords,
    title: "Hệ thống băng đảng",
    desc: "Tham gia hoặc thành lập băng đảng, chiến tranh lãnh thổ, buôn bán ngầm.",
  },
  {
    icon: HeartPulse,
    title: "Y tế & Cứu hộ",
    desc: "Hệ thống sức khỏe chi tiết, bệnh viện, xe cứu thương hoạt động thực tế.",
  },
  {
    icon: Building2,
    title: "Kinh tế sống động",
    desc: "Nền kinh tế do người chơi vận hành — ngân hàng, cổ phiếu, doanh nghiệp.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-neon-orange font-display text-xs tracking-[0.3em] uppercase mb-3">
            Tính năng
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-glow text-primary">
            TRẢI NGHIỆM ĐỈNH CAO
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group bg-card border border-border rounded-sm p-8 hover:border-primary/40 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-3">
                {f.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
