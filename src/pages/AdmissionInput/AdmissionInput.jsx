import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Authentacation/Authentacation';
import { useContext } from 'react';

const AdmissionInput = () => {
    const { user } = useContext(AuthContext);
    const admission = useLoaderData();
    const { college_name, _id, college_image } = admission;

    const handleBookCollege = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value ;
        const phone = form.phone.value;
        const address = form.address.value;
        const birth = form.birth.value;
        const img = form.img.value;
        const subject = form.subject.value;

        const book = {
            studentName: name,
            email,
            phone, 
            address,
            birth, 
            img,
            subject,
            admission_id: _id,
            admission: college_name,
            college_image
            // admission_img: college_image,

        }
        console.log(book)

        // fetch('https://college-booking-server.vercel.app/admission', {
        //     method:'POST',
        //     headers:{
        //         'content-type':'application/json'
        //     },
        //     body: JSON.stringify(book)
        // })
        // .then(res => res.json())
        // .then(data => {
        //     console.log(data)
        // })



    }

    return (
        <div className='py-32 mx-12 lg:mx-32'>
            <div className="card-body">
                <form onSubmit={handleBookCollege}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-base text-blue-800">Name</span>
                            </label>
                            <input defaultValue={user?.displayName} type="text" name='name' placeholder="your name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-base text-blue-800">Email</span>
                            </label>
                            <input type="email" defaultValue={user?.email} name='email' placeholder="your email" className="input input-bordered" />
                        </div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-3 mt-3'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-base text-blue-800">Phone number</span>
                            </label>
                            <input type="text" name='phone' placeholder="phone number" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-base text-blue-800">Address</span>
                            </label>
                            <input type="text" name='address' placeholder="address" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-base text-blue-800">Date of birth</span>
                            </label>
                            <input type="text" name='birth' placeholder="date of birth" className="input input-bordered" />
                        </div>
                    </div>


                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-3'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-base text-blue-800">Image</span>
                            </label>
                            <input defaultValue={user?.photoURL} type="text" name='img' placeholder="your image" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-base text-blue-800">Subject</span>
                            </label>
                            <input type="text" name='subject' placeholder="your subject" className="input input-bordered" />
                        </div>
                    </div>

                    <div className="form-control mt-6">
                        <input className='btn btn-primary bg-blue-800 btn-block' type="Submit" value={'Submit'} />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdmissionInput;