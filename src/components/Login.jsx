// import { useContext } from "react";
// import { AuthContext } from "../providers/AuthProvider";

import { Link } from "react-router-dom";


const Login = () => {
    // const { LoginUser } = useContext(AuthContext);


    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password, "new aita");

        //
        // LoginUser(email, password)
        //     .then(result => {
        //         console.log(result.user);

        //         //
        //         const user = {
        //             email,
        //             lastLoggedAt: result.user?.metadata?.lastLoginTime
        //         }

        //         //update last logged at in the database
        //         fetch('http://localhost:5000/user', {

        //             method: 'PATCH',
        //             headers: {
        //                 'content-type': 'application/json'
        //             },

        //             body: JSON.stringify(user)
        //         })
        //             .then(res => res.json())
        //             .then(data => {
        //                 console.log(data)
        //             })
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })

    }
    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm ">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p>New Here! Please <Link className="font-bold" to="/SignUp">Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;