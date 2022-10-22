import React from 'react'
import amazon from '../../assets/company/amazon.svg'
import tesla from '../../assets/company/tesla.svg'
import disney from '../../assets/company/disney.svg'
import mercy from '../../assets/company/mercy.svg'
import goldman from '../../assets/company/goldman.svg'
import apple from '../../assets/company/apple.svg'
import netflix from '../../assets/company/netflix.svg'
import walmart from '../../assets/company/walmart.svg'
import wb from '../../assets/company/wb.svg'
import green from '../../assets/company/green.svg'

export default function Company() {
  return (
    <>
         <section className="company py-12">
         <div className="title-company text-black text-2xl mb-4 font-[500] uppercase"><p>the customer</p></div>
            <div className='inside-company bg-white py-8'>
              <div className="contain-company">
                  <div className="scroller-company">
                      <div className="logo-company"><img className="logo-img-company" src={tesla} alt="tesla" /></div>
                      <div className="logo-company"><img className="logo-img-company" src={mercy} alt="mercy" /></div>
                      <div className="logo-company"><img className="logo-img-company" src={goldman} alt="goldman" /></div>
                      <div className="logo-company"><img className="logo-img-company" src={amazon}alt="amazon" /></div>
                      <div className="logo-company"><img className="logo-img-company" src={apple} alt="apple" /></div>
                      <div className="logo-company"><img className="logo-img-company" src={netflix} alt="netflix" /></div>
                      <div className="logo-company"><img className="logo-img-company" src={green} alt="green" /></div>
                      <div className="logo-company"><img className="logo-img-company" src={walmart} alt="walmart" /></div>
                      <div className="logo-company"><img className="logo-img-company" src={disney} alt="disney" /></div>
                      <div className="logo-company"><img className="logo-img-company" src={wb} alt="wb" /></div>
                  </div>
              </div>
            </div>
        </section>
    </>
  )
}
