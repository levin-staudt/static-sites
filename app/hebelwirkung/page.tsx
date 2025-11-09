export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-mono text-pink-700 md:text-4xl text-center mb-8 font-bold text-black">
          Leverage Explained
        </h1>

        <div className="text-base md:text-lg leading-relaxed mb-8 space-y-4">
          <p>
            Leverage allows you to control a much larger investment using
            borrowed funds. Let's see exactly how this works using a simple gold
            investment example.
          </p>
          <p>
            Imagine you invest <b>50€</b> in gold priced at <b>100€</b> per
            unit. If the price rises <b>5%</b> to <b>105€</b>, how does your
            return compare with and without leverage? The charts below break it
            down.
          </p>
        </div>

        {/* Chart Group 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="border border-black p-4">
            <h2 className="font-bold mb-3 text-lg md:text-xl text-black">
              Gold Price Development
            </h2>
            <img
              src="/price.svg"
              alt="Gold price moves from 100€ to 105€"
              className="w-full"
            />
            <p className="text-xs text-black/60 mt-2">Chart 1</p>
          </div>
          <div className="border border-black p-4">
            <h2 className="font-bold mb-3 text-lg md:text-xl text-black">
              Development of the Investment
            </h2>
            <img
              src="/investment.svg"
              alt="Investment rises 5% from 50€ to 52,5€"
              className="w-full"
            />
            <p className="text-xs text-black/60 mt-2">Chart 2</p>
          </div>
        </div>

        <div className="text-base md:text-lg leading-relaxed mb-8 space-y-4">
          <p>
            As you can see you gain 2,5€ on your investment as the price of gold
            rises by <b>5€</b>. In both cases the value rises by 5% which means
            you invested your money at a 1x-leverage.
          </p>
          <p>
            Chart 3 displays the development of your investment but with a{" "}
            <b>20x</b>-leverage. The marketprice of gold still rose the same{" "}
            <b>5%</b> as it did in the example above but this time your
            investment grew by <b>100%</b>. So how exactly does that work?
          </p>
          <p>
            In the background of your investment the broker invests{" "}
            <b>20×50€</b> into gold, so <b>1000€</b>. That investment rose by
            5%, so it gained 50€. Now your investment is worth 100€.
          </p>
        </div>

        {/* Chart Group 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="border border-black p-4">
            <h2 className="font-bold mb-3 text-lg md:text-xl text-black">
              Development with 20x Leverage
            </h2>
            <img
              src="/leverage.svg"
              alt="Leverage amplifies rise to 100% profit"
              className="w-full"
            />
            <p className="text-xs text-black/60 mt-2">Chart 3</p>
          </div>
          <div className="border border-black p-4">
            <h2 className="font-bold mb-3 text-lg md:text-xl text-black">
              Broker's Role with 20x Leverage
            </h2>
            <img
              src="/leverage-bts.svg"
              alt="Broker provides remaining funds"
              className="w-full"
            />
            <p className="text-xs text-black/60 mt-2">Chart 4</p>
          </div>
        </div>

        <div className="text-base md:text-lg leading-relaxed mb-8 space-y-4">
          <p>
            As you can see leveraged investments are very powerful and you can
            get very large returns with small market movements.
          </p>
          <p>
            In charts 5 and 6 you can see the same examples with a 20x-leverage
            but this time the gold market declines by <b>5%</b>. As you can see
            you have lost your whole investment now.
          </p>
        </div>

        {/* Chart Group 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="border border-black p-4">
            <h2 className="font-bold mb-3 text-lg md:text-xl text-black">
              Development with 20x Leverage
            </h2>
            <img
              src="/leverage-loss.svg"
              alt="Leverage amplifies loss to 100% loss"
              className="w-full"
            />
            <p className="text-xs text-black/60 mt-2">Chart 5</p>
          </div>
          <div className="border border-black p-4">
            <h2 className="font-bold mb-3 text-lg md:text-xl text-black">
              Broker's Role with 20x Leverage
            </h2>
            <img
              src="/leverage-loss-bts.svg"
              alt="Broker provides remaining funds"
              className="w-full"
            />
            <p className="text-xs text-black/60 mt-2">Chart 6</p>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="my-8 border-t-2 border-black pt-8">
          <h2 className="text-2xl font-bold mb-4 text-black">Key Takeaways</h2>
          <div className="space-y-4 text-base md:text-lg">
            <div className="border-l-4 border-black pl-4">
              <p>
                <b>Leverage multiplies both gains and losses:</b> The higher the
                leverage, the greater the impact of any price movement—good or
                bad.
              </p>
            </div>
            <div className="border-l-4 border-black pl-4">
              <p>
                <b>Calculate your result:</b> Asset move (%) × Leverage = Your
                result (%)
              </p>
            </div>
            <div className="border-l-4 border-black pl-4">
              <p>
                <b>Always manage risk!</b> Leverage can double your money fast,
                but losing it is just as quick with a small negative move.
              </p>
            </div>
          </div>
        </div>

        <p className="mt-10 mb-4 text-sm text-black/60 text-center">by LEVIN</p>
      </div>
    </div>
  );
}
