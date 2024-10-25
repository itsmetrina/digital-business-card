import {Github, Linkedin} from '@styled-icons/bootstrap'
import {Portfolio} from '@styled-icons/zondicons'
import { Fragment } from 'react';

const socialLink = [
	{ id: 1, component: <Github size={30} />, label: 'GitHub' },
	{ id: 2, component: <Linkedin size={30} />, label: 'LinkedIn' },
	{ id: 3, component: <Portfolio size={30} />, label: 'Portfolio' }
];

const SocialBanner = () => {
	return (
		<div className='social-banner'>
			{socialLink.map((icon) => (
				<Fragment key={icon.id}>{icon.component}</Fragment>
			))}
		</div> 
	)
}

export default SocialBanner