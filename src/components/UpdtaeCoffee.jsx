import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdtaeCoffee = () => {
    const coffee = useLoaderData();
    const { _id, name, brand, type, price, desc, rating, photo } = coffee;


    const handleUpdateCoffee = event => {
        event.preventDefault();


        const form = event.target;

        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const desc = form.desc.value;
        const rating = form.rating.value;
        const photo = form.photo.value;

        const updatedCoffee = { name, brand, type, price, desc, rating, photo }
        console.log(updatedCoffee);
        //send data to the server
        fetch(`https://food-beverage-server-c498yxb4r-shakib-shajid.vercel.app/addProduct/${_id}`, {

            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Sucess!',
                        text: 'Coffee updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }



    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl font-extrabold">Update Coffee {name}</h2>
            <form onSubmit={handleUpdateCoffee}>
                {/* form row */}
                <div className="md:flex mb-7">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="name" defaultValue={name} placeholder="Coffee name" className="input input-bordered w-full " />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2  ml-4">
                        <label className="label">
                            <span className="label-text">Brand</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="quantity" defaultValue={brand} placeholder="Available Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form supplier row */}
                <div className="md:flex mb-7">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Type</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="supplier" defaultValue={type} placeholder="type" className="input input-bordered w-full " />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2  ml-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="price" defaultValue={price} placeholder="price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>


                {/* ///////category and details/////// */}
                <div className="md:flex mb-7">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="desc" defaultValue={desc} placeholder="description" className="input input-bordered w-full " />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2  ml-4">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="rating" defaultValue={rating} placeholder="Rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                {/* photo url */}
                <div className="mb-7">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="photo" defaultValue={photo} placeholder="Photo Url" className="input input-bordered w-full " />
                        </label>
                    </div>

                </div>


                <input type="submit" value="Add Coffee" className="btn btn-block bg-black text-white" />

            </form>
        </div>
    );
};

export default UpdtaeCoffee;


