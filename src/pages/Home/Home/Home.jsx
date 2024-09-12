import { Helmet } from "react-helmet-async";

import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>User Manager | Home</title>
            </Helmet>
            <div className="w-full flex justify-center">
                <div className="w-full text-center">
                    <img src="/pic.jpg" className="h-[80vh] w-full " />
                    <div className="my-4">
                        <h3 className="text-5xl font-bold">This is home page.</h3>
                        <p>Click to go <NavLink to="/login" className="font-bold underline text-blue">login</NavLink> page</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;