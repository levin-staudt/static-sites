export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-lg mx-auto">
        {/* Header Section */}
        <div className="bg-black text-white p-6">
          <div className="mb-6">
            <h1 className="text-4xl font-bold mb-2 tracking-tight">John Doe</h1>
            <p className="text-lg text-white/80">Software Developer</p>
          </div>
          <p className="text-white/70 leading-relaxed text-sm">
            Passionate developer specializing in web technologies and digital
            solutions. Creating elegant and efficient applications with modern
            frameworks.
          </p>
        </div>

        {/* Content Section */}
        <div className="p-6 space-y-8">
          {/* Contact */}
          <div>
            <h2 className="text-lg font-bold text-black mb-4 border-b border-black pb-2">
              Contact
            </h2>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-black/60 mb-1 uppercase tracking-wide">
                  Email
                </p>
                <a
                  href="mailto:hello@example.com"
                  className="text-black hover:underline"
                >
                  hello@example.com
                </a>
              </div>

              <div>
                <p className="text-xs text-black/60 mb-1 uppercase tracking-wide">
                  Phone
                </p>
                <a
                  href="tel:+491234567890"
                  className="text-black hover:underline"
                >
                  +49 123 456 7890
                </a>
              </div>

              <div>
                <p className="text-xs text-black/60 mb-1 uppercase tracking-wide">
                  Location
                </p>
                <span className="text-black">Berlin, Germany</span>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-lg font-bold text-black mb-4 border-b border-black pb-2">
              Skills
            </h2>
            <div className="space-y-2">
              <div className="border border-black px-3 py-2">
                <span className="text-sm">TypeScript</span>
              </div>
              <div className="border border-black px-3 py-2">
                <span className="text-sm">Next.js</span>
              </div>
              <div className="border border-black px-3 py-2">
                <span className="text-sm">Cloudflare Workers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
