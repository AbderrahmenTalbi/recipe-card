import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#f3e5d8] min-h-screen flex items-center justify-center sm:p-4">
      <div className="bg-white w-full sm:max-w-lg sm:rounded-3xl overflow-hidden shadow-xl p-4">
        <Image
          src="/images/image-omelette.jpeg"
          alt="Omelette"
          width={700}
          height={400}
          className="w-full object-cover sm:p-4 sm:rounded-3xl"
        />

        <div className="p-6">
          <h1 className="text-4xl font-young-serif text-[#312e2c] mb-4">
            Simple Omelette Recipe
          </h1>
          <p className="text-[#5f564d] mb-6 font-outfit leading-relaxed">
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>

          <div className="bg-[#fff5fa] p-6 rounded-xl mb-8">
            <h3 className="text-[#7b284f] font-bold mb-4 font-outfit text-xl">
              Preparation time
            </h3>
            <ul className="text-[#5f564d] font-outfit space-y-2">
              <li className="flex">
                <span className="mr-2">•</span>
                <span>
                  <strong>Total:</strong> Approximately 10 minutes
                </span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>
                  <strong>Preparation:</strong> 5 minutes
                </span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>
                  <strong>Cooking:</strong> 5 minutes
                </span>
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-young-serif text-[#854632] mb-6">
              Ingredients
            </h2>
            <ul className="text-[#5f564d] font-outfit space-y-2">
              <li className="flex">
                <span className="mr-3 text-[#854632]">•</span>
                <span>2-3 large eggs</span>
              </li>
              <li className="flex">
                <span className="mr-3 text-[#854632]">•</span>
                <span>Salt, to taste</span>
              </li>
              <li className="flex">
                <span className="mr-3 text-[#854632]">•</span>
                <span>Pepper, to taste</span>
              </li>
              <li className="flex">
                <span className="mr-3 text-[#854632]">•</span>
                <span>1 tablespoon of butter or oil</span>
              </li>
              <li className="flex">
                <span className="mr-3 text-[#854632]">•</span>
                <span>
                  Optional fillings: cheese, diced vegetables, cooked meats,
                  herbs
                </span>
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-young-serif text-[#854632] mb-6">
              Instructions
            </h2>
            <ol className="text-[#5f564d] font-outfit space-y-4">
              <li className="flex">
                <span className="mr-4 text-[#854632] font-bold min-w-[1.5rem]">
                  1.
                </span>
                <span>
                  <strong>Beat the eggs:</strong> In a bowl, beat the eggs with
                  a pinch of salt and pepper until they are well mixed. You can
                  add a tablespoon of water or milk for a fluffier texture.
                </span>
              </li>
              <li className="flex">
                <span className="mr-4 text-[#854632] font-bold min-w-[1.5rem]">
                  2.
                </span>
                <span>
                  <strong>Heat the pan:</strong> Place a non-stick frying pan
                  over medium heat and add butter or oil.
                </span>
              </li>
              <li className="flex">
                <span className="mr-4 text-[#854632] font-bold min-w-[1.5rem]">
                  3.
                </span>
                <span>
                  <strong>Cook the omelette:</strong> Once the butter is melted
                  and bubbling, pour in the eggs. Tilt the pan to ensure the
                  eggs evenly coat the surface.
                </span>
              </li>
              <li className="flex">
                <span className="mr-4 text-[#854632] font-bold min-w-[1.5rem]">
                  4.
                </span>
                <span>
                  <strong>Add fillings (optional):</strong> When the eggs begin
                  to set at the edges but are still slightly runny in the
                  middle, sprinkle your chosen fillings over one half of the
                  omelette.
                </span>
              </li>
              <li className="flex">
                <span className="mr-4 text-[#854632] font-bold min-w-[1.5rem]">
                  5.
                </span>
                <span>
                  <strong>Fold and serve:</strong> As the omelette continues to
                  cook, carefully lift one edge and fold it over the fillings.
                  Let it cook for another minute, then slide it onto a plate.
                </span>
              </li>
              <li className="flex">
                <span className="mr-4 text-[#854632] font-bold min-w-[1.5rem]">
                  6.
                </span>
                <span>
                  <strong>Enjoy:</strong> Serve hot, with additional salt and
                  pepper if needed.
                </span>
              </li>
            </ol>
          </div>

          <h2 className="text-2xl font-young-serif text-[#854632] mb-3">
            Nutrition
          </h2>
          <p className="text-[#5f564d] mb-4 font-outfit">
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>
          <div className="space-y-3">
            <div className="flex py-3 border-b border-[#e4e4e7]">
              <span className="flex-1 text-[#5f564d] font-outfit">
                Calories
              </span>
              <span className="font-bold text-[#854632] font-outfit">
                277kcal
              </span>
            </div>
            <div className="flex py-3 border-b border-[#e4e4e7]">
              <span className="flex-1 text-[#5f564d] font-outfit">Carbs</span>
              <span className="font-bold text-[#854632] font-outfit">0g</span>
            </div>
            <div className="flex py-3 border-b border-[#e4e4e7]">
              <span className="flex-1 text-[#5f564d] font-outfit">Protein</span>
              <span className="font-bold text-[#854632] font-outfit">20g</span>
            </div>
            <div className="flex py-3">
              <span className="flex-1 text-[#5f564d] font-outfit">Fat</span>
              <span className="font-bold text-[#854632] font-outfit">22g</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
