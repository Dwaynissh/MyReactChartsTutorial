const TimeTable = () => {
  return (
    <div className="w-full h-screen bg-white flex justify-center items-center flex-col">
      <div className="w-full grid grid-cols-1">
        <div className="h-[400px] border overflow-x-auto flex justify-center items-center flex-col">
          <div className="w-full bg-gray-100 flex justify-center items-center gap-5">
            <div className=" border-r">Days</div>
            <div className="border-r">07:45AM - 08:10Am</div>
            <div className="border-r">08:10Am - 08:50Am</div>
            <div className="border-r">08:50Am - 09:30Am</div>
            <div className="border-r">09:30Am - 10:10Am</div>
            <div className="border-r">10:10Am - 10:20Am</div>
            <div className="border-r">10:10Am - 11:00Am</div>
            <div className="border-r">10:10Am - 11:40Am</div>
            <div className="border-r">10:10Am - 12:00Pm</div>
            <div className="border-r">10:10Am - 12:40PM</div>
            <div className="">10:10Am - 1.00PM</div>
          </div>

          {/* <div className="w-full h-[40px] bg-gray-100 flex gap-5">
            <div className="h-full">Monday</div>
            <div className="h-full">Assembly</div>
            <div className="h-full">Time</div>
            <div className="h-full">Time</div>
            <div className="h-full">Time</div>
            <div className="h-full">Short Break</div>
            <div className="h-full">Time</div>
            <div className="h-full">Time</div>
            <div className="h-full">Long Break</div>
            <div className="h-full">Time</div>
            <div className="h-full">Time</div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default TimeTable;
