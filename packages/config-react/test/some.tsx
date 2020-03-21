import React from 'react'


const A = ({ someArray }) => {
	<div>
		<p>wow</p>
		{someArray.map(item => (
			<p key={item}>{item}</p>
		))}
	</div>
}
