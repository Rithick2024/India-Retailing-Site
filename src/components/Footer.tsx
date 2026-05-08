import { Facebook, Linkedin, Youtube, Instagram, Phone, Mail } from "lucide-react";

export default function Footer() {
  const sections = [
    {
      title: "ABOUT US",
      links: ["About IndiaRetailing.com", "Meet the team", "Advertise with us", "Contact us"]
    },
    {
      title: "Categories",
      links: ["Fashion & Lifestyle", "Beauty & Wellness", "Food & Beverage", "Consumer Durables & IT", "Entertainment", "Home Décor & Furnishing", "Specialty Retail"]
    },
    {
      title: "Features",
      links: ["Leaders Ink", "People", "Finance & Funding", "D2C", "Shopping Centers", "Results", "Research", "Case Studies"]
    },
    {
      title: "Events",
      links: ["India Food Forum", "Shopping Centre Next", "Phygital Retail Convention", "India D2C Summit & Awards", "Internet Commerce Summit"]
    }
  ];

  const bottomSections = [
    {
      title: "Bookstore",
      links: ["Magazines", "Yearbooks", "Other publications"]
    },
    {
      title: "Videos",
      links: ["Retail with Rasul Bailay", "The Store", "IR Studio"]
    },
    {
      title: "IR Prime Subscription Box",
      links: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"]
    },
    {
      title: "Retail Functions",
      links: ["Marketing", "Technology", "Operations", "HR", "Supply Chain"]
    }
  ];

  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-[1240px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12">

          {/* Left Column: Info & Socials */}
          <div className="lg:col-span-4">
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="IndiaRetailing" className="h-10 mb-6" />

            <div className="space-y-6 mb-8">
              <div>
                <h5 className="text-[12px] font-bold text-gray-500 mb-2">New Delhi</h5>
                <p className="text-[12px] text-gray-400 leading-relaxed max-w-[280px]">
                  Images Multimedia Ltd.<br />
                  S-61 A, Pocket S, Okhla Phase II, Okhla Industrial Estate, New Delhi, Delhi 110020<br />
                  Images Multimedia Ltd.
                </p>
              </div>

              <div>
                <h5 className="text-[12px] font-bold text-gray-500 mb-2">Mumbai</h5>
                <p className="text-[12px] text-gray-400 leading-relaxed max-w-[280px]">
                  E 519, Floral Deck Plaza<br />
                  Central MIDC Road, Opp. SEEPZ.<br />
                  Andheri (East)<br />
                  Mumbai 400093
                </p>
              </div>
            </div>

            <div className="space-y-2 mb-8">
              <h5 className="text-[14px] font-bold text-gray-700">content us</h5>
              <div className="flex items-center gap-2 text-[13px] text-gray-500">
                <Phone size={14} className="text-gray-400" />
                <span>+91-9867355551</span>
              </div>
              <div className="flex items-center gap-2 text-[13px] text-gray-500">
                <Mail size={14} className="text-gray-400" />
                <span>editor@indiaretailing.com</span>
              </div>
            </div>

            <div className="mb-8">
              <h5 className="text-[14px] font-bold text-gray-700 mb-4">Our Social Media</h5>
              <div className="flex gap-3">
                {[Facebook, Linkedin, Youtube, Instagram].map((Icon, idx) => (
                  <a key={idx} href="" className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-red-600 hover:bg-red-50 transition-colors shadow-sm">
                    <Icon size={18} />
                  </a>
                ))}
                <a href="" className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-red-600 hover:bg-red-50 transition-colors shadow-sm font-bold text-xs">
                  G+
                </a>
              </div>
            </div>

            <div>
              <h5 className="text-[14px] font-bold text-gray-700 mb-4">Download Indiaretailing App</h5>
              <div className="flex gap-3">
                <img src={`${import.meta.env.BASE_URL}googleplay.png`} alt="Google Play" className="h-8 shadow-sm cursor-pointer" />
                <img src={`${import.meta.env.BASE_URL}appstore.png`} alt="App Store" className="h-8 shadow-sm cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Right Columns: Links Grid */}
          <div className="lg:col-span-8 flex flex-col gap-16">
            {/* Top Links Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {sections.map((section, idx) => (
                <div key={idx}>
                  <h4 className="text-[13px] font-bold text-gray-800 mb-6 uppercase tracking-wider">{section.title}</h4>
                  <ul className="space-y-4">
                    {section.links.map((link, lIdx) => (
                      <li key={lIdx}>
                        <a href="" className="text-[12px] text-gray-500 hover:text-red-600 transition-colors font-medium">{link}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Bottom Links Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {bottomSections.map((section, idx) => (
                <div key={idx}>
                  <h4 className="text-[13px] font-bold text-gray-800 mb-6 uppercase tracking-wider">{section.title}</h4>
                  <ul className="space-y-4">
                    {section.links.map((link, lIdx) => (
                      <li key={lIdx}>
                        <a href="" className="text-[12px] text-gray-500 hover:text-red-600 transition-colors font-medium">{link}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 pt-8 mt-12 text-center">
          <p className="text-[13px] text-gray-400 font-medium tracking-wide">
            Copyright © 2023 indiaretailing.com. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
