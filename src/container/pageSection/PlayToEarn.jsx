import { SectionHeader } from '../../components/SectionHeader'

const PlayToEarn = () => {
	const characters = [
		{
			id: 1,
			img: new URL('../../assets/warzone.png', import.meta.url).href,
		},
		{
			id: 2,
			img: new URL('../../assets/cs-go.png', import.meta.url).href,
		},
		{
			id: 3,
			img: new URL('../../assets/dota-2.png', import.meta.url).href,
		},
		{
			id: 4,
			img: new URL('../../assets/fortnite.png', import.meta.url).href,
		},
		{
			id: 5,
			img: new URL('../../assets/league.png', import.meta.url).href,
		},
		{
			id: 6,
			img: new URL('../../assets/rainbow.png', import.meta.url).href,
		},
	]

	return (
		<section className='relative mt-96'>
			<SectionHeader biggerTitle='Play to earn' title='Play to earn' />

			<section className='flex items-center gap-8 pt-10'>
				{characters?.map(({ img, id }) => (
					<img src={img} alt='' key={id} className='snap-center' />
				))}
			</section>
		</section>
	)
}
export default PlayToEarn
