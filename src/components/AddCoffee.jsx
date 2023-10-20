import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handleCoffee = event => {
        event.preventDefault();


        const form = event.target;

        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const desc = form.desc.value;
        const rating = form.rating.value;
        const photo = form.photo.value;

        const newCoffee = { name, brand, type, price, desc, rating, photo }
        console.log(newCoffee);
        //send data to the server
        fetch('http://localhost:5000/addProduct', {

            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Sucess!',
                        text: 'User Added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }






    return (
        <div className="bg-[#F4F3F0] p-24 " data-aos="fade-up">
            <h2 className="text-3xl font-extrabold">Add coffee</h2>
            <form onSubmit={handleCoffee}>
                {/* form row */}
                <div className="md:flex mb-7">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="name" placeholder="Coffee name" className="input input-bordered w-full " />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2  md:ml-4">
                        <label className="label">
                            <span className="label-text">Available brand</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="brand" placeholder="brand name" className="input input-bordered w-full" />
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

                            <input type="text" name="type" placeholder="Type" className="input input-bordered w-full " />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2  md:ml-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>


                {/* ///////category and details/////// */}
                <div className="md:flex mb-7">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Desc</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="desc" placeholder="description" className="input input-bordered w-full " />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2  md:ml-4">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
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

                            <input type="text" name="photo" placeholder="Photo Url" className="input input-bordered w-full " />
                        </label>
                    </div>

                </div>


                <input type="submit" value="Add Coffee" className="btn btn-block bg-black text-white" />

            </form>
            <Link to="/"><input type="submit" value="Go Back" className="btn btn-block bg-white text-black mt-3" /></Link>
        </div>
    );
};

export default AddCoffee;