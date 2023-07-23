import { useEffect, useState, } from "react";
import { Link } from "react-router-dom";


const colleges = () => {
    const [colleges, setCollage] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/colleges')
            .then(res => res.json())
            .then(result => {
                setCollage(result)
            })
    }, [])
    return (
        <div className="">
            <h2 className="text-center mb-8 text-4xl mt-20">___colleges___</h2>


            <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
                {
                    colleges.map(collage => (
                        <div key={collage.id} className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
                            <figure><img src={collage.college_image} alt="collage" className="h-[250px] w-full rounded" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-blue-700 text-2xl">{collage.college_name}</h2>
                                <p>{colleges.research_history}</p>
                                <p><span className="font-semibold text-blue-700 text-base">Admission: </span>{collage.admission_dates.spring_2024.application_deadline}</p>
                                <p><span className="font-semibold text-blue-700 text-base">Class Start: </span>{collage.admission_dates.spring_2024.classes_start}</p>
                                <p><span className="font-semibold text-blue-700 text-base">Sports: </span>
                                    {collage.sports[1]}, {collage.sports[2]}, {collage.sports[3]}, {collage.sports[4]}, {collage.sports[5]}
                                </p>


                                <p><span className="font-semibold text-blue-700 text-base">Events: </span>{collage.events}</p>
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

export default colleges;