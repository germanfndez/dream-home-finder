import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Announcement Bar */}
      <div className="announcement-bar py-2.5 px-4 text-center">
        <p className="text-sm text-primary-foreground flex items-center justify-center gap-2">
          🎉 $7M USD raised.
          <a href="#" className="font-medium underline-offset-2 hover:underline inline-flex items-center gap-1">
            Read more <ArrowRight className="w-3 h-3" />
          </a>
        </p>
      </div>

      {/* Main Navbar */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.a
              href="/"
              className="flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <div className="w-2 h-2 rounded-full bg-primary opacity-70" />
                <div className="w-2 h-2 rounded-full bg-primary opacity-40" />
              </div>
              <span className="text-xl font-bold text-foreground">Darwin AI</span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              <div className="flex items-center bg-secondary rounded-full px-2 py-1.5">
                <NavItem label="Industries" hasDropdown />
                <NavItem label="AI Employees" hasDropdown />
                <NavItem label="About" />
                <NavItem label="Partners" />
                <NavItem label="Resources" hasDropdown />
                <div className="flex items-center gap-1 px-3 py-1.5 text-sm text-muted-foreground cursor-pointer hover:text-foreground transition-colors">
                  🌐 EN
                  <ChevronDown className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Button variant="ghost" size="sm" className="text-muted-foreground">
                Login
              </Button>
              <Button size="sm" className="rounded-full gap-2 group">
                Try Darwin
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden bg-background border-b border-border"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              <a href="#" className="block py-2 text-foreground hover:text-primary transition-colors">Industries</a>
              <a href="#" className="block py-2 text-foreground hover:text-primary transition-colors">AI Employees</a>
              <a href="#" className="block py-2 text-foreground hover:text-primary transition-colors">About</a>
              <a href="#" className="block py-2 text-foreground hover:text-primary transition-colors">Partners</a>
              <a href="#" className="block py-2 text-foreground hover:text-primary transition-colors">Resources</a>
              <div className="pt-4 space-y-3">
                <Button variant="outline" className="w-full">Login</Button>
                <Button className="w-full gap-2">
                  Try Darwin
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </>
  );
};

const NavItem = ({ label, hasDropdown = false }: { label: string; hasDropdown?: boolean }) => (
  <a
    href="#"
    className="flex items-center gap-1 px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
  >
    {label}
    {hasDropdown && <ChevronDown className="w-3.5 h-3.5" />}
  </a>
);

export default Navbar;
