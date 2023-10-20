

import { useLoaderData } from "react-router-dom";


// faiza


const CoffeeDetails = () => {


    // const handleCart = _id =>{
    //     console.log(_id)
    // }

    const coffee = useLoaderData();
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;
    return (
        // <div>
        //     <h1>Details show one only: {name}</h1>
            
        // </div>
//         <div>
//             {/* <Link to='/coffee'> */}
//             <div className="card card-side bg-base-100 shadow-xl">
//                 <figure><img className="" src={photo} alt="Movie" /></figure>
//                 <div className=" flex  justify-between  w-full pr-4">
//                     <div>
//                         <h2 className="card-title">Name: {name}</h2>
//                         <p>{quantity}</p>
//                         <p>{supplier}</p>
//                         <p>{taste}</p>
//                         <p>{category}</p>
//                         <p>{details}</p>
//                         <p>{photo}</p>
//                     </div>
//                     <div className="card-actions justify-end">
//                         <div className="btn-group btn-group-vertical space-y-4">
//                             {/* <Link to={`coffee/${_id}`}>

//                                 <button className="btn">View</button>
//                             </Link> */}
// {/* 
//                             <Link to={`updateCoffee/${_id}`}>
//                                     <button className="btn">Edit</button>
//                                 </Link> */}
//                             {/* <button



//                                 className="btn bg-orange-600">X</button> */}

//                                 {/* <button
//                                 onClick={() => handleCart(_id)}
                                
//                                 className="btn btn-error"> Add To Cart</button> */}

//                             {/* <Link to={`${_id}`}>

//                                 <button className="btn">Add To cart</button>
//                             </Link> */}

//                         </div>
//                     </div>
//                 </div>

//             </div>
//             {/* </Link> */}

//         </div>


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