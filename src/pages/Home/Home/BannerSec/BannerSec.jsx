import banner1 from '../../../../assets/QT-Indian-students.jpg'
import banner2 from '../../../../assets/Uni-Life.jpg'
import banner3 from '../../../../assets/iStock-963270036-e1536051700316.jpg'



const BannerSec = () => {
    return (
        <div className="carousel w-full  h-[700px]">
            <div id="slide1" className="carousel-item relative w-full ">
                <img src={banner3} className="w-full" />
                <div className="absolute  flex items-center h-full left-0 top-0 bg-gradient-to-r w-full from-[#010146b0] to-[#03032b93]">
                    <div className=' space-y-7 pl-20 w-3/4 mx-auto text-white'>
                        <h2 className='text-5xl lg:text-6xl font-bold leading-tight text-zinc-200 text-center'>Discover, Reserve, Enjoy: College Facilities Made Effortless!</h2>
                        <p className='text-center text-#727272   text-sm lg:text-base lg:w-3/4 mx-auto'>Your college facilities, just a click away. CampusSnap streamlines bookings for students and staff. Explore, reserve, and elevate your campus experience today.</p>

                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={banner1} className="w-full h-4/4" />
                <div className="absolute  flex items-center h-full left-0 top-0 bg-gradient-to-r w-full from-[#010146b0] to-[#03032b93]">
                    <div className=' space-y-7 pl-20 w-3/4 mx-auto text-white'>
                        <h2 className='text-5xl lg:text-6xl font-bold leading-tight text-zinc-200 text-center'>Book Campus Spaces: Convenient and Effortless Reservations!</h2>
                        <p className='text-center text-#727272  text-sm lg:text-base lg:w-3/4 mx-auto'>Unlock the power of campus spaces with CampusSnap. Simplify booking procedures, embrace convenience, and thrive in your colleges vibrant community. Reserve your spot now</p>

                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={banner2} className="w-full " />
                <div className="absolute  flex items-center h-full left-0 top-0 bg-gradient-to-r w-full from-[#010146b0] to-[#03032b93]">
                    <div className=' space-y-7 pl-20 w-3/4 mx-auto text-white'>
                        <h2 className='text-5xl lg:text-6xl font-bold leading-tight text-zinc-200 text-center'>Unlock Your Campus: Reserve Facilities with Ease!</h2>
                        <p className='text-center text-#727272  text-sm lg:text-base'> Your key to unlocking endless possibilities. Reserve college facilities with ease, from study rooms to lecture halls. Elevate your academic journey with us</p>

                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default BannerSec;