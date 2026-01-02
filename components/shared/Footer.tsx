const Footer = () => {
  return (
    <footer className="border-t border-border mt-16">
      <div className="max-w-4xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Sharpine
        </p>
        <nav className="flex items-center gap-6">
          <a
            href="#"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </a>
          <a
            href="#"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            Terms
          </a>
          <a
            href="#"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            Privacy
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
