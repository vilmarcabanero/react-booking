import React from 'react';
import Banner from 'components/Banner';
import Highlights from 'components/Highlights';
import Swal from 'sweetalert2'


const Home = () => {
	let data = {
		title: 'Zuitt Coding Bootcamp',
		description: 'A cost-efficient, cost-effective coding bootcamp',
		motto: 'Opportunities for everyone, everywhere.',
		label: 'View Our Courses',
	};
  
	return (
		<div>
			<Banner data={data} />
			<Highlights />
		</div>
	);
};

export default Home;
