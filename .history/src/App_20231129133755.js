/** @format */

import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <>
      <ToastContainer
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Routes>
        <Route path="/" element={<Login />} />
       
      </Routes>
    </>
  );
}

export default App;


{/* <Route path="/dashboard" element={<Dashboard />} />
<Route path="/getblog" element={<Blog />} />
<Route path="/ad" element={<Ad />} />
<Route path="/banner" element={<Banner />} />
<Route path="/banner/:id" element={<SingleBanner />} />
<Route path="/privacy-policy" element={<Privacy />} />
<Route path="/terms" element={<Terms />} />
<Route path="/brand" element={<Brand />} />
<Route path="/nutrition" element={<Nutrition />} />
<Route path="/Product-type" element={<ProductType />} />
<Route path="/skin-condition" element={<SkinCondition />} />
<Route path="/skinType" element={<SkinType />} />
<Route path="/Category" element={<ECategory />} />
<Route path="/Product" element={<Product />} />
<Route path="/product/:id" element={<SingleProduct />} />
<Route path="/create-product" element={<CreateProduct />} />
<Route path="/edit-product/:product" element={<EditProduct />} />
<Route path="/service" element={<Service />} />
<Route path="/service/:id" element={<SingleService />} />
<Route path="/create-service" element={<CreateService />} />
<Route path="/edit-service/:id" element={<Editservice />} />
<Route path="/subscription" element={<Subscription />} />
<Route path="/create-subscription" element={<CreateSubscription />} />
<Route path="/edit-subscription/:id" element={<EditSubscription />} />
<Route path="/reviews" element={<Reviews />} />
<Route path="/about-us" element={<AboutUs />} />
<Route path="/create-about-us" element={<CreateAboutUs />} />
<Route path="/edit-about-us/:id" element={<EditAboutUs />} />
<Route path="/faq" element={<Faq />} />
<Route path="/contact" element={<Contact />} />
<Route path="/query" element={<Query />} />
<Route path="/ingredients" element={<Ingredeints />} />
<Route path="/giftCard" element={<GiftCard />} />
<Route path="/creatGift" element={<CreateGiftCard />} />
<Route path="/acne" element={<Acne />} />
<Route path="/acne-suggestion" element={<AcneSuggestion />} />
<Route path="/add-on-service" element={<AddOnService />} />
<Route path="/gallery" element={<Gallery />} />
<Route path="/create-home-banner" element={<AddHomeBanner />} />
<Route path="/create-partner-banner" element={<AddPartnerBanner />} />
<Route path="/create-shop-banner" element={<AddShopBanner />} />
<Route path="/create-service-banner" element={<AddServiceBanner />} />
<Route
  path="/create-promotion-banner"
  element={<AddPromotionBanner />}
/>
<Route path="/user" element={<User />} />
<Route path="/user-data/:id" element={<UserData />} />
<Route path="/Orders" element={<Order />} />
<Route path="/order/:id" element={<SingleOrder />} />
<Route path="/service-order" element={<ServiceOrder />} />
<Route path="/service-order/:id" element={<ServiceOrderId />} />
<Route path="/cart/:id" element={<Cart />} />
<Route path="/frequently" element={<Frequently />} />
<Route path="/transaction" element={<Transaction />} />
<Route path="/rewards" element={<Rewards />} />
<Route path="/product-review/:id" element={<ProductReviews />} />
<Route path="/scheduler" element={<Scheduler />} />
<Route path="/shipping" element={<Shipping />} />
<Route path="/slot" element={<Slot />} />
<Route path="/shipping-privacy" element={<ShippingPrivacy />} />
<Route path="/return-privacy" element={<ReturnPolicy />} />
<Route path="/chat" element={<Chat />} /> */}