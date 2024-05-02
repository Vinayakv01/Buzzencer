const createcampaign = () => {
  return (
    <div className="py-16 px-6">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <form action="">
          <div className="flex gap-10">
            <div className="flex flex-col w-full">
              <label htmlFor="" className="">
                Brand Name
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                className="rounded-full border border-gray-300 px-4 py-2"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="" className="">
                Campaign Title
              </label>
              <input
                type="text"
                placeholder="Enter title"
                className="rounded-full border border-gray-300 px-4 py-2"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="" className="">
                Campaign Budget
              </label>
              <input
                type="text"
                placeholder="Enter budget"
                className="rounded-full border border-gray-300 px-4 py-2"
              />
            </div>
          </div>
          <div className="flex gap-10">
            <div className="flex flex-col w-full">
              <label htmlFor="">Campaign Description</label>
              <textarea
                name=""
                id=""
                placeholder="Enter description"
                className="rounded-lg border border-gray-300 px-4 py-2"
              />
            </div>
            <div className="flex flex-col w-1/2">
              <label htmlFor="">Platforms</label>
              <select
                name=""
                id=""
                className="border border-gray-300 rounded-full px-4 py-2"
              >
                <option value="">we</option>
                <option value="">swgfcs</option>
              </select>
              
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default createcampaign;
