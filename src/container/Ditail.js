import React from 'react'
import { useEffect, useState } from 'react';
import '../assets/css/style.css'
import '../assets/css/bootstrap.min.css'
import '../assets/css/all.min.css'
import { Link, useParams } from 'react-router-dom';


function Ditail() {
    let [data, setData] = useState('');
    let [active, SetActive] = useState(true)
    let { id } = useParams("")

    useEffect(() => {
        if (active) {
            fetch('http://localhost:3005/movie/' + id, {
            }).then(res => {
                res.json().then(record => {
                    let dataRecord = [record]
                    setData(dataRecord);
                    SetActive(false)
                })
                    .catch(err => {
                        console.log(err);
                    })
            }).catch(err => { console.log(err) })
        }
    }, [data])
    return (
        <div>
            <header className="top">
                <div className="container">
                    <div className="mou d-flex justify-content-between text-align-center ">
                        <div>
                            <Link to='/book'><i className="fa-sharp fa-solid  fa-angle-left" style={{ color: "white", marginRight: "50px", fontSize: "20px" }} /></Link>
                            <img src={require("../assets/images/logo.png")} alt width="125px" />
                        </div>
                        <div className="d-flex mt-4">
                            <div>
                                <select className='me-4'>
                                    <option value={0}>--select City--</option>
                                    <option value="surat">surat</option>
                                    <option value="rajkot">Rajkot</option>
                                    <option value="dev">dev</option>
                                </select>
                            </div>
                            <div className="sign">
                                <Link to='/'><a href="#">Add Movie</a></Link>
                            </div>
                            <div className="menu10">
                                <a href="#"> <i className="fa-solid fa-bars" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <section>
                    <div className=" second-main d-flex justify-content-between text-align-center">
                        <div className="second-bar">
                            <a href="#">Movies</a>
                            <a href="#">Stream</a>
                            <a href="#">Events</a>
                            <a href="#">Plays</a>
                            <a href="#">Sports</a>
                            <a href="#">Activities</a>
                            <a href="#">Buzz</a>
                        </div>
                        <div className="second-bar2">
                            <a href="#">ListYourShow</a>
                            <a href="#">Corporates</a>
                            <a href="#">Offers</a>
                            <a href="#">Gift Cards</a>
                        </div>
                    </div>
                </section>

                <section className='movie-detail py-5'>
                    {data && data.filter((va, index) => {
                        return va;
                    }).map((v, i) => {
                        return (
                            <div className='container'>
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="shedow row">
                                            <div className="col-md-5">
                                                <div className="moviebook position-relative">
                                                    <img src={require("../assets/images/" + v.img)} alt />
                                                    <p>{v.schedule}</p>
                                                </div>
                                            </div>
                                            <div className="col-md-7">
                                                <div className="moviebookditil">
                                                    <h4>{v.tital}</h4>
                                                    <p><i class="fa-solid fa-star" style={{ color: "#ffffff" }}></i>{v.reting}/10 </p>
                                                </div>
                                                <div className="moviebookditil1 d-flex justify-content-between">
                                                    <div>
                                                        <p>Add Your Reating and review</p>
                                                        <span>Your reting metter</span>
                                                    </div>
                                                    <div> <button>Rate Now</button></div>
                                                </div>
                                                <div className="d-flex hindi">
                                                    <div><button>{v.mode}</button></div>
                                                    <div><button>{v.language}</button></div>
                                                </div>
                                                <div className=' time_and_date d-flex mb-4 mt-3'>
                                                    <p>{v.duretion}
                                                        <span className='px-2'>•</span>
                                                    </p>
                                                    <p>{v.genre}
                                                        <span className='px-2'>•</span>
                                                    </p>
                                                    <p>{v.certificate}
                                                        <span className='px-2'>•</span>
                                                    </p>
                                                    <p>{v.date}</p>
                                                </div>
                                                <div className='btn6'>
                                                    <Link to={'/book1/' + id}>Book Show</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="bgi position-relative">
                                            <img src={require("../assets/images/" + v.img)} alt width="100%" height="550px" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </section>

                <section className='py-5'>
                    {data && data.filter((va, index) => {
                        return va;
                    }).map((v, i) => {
                        return (
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-md-8'>
                                        <h3>About the movie</h3>
                                        <p>{v.about}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </section>
            </main>
        </div>
    )
}
export default Ditail;
