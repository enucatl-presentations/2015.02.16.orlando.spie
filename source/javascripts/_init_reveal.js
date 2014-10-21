//Full list of configuration options available here:
//https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
controls: true,
progress: true,
history: true,

//mine
height: "65%",
width: "90%",
margin: 0,
center: false,
transition: 'linear',
theme: 'eth',

//Optional libraries used to extend on reveal.js
dependencies: [
    { src: 'javascripts/vendor/reveal.js/classList.js', condition: function() { return !document.body.classList; } },
    { src: 'javascripts/vendor/reveal.js/plugin/math.js', async: true }
]
});
