import React, { useEffect, useState } from "react";
import ShoeCard from "../components/shop/ShoeCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchShoeList } from "../redux/actions/shoeActions";
import { Select } from 'antd';
const ShopPage = () => {
  const [gender, setGender] = useState("");
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();
  const { shoes, loading, error } = useSelector((state) => state.shoeState);
  const [filterCards, setFilterCards] = useState([]);

  const filterHandler = () => {
    let filtered = [...shoes];

    if (gender !== "") {
      filtered = filtered.filter((shoe) => shoe.gender === gender);
    }

    if (price === "asc") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (price === "desc") {
      filtered.sort((a, b) => b.price - a.price);
    }

    setFilterCards(filtered);
  };

  useEffect(() => {
    dispatch(fetchShoeList());
  }, []);

  useEffect(() => {
    setFilterCards(shoes);
  }, [shoes]);

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-8 flex-wrap gap-3 md:justify-start">
        <div className="md:px-5">
          <Select
            className="w-36"
            placeholder="Filter results"
            defaultValue={''}
            options={[
              {
                value: '',
                label: 'ALL'
              },
              {
                value: 'MEN',
                label: 'MEN'
              },
              {
                value: 'WOMEN',
                label: 'WOMEN'
              },
              {
                value: 'KIDS',
                label: 'KIDS'
              }
            ]}
            onChange={(value) => setGender(value)}
          />
        </div>

        <div className="md:px-5">
        <Select
            className="w-36"
            placeholder="Filter prices"
            defaultValue={''}
            options={[
              {
                value: '',
                label: 'All Price'
              },
              {
                value: 'asc',
                label: 'Low to High'
              },
              {
                value: 'desc',
                label: 'High to Low'
              },
            ]}
            onChange={(value) => setPrice(value)}
          />
        </div>

        <div className="md:px-5">
          <button
            onClick={filterHandler}
            className="bg-black/20 px-4 md:px-5 hover:bg-black hover:text-white py-2 rounded-md font-bold text-base"
          >
            Apply
          </button>
        </div>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-600">Error: {error}</p>}

      <div className="w-full grid grid-cols-2 gap-3 lg:grid-cols-4 md:gap-4">
        {filterCards.map((item, index) => (
          <ShoeCard key={item._id || index} shoe={item} />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
