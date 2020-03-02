import React, { FunctionComponent } from 'react';
import { Rect } from 'react-konva';

export const CoverRect: FunctionComponent<CoverRectProps> = ({
	cover,
	removeCover
}) => {
	const { id } = cover;
	return (
		<Rect
			{...cover}
			onClick={() => {
				removeCover(id);
			}}
		/>
	);
};
