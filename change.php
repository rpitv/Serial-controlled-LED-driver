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


if (isset($_POST['settings'])){
	$settings = $_POST["settings"];
	file_put_contents("data/settings.js", $settings);
}
$channel = $_POST["channel"];
$color = $_POST["color"];
$com = "i2cledcontrol".' '.escapeshellarg($channel).' '.escapeshellarg($color);
$output0 = shell_exec($com);
?>
