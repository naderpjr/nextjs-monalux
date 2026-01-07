import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { GradientBars } from "../ui/gradient-bars";
const data = {
  instaLink: "https://instagram.com/monaluxstudio",
  contact: {
    email: "mohammadnaderekrami@gmail.com",
    phone: "+93 730842693",
    address: "Kabul, Afghanistan",
  },
  company: {
    name: "Monalux Studio",
    description:
      "Building beautiful and functional websites with modern technologies. We help startups and businesses create their digital presence.",
  },
};
const socialLinks = [
  { icon: Instagram, label: "Instagram", href: data.instaLink },
];

const contactInfo = [
  { icon: Mail, text: data.contact.email, href: `mailto:${data.contact.email}` },
  { icon: Phone, text: data.contact.phone, href: `tel:${data.contact.phone}` },
  { icon: MapPin, text: data.contact.address, isAddress: true },
];
export default function Footer4Col() {
  return (

    <footer className="bg-black w-full place-self-end rounded-t-xl">
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="text-primary flex justify-center gap-2 sm:justify-start">
              <span className="text-2xl font-semibold">
                {data.company.name}
              </span>
            </div>

            <p className="text-foreground/50 mt-6 max-w-full sm:max-w-xs lg:max-w-md text-center sm:text-left leading-relaxed">
              {data.company.description}
            </p>

            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <Link
                    prefetch={false}
                    href={href}
                    className="text-primary hover:text-primary/80 transition">
                    <span className="sr-only">{label}</span>
                    <Icon className="size-6" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 flex justify-center sm:justify-start">

            <div className="w-full max-w-sm text-center sm:text-left">
              <p className="text-lg font-medium">Contact Us</p>
              <ul className="mt-8 space-y-4 text-sm">
                {contactInfo.map(({ icon: Icon, text, isAddress, href }) => (
                  <li key={text}>
                    <a
                      className="flex items-start gap-2 justify-center sm:justify-start text-center sm:text-left"
                      href={href}>
                      <Icon className="text-primary size-5 shrink-0 shadow-sm" />
                      {isAddress ? (
                        <address className="break-all sm:break-normal text-secondary-foreground/70">
                          {text}
                        </address>
                      ) : (
                        <span className="break-all sm:break-normal text-secondary-foreground/70">
                          {text}
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm">
              <span className="block sm:inline">All rights reserved.</span>
            </p>

            <p className="text-secondary-foreground/70 mt-4 text-sm transition sm:order-first sm:mt-0">
              &copy; 2026 {data.company.name}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}