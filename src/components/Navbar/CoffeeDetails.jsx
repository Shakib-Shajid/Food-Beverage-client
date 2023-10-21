

import { useLoaderData } from "react-router-dom";


// faiza


const CoffeeDetails = () => {

    const coffee = useLoaderData();
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;
    return (


        <div className="flex text-center items-center justify-center mt-3 lg:mt-10">
            <img className="h-1/3 w-1/3 mr-5" src={photo} alt="" />
            <div>
                <h2 className="text-3xl font-bold text-green-600">Name: {name}</h2>
                <p><span className="font-bold"> Quantity:</span> {quantity}</p>
                <p><span className="font-bold"> Supplier Name:</span> {supplier}</p>
                <p><span className="font-bold"> Taste:</span> {taste}</p>
                <p><span className="font-bold"> Category:</span> {category}</p>
                <p><span className="font-bold"> Details:</span> {details}</p>
            </div>
        </div>
    );
};

export default CoffeeDetails;