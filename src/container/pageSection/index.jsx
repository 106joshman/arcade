import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './about'
import ArcadeInAction from './ArcadeInAction'
import Landingpage from './landingPage'
import PlayToEarn from './PlayToEarn'
import TokenEconomy from './TokenEconomy'

const Homepage = () => {
	return (
		<div className='mainContent'>
			<Landingpage />
			<About />
			<TokenEconomy />
			<ArcadeInAction />
			<PlayToEarn />
		</div>
	)
}

export default Homepage
