import React, { useEffect } from "react";
import Headers from "../components/Headers";
import Footer from "../components/Footer";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  get_card_products,
  delete_card_product,
  messageClear,
  quantity_inc,
  quantity_dec,
} from "../store/reducers/cardReducer";
const Card = () => {
  const outOfStockProduct = [1, 2];

  const dispatch = useDispatch();
  const navegate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);
  const {
    successMessage,
    price,
    buy_product_item,
    shipping_fee,
    outofstock_products,
    card_products,
  } = useSelector((state) => state.card);
  console.log("card product:", card_products);
  const redirect = () => {
    navegate("/shipping", {
      state: {
        products: card_products,
        price: 500,
        shipping_fee: 400,
        items: 4,
      },
    });
  };
  useEffect(() => {
    dispatch(get_card_products(userInfo.id));
  }, []);

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
      dispatch(get_card_products(userInfo.id));
    }
  }, [successMessage]);

  const inc = (quantity, stock, card_id) => {
    const temp = quantity + 1;
    if (temp <= stock) {
      dispatch(quantity_inc(card_id));
    }
  };

  const dec = (quantity, card_id) => {
    const temp = quantity - 1;
    if (temp !== 0) {
      dispatch(quantity_dec(card_id));
    }
  };
  return (
    <div>
      <Headers />
      <section className='bg-[url("https://cdn.pixabay.com/photo/2020/07/15/13/12/lotus-5407670_1280.jpg")] h-[220px] mt-6 bg-cover bg-no-repeat relative bg-left'>
        <div className="absolute left-0 top-0 w-full h-full bg-[#2422228a]">
          <div className="w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto">
            <div className="flex flex-col justify-center gap-1 items-center h-full w-full text-white">
              <h2 className="text-3xl font-bold">EcomShop</h2>
              <div className="flex justify-center items-center gap-2 text-2xl w-full">
                <Link to="/">Home</Link>
                <span className="pt-2">
                  <MdOutlineKeyboardArrowRight />
                </span>
                <span>Card</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#eeeeee]">
        <div className="w-[85%] lg:w-[90%] md:w-[90%] sm:w-[90] mx-auto py-16">
          {card_products.length > 0 || outofstock_products.length > 0 ? (
            <div className="flex flex-wrap">
              <div className="w-[67%] md-lg:w-full">
                <div className="pr-3 md-lg:pr-0">
                  <div className="flex flex-col gap-3">
                    <div className="bg-white p-4">
                      <h2 className="text-md text-green-500 font-semibold">
                        Stock Products {card_products.length}
                      </h2>
                    </div>
                    {card_products.map((p, i) => (
                      <div key={i} className="flex bg-white p-4 flex-col gap-2">
                        <div className="flex justify-start items-center">
                          <h2 className="text-md text-slate-600">
                            {p.productInfo.shopName}
                          </h2>
                        </div>
                        <div className="w-full flex flex-row">
                          <div className="flex sm:w-full gap-2 w-7/12">
                            <div className="flex gap-2 justify-start items-center">
                              <img
                                className="w-[80px] h-[80px]"
                                src={p.productInfo.images[0]}
                                alt="product image"
                              />
                              <div className="pr-4 text-slate-600">
                                <h2 className="text-md">
                                  {p.productInfo.name}
                                </h2>
                                <span className="text-sm">
                                  Brand: {p.productInfo.brand}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-between w-5/12 sm:w-full sm:mt-3">
                            <div className="pl-4 sm:pl-0">
                              <h2 className="text-lg text-orange-500">
                                $
                                {p.productInfo.price -
                                  Math.floor(
                                    (p.productInfo.price *
                                      p.productInfo.discount) /
                                      100
                                  )}
                              </h2>
                              <p className="line-through">
                                {p.productInfo.price}
                              </p>
                              <p>-{p.productInfo.discount}%</p>
                            </div>
                            <div className="flex gap-2 flex-col">
                              <div className="flex bg-slate-200 h-[30px] justify-center items-center text-xl">
                                <div
                                  onClick={() => dec(p.quantity, p._id)}
                                  className="px-3 cursor-pointer"
                                >
                                  -
                                </div>
                                <div className="px-3">{p.quantity}</div>
                                <div
                                  onClick={() =>
                                    inc(p.quantity, p.productInfo.stock, p._id)
                                  }
                                  className="px-3 cursor-pointer"
                                >
                                  +
                                </div>
                              </div>
                              <button
                                onClick={() =>
                                  dispatch(delete_card_product(p._id))
                                }
                                className="px-5 py-[3px] bg-red-500 text-white"
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                    {outofstock_products.length > 0 && (
                      <div className="flex flex-col gap-3">
                        <div className="bg-white p-4">
                          <h2 className="text-md text-red-500 font-semibold">
                            Out of Stock {outofstock_products.length}
                          </h2>
                        </div>
                        <div className="bg-white p-4">
                          {outofstock_products.map((p, i) => (
                            <div key={i} className="w-full flex flex-wrap">
                              <div className="flex sm:w-full gap-2 w-7/12">
                                <div className="flex gap-2 justify-start items-center">
                                  <img
                                    className="w-[80px] h-[80px]"
                                    src={p.products[0].images[0]}
                                    alt="product image"
                                  />
                                  <div className="pr-4 text-slate-600">
                                    <h2 className="text-md">
                                      {p.products[0].name}
                                    </h2>
                                    <span className="text-sm">
                                      Brand : {p.products[0].brand}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex justify-between w-5/12 sm:w-full sm:mt-3">
                                <div className="pl-4 sm:pl-0">
                                  <h2 className="text-lg text-orange-500">
                                    $
                                    {p.products[0].price -
                                      Math.floor(
                                        (p.products[0].price *
                                          p.products[0].discount) /
                                          100
                                      )}{" "}
                                  </h2>
                                  <p className="line-through">
                                    {p.products[0].price}
                                  </p>
                                  <p>-{p.products[0].discount}%</p>
                                </div>
                                <div className="flex gap-2 flex-col">
                                  <div className="flex bg-slate-200 h-[30px] justify-center items-center text-xl">
                                    <div
                                      onClick={() => dec(p.quantity, p._id)}
                                      className="px-3 cursor-pointer"
                                    >
                                      -
                                    </div>
                                    <div className="px-3">{p.quantity}</div>
                                    <div
                                      onClick={() =>
                                        dec(
                                          p.quantity,
                                          p.products[0].stock,
                                          p._id
                                        )
                                      }
                                      className="px-3 cursor-pointer"
                                    >
                                      +
                                    </div>
                                  </div>
                                  <button
                                    onClick={() =>
                                      dispatch(delete_card_product(p._id))
                                    }
                                    className="px-5 py-[3px] bg-red-500 text-white"
                                  >
                                    Delete
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="w-[33%] md-lg:w-full">
                <div className="pl-3 md-lg:pl-0 md-lg:mt-5">
                  {card_products.length > 0 && (
                    <div className="bg-white p-3 text-slate-600 flex flex-col gap-3">
                      <h2 className="text-xl font-bold">Order Summary</h2>
                      <div className="flex justify-between items-center">
                        <span>{buy_product_item} Item</span>
                        <span>${price}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Shipping Fee</span>
                        <span>${shipping_fee}</span>
                      </div>
                      <div className="flex gap-2">
                        <input
                          className="w-full px-3 py-2 border border-slate-200 outline-0 focus:border-green-500 rounded-sm"
                          type="text"
                          placeholder="Input Vauchar Coupon"
                        />
                        <button className="px-5 py-[1px] bg-blue-500 text-white rounded-sm uppercase text-sm">
                          Apply
                        </button>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Total</span>
                        <span className="text-lg text-orange-500">
                          ${price + shipping_fee}
                        </span>
                      </div>
                      <button
                        onClick={redirect}
                        className="px-5 py-[6px] rounded-sm hover:shadow-orange-500/20 hover:shadow-lg bg-orange-500 text-sm text-white uppercase"
                      >
                        Proceed to checkout {buy_product_item}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div>
              <Link className="px-4 py-1 bg-indigo-500 text-white" to="/shops">
                Shop Now
              </Link>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Card;
