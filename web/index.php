<?php

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

?>
<!DOCTYPE html>

<html>

<head>

	<title>RPI TV Lighting System 01.0</title>
	<link href="css/bootstrap.min.css" rel="stylesheet">
	<link href="css/jquery.minicolors.css" rel="stylesheet">
	<link href="css/style.css" rel="stylesheet">

</head>

<body>
	<div class="row" style="margin: 40px 40px;">
		<div>
			<h2>Master Control</h2>
			<p> Note: Buttons do not work yet.</p>
			<div class="col-xs-12">
				<div class="btn-group btn-group-justified submaster0">
					<div class="btn-group">
						<button type="button" disabled='disabled' class="btn btn-default">On</button>
					</div>
					<div class="btn-group">
						<button type="button" disabled='disabled' class="btn btn-default">Full</button>
					</div>
					<div class="btn-group">
						<button type="button" disabled='disabled' class="btn btn-default">Off</button>
					</div>
					<div class="btn-group">
						<button type="button" disabled='disabled' class="btn btn-default">Away</button>
					</div>
				</div>

				<input type="hidden" id="submaster0" class="minicolors master" value="ffffff">
			</div>
		</div>
	</div>
		
	</div>
	<div class="row" style="margin: 40px 40px;">
		<div>
			<h2>TV Wall</h2>

			<div class='col-xs-6 col-xs-offset-3'>
				<div class="btn-group btn-group-justified submaster1">
					<div class="btn-group">
						<button type="button" disabled='disabled' class="btn btn-default">On</button>
					</div>
					  <div class="btn-group">
						<button type="button" disabled='disabled' class="btn btn-default">Off</button>
					</div>
				</div>
			</div>

			<div class='col-xs-2 col-xs-offset-5'>
				<p>Submaster 1</p>
			</div>

			<div class='col-xs-6 col-xs-offset-3'>
				<input type="hidden" id="submaster1" class="minicolors master strip1 strip2 " value="ffffff">
			</div>

			<div class='col-xs-4 col-xs-offset-2'>
				<p>Strip 1</p>
			</div>
			<div class='col-xs-4 col-xs-offset-2'>
				<p>Strip 2</p>
			</div>
		
			<div class='col-xs-6'>
				<input type="hidden" id="strip1" class="minicolors submaster1" value="ffffff">
			</div>
			<div class='col-xs-6'>
				<input type="hidden" id="strip2" class="minicolors submaster1" value="ffffff">
			</div>
		</div>
	</div>
	<div class="row" style="margin: 40px 40px;">
		<div>
			<h2>West Wall</h2>

			<div class='col-xs-6 col-xs-offset-3'>
				<div class="btn-group btn-group-justified submaster2">
					<div class="btn-group">
						<button type="button" disabled='disabled' class="btn btn-default">On</button>
					</div>
					  <div class="btn-group">
						<button type="button" disabled='disabled' class="btn btn-default">Off</button>
					</div>
				</div>
			</div>

			<div class='col-xs-2 col-xs-offset-5'>
				<p>Submaster 2</p>
			</div>

			<div class='col-xs-6 col-xs-offset-3'>
				<input type="hidden" id="submaster2" class="minicolors master strip3 strip4 " value="ffffff">
			</div>

			<div class='col-xs-4 col-xs-offset-2'>
				<p>Strip 3</p>
			</div>
			<div class='col-xs-4 col-xs-offset-2'>
				<p>Strip 4</p>
			</div>
		
			<div class='col-xs-6'>
				<input type="hidden" id="strip3" class="minicolors submaster2" value="ffffff">
			</div>
			<div class='col-xs-6'>
				<input type="hidden" id="strip4" class="minicolors submaster2" value="ffffff">
			</div>
		</div>
	</div>
	<div class="row" style="margin: 40px 40px;">
		<div>
			<h2>Couch</h2>

			<div class='col-xs-6 col-xs-offset-3'>
				<div class="btn-group btn-group-justified submaster3">
					<div class="btn-group">
						<button type="button" disabled='disabled' class="btn btn-default">On</button>
					</div>
					  <div class="btn-group">
						<button type="button" disabled='disabled' class="btn btn-default">Off</button>
					</div>
				</div>
			</div>

			<div class='col-xs-2 col-xs-offset-5'>
				<p>Submaster 3</p>
			</div>

			<div class='col-xs-6 col-xs-offset-3'>
				<input type="hidden" id="submaster3" class="minicolors master strip5 strip6 " value="ffffff">
			</div>

			<div class='col-xs-4 col-xs-offset-2'>
				<p>Strip 5</p>
			</div>
			<div class='col-xs-4 col-xs-offset-2'>
				<p>Strip 6</p>
			</div>
		
			<div class='col-xs-6'>
				<input type="hidden" id="strip5" class="minicolors submaster3" value="ffffff">
			</div>
			<div class='col-xs-6'>
				<input type="hidden" id="strip6" class="minicolors submaster3" value="ffffff">
			</div>
		</div>
	</div>
	<div class="row" style="margin: 40px 40px;">
		<div>
			<h2>Underglow</h2>

			<div class='col-xs-6 col-xs-offset-3'>
				<div class="btn-group btn-group-justified submaster4">
					<div class="btn-group">
						<button type="button" disabled='disabled' class="btn btn-default">On</button>
					</div>
					  <div class="btn-group">
						<button type="button" disabled='disabled' class="btn btn-default">Off</button>
					</div>
				</div>
			</div>

			<div class='col-xs-2 col-xs-offset-5'>
				<p>Submaster 4</p>
			</div>

			<div class='col-xs-6 col-xs-offset-3'>
				<input type="hidden" id="submaster4" class="minicolors master strip7 strip8 " value="ffffff">
			</div>

			<div class='col-xs-4 col-xs-offset-2'>
				<p>Strip 7</p>
			</div>
			<div class='col-xs-4 col-xs-offset-2'>
				<p>Strip 8</p>
			</div>
		
			<div class='col-xs-6'>
				<input type="hidden" id="strip7" class="minicolors submaster4" value="ffffff">
			</div>
			<div class='col-xs-6'>
				<input type="hidden" id="strip8" class="minicolors submaster4" value="ffffff">
			</div>
		</div>
	</div>


<script src="js/jquery-2.1.1.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/jquery.minicolors.min.js"></script>
<script src="js/js.js"></script>

</body>

</html>
