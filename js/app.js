/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',
  
{
  "fps_limit": 30,
  "particles": {
    "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
    "color": { "value": "#ca373e" },
    "shape": {
      "type": "circle",
      "stroke": { "width": 0, "color": "#8B0000" },
      "polygon": { "nb_sides": 5 },
      "image": { "src": "img/github.svg", "width": 100, "height": 100 }
    },
    "opacity": {
      "value": 1,
      "random": false,
      "anim": { "enable": true, "speed": 1, "opacity_min": 0.1, "sync": false }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "top-left",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 }
    }
  },
  "interactivity": {
    "detect_on": "parent",
    "events": {
      "onhover": { "enable": true, "mode": "bubble" },
      "onclick": { "enable": false, "mode": "repulse" },
      "resize": true
    },
    "modes": {
      "grab": { "distance": 400, "line_linked": { "opacity": 1 } },
      "bubble": {
        "distance": 350,
        "size": 15,
        "duration": 2,
        "opacity": 0.1,
        "speed": 1,
        "color": "#ffffff"
      },
      "repulse": { "distance": 150, "duration": 0.4 },
      "remove": { "particles_nb": 2 }
    }
  },
  "retina_detect": false
}

);