const FooterSection = () => {
  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="font-display font-black text-xl text-primary text-glow">
            FREE CITY
          </span>
          <span className="text-muted-foreground font-display text-xs tracking-widest">
            ROLEPLAY
          </span>
        </div>
        <p className="text-muted-foreground text-sm">
          © 2026 Free City Roleplay. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
            Discord
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
            Facebook
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
            Quy tắc
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
