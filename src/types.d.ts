interface AppProps {}

interface Cover {
	id: string;
	x: number;
	y: number;
	width: number;
	height: number;
	fill: string;
}

interface CoverRectProps {
	cover: Cover;
	removeCover: (id: string) => void;
}

interface MapProps {
	covers: Cover[];
	width: number;
	height: number;
	removeCover: (id: string) => void;
	initializeCover: (e: KonvaEventObject<MouseEvent>) => void;
	resizeCover: (e: KonvaEventObject<MouseEvent>) => void;
	appendCover: (e: KonvaEventObject<MouseEvent>) => void;
	// handleMouseMove: (e: MouseEvent) => void;
	// handleMouseUp: (e: MouseEvent) => void;
}
