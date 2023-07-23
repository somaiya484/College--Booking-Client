import { useLoaderData } from "react-router-dom";

const CollegeDetails = () => {
    const collegeDetails = useLoaderData();
    const { college_image, college_name, admission_process, events_details, research_works, sports, events } = collegeDetails

    return (
        <div className="mx-20">
            <div className="card lg:card-side bg-base-100 py-32">
                <figure><img className="w-[500px]" src={college_image} alt="Album" /></figure>
                <div className="card-body w-full">
                    <h2 className="card-title text-blue-700 text-2xl">{college_name}</h2>
                    <p><span className="font-semibold text-blue-700 text-base">Admission Process</span>: {admission_process} </p>
                    <p><span className="font-semibold text-blue-700 text-base">Events Details</span>: {events_details} </p>
                    <p><span className="font-semibold text-blue-700 text-base">Research Works</span>: {research_works} </p>

                    <p><span className="font-semibold text-blue-700 text-base">Sports: </span>
                        {sports[1]}, {sports[2]}, {sports[3]}, {sports[4]}, {sports[5]}
                    </p>

                    <p><span className="font-semibold text-blue-700 text-base">Events: </span>
                    {events?.[1]}, {events?.[2]}, {events?.[3]}, {events?.[4]}, {events?.[5]}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CollegeDetails;