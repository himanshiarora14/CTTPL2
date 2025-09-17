import { IoCall } from "react-icons/io5";

function Contact() {
    return (
        <>
            <a
                href="/contact"
                className="w-fit flex justify-center items-center gap-2 md:gap-4 bg-[#EC221F] border-none rounded-[8px] px-4 md:px-4 py-3 md:py-2 cursor-pointer hover:bg-[#d11e1b] transition-colors duration-200 shadow-lg"
            >
                <p className="text-white text-base lg:text-md font-bold">
                    Contact Us
                </p>
                <IoCall className="text-red-500 text-3xl bg-white rounded p-1"/>
            </a>
        </>
    );
}

export default Contact;