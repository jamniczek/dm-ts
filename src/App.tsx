import React, { FunctionComponent, useState } from 'react';
import { Map } from './components/Map';
import { v4 } from 'uuid';
import './App.css';
import { KonvaEventObject } from 'konva/types/Node';

import { setCoverDimensions } from './utils';

const aCover: Cover = {
	id: v4(),
	fill: '#000',
	x: 10,
	y: 10,
	width: 100,
	height: 100
};

const anotherCover: Cover = {
	id: v4(),
	fill: '#000',
	x: 120,
	y: 10,
	width: 100,
	height: 100
};

const defaultCover: Cover = {
	id: v4(),
	fill: '#000',
	x: 0,
	y: 0,
	width: 0,
	height: 0
};

const App: FunctionComponent<AppProps> = () => {
	const [covers, setCovers] = useState([aCover, anotherCover]);
	const [currentCover, setCurrentCover] = useState<Cover>(defaultCover);

	const removeCover = (coverId: string) => {
		setCovers(covers.filter(({ id }) => id !== coverId));
	};

	const initializeCover = (e: KonvaEventObject<MouseEvent>) => {
		const pointer = e.target.getStage()?.getPointerPosition();
		if (!pointer) {
			return;
		}
		const { x, y } = pointer;
		const newCover: Cover = {
			id: v4(),
			fill: '#000',
			x,
			y,
			width: 0,
			height: 0
		};
		setCovers([...covers, newCover]);
		setCurrentCover(newCover);
	};

	const resizeCover = (e: KonvaEventObject<MouseEvent>) => {
		const pointer = e.target.getStage()?.getPointerPosition();
		if (!pointer) {
			return;
		}
		const { x, y } = pointer;
		setCovers(
			covers.map((cover) =>
				cover.id === currentCover.id
					? setCoverDimensions(currentCover, x, y)
					: cover
			)
		);

		setCurrentCover(setCoverDimensions(currentCover, x, y));
	};

	const appendCover = () => {
		setCurrentCover(defaultCover);
	};

	return (
		<div className='App'>
			<header>dm panel</header>
			<Map
				covers={covers}
				height={500}
				width={500}
				removeCover={removeCover}
				initializeCover={initializeCover}
				resizeCover={resizeCover}
				appendCover={appendCover}
			/>
		</div>
	);
};

export default App;
