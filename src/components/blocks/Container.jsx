const Container = ({children, grid, size, className=''}) => {

	const classes = `container${size ? (' container--' + size) : ''}${grid ? ' container--grid-100' : ''} ${className}`

	return (
		<div className={classes}>{children}</div>
	);
}

export default Container;