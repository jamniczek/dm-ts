import React, { FunctionComponent } from 'react';
import { Stage, Layer } from 'react-konva';
import { CoverRect } from './CoverRect';

export const Map: FunctionComponent<MapProps> = ({
	covers,
	height,
	width,
	removeCover,
	initializeCover,
	resizeCover,
	appendCover
}) => {
	return (
		<Stage
			className='stage'
			height={height}
			width={width}
			onMouseDown={initializeCover}
			onMouseMove={resizeCover}
			onMouseUp={appendCover}
		>
			<Layer>
				{covers.map((cover) => (
					<CoverRect cover={cover} removeCover={removeCover} key={cover.id} />
				))}
			</Layer>
		</Stage>
	);
};
