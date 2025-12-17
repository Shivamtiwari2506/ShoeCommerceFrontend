import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/axiosInstance";
import Loader from "../utils/Loader";
import { IconHeart, IconShare, IconStarFilled } from "@tabler/icons-react";
import AddToCartButton from "../components/shop/AddToCartButton";
import { useDispatch, useSelector } from "react-redux";
import { fetchShoeList } from "../redux/actions/shoeActions";
import ShoeCard from "../components/shop/ShoeCard";

const ProductDetailsPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {shoes} = useSelector((state) => state.shoeState);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [relatedProducts, setRelatedProducts] = useState([]);

  const handleShoeDetail = (shoe) => {
    navigate(`/product/${shoe?._id}`);
  }

  useEffect(() => {
    const productDetails = async () => {
      try {
        setLoading(true);
        const response = await api.get(`/product/${id}`);
        dispatch(fetchShoeList());
        if (response?.data?.success === true) {
          setProduct(response.data.product);
          setSelectedSize(response.data.product.size?.[0]);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    productDetails();
  }, [id]);

  useEffect(() => {
    if (shoes && product) {
      const related = shoes.filter(
        (shoe) =>
          shoe._id !== product._id &&
          (shoe.category === product.category || shoe?.brand === product?.brand || shoe?.gender === product?.gender)
      );
      setRelatedProducts(related);
    }
  }, [shoes, id, product]);

  if (loading) return <Loader />;
  if (!product) return null;

  return (
    <div className="min-h-screen bg-white text-black px-4 md:px-12 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* LEFT : IMAGE SECTION */}
        <div className="relative">
          <img
            src={product.imageURL}
            alt={product.name}
            className="w-full max-h-[430px] object-cover rounded-xl bg-white"
          />

          {/* Share & Wishlist */}
          <div className="absolute top-4 right-4 flex flex-col gap-3">
            <button>
              <IconShare size={22} />
            </button>
            <button onClick={() => setIsWishlisted(!isWishlisted)}>
              <IconHeart
                size={22}
                fill={isWishlisted ? "red" : "white"}
                color={isWishlisted ? "red" : "black"}
              />
            </button>
          </div>
        </div>

        {/* RIGHT : PRODUCT INFO */}
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold">
              {product.name}
            </h1>
            <p className="text-gray-800 mt-1">{product.brand}</p>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <IconStarFilled size={18} className="text-yellow-400" />
            <span className="text-sm">4.5</span>
            <span className="text-gray-400 text-sm">| In stock</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold">${product.price}</span>
            <span className="line-through text-gray-500">£40.00</span>
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed">
            Premium casual footwear designed for all-day comfort and style.
            Perfect for daily wear with a modern silhouette.
          </p>

          {/* Sizes */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <p className="font-medium">Size: {selectedSize}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {product.size.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 rounded-lg border transition-all ${
                    selectedSize === size
                      ? "bg-gray-600 text-white border-gray-800"
                      : " text-black bg-gray-300"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <AddToCartButton shoe={product} />
            <button className="w-full bg-gray-800 text-white font-medium text-sm py-3 rounded-md hover:bg-black transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1">
              Checkout
            </button>
          </div>
        </div>
      </div>

{/* RELATED PRODUCTS */}
<div className="mt-12">
  <div className="flex justify-between items-center mb-4">
    <h2 className="text-xl font-semibold">Related Products</h2>
    <button onClick={() => navigate("/shop")} className="underline cursor-pointer text-sm">
      View All
    </button>
  </div>

  {/* Mobile: horizontal scroll | Desktop: grid */}
  <div className="flex gap-4 overflow-x-auto pb-4 w-full scrollbar-hide">
  {relatedProducts?.slice(0, 6).map((item, index) => (
    <div
      key={item._id || index}
      className="min-w-[240px] flex-shrink-0"
    >
      <ShoeCard
        shoe={item}
        shoeDetail={handleShoeDetail}
      />
    </div>
  ))}
</div>

</div>


    </div>
  );
};

export default ProductDetailsPage;
