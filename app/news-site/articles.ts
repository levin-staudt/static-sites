export default function Articles() {
  const articles = [
    {
      id: 1,
      type: "article",
      title: "Vay sichert sich 410 Millionen Dollar von Grab",
      description:
        "Remote-Driving-Startup erhält Mega-Investment aus Singapur.",
      author: "Sarah Weber",
      date: "2025-11-10",
      article:
        "Das Berliner Startup Vay steht kurz vor einem der größten Funding-Deals des Jahres. Der singapurische Super-App-Betreiber Grab will 410 Millionen Dollar in das Remote-Driving-Unternehmen investieren. Die Finanzierung ist an bestimmte Meilensteine gebunden, die Vay in den kommenden Monaten erreichen muss.\n\nVay gilt als Pionier im Bereich des ferngesteuerten Fahrens und hat bereits erfolgreich autonome Fahrdienste in mehreren Städten getestet. Die Technologie ermöglicht es geschulten Fahrern, Fahrzeuge aus der Ferne zu steuern – eine Alternative zu vollautonomen Systemen.\n\nMit dem frischen Kapital plant Vay die Expansion in neue Märkte und den Ausbau seiner Flotte. Grab erhofft sich durch die Partnerschaft einen strategischen Vorteil im wachsenden Mobilitätssektor.",
    },
    {
      id: 2,
      type: "article",
      title: "Sechs deutsche KI-Startups unter Europas Wachstumschampions",
      description:
        "Deutsche AI-Unternehmen dominieren in der Sifted 250 Liste.",
      author: "Michael Krause",
      date: "2025-11-08",
      article:
        "Deutschland behauptet sich als führender KI-Standort in Europa. Sechs deutsche AI-Startups haben es in die prestigeträchtige Sifted 250 Liste der am schnellsten wachsenden Unternehmen Europas geschafft.\n\nZu den Topperformern gehören Tl;dv mit ihrer KI-Meeting-Assistenz, Frontnow mit generativen AI-Lösungen für den Einzelhandel und N8n im Bereich Workflow-Automatisierung. Auch Neura Robotics im Bereich kognitive Robotik, Deepset für maßgeschneiderte AI-Lösungen und Fratch als AI-Recruiting-Tool überzeugten die Analysten.\n\nDie Erfolge zeigen, dass Deutschland nicht nur bei traditionellen B2B-Anwendungen stark ist, sondern zunehmend auch innovative Consumer-AI-Produkte hervorbringt. Experten sehen darin ein positives Signal für den gesamten europäischen Tech-Standort.",
    },
    {
      id: 3,
      type: "comment",
      title: "Der gefährliche Sprint zur 10-Milliarden-Bewertung",
      description:
        "Startups erreichen Decacorn-Status in Rekordzeit – ein Problem?",
      author: "Dr. Lisa Hoffmann",
      date: "2025-11-09",
      article:
        "Die Hälfte der europäischen Decacorns wurden dieses Jahr geboren. Einige erreichten die 10-Milliarden-Bewertung schneller als je zuvor. Doch ist diese Entwicklung wirklich ein Grund zum Feiern?\n\nDie Geschwindigkeit, mit der Startups heute Milliarden-Bewertungen erreichen, ist beeindruckend – und beunruhigend zugleich. Während frühere Tech-Giganten Jahre brauchten, um ihr Geschäftsmodell zu beweisen, reichen heute oft ambitionierte Pitch-Decks und vielversprechende Metriken.\n\nDas Problem: Viele dieser Bewertungen basieren auf Wachstumsprognosen, nicht auf nachhaltiger Profitabilität. Wenn die Märkte sich drehen oder das Wachstum stockt, platzen diese Bewertungen wie Seifenblasen. Investoren sollten kritischer hinschauen, Gründer realistischer planen. Sonst erleben wir 2026 ein böses Erwachen.",
    },
    {
      id: 4,
      type: "article",
      title: "Hamburg will Deutschlands zweiter DeepTech-Hub werden",
      description: "Neue Startup-Factory erhält 50 Millionen Euro Förderung.",
      author: "Thomas Becker",
      date: "2025-11-07",
      article:
        "Die Hansestadt Hamburg macht Ernst mit ihren Ambitionen im DeepTech-Bereich. Die neu gegründete 'Impossible Founders' Startup-Factory erhielt 50 Millionen Euro Förderung und startete am 1. Oktober offiziell ihren Betrieb.\n\nDas Projekt ist einer von zehn Gewinnern des EXIST-Startup-Factory-Programms. 10 Millionen Euro kommen direkt vom Bund, weitere 40 Millionen steuern Hamburger Stiftungen und Unternehmen bei. Die Startup-Factory wird sich auf innovative akademische Spin-offs im DeepTech-Sektor konzentrieren.\n\nStandort ist die historische Speicherstadt, Hamburgs berühmtes Lagerhausviertel. Die Stadt positioniert sich damit als Alternative zu München, das bisher als führender DeepTech-Standort in Deutschland galt. Experten erwarten positive Impulse für die gesamte norddeutsche Startup-Szene.",
    },
    {
      id: 5,
      type: "article",
      title: "Metropolis sammelt 500 Millionen bei 5 Milliarden Bewertung",
      description:
        "KI-gestütztes Parkplatz-Startup erreicht spektakuläre Series D.",
      author: "Jennifer Schulz",
      date: "2025-11-05",
      article:
        "Das US-amerikanische Startup Metropolis hat eine 500-Millionen-Dollar-Finanzierungsrunde bei einer Bewertung von 5 Milliarden Dollar abgeschlossen. Die Series D zählt zu den größten Mobility-Tech-Deals des Jahres.\n\nMetropolis nutzt künstliche Intelligenz, um Parkplätze und Real-World-Payments zu optimieren. Die Technologie ermöglicht kontaktloses Parken ohne Schranken oder Tickets – Nummernschilderkennung und automatische Abrechnung machen das System nahtlos.\n\nDas Unternehmen plant mit dem frischen Kapital die Expansion in weitere Städte und die Weiterentwicklung seiner KI-Plattform. Metropolis ist ein Paradebeispiel dafür, wie traditionelle Branchen durch intelligente Software revolutioniert werden können. Analysten sehen großes Potenzial für ähnliche Ansätze in anderen Infrastrukturbereichen.",
    },
    {
      id: 6,
      type: "comment",
      title: "Warum deutsche Startups internationales Kapital brauchen",
      description: "Deutsche VCs allein können den Kapitalbedarf nicht decken.",
      author: "Prof. Andreas Müller",
      date: "2025-11-04",
      article:
        "Die Erfolgsgeschichten deutscher Startups wie Vay oder die sechs Sifted-250-Champions zeigen: Deutsche Innovation ist Weltklasse. Doch beim Kapital sieht es anders aus.\n\nDeutsche Venture-Capital-Fonds sind im internationalen Vergleich klein. Während US-amerikanische und asiatische Investoren Milliarden in einzelne Deals pumpen, fehlt europäischen Fonds oft das Pulver für Folgerunden. Das zwingt vielversprechende Startups, im Ausland nach Geld zu suchen – oder dort sogar ihre Headquarters zu verlegen.\n\nDie Bundesregierung hat das Problem erkannt und fördert Programme wie die Startup-Factory in Hamburg. Doch ohne privates Kapital in signifikanter Höhe wird Deutschland im globalen Wettbewerb zurückfallen. Institutionelle Investoren wie Pensionsfonds müssen endlich mehr Risikokapital bereitstellen. Sonst entwickeln wir die Technologien von morgen – und andere profitieren davon.",
    },
  ];

  return articles;
}
