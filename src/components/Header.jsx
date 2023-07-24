

const Header = ({ name }) => {
  return (
    <div className="flex flex-row justify-between bg-[#007D8E] items-center py-6 px-16">
      <h1 className="text-3xl text-center text-white">{name}</h1>

      
      <input
        type="text"
        placeholder="Search"
        className=" rounded-lg p-1 px-3 border-none"
      ></input>
    </div>
  );
};

export default Header;
