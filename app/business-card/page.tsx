export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="overflow-hidden">
          <div className="text-white p-8 md:p-12">
            <h1 className="text-4xl font-bold mb-2">
              John Doe
            </h1>
            <p className="text-xl text-gray-400">
              Software Developer
            </p>
          </div>

          <div className="p-8 md:p-12">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4 border-b-2 border-black pb-2">
                About
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Passionate developer specializing in web technologies and digital solutions.
                Creating elegant and efficient applications with modern frameworks.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4 border-b-2 border-black pb-2">
                Contact
              </h2>
              <div className="space-y-3">
                <div className="flex items-center group">
                  <span className="text-gray-700 font-medium w-24">Email: </span>
                  <a
                    href="mailto:hello@example.com"
                    className="text-black hover:text-gray-600 transition-colors"
                  >
                    hello@example.com
                  </a>
                </div>
                <div className="flex items-center">
                  <p className="text-gray-700 font-medium w-24">Phone: 
                    <a
                      href="tel:+491234567890"
                      className="text-black hover:text-gray-600 transition-colors"
                    >
                      +49 123 456 7890
                    </a></p>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-700 font-medium w-24">Location: Berlin, Germany</span>
                </div>
              </div>
            </div>


            {/* Skills/Technologies */}
            <div>
              <h2 className="text-2xl font-bold text-black mb-4 border-b-2 border-black pb-2">
                Skills
              </h2>
              <p>Typescript, Next.js, Cloudflare Workers</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
