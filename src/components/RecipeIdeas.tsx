import React, { useState } from 'react';
import { Clock, Users, ChefHat } from 'lucide-react';

interface Recipe {
  id: number;
  title: string;
  titleUz: string;
  description: string;
  time: string;
  servings: number;
  difficulty: string;
  image: string;
  ingredients: string[];
}

const recipes: Recipe[] = [
  {
    id: 1,
    title: "Snickers Smoothie",
    titleUz: "Snickers Smuti",
    description: "Ajoyib va to'yimli ichimlik",
    time: "5 min",
    servings: 2,
    difficulty: "Oson",
    image: "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=400",
    ingredients: ["1 ta Snickers", "1 stakan sut", "Muz", "Banana"]
  },
  {
    id: 2,
    title: "Snickers Cake",
    titleUz: "Snickers Tort",
    description: "Bayram uchun ajoyib desert",
    time: "60 min",
    servings: 8,
    difficulty: "O'rta",
    image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400",
    ingredients: ["3 ta Snickers", "Un", "Tuxum", "Sariyog'"]
  },
  {
    id: 3,
    title: "Snickers Cookies",
    titleUz: "Snickers Pechene",
    description: "Shirinlik sevuvchilar uchun",
    time: "30 min",
    servings: 12,
    difficulty: "Oson",
    image: "https://images.pexels.com/photos/890577/pexels-photo-890577.jpeg?auto=compress&cs=tinysrgb&w=400",
    ingredients: ["2 ta Snickers", "Un", "Shakar", "Sariyog'"]
  }
];

const RecipeIdeas: React.FC = () => {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  return (
    <section id="recipes" className="py-20 bg-gradient-to-b from-orange-100 to-amber-200 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-amber-900 mb-6">
            SNICKERS RETSEPTLARI
          </h2>
          <p className="text-xl text-amber-800 max-w-3xl mx-auto leading-relaxed">
            Snickers bilan ajoyib taomlar tayyorlang va oilangizni xursand qiling
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Recipe Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden cursor-pointer border border-amber-300"
              onClick={() => setSelectedRecipe(recipe)}
            >
              {/* Recipe Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={recipe.image}
                  alt={recipe.titleUz}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Difficulty Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {recipe.difficulty}
                </div>
              </div>

              {/* Recipe Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-amber-900 mb-3">{recipe.titleUz}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{recipe.description}</p>
                
                {/* Recipe Stats */}
                <div className="flex items-center justify-between text-sm text-amber-700">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{recipe.time}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{recipe.servings} kishi</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <ChefHat className="w-4 h-4" />
                    <span>Retsept</span>
                  </div>
                </div>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Recipe Modal */}
        {selectedRecipe && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <img
                  src={selectedRecipe.image}
                  alt={selectedRecipe.titleUz}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedRecipe(null)}
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center text-gray-800 hover:bg-white transition-colors duration-200"
                >
                  ✕
                </button>
              </div>
              
              <div className="p-8">
                <h3 className="text-3xl font-bold text-amber-900 mb-4">{selectedRecipe.titleUz}</h3>
                <p className="text-gray-600 mb-6 text-lg">{selectedRecipe.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-amber-800 mb-3">Ingredientlar:</h4>
                  <ul className="space-y-2">
                    {selectedRecipe.ingredients.map((ingredient, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
                        <span className="text-gray-700">{ingredient}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => setSelectedRecipe(null)}
                  className="w-full py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold text-lg rounded-2xl hover:from-orange-500 hover:to-red-500 transition-all duration-300"
                >
                  RETSEPTNI BOSHLASH
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Floating ingredients animation */}
        <div className="absolute top-20 left-20 animate-bounce">
          <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl opacity-60">
            🥜
          </div>
        </div>
        <div className="absolute bottom-20 right-20 animate-pulse">
          <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-2xl opacity-40">
            🍫
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecipeIdeas;