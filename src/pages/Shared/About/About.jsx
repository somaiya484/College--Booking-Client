import about from '../../../assets/about.jpg'

const About = () => {
    return (
        <div className="my-32 text-4xl font-bold ">
            <h2 className="text-center mb-10 text-4xl my-28">___CampusDash___</h2>

            {/* <h2 className="text-center mb-8">About<span className="text-purple-700"> CampusDash</span> </h2> */}
            <div className='grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-2 w-3/4 m-auto'>
                <div data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                    <img className='rounded' src={about} alt="" />
                </div>
                <div data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" className='w-full'>
                    <p className='text-base align-middle mt-3 lg:mt-2 font-medium'>
                    Welcome to CampusDash - your go-to platform for hassle-free facility booking on college campuses. Discover a wide range of venues, from auditoriums to sports fields, with flexible time slots and transparent pricing. Empowering students, faculty, and external users to reserve spaces for gatherings, workshops, and meetings. Simply create an account, browse facilities, select your preferred date and time, pay securely, and receive instant confirmation. Our user-friendly interface ensures a seamless booking process. Need help? Reach out to our dedicated support team. Unlock the potential of college facilities for your events and make memorable experiences happen with CampusDash.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;