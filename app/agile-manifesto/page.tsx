export default function Page() {
  const principles = [
    "Our highest priority is to satisfy the customer through early and continuous delivery of valuable software.",
    "Welcome changing requirements, even late in development. Agile processes harness change for the customer's competitive advantage.",
    "Deliver working software frequently, from a couple of weeks to a couple of months, with a preference to the shorter timescale.",
    "Business people and developers must work together daily throughout the project.",
    "Build projects around motivated individuals. Give them the environment and support they need, and trust them to get the job done.",
    "The most efficient and effective method of conveying information to and within a development team is face-to-face conversation.",
    "Working software is the primary measure of progress.",
    "Agile processes promote sustainable development. The sponsors, developers, and users should be able to maintain a constant pace indefinitely.",
    "Continuous attention to technical excellence and good design enhances agility.",
    "Simplicity--the art of maximizing the amount of work not done--is essential.",
    "The best architectures, requirements, and designs emerge from self-organizing teams.",
    "At regular intervals, the team reflects on how to become more effective, then tunes and adjusts its behavior accordingly.",
  ];

  return (
    <div className="p-7 font-sans w-full h-full">
      <h1 className="text-3xl font-mono text-center my-8 px-8 mx-auto font-bold text-pink-700">
        Agile Manifesto
      </h1>
      <div className="text-lg font-sans text-center max-w-2xl px-8 mx-auto mt-10">
        {principles.map((principle, index) => (
          <p key={index} className="my-7">
            {principle}
          </p>
        ))}
      </div>
      <div className="text-xs text-center max-w-2xl mx-auto mt-5">
        Credit agilemanifesto.org
      </div>
      <footer className="text-xs ml-3 mt-10 mb-3 font-bold">BY LEVIN</footer>
    </div>
  );
}
