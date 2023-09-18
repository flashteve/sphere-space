
import { Viewer } from '@photo-sphere-viewer/core'
import '@photo-sphere-viewer/core/index.css'
import './style.css'

const querySearchParams = new URLSearchParams(window.location.search)
const sphereName = querySearchParams.get('sphere')

new Viewer({
  container: document.querySelector('#viewer'),
  panorama: `http://localhost:8080/public/${sphereName}.jpg`,
  navbar: ['zoom', 'move'],
  lang: {
    zoom: 'Zoom',
    zoomOut: 'Zoom arrière',
    zoomIn: 'Zoom avant',
    moveUp: 'Déplacement en haut',
    moveDown: 'Déplacement en bas',
    moveLeft: 'Déplacement à gauche',
    moveRight: 'Déplacement à droite',
    twoFingers: 'Utilisez deux doigts pour naviguer',
    ctrlZoom: 'Utilisez ctrl + scroll pour zoomer',
    loadError: 'Erreur de chargement',
  }
});
