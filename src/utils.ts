export const setCoverDimensions = (
	cover: Cover,
	x: number,
	y: number
): Cover => {
	return {
		...cover,
		width: x - cover.x,
		height: y - cover?.y
	};
};
