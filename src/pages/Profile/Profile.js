import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
// import { useUserContext } from "../../context/UserProvider";

const Profile = () => {

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex flex-grow h-full justify-center items-center">
                <div className="my-6 shadow-lg flex flex-col h-full w-3/4 items-center p-6 border">
                    <h1 className="text-5xl font-semibold mb-4">Perfil</h1>
                </div>
            </div>
            <Footer />
        </div >
    )
    // const user = useUserContext();

    // if (user) {
    //     const userData = {
    //         Nombre: user.firstName,
    //         'Segundo Nombre': user.lastName,
    //         email: user.email,
    //         roleId: user.roleId,
    //         image: user.image
    //     }

    //     return (
    //         <>
    //             <div className="flex flex-col min-h-screen">
    //                 <Header />
    //                 <div className="flex flex-grow h-full justify-center items-center">
    //                     <div className="my-6 shadow-lg flex flex-col h-full w-3/4 items-center p-6 border">
    //                         <h1 className="text-5xl font-semibold mb-4">Perfil</h1>
    //                         {Object.entries(userData).map((value, index) => {
    //                             return (
    //                                 <>
    //                                     <label className="mb-2 mt-3">{value[0]}</label>
    //                                 </>
    //                             )
    //                         })}
    //                     </div>
    //                 </div>
    //                 <Footer />
    //             </div>
    //         </>
    //     )
    // } else {
    //     return (
    //         <p>Nada que mostrar</p>
    //     )
    // }
}

export default Profile;