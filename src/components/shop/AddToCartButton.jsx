import toast from "react-hot-toast";
import api from "../../services/axiosInstance";
import { decryptData } from "../../common/commonFunction";
import { useDispatch } from "react-redux";
import { fetchCartItems } from "../../redux/actions/cartActions";

const AddToCartButton = ({ className = "", shoe }) => {
  const dispatch = useDispatch();
  const handleAddToCart = async () => {
    try {
      const userId = decryptData(localStorage.getItem("userId"));

      const response = await api.post("/add-to-cart", { userId, shoeId: shoe?._id });
      if(response?.data && response?.data?.success == true) {
        dispatch(fetchCartItems(userId));
        toast.success(response?.data?.message || "Item added to cart");
      }
    } catch (error) {
      toast.error(error?.message);
    }
  };

  return (
    <button
      className={`w-full bg-gray-800 text-white font-medium text-sm py-2 rounded-md hover:bg-black transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 ${className}`}
      onClick={handleAddToCart}
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
