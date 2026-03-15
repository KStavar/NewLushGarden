import React from 'react'
import Image from 'next/image'
export default function AboutProducts() {
  return (
    <section className="sec-about-products">

            <Image className="img-about-products" src="/pexels-cottonbro-studio-4507715 1.png" alt="" width={126} height={126}/>
            <div className="about-products">
                <div className="div-products">
                    <Image className="products-svg" src="/Time-Cosuming 1.svg" alt="" width={126} height={126}/>
                    <h3 className="h3-products">Quality Product</h3>
                    <p className="p-products">Our flowers are of the highest quality, carefully selected and sourced from
                        reputable</p>
                   </div>
                <div className="div-products">
                    <Image className="products-svg" src="/Grow_Sprout.svg" alt="" width={126} height={126}/>
                    <h3 className="h3-products">Always Fresh</h3>
                    <p className="p-products">Our flowers are always fresh, handpicked and delivered promptly for maximum
                        longevity and enjoyment.</p>
                </div>
                <div className="div-products">
                    <Image className="products-svg" src="/Temperature 1.svg" alt="" width={126} height={126}/>
                    <h3 className="h3-products">Work Smart</h3>
                    <p className="p-products">We work smart, using innovative techniques and technology to streamline our
                        processes</p>
                </div>
                <div className="div-products">
                    <Image className="products-svg" src="/Pruning 1.svg" alt=""width={126} height={126} />
                    <h3 className="h3-products">Excelent Service</h3>
                    <p className="p-products">We pride ourselves on providing excellent service, going above and beyond to
                        meet our customers' needs</p>
                </div>
            </div>
        </section>
  )
}
