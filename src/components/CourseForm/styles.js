import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	form: {
		'& .MuiTextField-root': {
			margin: theme.spacing(1),
			width: '35ch',
		},
		marginTop: '4rem',
	},
	button: {
		margin: theme.spacing(1),
		width: '48ch',
	},
	card: {
		width: '40ch',
		height: '40ch',
		padding: '1rem',
		marginLeft: 'auto',
		marginRight: 'auto',
		marginTop: '4rem',
		position: 'relative',
		textAlign: 'center',
		marginBottom: '2rem',
	},
	title: {
		marginBottom: '2rem',
	},
	error: {
		color: '#ff0033',
		position: 'absolute',
		bottom: '0',
	},
	errorContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		border: '2px solid #000',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
}));

export default useStyles;
