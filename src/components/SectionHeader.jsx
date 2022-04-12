export const SectionHeader = ({ biggerTitle, title, text }) => {
	return (
		<header>
			<h2 className='font-Bebas gradient-text absolute ml-auto mr-auto w-full -top-44'>
				{biggerTitle}
			</h2>
			<div className='text-white relative w-full z-10'>
				<h3 className='uppercase font-ultra text-[4rem]'>{title}</h3>
				{text && <p className='text-sm'>{text}</p>}
			</div>
		</header>
	)
}
