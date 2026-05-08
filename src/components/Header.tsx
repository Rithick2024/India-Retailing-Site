import { Search, Menu, CloudSun } from "lucide-react";

export default function Header() {
  const mainNav = [
    { name: "Home", active: true },
    { name: "Categories", active: false },
    { name: "IR Prime", active: false },
    { name: "Events", active: false },
    { name: "Bookstore", active: false },
    { name: "Newsletter", active: false },
    { name: "Video", active: false },
  ];

  const subNav = [
    "Fashion & Lifestyle",
    "Beauty & Wellness",
    "Food & Beverage",
    "Consumer Durables & IT",
    "Entertainment",
    "Home Decor & Furnishing",
    "Specialty Retail"
  ];

  return (
    <header className="w-full bg-white flex flex-col z-50">
      {/* Top Banner Ad Placeholder */}
      <div className="w-full flex justify-center bg-white">
        <div className="w-full max-w-[970px] h-[250px] bg-[#E84E89] relative overflow-hidden flex items-center justify-center">
          <img
            src="/header.png"
            alt="Ad Banner"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="max-w-[1200px] w-full mx-auto px-4">
        {/* Row 1: Search, Logo, Auth */}
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center text-gray-400 w-1/3">
            <Search size={18} className="mr-2" />
            <input
              type="text"
              placeholder="Search here..."
              className="bg-transparent text-sm focus:outline-none w-full placeholder-gray-400"
            />
          </div>

          <div className="w-1/3 flex justify-center">
            <img
              src="/logo.png"
              alt="Ad Banner"
              className="object-cover"
            />
          </div>

          <div className="flex items-center justify-end space-x-3 w-1/3">
            <button className="bg-[#e30613] text-white px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
              SUBSCRIBE
            </button>
            <button className="bg-white border border-gray-200 text-black px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
              SIGN IN
            </button>
          </div>
        </div>

        {/* Row 2: Menu, Nav Links, Date */}
        <div className="flex justify-between items-center py-4 border-t border-gray-100">
          <button className="text-black">
            <Menu size={24} />
          </button>

          <nav className="flex space-x-8">
            {mainNav.map((item) => (
              <a
                key={item.name}
                href=""
                className={`text-[15px] font-bold ${item.active ? 'text-[#e30613]' : 'text-black hover:text-[#e30613]'}`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center text-gray-500 text-sm font-medium">
            <CloudSun size={18} className="mr-2" />
            Friday, 30 June 2023
          </div>
        </div>

        {/* Row 3: Sub Nav Links */}
        <div className="flex justify-center items-center py-4 border-t border-gray-100">
          <div className="flex flex-wrap justify-center items-center text-xs font-medium text-gray-500">
            {subNav.map((item, idx) => (
              <span key={item} className="flex items-center">
                <a href="" className="hover:text-black transition-colors">{item}</a>
                {idx < subNav.length - 1 && <span className="mx-2 text-gray-300">·</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
