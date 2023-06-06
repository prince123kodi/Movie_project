import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom';


function Add() {

    let [state, setState] = useState({
        tital: "", img: "", select: [], select1: [], select2: [], duretion: "", certificate: "", date: "", reting: "",
        schedule: "", about: "", Hero: [], heroine: [], director: ""
    })

    let [genre, setGenre] = useState([])
    let [language, setLanguage] = useState([])
    let [mode, setMode] = useState([])
    let [backPage, setBackpage] = useState(0)

    const AddMovie = (e) => {
        var name = e.target.name;
        var value = e.target.value;

        if (name == 'select2' && e.target.checked == false) {

            const index = genre.indexOf(e.target.value);
            genre.splice(index, 1);
        } 
        else if (name == 'select2' && e.target.checked == true) {
            genre.push(e.target.value)
        }
        if (name == 'select1' && e.target.checked == false) {

            const index = language.indexOf(e.target.value);
            language.splice(index, 1);
        } 
        else if (name == 'select1' && e.target.checked == true) {
            language.push(e.target.value)
        }

        if (name == 'select' && e.target.checked == false) {

            const index = mode.indexOf(e.target.value);
            mode.splice(index, 1);
        } 
        else if (name == 'select' && e.target.checked == true) {
            mode.push(e.target.value)
        }
        setState({

            ...state, [name]: value, genre, language, mode
        })

    }
    const submitData = (e) => {
        e.preventDefault();
        fetch("http://localhost:3005/movie", {
            method: 'post',
            body: JSON.stringify(state),
            headers: {
                "Content-Type": "application/Json"
            }
        }).then(res => { console.log("date inserted"); }).catch(err => { console.log("data not found") })
        setBackpage(1)
    }
    return (
        <div className='pages10'>
            <h3 className='d-flex justify-content-center'>Add movie</h3>
            <div className="content-container movie-form">
                <div className="form-container">
                    <form method='post' onSubmit={(e) => submitData(e)} >
                        <div className="row">
                            <div className="col-4">
                                <label>Enter your tital</label>
                            </div>
                            <div className="col-8">
                                <input type='text' name='tital' onChange={(e) => AddMovie(e)} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <label>Enter your Images</label>
                            </div>
                            <div className="col-8">
                                <input type='text' name='img' onChange={(e) => AddMovie(e)} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <label>Enter Movie Mode</label>
                            </div>
                            <div className="col-8">
                                <input type='checkbox' name='select' value="2D/" onChange={(e) => AddMovie(e)} />2D
                                <input type='checkbox' name='select' value="3D/" onChange={(e) => AddMovie(e)} />3D
                                <input type='checkbox' name='select' value="4D/" onChange={(e) => AddMovie(e)} />4D
                                <input type='checkbox' name='select' value="4DX" onChange={(e) => AddMovie(e)} />4DX
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <label>Enter Movie language</label>
                            </div>
                            <div className="col-8">
                                <input type='checkbox' name='select1' value="Gujrati/" onChange={(e) => AddMovie(e)}/>Gujrati
                                <input type='checkbox' name='select1' value="English/" onChange={(e) => AddMovie(e)}/>English
                                <input type='checkbox' name='select1' value="Hindi" onChange={(e) => AddMovie(e)}/>Hindi
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <label>Enter Movie Gener</label>
                            </div>
                            <div className="col-8">
                                <input type='checkbox' name='select2' value="Action/" onChange={(e) => AddMovie(e)} />Action
                                <input type='checkbox' name='select2' value="Drama/" onChange={(e) => AddMovie(e)} />Drama
                                <input type='checkbox' name='select2' value="Romentic" onChange={(e) => AddMovie(e)} />Romentic
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <label>Enter your Movie Duretion</label>
                            </div>
                            <div className="col-8">
                                <input type='text' name='duretion' onChange={(e) => AddMovie(e)} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <label>Enter your Certificate</label>
                            </div>
                            <div className="col-8">
                                <input type='text' name='certificate' onChange={(e) => AddMovie(e)} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <label>Enter your Reles_Date</label>
                            </div>
                            <div className="col-8">
                                <input type='text' name='date' onChange={(e) => AddMovie(e)} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <label>Enter your Reating</label>
                            </div>
                            <div className="col-8">
                                <input type='text' name='reting' onChange={(e) => AddMovie(e)} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <label>Enter your Schedule</label>
                            </div>
                            <div className="col-8">
                                <input type='text' name='schedule' onChange={(e) => AddMovie(e)} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <label>About Movie</label>
                            </div>
                            <div className="col-8">
                                <textarea type='text' name='about' onChange={(e) => AddMovie(e)}></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <label>Enter your Role</label>
                            </div>
                            <div className="col-8">
                                <input type='text' name='Hero' placeholder='Enter Actor Name' onChange={(e) => AddMovie(e)}/>
                                <input type='text' name='heroine' placeholder='Enter Actress Name' onChange={(e) => AddMovie(e)}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <label>Enter Director_name</label>
                            </div>
                            <div className="col-8">
                                <input type='text' name='director' onChange={(e) => AddMovie(e)} />
                            </div>
                        </div>
                        <div className="row">
                            <div className='col-12'>
                                <input type='submit' value='submit' className="btn1 ms-3 w-100" />
                            </div>
                            <div className='col-12'>
                                <Link to="/"><button className="btn1 w-100">Book Movie</button></Link>
                            </div>
                            {backPage != 0?<Navigate replace to="/"/> : ""}
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Add;
