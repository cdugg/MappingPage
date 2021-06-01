Note:

This is all my first attempt at using JavaScript which is not something I have ever been taught. Leaflet and three.js are not my work.

ISSUE:

Must use as a hosted site. Street view will not work for local testing. easy solutions:

- in python2 navigate to folder and type python -m SimpleHTTPServer then open localhost:8000

- in python3 navigate to folder and type python -m http.server then open localhost:8000

Other files needed:

# Images
Nonplaceholders for all mappings

(placeholders only available for nodes A-G check piclocs.png for locations on loaded map to test)

---------------------------------------------

Map style currently not being used but makes map tiles a greyscale style

Current map style uses mapbox

# Intended Improvements
Download map tiles and host locally to avoid using mapbox

Use Map style file to style tiles instead of using mapbox

Optimization

Make script.js much more legible

# Other Ideas for Improvement
Create 3d environment with movable camera and interactive features ie selectable buildings or map features that provide further detail on the selected item. For simple sample see:

https://www.creativebloq.com/how-to/create-interactive-3d-visuals-with-threejs
