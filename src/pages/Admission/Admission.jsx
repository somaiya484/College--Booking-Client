import { useEffect, useState, } from "react";
import { Link, useLoaderData } from "react-router-dom";


const Admission = () => {
    const [collages, setCollage] = useState([]);
    // const collegeDetails = useLoaderData();
    // const { college_name } = collegeDetails

    useEffect(() => {
        fetch('http://localhost:5000/college')
            .then(res => res.json())
            .then(result => {
                setCollage(result)
            })
    }, [])
    return (
        <div className="py-32">
            <h2 className="text-center mb-8 text-4xl">___College Admission Name___</h2>
            <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3 ">
                {
                    collages.map(collage => (
                        <div key={collage.id} className="card card-compact w-96 bg-base-100 shadow-lg">
                            <div className="card-body cursor-pointer">
                                <Link to={`/admissionInput/${collage._id}`} className="card-title text-blue-700 text-2xl">{collage.college_name}</Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Admission;



