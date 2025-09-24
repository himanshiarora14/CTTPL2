import {
    FaLinkedinIn,
    FaWhatsapp,
    FaGoogle,
    FaRegBuilding,
    FaPhoneAlt,
    FaEnvelope,
} from "react-icons/fa";

export default function ContactSection() {
    return (
        <section className=" p-6 md:p-16">
            <div className="max-w-7xl mx-auto flex md:ml-14 flex-col md:flex-row items-center justify-center md:gap-0 gap-6">

                <div className="bg-white shadow-2xl rounded-2xl p-4 md:p-10 w-full h-100 md:w-90 relative flex flex-col justify-center">

                    <div className="hidden md:flex h-[260px] justify-center absolute -left-17 top-1/2 transform -translate-y-1/2 flex-col space-y-3 bg-[#0d2c3b] p-3 rounded-bl-2xl rounded-tl-2xl shadow-lg">
                        <a href="#" className="bg-white rounded-full p-3 hover:bg-gray-100">
                            <FaLinkedinIn className="text-[#0d2c3b] text-xl" />
                        </a>
                        <a href="#" className="bg-white rounded-full p-3 hover:bg-gray-100">
                            <FaWhatsapp className="text-[#0d2c3b] text-xl" />
                        </a>
                        <a href="#" className="bg-white rounded-full p-3 hover:bg-gray-100">
                            <FaGoogle className="text-[#0d2c3b] text-xl" />
                        </a>
                    </div>

                    {/* Mobile Social Icons (below heading) */}
                    <div className="flex md:hidden justify-center gap-4 mb-6">
                        <a href="#" className="bg-[#0d2c3b] p-3 rounded-full">
                            <FaLinkedinIn className="text-white text-xl" />
                        </a>
                        <a href="#" className="bg-[#0d2c3b] p-3 rounded-full">
                            <FaWhatsapp className="text-white text-xl" />
                        </a>
                        <a href="#" className="bg-[#0d2c3b] p-3 rounded-full">
                            <FaGoogle className="text-white text-xl" />
                        </a>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-2xl md:text-3xl font-bold text-center md:text-left">Get In Touch</h2>
                        <hr className="my-2" />
                        <br></br>

                        {/* Address */}
                        <div className="flex items-start gap-3">
                            <div className="bg-[#0d2c3b] text-white p-3 rounded-full">
                                <FaRegBuilding className="text-lg md:text-xl" />
                            </div>
                            <div>
                                <p className="font-bold">Meet Us</p>
                                <p className="text-gray-600 text-sm">
                                    Y-348, C/2, Sector-12, Noida - 201301
                                </p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-start gap-3">
                            <div className="bg-[#0d2c3b] text-white p-3 rounded-full">
                                <FaPhoneAlt className="text-lg md:text-xl" />
                            </div>
                            <div>
                                <p className="font-bold">Call Us</p>
                                <p className="text-gray-600 text-sm">+91-97737 83869</p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-start gap-3">
                            <div className="bg-[#0d2c3b] text-white p-3 rounded-full">
                                <FaEnvelope className="text-lg md:text-xl" />
                            </div>
                            <div>
                                <p className="font-bold">Email Us</p>
                                <p className="text-gray-600 text-sm">business@choudharytours.in</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Google Map */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <div className="w-full h-[250px] md:h-[300px] rounded-br-2xl rounded-tr-2xl overflow-hidden shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7005.2453093503345!2d77.393742!3d28.611095!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef7aed902fa1%3A0x3fb397a26b27f1d8!2sChoudhary%20Tours%20%26%20Travels%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1756543874376!5m2!1sen!2sin"
                            width="800"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Map"
                        />

                    </div>
                </div>
            </div>
        </section>
    );
}
