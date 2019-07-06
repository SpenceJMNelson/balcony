$( document ).ready(function() {
  $('#main-wrapper').tilt({
    maxTilt:        10,
    perspective:    9999,   // Transform perspective, the lower the more extreme the tilt gets.
    speed: 10000
  })
});
