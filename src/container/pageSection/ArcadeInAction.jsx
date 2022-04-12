import { SectionHeader } from '../../components/SectionHeader'
import tabletImg from '../../assets/mockup-f9game.png'

const ArcadeInAction = () => {
	return (
		<section className='relative mt-96'>
			<SectionHeader biggerTitle='Arcade In Action' title='Arcade In Action' />

			<div>
				<img src={tabletImg} alt='' />

				<div>
					<button>hello</button>
				</div>
			</div>
		</section>
	)
}
export default ArcadeInAction
