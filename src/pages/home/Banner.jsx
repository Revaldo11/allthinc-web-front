import React from "react";

const title =(
    <h2>
        Mulai <span>Buat</span> and jual karyamu
    </h2>
)

import logo from '../../assets/images/banner/banner.png'

const desc= "Membuat Desain tidak pernah semudah ini!. Dengan Teknologi AI Allthinc kamu bisa mulai membuat dsainmu sendiri dan mulai berjualan dengan desainmu, Coba Sekarang Juga !!!"
const Banner = () => {
  return <div className="banner-section style-4">
        <div className="container">
            <div className="banner-content">
                <div className="gradient"></div>
                <img className="banner-image" src={logo} alt="banner" />
                {/* Column content */}
                <div className="content">
                    {title}
                    <p className="text-white font-extralight not-italic">{desc}</p>
                    <div className="banner-btn bg-neutral hover:bg-neutral-light hover:transition-all transition ease-in-out rounded-md">
                        <a href="#" className="start-now text-white">Mulai Sekarang</a>
                    </div> 
                </div>
            </div>
        </div>
  </div>
}

export default Banner
