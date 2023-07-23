
const SearchColl = () => {
    return (
        <div>
            <div className="h-56 text-center bg-blue-50">
                <h2 className="text-4xl font-bold text-gray-800 pt-10">Search Your Collage</h2>
                <input className="shadow-md px-12 py-6 rounded-md mx-3 mt-5 " type="text" placeholder='Your Collage Name' />
                <button className='py-4 px-4 bg-blue-700 text-white font-semibold rounded-md  hover:bg-transparent hover:border-blue-700 hover:border-2 hover:text-blue-700 ' >Search Collage</button>
            </div>
        </div>
    );
};

export default SearchColl;