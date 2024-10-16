/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
			Montserrat: ['"Montserrat"', "sans-serif"],
		},
		colors: {
			primary: "#CC2D4A",
			secondary: "#8FA206",
			tertiary: "#61AEC9",
		},
    extend: {
      backgroundImage: {
        'banff': "url('https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRImnZEZfdn6fBFxZcmCMxx5OWgSqbuSWXJ6hetkyrhldTZ-e-8_1PGCS43JqBUQIYpIreOYw4Ab7AgzgZ7jp0fhY6cFivvJH8ZbTcSag.jpg')", // Canada (hiking, skiing, mountain biking)
        'chamonix': "url('https://example.com/chamonix.jpg')", // France (mountaineering, skiing, climbing)
        'queenstown': "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGtfJHKI11urhJPWs3e2sNerpVZWvl0KOyRA&s')", // New Zealand (bungee jumping, skydiving, skiing)
        'innsbruck': "url('https://example.com/innsbruck.jpg')", // Austria (snowboarding, paragliding, skiing)
        'interlaken': "url('https://example.com/interlaken.jpg')", // Switzerland (skydiving, paragliding, canyoning)
        'maui': "url('https://example.com/maui.jpg')", // Hawaii, USA (surfing, windsurfing, kiteboarding)
        'whistler': "url('https://example.com/whistler.jpg')", // Canada (mountain biking, skiing, snowboarding)
        'valle_nevado': "url('https://example.com/valle_nevado.jpg')", // Chile (skiing, snowboarding)
        'moab': "url('https://example.com/moab.jpg')", // Utah, USA (rock climbing, mountain biking)
        'bali_surf': "url('https://example.com/bali_surf.jpg')", // Bali, Indonesia (surfing)
        'cape_town': "url('https://example.com/cape_town.jpg')", // South Africa (kiteboarding, paragliding)
        'iceland_extreme': "url('https://example.com/iceland_extreme.jpg')", // Iceland (glacier hiking, ice climbing)
        'patagonia': "url('https://example.com/patagonia.jpg')", // Argentina/Chile (trekking, mountaineering)
        'tahoe': "url('https://example.com/tahoe.jpg')", // California, USA (skiing, snowboarding)
        'costa_rica': "url('https://example.com/costa_rica.jpg')", // Costa Rica (surfing, ziplining, rafting)
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
		require("@tailwindcss/typography"),
		require("@tailwindcss/aspect-ratio"),
  ],
}