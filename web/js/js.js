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
		console.log(settings.settings);
		$.each(settings.settings, function(k,v) {
			k = '#' + k;
			console.log(k + ' ' +v);
			$(k).minicolors('value',v);
		});
	});
}

//send changes to back end
//note: json should only be written after change confirmed (maybe)
function postColors () {

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
		$('#strip1').minicolors();
		$('#strip2').minicolors();
		$('#strip3').minicolors();
		$('#strip4').minicolors();
		$('#strip5').minicolors();
		$('#strip6').minicolors();
		$('#strip7').minicolors();
		$('#strip8').minicolors();
	});
}

$(document).ready( function() {

	initilizeMiniColors();
	getColors();
	
});