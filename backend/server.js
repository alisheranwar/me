import app from './app';

app.get('/', (req, res, next) => {
	res.send('Route is working Fin');
});

app.listen(5000, () => {
	console.log('Files are serve at http://localhost:5000');
});
