/** @format */

const Navbar = () => {
  const AdminName = localStorage.getItem("AdminName");
  return (
    <>
      <div>
        <section className="flex sm:ml-auto justify-end sm:w-full items-center space-x-2  pr-2">
          <figcaption className="tracking-wider pl-1 font-semibold">
            <div
              className="lg:text-base text-sm text-gray-900  uppercase"
              style={{ color: "#fff" }}
            >
              Welcome {AdminName}
            </div>
          </figcaption>
        </section>
      </div>
    </>
  );
};

export default Navbar;
