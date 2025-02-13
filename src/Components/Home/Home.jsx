import React from 'react'
// import Header from './Header'
import Banner from './Banner'
import Categories from './Categories'
import FacilityCardContainer from './FacilityCardContainer'
import SaleBanner from './SaleBanner'
import Article from './Article'
import Media from './Media'
import ProductCaraousal from './ProductCaraousal'

const Home = (props) => {
    return (
        <>  
            <Banner/>
            <Categories />
            <ProductCaraousal onclick={props.onclick} />
            <FacilityCardContainer />
            <SaleBanner/>
            <Article/>
            <Media />
        </>
  )
}

export default Home