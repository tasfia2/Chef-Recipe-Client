import React from 'react';
import ChefCard from '../../Shared/ChefCard/ChefCard';
import Banner from '../../Shared/Banner/Banner';
import PopularRecipes from '../../Shared/PopularRecipes/PopularRecipes';
import Trending from '../../Shared/Trending/Trending';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <ChefCard></ChefCard>
            <PopularRecipes></PopularRecipes>
            <Trending></Trending>
        </div>
    );
};

export default Home;