import { FloatingNav } from "@/components/ui/floating-navbar";

function Header() {
  const navItems = [
    { name: "Services", link: "#services" },
    { name: "Projects", link: "#projects" },
    { name: "Process", link: "#process" },
    { name: "Contact", link: "#contact" },
  ];
  return (
    <div>
      <FloatingNav navItems={navItems} />
    </div>
  );
}

export default Header;
