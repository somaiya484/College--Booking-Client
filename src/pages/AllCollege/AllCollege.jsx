import { useEffect, useState, } from "react";
import { Link } from "react-router-dom";


const AllCollege = () => {
    const [collages, setCollage] = useState([]);

    useEffect(() => {
        fetch('https://college-booking-server.vercel.app/college')
            .then(res => res.json())
            .then(result => {
                setCollage(result)
            })
    }, [])
    return (
        <div className="py-32">
            <h2 className="text-center mb-8 text-4xl">___Colleges___</h2>

            <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3  ">
                {
                    collages.map(collage => (
                        <div key={collage.id} className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
                            <figure><img src={collage.college_image} alt="collage" className="h-[250px] w-full rounded" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-blue-700 text-2xl">{collage.college_name}</h2>
                                <p>{collage.research_history}</p>
                                <p><span className="font-semibold text-blue-700 text-base">Admission Date: </span>{collage.admission_dates.spring_2024.application_deadline}</p>
                                <p><span className="font-semibold text-blue-700 text-base">Research Number: </span>{collage.number_of_research}</p>
                                {/* <p><span className="font-semibold text-blue-700 text-base">Sports: </span>
                                    {collage.sports[1]}, {collage.sports[2]}, {collage.sports[3]}, {collage.sports[4]}, {collage.sports[5]}
                                </p> */}


                                <p><span className="font-semibold text-blue-700 text-base">Ratings: </span>{collage.college_rating}</p>
                                <div className="card-actions justify-end">
                                    <Link to={`/CollegeDetails/${collage._id}`}>
                                        <button className="btn btn-primary text-white bg-blue-700">Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default AllCollege;