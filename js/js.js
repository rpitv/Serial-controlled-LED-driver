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

//convert decimal to hex
function d2h(d){
	return d.toString(16);
}

//convert hex to decimal
function h2d(h){
	return parseInt(h,16);
}

//create an average color from 2 or more hex values
function averageColors (thiz){
	//this needs to change the color of the submaster, but not actually trigger the submaster
	var idSelector = '#' + $(thiz).attr('id');
	var classSelector = '.' + $(thiz).attr('id'); 
	
	
	//find the submaster, get id
	classSelector = '.' + $(idSelector).parents().find(classSelector).attr('id');
	//find all strips controled by submaster and write to array
	var colorList = $(classSelector).map(function(){return $(this).attr('value')});
	
	var r = [];
	var g = [];
	var b = [];
	$(colorList).each(function(k,v){
		r.push(v.slice(1,3));
		g.push(v.slice(3,5));
		b.push(v.slice(5,7));
	});
	$(r).each(function(k,v){
		r[k]= h2d(v);
	});
	$(g).each(function(k,v){
		g[k]= h2d(v);
	});
	$(b).each(function(k,v){
		b[k]= h2d(v);
	});
	var sumR = parseInt(0);
	var sumG = parseInt(0);
	var sumB = parseInt(0);
	$(r).each(function(k,v){
		sumR += parseInt(v); 
	});
	var avgR = Math.floor(sumR/r.length);
	avgR = d2h(avgR);
	$(g).each(function(k,v){
		sumG += parseInt(v); 
	});
	var avgG = Math.floor(sumG/g.length);
	avgG = d2h(avgG);
	$(b).each(function(k,v){
		sumB += parseInt(v); 
	});
	var avgB = Math.floor(sumB/b.length);
	avgB = d2h(avgB);

	var avgRGB;
	avgRGB= '#' + avgR + avgG + avgB;

	idSelector = '#' + classSelector.slice(1);
	$(idSelector).siblings().find('.minicolors-swatch-color').css('background', avgRGB);
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

	
	//write changes to JSON file
	$.ajax({
		url: '../data/settings.js',
		dataType: 'json',
		async: false,
		success: function(settings){
			console.log(channel + ' ' + color);

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
		}
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

//work on a better way to find submasters and slaves based on classes
	$('.minicolors').each( function() {
		$('#submaster0').minicolors({
			change: function(){
				$('#strip1, #strip2, #strip3, #strip4, #strip5, #strip6, #strip7, #strip8').minicolors('value',$(this).val());
			}
		});
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
		$('#strip1, #strip2, #strip3, #strip4, #strip5, #strip6, #strip7, #strip8').minicolors({
			change: function() {
				postColors(this);
				averageColors(this);
			}
		});

	});
}

$(document).ready( function() {

	initilizeMiniColors();
	getColors();
	
});