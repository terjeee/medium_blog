import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between px-5 max-w-7xl mx-auto">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <img src="https://links.papareact.com/yvf" alt="logo-medium" className="w-44 object-contain cursor-pointer" />
        </Link>
        <div className="hidden md:inline-flex items-center space-x-5">
          <h3>About</h3>
          <h3>Contact</h3>
          <h3 className="px-4 py-1 text-white bg-green-600 rounded-full">Follow</h3>
        </div>
      </div>
      <div className="flex items-center space-x-5 text-green-600">
        <h3 className="flex items-center space-x-5 text-green-600">Sign In</h3>
        <h3 className="px-4 py-1 border border-green-600 rounded-full">Get Started</h3>
      </div>
    </header>
  );
}
