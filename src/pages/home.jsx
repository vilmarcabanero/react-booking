import React from 'react';
import Banner from 'components/Banner';
import Highlights from 'components/Highlights';
import { motion } from 'framer-motion';

const Home = () => {
	let data = {
		title: 'Zuitt Coding Bootcamp',
		description: 'A cost-efficient, cost-effective coding bootcamp',
		motto: 'Opportunities for everyone, everywhere.',
		label: 'View Our Courses',
	};

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 1 }}
		>
			<Banner data={data} />
			<Highlights />
		</motion.div>
	);
};

export default Home;
