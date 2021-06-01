//Distance to direction does what it's supposed to but a better method for what it is being used for...
//get inner angle between two lines so you can check if the inner angle is less than 90 degrees or any given degrees
//assuming you want whichever point is closest to the line regardless of distance from the current point
function intersect(dir, current, point){
	if(dir == 0 || dir == 90 || dir == 180 || dir == 270 || dir == 360){
		dir = dir + 0.001
	}
	var slope = Math.tan((90 - dir) % 360 * Math.PI/180)
	var line1EndX, line1EndY;
	var line1StartX = current[0];
	var line1StartY = current[1];

	//edge cases
	if(dir == 180){
		line1EndY = 180
	}
	else if(dir == 0 || dir == 360){
		line1EndY = -180
	}
	else if(dir == 90){
		line1EndX = 180
	}
	else if(dir == 270){
		line1EndX = -180
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
	return Math.abs(getInnerAngle({x:line1StartX, y:line1StartY}, {x:line1EndX, y:line1EndY}, {x:point[0], y:point[1]}) * 180/Math.PI);
}

function pythag(point1, point2) {
	return Math.sqrt(Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2));
}
 
function getInnerAngle(intersection, line1EndPoint, line2EndPoint) {
	var line2End = {x: line2EndPoint.x - intersection.x, y: line2EndPoint.y - intersection.y},
		line1End = {x: line1EndPoint.x - intersection.x, y: line1EndPoint.y - intersection.y},
		aSq = Math.pow(line1EndPoint.x - line2EndPoint.x, 2) + Math.pow(line1EndPoint.y - line2EndPoint.y, 2),
		b = pythag(line2EndPoint, intersection),
		c = pythag(line1EndPoint, intersection),
		crossProduct = line2End.x * line1End.y - line1End.x * line2End.y;
 
	return (crossProduct < 0 ? -1 : 1) * Math.acos((b * b + c * c  - aSq) / (2 * b * c));
}
