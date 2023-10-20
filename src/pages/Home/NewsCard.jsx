import { Link } from "react-router-dom";


const NewsCard = ({ news, setCoffees }) => {
    const { _id, photo, name, brand, type, price, desc, rating } = news;
    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {




                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {

                            Swal.fire(
                                'Deleted!',
                                'Your Coffe has been deleted.',
                                'success'
                            )

                            const remaining = coffees.filter(cof => cof._id !== _id);
                            setCoffees(remaining)
                        }
                    })
            }
        })
    }
    return (
        <div className="card mb-16  bg-base-100 shadow-xl">
            <figure><img src={photo} className="h-72" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h1>{brand}</h1>
                <h1>{type}</h1>
                <h1>{price}</h1>
                <p>{desc}</p>
                <p>{rating}</p>
            </div>

            <div className="card-actions mt-4">
                <div className="btn-group btn-group-horizontal space-x-3">
                    {/* <button className="btn">View</button> */}

                    <Link to={`coffee/${_id}`}>

                        <button className="btn">View</button>
                    </Link>


                    <Link to={`updateCoffee/${_id}`}>
                        <button className="btn">Update</button>
                    </Link>
                    <button
                        onClick={() => handleDelete(_id)}
                        className="btn bg-orange-600">Delete</button>
                </div>
            </div>
        </div >
    );
};

export default NewsCard;