import React, { useEffect, useState } from "react";
import CartItem from "../components/cart/CartItem";
import CartSummary from "../components/cart/CartSummary";
import EmptyCart from "../components/cart/EmptyCart";
import { useDispatch, useSelector } from "react-redux";
import { decryptData, encryptData } from "../common/commonFunction";
import { fetchCartItems } from "../redux/actions/cartActions";
import Loader from "../utils/Loader";
import api from "../services/axiosInstance";
import toast from "react-hot-toast";

const CartPage = () => {
  const dispatch = useDispatch();
  const { cart} = useSelector((state) => state.cartState);
  const [initialLoading, setInitialLoading] = useState(true);

  const total = cart?.products?.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const onIncrease = async (shoeId) => {
    try {
      const userId = decryptData(localStorage.getItem("userId"));
      const response = await api.post("/cart/add", { userId, shoeId });
      if (response?.data?.success) {
        dispatch(fetchCartItems(userId));
        toast.success(response?.data?.message || "Item added to cart");
      }
    } catch (error) {
      toast.error(error?.message);
    }
  };

  const onDecrease = async (shoeId) => {
    try {
      const encryptedUserId = localStorage.getItem("userId");
      const encryptedShoeId = encryptData(shoeId);
      const response = await api.delete(
        `/cart/remove?userId=${encodeURIComponent(
          encryptedUserId
        )}&shoeId=${encodeURIComponent(encryptedShoeId)}`
      );
      if (response?.data?.success) {
        dispatch(fetchCartItems(decryptData(localStorage.getItem("userId"))));
        toast.success(response?.data?.message || "Item removed from cart");
      }
    } catch (error) {
      toast.error(error?.message);
    }
  };

  useEffect(() => {
    const fetchData = () => {
      const userId = decryptData(localStorage.getItem("userId"));
      dispatch(fetchCartItems(userId));
      setInitialLoading(false);
    };
    fetchData();
  }, [dispatch]);

  if (initialLoading) return <Loader />;
  if (!cart || !cart.products?.length) return <EmptyCart />;

  return (
    <div className="min-h-screen bg-white text-black px-4 md:px-10 lg:px-16 py-2 flex flex-col lg:flex-row gap-10">
      <div className="flex-1 lg:h-[80vh] bg-gray-50 rounded-lg p-2 overflow-y-scroll">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">Cart</h1>
        <div className="flex flex-col gap-6">
          {cart.products.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onIncrease={onIncrease}
              onDecrease={onDecrease}
            />
          ))}
        </div>
      </div>
      <div className="w-full lg:w-1/3 lg:top-10 self-start">
        <CartSummary products={cart.products} total={total} />
      </div>
    </div>
  );
};

export default CartPage;
