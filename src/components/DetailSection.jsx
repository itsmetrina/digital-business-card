const DetailSection = () => {
	return (
		<div className='detail-section'>
			<span className="detail-name">Trina Sikdar</span>
			<span className="detail-role">Frontend Developer</span>
			<span className="detail-contact">
				<a href="mailto:trinasikdar2000@gmail.com" className="detail-contact-mail">
					<button type="button">Email</button>
				</a>
				<a href="https://" target="_blank" className="detail-contact-linkedin">
					<button type="button">LinkedIn</button>
				</a>
			</span>
			<span className="detail-about">
				Frontend Developer, with 3yrs of industry experince in developing attracting and scalable user interface. Proficient in Angular, React and Javascript.
			</span>
		</div>
	)
}

export default DetailSection