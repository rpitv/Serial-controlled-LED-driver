/******************************************************************************
	This file is part of i2c_led_control.
	https://github.com/rpitv/i2c_led_control
	Copyright 2014

	This program is free software: you can redistribute it and/or modify
	it under the terms of the GNU General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.

	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.

	You should have received a copy of the GNU General Public License
	along with this program.  If not, see <http://www.gnu.org/licenses/>.
******************************************************************************/


//create an average color from 2 or more hex values
function averageColors (){

}

//load page with last used colors
function getColors () {
	$.getJSON ('data/settings.js', function(settings) {
		$.each(settings.settings, function(k,v) {
			k = '#' + k;
			$(k).minicolors('value',v);
		});
	});
}

//send changes to back end
//note: json should only be written after change confirmed (maybe)
function postColors (thiz) {
	var channel = $(thiz).attr('id');
	var color = $(thiz).val();
	
	console.log(channel+color);
	
	//write changes to JSON file
	$.getJSON('../data/settings.js', function(settings){
		settings.settings[channel] = color;
		settingsJson = JSON.stringify(settings);
		
		//clean channel and color input
		channel = parseInt(channel.slice(5)) - 1;		//strips begin at 0
		color = color.slice(1);		//no octothorpe
		$.post('change.php',{channel:channel,color:color,settings:settingsJson}).done(
			function(data){
				if(data){
					console.log('PHP Error: ' + data);
				}
			}
		);
	});
}

function initilizeMiniColors () {
	//MiniColors Defaults
	$.minicolors = {
		defaults: {
			animationSpeed: 50,
			animationEasing: 'swing',
			changeDelay: 0,
			control: 'wheel',
			defaultValue: '',
			hide: null,
			hideSpeed: 300,
			inline: false,
			letterCase: 'lowercase',
			opacity: false,
			position: 'bottom right',
			show: null,
			showSpeed: 100,
			theme: 'bootstrap'
		}
	};
	//end defaults

	$('.minicolors').each( function() {
		$('#submaster1').minicolors({
			change: function(){
				$('#strip1, #strip2').minicolors('value',$(this).val());
			}
		});
		$('#submaster2').minicolors({
			change: function(){
				$('#strip3, #strip4').minicolors('value',$(this).val());
			}
		});
		$('#submaster3').minicolors({
			change: function(){
				$('#strip5, #strip6').minicolors('value',$(this).val());
			}
		});
		$('#submaster4').minicolors({
			change: function(){
				$('#strip7, #strip8').minicolors('value',$(this).val());
			}
		});
		$('#strip1').minicolors({
			change: function() {
				postColors(this);
			}
		});
		$('#strip2').minicolors({
			change: function() {
				postColors(this);
			}
		});
		$('#strip3').minicolors({
			change: function() {
				postColors(this);
			}
		});
		$('#strip4').minicolors({
			change: function() {
				postColors(this);
			}
		});
		$('#strip5').minicolors({
			change: function() {
				postColors(this);
			}
		});
		$('#strip6').minicolors({
			change: function() {
				postColors(this);
			}
		});
		$('#strip7').minicolors({
			change: function() {
				postColors(this);
			}
		});
		$('#strip8').minicolors({
			change: function() {
				postColors(this);
			}
		});
	});
}

$(document).ready( function() {

	initilizeMiniColors();
	getColors();
	
});