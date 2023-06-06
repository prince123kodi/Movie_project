import React from 'react'
import '../assets/css/style.css'
import '../assets/css/bootstrap.min.css'
import '../assets/css/all.min.css'
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Book() {
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
                        <Link to={'/ditail/'+id}><i className="fa-sharp fa-solid  fa-angle-left" style={{color:"white",marginRight:"50px",fontSize:"20px"}}/></Link>
                            <img src={require("../assets/images/logo.png")} alt width="125px" />
                        </div>
                        <div className="d-flex mt-4">
                            <div>
                                <select  className='me-4'>
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

                {data && data.filter((va, index) => {
                    return va;
                }).map((v, i) => {
                    return (
                        <section>
                            <div className="pages">
                                <div className="pages-main">
                                    <h2>{v.tital} ({v.select})-{v.select1}</h2>
                                    <p />
                                    <div className="d-flex tep-1">
                                        <p>{v.certificate}</p>
                                        <div className=" d-flex text-align-center">
                                            <p>{v.genre}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )
                })}
                <section>
                    <div className="d-flex date-main">
                        <div className="w-40">
                            <div className="dayli-date d-flex align-self-center">
                                <i className="fa-sharp fa-solid  fa-angle-left" />
                                <div className="date_inner">
                                    <span>Tuh</span>
                                    <h4>06</h4>
                                    <span>Apr</span>
                                </div>
                                <div className="date_inner">
                                    <span>wes</span>
                                    <h4>06</h4>
                                    <span>Ags</span>
                                </div>
                                <div className="date_inner">
                                    <span>Tuh</span>
                                    <h4>06</h4>
                                    <span>Apr</span>
                                </div>
                                <div className="date_inner">
                                    <span>Tuh</span>
                                    <h4>06</h4>
                                    <span>Apr</span>
                                </div>
                                <div className="date_inner">
                                    <span>Tuh</span>
                                    <h4>06</h4>
                                    <span>Apr</span>
                                </div>
                                <i className="fa-sharp fa-solid fa-angle-right" />
                            </div>
                        </div>
                        <div className="w-60">
                            <div className="d-flex justify-content-between">
                                <div className="inner-2">
                                    <a className="style4" href="#">Hindi-3D  <i className="fa-sharp fa-solid fa-angle-down" /></a>
                                    <a className="style4" href="#">Filter Sub Regions  <i className="fa-sharp fa-solid fa-angle-down" /></a>
                                    <a className="style4" href="#">Filter Price Reng  <i className="fa-sharp fa-solid fa-angle-down" /></a>
                                    <a className="style4" href="#">Filter Show Timings <i className="fa-sharp fa-solid fa-angle-down" /></a>
                                    <i className="fa-solid fa-magnifying-glass ms-5" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <div className="d-flex">
                            <div className="w-40 ">
                                <div className="showdeitail">
                                    <i className="fa-solid fa-heart" />
                                    <h5>Cinepolis: Imperial Square Mall, Surat</h5>
                                </div>
                                <div className="d-flex ms-4">
                                    <div className="showdeitail1">
                                        <i className="fa-solid fa-mobile " style={{ color: '#49ba8e' }} />
                                        <span>M-Ticket</span>
                                    </div>
                                    <div className="showdeitail2">
                                        <i className="fa-solid fa-mobile " style={{ color: '#ffa426' }} />
                                        <span>Food &amp; Beverage</span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-60">
                                <div className="siting d-flex">
                                    <Link to={'/sit/'+id}>
                                        <div className="siting_inner">
                                            <a href="#">10:30 Am</a>
                                            <p>classic</p>
                                        </div>
                                    </Link>
                                    <Link to={'/sit/'+id}>
                                        <div className="siting_inner">
                                            <a href="#">10:30 Am</a>
                                            <p>classic</p>
                                        </div>
                                    </Link>
                                    <Link to={'/sit/'+id}>
                                        <div className="siting_inner">
                                            <a href="#">10:30 Am</a>
                                            <p>classic</p>
                                        </div>
                                    </Link>
                                    <Link to={'/sit/'+id}>
                                        <div className="siting_inner">
                                            <a href="#">10:30 Am</a>
                                            <p>classic</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="siting d-flex">
                                <Link to={'/sit/'+id}>
                                        <div className="siting_inner">
                                            <a href="#">10:30 Am</a>
                                            <p>classic</p>
                                        </div>
                                    </Link>
                                    <Link to={'/sit/'+id}>
                                        <div className="siting_inner">
                                            <a href="#">10:30 Am</a>
                                            <p>classic</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="secondDitail">
                            <div className="d-flex">
                                <div className="w-40 ">
                                    <div className="showdeitail">
                                        <i className="fa-solid fa-heart" />
                                        <h5>Cineverse Cinema: Katargam, Surat</h5>
                                    </div>
                                    <div className="d-flex ms-4">
                                        <div className="showdeitail1">
                                            <i className="fa-solid fa-mobile " style={{ color: '#49ba8e' }} />
                                            <span>M-Ticket</span>
                                        </div>
                                        <div className="showdeitail2">
                                            <i className="fa-solid fa-mobile " style={{ color: '#ffa426' }} />
                                            <span>Food &amp; Beverage</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-60">
                                    <div className="siting d-flex">
                                    <Link to={'/sit/'+id}>
                                        <div className="siting_inner">
                                            <a href="#">10:30 Am</a>
                                            <p>classic</p>
                                        </div>
                                    </Link>
                                    <Link to={'/sit/'+id}>
                                        <div className="siting_inner">
                                            <a href="#">10:30 Am</a>
                                            <p>classic</p>
                                        </div>
                                    </Link>
                                    <Link to={'/sit/'+id}>
                                        <div className="siting_inner">
                                            <a href="#">10:30 Am</a>
                                            <p>classic</p>
                                        </div>
                                    </Link>
                                    <Link to={'/sit/'+id}>
                                        <div className="siting_inner">
                                            <a href="#">10:30 Am</a>
                                            <p>classic</p>
                                        </div>
                                    </Link>
                                    </div>
                                    <div className="siting d-flex">
                                    <Link to={'/sit/'+id}>
                                        <div className="siting_inner">
                                            <a href="#">10:30 Am</a>
                                            <p>classic</p>
                                        </div>
                                    </Link>
                                    <Link to={'/sit/'+id}>
                                        <div className="siting_inner">
                                            <a href="#">10:30 Am</a>
                                            <p>classic</p>
                                        </div>
                                    </Link>
                                    <Link to={'/sit/'+id}>
                                        <div className="siting_inner">
                                            <a href="#">10:30 Am</a>
                                            <p>classic</p>
                                        </div>
                                    </Link>
                                
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
export default Book;
