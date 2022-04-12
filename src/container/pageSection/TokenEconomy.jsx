import tokenEconomyImg from '../../assets/token-economy.png'
import { Underline } from '../../svgs/underline'
import { SectionHeader } from '../../components/SectionHeader'

const TokenEconomy = () => {
	const benefits = [
		{
			id: 1,
			img: new URL('../../assets/easy.png', import.meta.url).href,
			title: 'Easy to access',
			text: 'Players from all over the world can access our desktop client and use either USDT, BTC, ETH or ARD to deposit or withdraw from their Arcader account from anywhere in the world.',
		},
		{
			id: 2,
			img: new URL('../../assets/mobile.png', import.meta.url).href,
			title: 'Available on mobile',
			text: 'Players can download Arcader’s mobile application to access the same tournaments, stream live gameplays or bet on Esport matches on the go.',
		},
		{
			id: 3,
			img: new URL('../../assets/community.png', import.meta.url).href,
			title: 'Commuity centric',
			text: 'Our growing community of Esport gaming fans are our greatest asset. We give their thoughts, ideas and opinions the highest priority',
		},
		{
			id: 4,
			img: new URL('../../assets/player.png', import.meta.url).href,
			title: 'Player promotions',
			text: 'Arcader being a community focused brand has aimed to offer the best possible promotions in the Esport industry.',
		},
		{
			id: 5,
			img: new URL('../../assets/decentralized.png', import.meta.url).href,
			title: '100% decentralized',
			text: 'Our one of a kind feature set gives 100% control to its community and its users. Be it setting up matches, announcing results or placing bets. The Arcader community works together to make magic happen.',
		},
	]

	return (
		<section className='relative mt-96'>
			<SectionHeader
				biggerTitle='Our Token'
				title='Our Token Economy'
				text='A utility-based native token with by burning mechanisms in place
						resulting in a deflationary tokenomics.'
			/>

			<section className='text-white'>
				<div className='flex items-center justify-center w-full'>
					<img src={tokenEconomyImg} alt='' width={1000} />
				</div>
			</section>

			{/* benefits */}
			<section className='text-white grid grid-cols-5 gap-8 mx-auto max-w-[1400px] bg-economy bg-center bg-cover py-36 '>
				{benefits?.map(({ img, id, title, text }) => (
					<article className='flex flex-col items-center gap-8' key={id}>
						<div>
							<img src={img} alt='' width={150} />
						</div>

						<div>
							<h3 className='uppercase font-Alfa text-lg'>{title}</h3>
							<p className='text-left pt-4'>{text}</p>
						</div>

						<div className='pt-10'>
							<Underline />
						</div>
					</article>
				))}
			</section>
		</section>
	)
}

export default TokenEconomy
