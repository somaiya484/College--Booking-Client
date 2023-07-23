
const Reviews = () => {
    return (
        <div className="mx-16 my-28">
            <h2 className="text-center mt-10 text-4xl mb-10">___Reviews___ </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:w-[1100px] lg:mx-auto ">
                <div className="bg-blue-200 group  rounded-xl  cursor-pointer p-5 w-full">
                    <p className="text-sm leading-7 my-3 font-medium">I had a fantastic time at University of Knowledge. The professors were knowledgeable and supportive, and the campus facilities were top-notch. The diverse range of academic programs and extracurricular activities enriched my college experience, and I made lifelong friendships with fellow students. I highly recommend University of Knowledge for anyone seeking a well-rounded and rewarding education.</p>
                    <h4 className="text-blue-900 uppercase text-xl  font-bold">University of Knowledge</h4>
                    <h4 className="text-blue-800 font-semibold text-lg">Sarah </h4>
                </div>
                <div className="bg-blue-200 group  rounded-xl   p-5">
                    <p className="text-sm leading-7 my-3 font-medium">Greenfield College provided me with a nurturing environment to pursue my passion for environmental studies. The dedicated faculty members and hands-on approach to learning allowed me to explore real-world challenges and make a positive impact. The beautiful campus and vibrant community fostered a sense of belonging, making my college years unforgettable. Greenfield College is an excellent choice for those interested in sustainable practices and a supportive learning community.</p>
                    <h4 className="text-blue-900 uppercase text-xl  font-bold">Greenfield College</h4>
                    <h4 className="text-blue-800 font-semibold text-lg">Jane Smith, Class of 2021</h4>
                </div>
                <div className="bg-blue-200 group  rounded-xl   p-5">
                    <p className="text-sm leading-7 my-3 font-medium">Innovate University's entrepreneurial programs helped me launch my own startup. From mentorship opportunities to cutting-edge resources, the university equipped me with the skills and knowledge necessary to navigate the business world. The collaborative atmosphere among students and faculty inspired innovation and creativity. I owe my success to this amazing institution, and I highly recommend Innovate University to aspiring entrepreneurs and go-getters.!</p>
                    <h4 className="text-blue-900 uppercase text-xl  font-bold">Innovate University</h4>

                    <h4 className="text-blue-800 font-semibold text-lg">Robert Johnson, Class of 2023</h4>
                </div>
                <div className="bg-blue-200 group  rounded-xl   p-5">
                    <p className="text-sm leading-7 my-3 font-medium">Harmony College is a haven for artists and musicians. The passionate and talented faculty members nurtured my artistic abilities, helping me refine my craft. The tight-knit community of artists provided a supportive space to explore my creativity and collaborate on various projects. Harmony College's emphasis on interdisciplinary learning and performance opportunities prepared me for a career in the arts. If you are looking for a college that celebrates artistic expression and fosters a sense of community, Harmony College is the place to be.</p>
                    <h4 className="text-blue-900 uppercase text-xl  font-bold">Harmony College</h4>

                    <h4 className="text-blue-800 font-semibold text-lg">Dr. Rebecca Martinez</h4>
                </div>
            </div>
        </div>
    );
};

export default Reviews;