/*Given a position (as a list [x,y]), a direction (given as an integer in degrees), and another point on the same plane; find the distance
between the point and the line created that passes through the starting position in the direction of the degrees given.
If the point of intersection lies behind the starting position ie in the wrong direction, return a string stating it is in the wrong 
direction instead of returning a distance.*/

function intersect(dir, current, point){
	var slope = Math.tan((90 - dir) % 360 * Math.PI/180)
	var perpSlope = -1/slope
	var line1EndX, line1EndY, line2EndX, line2EndY;
	var line1StartX = current[0];
	var line1StartY = current[1];
	var line2StartX = point[0];
	var line2StartY = point[1];

	//edge cases
	if(dir == 180){
		line1EndY = 180
		if(line1StartY >= line2StartY){
			return distance(point, [line1StartX, line2StartY])
		}
		else{
			return "Wrong Direction"
		}
	}
	else if(dir == 0 || dir == 360){
		line1EndY = -180
		if(line1StartY <= line2StartY){
			return distance(point, [line1StartX, line2StartY])
		}
		else{
			return "Wrong Direction"
		}
	}
	else if(dir == 90){
		line1EndX = 180
		if(line1StartX <= line2StartX){
			return distance(point, [line2StartX, line1StartY])
		}
		else{
			return "Wrong Direction"
		}
	}
	else if(dir == 270){
		line1EndX = -180
		if(line1StartX >= line2StartX){
			return distance(point, [line2StartX, line1StartY])
		}
		else{
			return "Wrong Direction"
		}
	}

	//typical cases line 1 ends
	else if(dir < 180){
		line1EndX = 180
		line1EndY = slope * (line1EndX - line1StartX) + line1StartY
	}
	else if (dir > 180){
		line1EndX = -180
		line1EndY = slope * (line1EndX - line1StartX) + line1StartY
	}

	//typical cases line 2 ends
	if(line2StartY > (slope * (line2StartX - line1StartX) + line1StartY) && slope > 0 || line2StartY < (slope * (line2StartX - line1StartX) + line1StartY) && slope < 0){
		line2EndX = 180
		line2EndY = perpSlope * (line2EndX - line2StartX) + line2StartY
	}
	else if(line2StartY < (slope * (line2StartX - line1StartX) + line1StartY) && slope > 0 || line2StartY > (slope * (line2StartX - line1StartX) + line1StartY) && slope < 0){
		line2EndX = -180
		line2EndY = perpSlope * (line2EndX - line2StartX) + line2StartY
	}

	//find intersection
	var intersection = [0, 0];
	var denominator = ((line2EndY - line2StartY) * (line1EndX - line1StartX)) - ((line2EndX - line2StartX) * (line1EndY - line1StartY))
	var a = line1StartY - line2StartY;
    var b = line1StartX - line2StartX;
    var numerator1 = ((line2EndX - line2StartX) * a) - ((line2EndY - line2StartY) * b);
    a = numerator1 / denominator;
    intersection[0] = line1StartX + (a * (line1EndX - line1StartX));
    intersection[1] = line1StartY + (a * (line1EndY - line1StartY));
    //console.log(slope, perpSlope)
    console.log("Start: " + line1StartX + ", " + line1StartY + "\nSlope: " + slope + "\nEnd: " + line1EndX + ", " + line1EndY + "\nIntersection X: " + intersection)
    //reduce so only returns if 45 degrees to either side
    if(dir < 180 && intersection[0] < line1StartX || dir > 180 && intersection[0] > line1StartX){
    	return "Wrong Direction"
    }

    return distance(intersection, [line2StartX, line2StartY])
}

function distance(p1, p2){
	var distance = Math.pow(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2), 1/2)
	return distance;
}
