import React from 'react';
// import { data } from './data';
import List from './List';
// import { useState } from 'react';
// import dateFnsTz from 'date-fns-tz';


const PlaceHolder = ({ resetDate, dateSelect, filterPeople }) => {


	return (
		< section className='container' >
			<h1>
				{filterPeople.length} Birthdays
			</h1>
			<List people={filterPeople} dateSelect={dateSelect}></List>
			<button onClick={() => resetDate()}>Reset Date</button>
		</section >
	)
}

export default PlaceHolder;