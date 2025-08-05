import React, { useContext } from 'react';
import { Plus, Star } from 'lucide-react';
import { CartContext } from '../context/CartContext';

interface Product {
  id: number;
  name: string;
  nameUz: string;
  price: number;
  image: string;
  description: string;
  rating: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "Original Snickers",
    nameUz: "Asl Snickers",
    price: 8500,
    image: "https://api.lochin.uz/media/file/image/2020-12/64a7788a-142a-4f4f-9d9f-1d1f80df5e2a.jpg.500x500_q85_crop-scale.jpg",
    description: "Klassik ta'm - yeryong'oq, karamel va shokolad",
    rating: 4.9
  },
  {
    id: 2,
    name: "Snickers Almond",
    nameUz: "Snickers Bodom",
    price: 9000,
    image: "https://api.lochin.uz/media/file/image/2020-12/64a7788a-142a-4f4f-9d9f-1d1f80df5e2a.jpg.500x500_q85_crop-scale.jpg",
    description: "Bodom va karamel bilan ajoyib kombinatsiya",
    rating: 4.8
  },
  {
    id: 3,
    name: "Snickers Peanut Butter",
    nameUz: "Snickers Yeryong'oq Yog'i",
    price: 9500,
    image: "https://api.lochin.uz/media/file/image/2020-12/64a7788a-142a-4f4f-9d9f-1d1f80df5e2a.jpg.500x500_q85_crop-scale.jpg",
    description: "Yeryong'oq yog'i bilan boy ta'm",
    rating: 4.7
  },
  {
    id: 4,
    name: "Snickers Ice Cream",
    nameUz: "Snickers Muzqaymoq",
    price: 12000,
    image: "https://api.lochin.uz/media/file/image/2020-12/64a7788a-142a-4f4f-9d9f-1d1f80df5e2a.jpg.500x500_q85_crop-scale.jpg",
    description: "Sovuq va mazali - yozgi eng yaxshi tanlov",
    rating: 4.9
  }
];

const ProductShowcase: React.FC = () => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.nameUz,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  };

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-amber-50 to-orange-100 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-amber-900 mb-6">
            BIZNING MAHSULOTLAR
          </h2>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto leading-relaxed">
            Har bir Snickers mahsuloti noyob ta'm va sifatni taqdim etadi
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 overflow-hidden border border-amber-200"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={product.image}
                  alt={product.nameUz}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Rating */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-semibold text-gray-800">{product.rating}</span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-2">{product.nameUz}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{product.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-orange-600">
                    {product.price.toLocaleString()} so'm
                  </span>
                  
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="group/btn bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-3 rounded-xl hover:from-orange-500 hover:to-red-500 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                  >
                    <Plus className="w-5 h-5 group-hover/btn:rotate-90 transition-transform duration-300" />
                  </button>
                </div>
              </div>

              {/* Hover overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="px-12 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold text-lg rounded-2xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
            BARCHA MAHSULOTLARNI KORISH
          </button>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-500/10 rounded-full blur-xl"></div>
    </section>
  );
};

export default ProductShowcase;