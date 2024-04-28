import axios from "axios";
import { useState } from "react";
import Navigatio from "./NaBar";

const Carga = ()  => {
    return (
        <>
            <Navigatio/>

            <div className="content-container" style={{padding: '45px 20px', marginTop: '10px'}}>
                <table className="striped">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Codigo</td>
                            <td>Nombres</td>
                            <td>Facultad</td>
                            <td>Carrera</td>
                            <td>Descripcion</td>
                        </tr>
                    </thead>
                </table>
            </div>
        </>
    )
}   

export default Carga;