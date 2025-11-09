export default function Page() {
  return (
    <div className="justify-center flex bg-white">
      <div className="w-3/4 max-w-3xl text-black dark:text-white">
        <h1 className="text-4xl text-center my-8 font-bold">
          Leverage Explained
        </h1>

        <div className="mx-auto max-w-3xl text-lg leading-relaxed mb-8">
          <p>
            Leverage allows you to control a much larger investment using
            borrowed funds. Let’s see exactly how this works using a simple gold
            investment example.
          </p>
          <p className="mt-4">
            Imagine you invest <b>50€</b> in gold priced at <b>100€</b> per
            unit. If the price rises <b>5%</b> to
            <b>105€</b>, how does your return compare with and without leverage?
            The charts below break it down.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 my-5 ">
          <div className="rounded-xl p-5">
            <h2 className="italic text-gray-700 mb-2 text-xl">
              Gold Price Development
            </h2>
            <img
              src="/price.svg"
              alt="Gold price moves from 100€ to 105€"
              className="w-full"
            />
            <p className="text-xs text-gray-500 italic mt-2">chart 1</p>
          </div>
          <div className="rounded-xl p-5">
            <h2 className="italic text-gray-700 mb-2 text-xl">
              Development of the Investment
            </h2>
            <img
              src="/investment.svg"
              alt="Investment rises 5% from 50€ to 52,5€"
              className="w-full"
            />
            <p className="text-xs text-gray-500 italic mt-2">chart 2</p>
          </div>
        </div>

        <div className="mx-auto max-w-3xl text-lg leading-relaxed my-8">
          <p>
            As you can see you gain 2,5€ on your investment as the price of gold
            rises by <b className="italic">5€</b>. In both cases the value rises
            by 5% which means you invested your money at a 1x - leverage.
          </p>
          <p className="mt-4">
            Chart 3 displays the development of your investment but with a{" "}
            <b className="italic">20x</b>-leverage. The marketprice of gold
            still rose the same <b className="italic">5%</b> as it did in the
            example above but this time your investment grew by{" "}
            <b className="italic">100%</b>. So how exactly does that work?
            <br />
            In the background of your investment the broker invests{" "}
            <b className="italic">20x50€</b> into gold, so{" "}
            <b className="italic">1000€</b>. That investment rose by 5%, so it
            gained 50€. Now your investment is worth 100€.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 my-5">
          <div className="rounded-xl p-5">
            <h2 className="italic text-gray-700 mb-2 text-xl">
              Development with 20x Leverage
            </h2>
            <img
              src="/leverage.svg"
              alt="Leverage amplifies rise to 100% profit"
              className="w-full"
            />
            <p className="text-xs text-gray-500 italic mt-2">chart 3</p>
          </div>
          <div className="rounded-xl p-5">
            <h2 className="italic text-gray-700 mb-2 text-xl">
              Broker’s Role with 20x Leverage
            </h2>
            <img
              src="/leverage-bts.svg"
              alt="Broker provides remaining funds"
              className="w-full"
            />
            <p className="text-xs text-gray-500 italic mt-2">chart 4</p>
          </div>
        </div>

        <div className="mx-auto max-w-3xl text-lg leading-relaxed my-8">
          <p className="mt-4">
            Chart 3 displays the development of your investment but with a{" "}
            <b className="italic">20x</b>-leverage. The marketprice of gold
            still rose the same <b className="italic">5%</b> as it did in the
            example above but this time your investment grew by{" "}
            <b className="italic">100%</b>. So how exactly does that work?
            <br />
            In the background of your investment the broker invests{" "}
            <b className="italic">20x50€</b> into gold, so{" "}
            <b className="italic">1000€</b>. That investment rose by{" "}
            <b className="italic">5%</b>, so it gained
            <b className="italic">50€</b>. As you can see leveraged investments
            are very powerful and you can get very large returns with small
            market movements.
            <br /> In charts 5 and 6 you can see the same examples with a
            20x-leverage but this time the gold market declines by{" "}
            <b className="italic">5%</b>. As you can see you have lost your
            whole investment now.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 my-5">
          <div className="rounded-xl p-5">
            <h2 className="italic text-gray-700 mb-2 text-xl">
              Development with 20x Leverage
            </h2>
            <img
              src="/leverage-loss.svg"
              alt="Leverage amplifies rise to 100% profit"
              className="w-full"
            />
            <p className="text-xs text-gray-500 italic mt-2">chart 5</p>
          </div>
          <div className="rounded-xl p-5">
            <h2 className="italic text-gray-700 mb-2 text-xl">
              Broker’s Role with 20x Leverage
            </h2>
            <img
              src="/leverage-loss-bts.svg"
              alt="Broker provides remaining funds"
              className="w-full"
            />
            <p className="text-xs text-gray-500 italic mt-2">chart 6</p>
          </div>
        </div>

        <div className="my-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Key Takeaways</h2>
          <ul className="list-disc ml-8 text-lg">
            <li>
              <b>Leverage multiplies both gains and losses:</b> The higher the
              leverage, the greater the impact of any price movement—good or
              bad.
            </li>
            <li>
              <b>Calculate your result:</b> Asset move (%) × Leverage = Your
              result (%)
            </li>
            <li>
              <span className="font-bold">Always manage risk!</span> Leverage
              can double your money fast, but losing it is just as quick with a
              small negative move.
            </li>
          </ul>
        </div>

        <p className="mt-10 mb-2 text-xs text-gray-500">by Levin Staudt</p>
      </div>
    </div>
  );
}
