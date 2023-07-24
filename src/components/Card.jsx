const Card = ({ image, route, time, status }) => {
  return (
    <div className="bg-[#F2F2F2] hover:bg-slate-200 rounded-lg shadow-md p-4flex justify-between flex-col px-2 py-2  max-w-[370px] md:mr-5 sm:mr-3 mr-0 my-5">
      <div className="w-full h-60">
        <img src={image} alt="bus" className="w-full h-full object-cover rounded-md" />
      </div>
      <div className="mt-4" >
        <h4 className="text-xl font-semibold">{route}</h4>
        </div>
        <div className="m-2 flex flex-row gap-2">
        <p className="text-gray-500 mt-1">{time}</p>
        <p className="text-green-500 mt-1">{status}</p>
      </div>
    </div>
  );
};

export default Card;
