import Link from "next/link";

function SocialIcon({ children, label }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="w-8 h-8 rounded-full bg-brand-purple text-white flex items-center justify-center text-xs hover:brightness-110 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer aria-label="Site footer" className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-12 pb-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Logo & Socials */}
          <div>
            <Link href="/" className="inline-flex flex-col">
              <span className="font-script text-3xl text-brand-purple leading-tight">
                Prerna
              </span>
              <span className="text-[9px] tracking-[0.2em] uppercase text-gray-400 -mt-0.5">
                Makeup Studio
              </span>
            </Link>
            <div className="flex gap-2 mt-4">
              <SocialIcon label="Facebook">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </SocialIcon>
              <SocialIcon label="Twitter">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </SocialIcon>
              <SocialIcon label="Instagram">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="17.5" cy="6.5" r="1.5" />
                </svg>
              </SocialIcon>
            </div>
          </div>

          {/* About */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">About</h4>
            <ul className="space-y-2.5 text-sm text-gray-500">
              <li><Link href="/#services" className="hover:text-brand-purple transition-colors">Service</Link></li>
              <li><Link href="#" className="hover:text-brand-purple transition-colors">Course</Link></li>
              <li><Link href="#" className="hover:text-brand-purple transition-colors">Appointment</Link></li>
              <li><Link href="#" className="hover:text-brand-purple transition-colors">Business Relation</Link></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Community</h4>
            <ul className="space-y-2.5 text-sm text-gray-500">
              <li><Link href="#" className="hover:text-brand-purple transition-colors">Events</Link></li>
              <li><Link href="#" className="hover:text-brand-purple transition-colors">Invite a friend</Link></li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Socials</h4>
            <ul className="space-y-2.5 text-sm text-gray-500">
              <li><Link href="#" className="hover:text-brand-purple transition-colors">Instagram</Link></li>
              <li><Link href="#" className="hover:text-brand-purple transition-colors">Twitter</Link></li>
              <li><Link href="#" className="hover:text-brand-purple transition-colors">Facebook</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-400">
          <p>&copy;{new Date().getFullYear()} Prerna&apos;s Makeup Studio. All rights reserved</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-brand-purple transition-colors">Privacy &amp; Policy</Link>
            <Link href="#" className="hover:text-brand-purple transition-colors">Terms &amp; Condition</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
