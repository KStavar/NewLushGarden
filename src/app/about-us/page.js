import AboutProducts from '@/components/lib/about/AboutProducts'
import Rewie from '@/components/lib/about/Rewie'
import React from 'react'

export default function AboutUs() {
    return (
        <>

            <div className="div-h2-about">
                <h2 className="h2-about">About Us</h2>
            </div>
            <div className="div-h2-empty">

            </div>
            <AboutProducts />
            <Rewie />
        </>
    )
}
