/* Corresponde al documento index.html */
document.addEventListener('DOMContentLoaded', () => {
	const imagen = document.getElementById('presente');
	const audio = document.getElementById('ElAudio');

	imagen.addEventListener('click', () => {
		audio.play();
	});
});
