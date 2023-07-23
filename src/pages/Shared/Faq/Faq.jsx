// import Sectiontitels from "../../../components/sectiontitels/Sectiontitels";
// import faqimg from "../../../assets/faq.png"

const Accordion = () => {
    return (
        <div className="my-28">

            <h2 className="text-center mb-10 text-4xl my-28">___FAQ___</h2>
            <div className="flex sm:flex-col md:flex-row gap-3 px-20 justify-evenly items-center mt-6 lg:px-36">
                <div className="bg-blue-200 px-7 py-3 rounded">
                    <div className="collapse collapse-plus bg-base-50">
                        <input type="radio" name="my-accordion-3" checked="checked" />
                        <div className="collapse-title text-xl font-medium">
                        How do I book a facility on the college campus?
                        </div>
                        <div className="collapse-content">
                            <p>To book a facility, simply visit our website and log in to your account (or create one if you haven't already). Browse through the available facilities and select the one you wish to book. Choose the desired date and time slot, and proceed to the payment page. Once the payment is successful, you'll receive a confirmation email with the booking details.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-50">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                        Can I modify or cancel a facility booking?
                        </div>
                        <div className="collapse-content">
                            <p>Yes, you can modify or cancel your facility booking, subject to the terms and conditions outlined in our cancellation policy. Log in to your account and go to the "My Bookings" section to find your booking. From there, you can choose to modify the booking (change date/time) or cancel it. Please note that cancellation charges may apply depending on the notice period provided.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-50">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                        Are there any additional charges or fees on top of the facility booking cost?
                        </div>
                        <div className="collapse-content">
                            <p>The facility booking cost displayed on the website includes all applicable charges and fees. However, depending on the nature of your event or specific requirements, additional charges may apply. For example, if you need technical assistance, catering services, or equipment rental, those costs will be clearly stated before you confirm your booking.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-50">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                        How far in advance can I make a facility booking?
                        </div>
                        <div className="collapse-content">
                            <p>You can typically make a facility booking up to six months in advance. This allows you to plan and secure the venue for your event well ahead of time. However, availability may vary for different facilities, so we recommend booking early to ensure your preferred dates and times are available.</p>
                        </div>
                    </div>
                </div>
                {/* <img className="w-[500px]" src={faqimg} alt="" /> */}
            </div>
        </div>
    );
};

export default Accordion;