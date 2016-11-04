import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function Chart (props) { 
	
	function average(data) {
		return _.round(_.sum(data)/data.length);
	}

	return (
		<div>
			<Sparklines height={90} width={120} data={props.data}>
				<SparklinesLine color={props.color} />
				<SparklinesReferenceLine type="avg" />
			</Sparklines>
			<div>{average(props.data)}{props.units}</div>
		</div>

	)
}


export default Chart;