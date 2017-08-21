class ColorController < ApplicationController
	def index
		@colors = {
			"Xbox": {
				primary: "#6b6b6b",
				secondary: "#c2c2c2",
				tertiary: "#107c10"
			},
			"Sky": {
				primary: "#22ADC2",
				secondary: "#F3F3F3",
				tertiary: "#22ADC2"
			},
			"Burgundy": {
				primary: "white",
				secondary: "#800020",
				tertiary: "white"
			},
			"Hot Dog Stand": {
				primary: "red",
				secondary: "yellow",
				tertiary: "white"
			},
			"95": {
				primary: "#6c6c6c",
				secondary: "#208c71",
				tertiary: "white"
			},
			"Spiderbite": {
				primary: "white",
				secondary: "#262626",
				tertiary: "red"
			},
			"Seafoam": {
				primary: "white",
				secondary: "#262626",
				tertiary: "#00140E"
			},
			"Walk in the Sun": {
				primary: "pink",
				secondary: "orange",
				tertiary: "white"
			},
			"Walk in the Sun 2": {
				primary: "light blue",
				secondary: "pink",
				tertiary: "orange"
			},
			"Walk in the Sun 3": {
				primary: "#B0BCBF",
				secondary: "#A3ABAD",
				tertiary: "#666666"
			},
			"Gas Station": {
				primary: "#161616",
				secondary: "#6BC49D",
				tertiary: "#EFA5E8"
			},
			"Stormtrooper": {
				primary: "#fff",
				secondary: "#000",
				tertiary: "grey"
			},
			"Raven": {
				primary: "#00243A",
				secondary: "#000",
				tertiary: "#fff"
			},
			"Wolf Tyrant": {
				primary: "#B0BCBF",
				secondary: "#A3ABAD",
				tertiary: "#666666"
			},
			"Urbnet": {
				primary: "#161616",
				secondary: "#222",
				tertiary: "yellow"
			},
			"Freshly Squeezed": {
				primary: "#F4974D",
				secondary: "#222",
				tertiary: "yellow"
			},
			"Bright Green": {
				primary: "lime",
				secondary: "#222",
				tertiary: "yellow"
			},
			"Sweden": {
				primary: "#161616",
				secondary: "blue",
				tertiary: "yellow"
			},
		}
	end
end
