 // @flow strict
import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        {/* Logo / Name */}
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className="text-[#16f2b3] text-3xl font-bold"
          >
            Saurabh Kasaudhan
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col md:flex-row md:space-x-6 text-sm">
          <li>
            <Link href="/#about" className="px-4 py-2 text-white hover:text-pink-600 transition-colors">
              ABOUT
            </Link>
          </li>
          <li>
            <Link href="/#experience" className="px-4 py-2 text-white hover:text-pink-600 transition-colors">
              EXPERIENCE
            </Link>
          </li>
          <li>
            <Link href="/#skills" className="px-4 py-2 text-white hover:text-pink-600 transition-colors">
              SKILLS
            </Link>
          </li>
          <li>
            <Link href="/#education" className="px-4 py-2 text-white hover:text-pink-600 transition-colors">
              EDUCATION
            </Link>
          </li>
          
          <li>
            <Link href="/#projects" className="px-4 py-2 text-white hover:text-pink-600 transition-colors">
              PROJECTS
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
