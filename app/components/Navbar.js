import Link from 'next/link';

export default function Navbar() {
    return (
        <nav>
            <div className="flex p-4 items-center justify-between bg-[#8955A3] text-white h-14">
                <Link href="/" className="md:hover:underline">Home</Link>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/" className="md:hover:underline">About</Link>
                    </li>
                    <li>
                        <Link href="/" className="md:hover:underline">Services</Link>
                    </li>
                    <li>
                        <Link href="/" className="md:hover:underline">Gallery</Link>
                    </li>
                    <li>
                        <Link href="/" className="md:hover:underline">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}