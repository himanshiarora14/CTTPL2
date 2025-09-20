import { Link } from "react-router-dom";

function Quote() {
    return (
        <>
            <Link
                to="/quote"
                className="bg-[#e42313] hover:bg-[#c21e11] text-white py-2 px-5 rounded-md font-bold transition duration-200"
            >
                Get Quote
            </Link>
        </>
    );
}

export default Quote;