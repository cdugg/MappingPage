//map stuff
//Create and add map tiles to map
var map = L.map('map', {
	center: [37.529910,-122.263949], 
	zoom: 17,
	maxBounds: L.latLngBounds(L.latLng(39.213583056350366, -129.5736129599625), L.latLng(35.614565588113855, -114.94909082635246)) //map bounds
});

//https://www.youtube.com/watch?v=ToAKyADwCwY this video shows how to get tiles for local database instead of through mapbox then figure out how to apply styles to those tiles
L.tileLayer('https://api.mapbox.com/styles/v1/{accountName}/{style}/tiles/256/{z}/{x}/{y}?access_token={accessToken}', {
			maxZoom: 20,
			minZoom: 7,
			accountName: 'cdug', //my mapbox account name
			style: 'ck0fhxuan2o601dlv5axu8xkv', //mapbox style url without beginning (mapbox://styles/cdug/)
			accessToken: 'pk.eyJ1IjoiY2R1ZyIsImEiOiJjanlycjk2MWEwNG5zM2lzNWc4MndyejdqIn0.0S34wFINMdJED-BDxQQdew' //my account api key must match account name
		}).addTo(map); 
//Icons for Markers
var parkIcon = new L.Icon({
	iconUrl: './images/6-512.png',
    iconSize:     [20, 20],
    shadowAnchor: [4, 62],
    popupAnchor:  [0, -10]
});
var gardenIcon = new L.Icon({
	iconUrl: './images/field.png',
    iconSize:     [22, 25],
    shadowAnchor: [4, 62],
    popupAnchor:  [0, -10]
});
var busIcon = new L.Icon({
	iconUrl: './images/busstop.png',
    iconSize:     [22, 25],
    shadowAnchor: [4, 62],
    popupAnchor:  [0, -10]
});
var bathroomIcon = new L.Icon({
	iconUrl: './images/marker-icon-2x.png',
    iconSize:     [20, 20],
    shadowAnchor: [4, 62],
    popupAnchor:  [0, -10]
});
var exerciseIcon = new L.Icon({
	iconUrl: './images/fitness.png',
    iconSize:     [22, 25],
    shadowAnchor: [4, 62],
    popupAnchor:  [0, -10]
});
//Markers with popups and icons from above
var parks = L.layerGroup([
	L.marker([37.53205500634924, -122.2608432546258], {icon: parkIcon}).bindPopup("This is a big park."),
	L.marker([37.53307871815208, -122.26417288184164], {icon: parkIcon}).bindPopup("This seating area is located behind the High School and the tables have nice Chess/Checkers boards on top of them."),
	L.marker([37.52903353447633, -122.26813852787016], {icon: parkIcon}).bindPopup("This picinic area is surrounded by trees and a decent sized field ideal for eating in the shade at tables or on the grass."),
	L.marker([37.53009226761575, -122.26030513644217], {icon: parkIcon}).bindPopup("This is a rather small set of tables with trees around providing a bit of shade or protection from rain. Conveniently placed along the trail you can eat and watch fancy cars drive by."),
	L.marker([37.52985226761575, -122.2624513644217], {icon: parkIcon}).bindPopup("This is a nice seating area located next to the soon to open 600 OP Cafe. Sit by the lagoon and admire the fountain and catamaran while sitting at any of the abundant tables located in this courtyard."),
	L.marker([37.53112280229066, -122.26821899414061], {icon: parkIcon}).bindPopup("<img id = 'pictureTest' src = './images/6-512.png'><style>#pictureTest{height:10px; width:10px}</style>"),
	L.marker([37.52822144662844, -122.26485013961792], {icon: parkIcon}).bindPopup("<a href = 'index.html'>home</a>")
])
var gardens = L.layerGroup([
	L.marker([37.52709411507554, -122.26569436490534], {icon: gardenIcon}).bindPopup("garden")
])
var busStop = L.layerGroup([
	L.marker([37.52885332002871, -122.26178571581839], {icon: busIcon}).bindPopup("Bus Stop")
])
var bathroom = L.layerGroup([
	L.marker([37.52937446185957, -122.26792126893997], {icon: bathroomIcon}).bindPopup("Restrooms"),
	L.marker([37.53104891643625, -122.26090393960477], {icon: bathroomIcon}).bindPopup("Restrooms")
])
var exercise = L.layerGroup([
	L.marker([37.52851404410448, -122.26788774132729], {icon: exerciseIcon}).bindPopup("Exercise Circuit: Balance Beam"),
	L.marker([37.52971946638404, -122.26766645908356], {icon: exerciseIcon}).bindPopup("Exercise Circuit: Leg-Stretch"),
	L.marker([37.53291753950491, -122.26551465690136], {icon: exerciseIcon}).bindPopup("Exercise Circuit: Air Strider and Arm & Leg Press Combo"),
	L.marker([37.53312763905425, -122.2646328806877], {icon: exerciseIcon}).bindPopup("Exercise Circuit: Eliptical, Double Stretch, and Pull-up / Dip Combo"),
	L.marker([37.5331606074702, -122.26496815681458], {icon: exerciseIcon}).bindPopup("Exercise Circuit: Lower Back Trainer, Knee Raise / Dip Combo, and Torso Bench"),
	L.marker([37.532589507365586, -122.26608663797377], {icon: exerciseIcon}).bindPopup("Exercise Circuit: Hop-kick"),
	L.marker([37.53228428074927, -122.2663629055023], {icon: exerciseIcon}).bindPopup("Exercise Circuit: Vault-bar"),
	L.marker([37.53174082538914, -122.26651042699814], {icon: exerciseIcon}).bindPopup("Exercise Circuit: Sit-ups"),
	L.marker([37.53139730851033, -122.26649969816208], {icon: exerciseIcon}).bindPopup("Exercise Circuit: Push-ups"),
	L.marker([37.530887879637795, -122.26685643196107], {icon: exerciseIcon}).bindPopup("Exercise Circuit: Bench Leg Raise"),
	L.marker([37.530302936140046, -122.2672386467457], {icon: exerciseIcon}).bindPopup("Exercise Circuit: Hand Walks"),
	L.marker([37.531904785012195, -122.26116947829723], {icon: exerciseIcon}).bindPopup("Exercise Circuit: Log Jump"),
	L.marker([37.530939638939905, -122.26096328347921], {icon: exerciseIcon}).bindPopup("Exercise Circuit: Jumping Jacks"),
	L.marker([37.53058096301538, -122.26086940616368], {icon: exerciseIcon}).bindPopup("Exercise Circuit: Knee Lift"),
	L.marker([37.52932385542496, -122.26007681339979], {icon: exerciseIcon}).bindPopup("Exercise Circuit: Achilles Strethces"),
	L.marker([37.5304041503052, -122.26040571928023], {icon: exerciseIcon}).bindPopup("Exercise Circuit: Toe Touches")
])
//Walkways
var myStyle = { //color of lines
    "color": "#f80000"
};
var lines = L.layerGroup([L.geoJson(lines, {
	style: myStyle
})])
var lines2 = L.layerGroup([L.marker([37.5, -122.25])]) //temp value simple routes not designed
//Add everyting to Control and map layers
var baseMaps = {
	"Routes (Exact)": lines.addTo(map),
	"Routes (Simplified)": lines2
}
//add markers to map
var overlays = {
	"Bus Stops": busStop.addTo(map),
	"Exercise Circuit": exercise,
	"Gardens": gardens.addTo(map),
	"Picinic Areas": parks.addTo(map),
	"Restrooms": bathroom.addTo(map)
}
//add markers and layer types to controller
L.control.layers(baseMaps, overlays).addTo(map);




//window events
//on window resize event appropriately resize the divs and renderer for streetview
window.addEventListener('resize', resize);
function resize(){
	console.log(document.getElementById('picture').clientWidth)
	document.getElementById("picture").style.height = "98.8%";
	document.getElementById("picture").style.width = "99.5%";
	document.getElementById("map").style.height = "98.8%";
	document.getElementById("map").style.width = "99.4%";
	renderer.setSize( document.getElementById('picture').clientWidth, document.getElementById('picture').clientHeight );
}




//Streetview stuff
//setting up the renderer will only follow through and appear on marker dragend
var container = document.getElementById( 'picture' );
document.body.appendChild( container );
renderer = new THREE.WebGLRenderer();
renderer.setSize( document.getElementById('picture').clientWidth, document.getElementById('picture').clientHeight );
container.appendChild(renderer.domElement);

//Draggable streetview dropper
var position = L.marker([37.5295, -122.264], {draggable: true, autoPan: true}).bindPopup("Drag me within the campus to get a streetview.").addTo(map);
position.on('dragend', function (e) {
    var lat = position.getLatLng().lat;
    var long = position.getLatLng().lng;

    //if marker is dropped in the campus map
    if(lat > 37.52344956507603 && lat < 37.534039163532796 && long > -122.2714805956257 && long < -122.25920536397943){
    	var picLocation = findclose(lat, long);
    	console.log(picLocation)
    	document.getElementById("map").style = "visibility: hidden";
    	var manualControl = false;
		var longitude = 0;
		var latitude = 0;
		var savedX;
		var savedY;
		var savedLongitude;
		var savedLatitude;

		// panoramas background
		var panoramasArray = ["images/" + picLocation[2] + ".jpg"];

		// creating a new scene
		var scene = new THREE.Scene();
		
		// adding a camera
		var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
		camera.target = new THREE.Vector3(0, 0, 0);

		// creation of a big sphere geometry
		var sphere = new THREE.SphereGeometry(100, 100, 40);
		sphere.applyMatrix(new THREE.Matrix4().makeScale(-1, 1, 1));

		// creation of the sphere material
		var sphereMaterial = new THREE.MeshBasicMaterial();
		var loader = new THREE.TextureLoader();
		sphereMaterial.map = loader.load(panoramasArray[0])

		// geometry + material = mesh (actual object)
		var sphereMesh = new THREE.Mesh(sphere, sphereMaterial);
		scene.add(sphereMesh);

		// listeners
		var count = 0;
		document.addEventListener("mousedown", onDocumentMouseDown, false);
		document.addEventListener("mousemove", onDocumentMouseMove, false);
		document.addEventListener("mouseup", onDocumentMouseUp, false);
		document.addEventListener("wheel", onDocumentScroll, false);
        render();
        function render(){			
			requestAnimationFrame(render);
			// limiting latitude from -85 to 85 (cannot point to the sky or under your feet)
            latitude = Math.max(-85, Math.min(85, latitude));
			// moving the camera according to current latitude (vertical movement) and longitude (horizontal movement)
			camera.target.x = 500 * Math.sin(THREE.Math.degToRad(90 - latitude)) * Math.cos(THREE.Math.degToRad(longitude));
			camera.target.y = 500 * Math.cos(THREE.Math.degToRad(90 - latitude));
			camera.target.z = 500 * Math.sin(THREE.Math.degToRad(90 - latitude)) * Math.sin(THREE.Math.degToRad(longitude));
			camera.lookAt(camera.target);
			// calling again render function
			renderer.render(scene, camera);			
		}
		
		function onDocumentScroll(event){ //works in chrome but not MS edge
			if(count == 0){
				count ++;
				//if scroll up zoom in if scroll down zoom out
				if(camera.zoom < 5 && camera.zoom > 1 || camera.zoom == 1 && event.deltaY == -100 || camera.zoom == 5 && event.deltaY == 100){
					camera.zoom = camera.zoom - (event.deltaY % 99);
				}
				camera.updateProjectionMatrix();
				//delay so multi-scroll is ignored and one scroll = 1 zoom not 7
				setTimeout(function (){
					count = 0;
				}, 100);
			}
		}
		// when the mouse is pressed, we switch to manual control and save current coordinates
		function onDocumentMouseDown(event){
			event.preventDefault();
			manualControl = true;
			savedX = event.clientX;
			savedY = event.clientY;
			savedLongitude = longitude;
			savedLatitude = latitude;
		}

		// when the mouse moves, if in manual contro we adjust coordinates
		function onDocumentMouseMove(event){
			if(manualControl){
				longitude = (savedX - event.clientX) * 0.1 + savedLongitude;
				latitude = (event.clientY - savedY) * 0.1 + savedLatitude;
			}
		}
		// when the mouse is released, we turn manual control off
		function onDocumentMouseUp(event){
			manualControl = false;
		}
		// pressing a key (actually releasing it) changes the texture map
		document.onkeyup = function(event){
			var direction;
			//if negative degree set to equivalent positive degree between 0-359.9999
			if (longitude > -1){
				direction = longitude % 360
			}
			else{
				direction = 360 - (Math.abs(longitude) % 360)
			}
			//if direction is pressed thats not forward change direction appropriately
			if(event.key == "ArrowDown"){
				direction = (direction + 180) % 360
			}
			else if(event.key == "ArrowRight"){
				direction = (direction + 90) % 360
			}
			else if(event.key == "ArrowLeft"){
				direction = (direction + 270) % 360
			}
			//if user on street view presses an arrow key
			if(event.key == "ArrowUp" || event.key == "ArrowDown" || event.key == "ArrowRight" || event.key == "ArrowLeft"){
				var shortest = 360;
				var saved;
				//for all mappings to the current node: for all picture locations: if the 2nd item in the picture location is also in the nodes connected to the current node do stuff
				for(var item = 0; item < mappings[picLocation[2]].length; item ++){
					for(var j = 0; j < pictureLocations.length; j++){
						if(mappings[picLocation[2]][item] == pictureLocations[j][2]){
							//set dist = to intersect() of points both inappropriately named: dist is inner angle of camera direction and point. intersect() finds inner angle
							var dist = intersect(direction, [picLocation[1], picLocation[0]], [pictureLocations[j][1], pictureLocations[j][0]])
							//if node is withing 45 degrees of camera direction and the inner angle of the two is smaller than currently saved inner angle update the node closest to the camera direction
							if(dist < 45 && dist < shortest){
								shortest = dist
								saved = j
							}
							console.log(pictureLocations[j][2] + ": " + dist) //check all nodes are being checked correctly and angle between camera and checked node debug
						}
					}
				}
				//if camera facing appropriate direction "move" to next position, change inner sphere mesh to new node locations picture set camera zoom to 1 and update appropriate variables
				if(saved != undefined){
					picLocation = pictureLocations[saved]
					panoramasArray = ["images/" + picLocation[2] + ".jpg"]
					sphereMaterial.map = THREE.ImageUtils.loadTexture(panoramasArray[0])
					var sphereMesh = new THREE.Mesh(sphere, sphereMaterial);
					scene.add(sphereMesh);
					scene.remove(sphereMesh)
					camera.zoom = 1
					camera.updateProjectionMatrix();
					console.log(picLocation[2]) //did i move to appropriate node? debug
				}
			}
			else if(event.key == " "){console.log(direction)} //debugging. if space is pressed in street view logs the direction the camera is facing
		}
    	document.getElementById("closePic").style = "visibility: visible";
    	document.getElementById("picture").style = "visibility: visible";
    	position.setLatLng([picLocation[0], picLocation[1]]);
    }
    //if marker dropped outside boarder for lowest zoom level recenter marker and map
    else if(lat < 35.614565588113855 || lat > 39.213583056350366 || long < -129.5736129599625 || long > -114.94909082635246){ 
    	position.setLatLng([37.5295, -122.264]);
    	map.panTo(new L.LatLng(37.5295, -122.264));
    }
});


var pictureLocations = [[37.52972531588746, -122.27016896009445, "A"], [37.529246718634575, -122.26940184831619, "B"], [37.5299337706198, -122.2689351439476, "C"], [37.530027362350935, -122.26918190717696, "D"], [37.530325153441424, -122.26928383111954, "E"], [37.530557004252984, -122.2690263390541, "F"], [37.530584656136526, -122.26927578449249, "G"], [37.53078034609637, -122.26913899183272, "H"], [37.53076971078565, -122.27015823125838, "I"], [37.53157586303837, -122.270088493824, "J"], [37.53160989565947, -122.26910948753355, "K"], [37.53157586303837, -122.26806074380873, "L"], [37.53181196402739, -122.26791054010391, "M"], [37.53238838762645, -122.26779520511627, "N"], [37.5328137896395, -122.26775765419006, "O"], [37.53318388741707, -122.26733118295668, "P"], [37.53133763425591, -122.26796418428421, "Q"], [37.531120675238405, -122.26821362972258, "R"], [37.531116421133724, -122.2679829597473, "S"], [37.53058891027156, -122.26817607879637, "T"], [37.53020391006948, -122.26858645677565, "U"], [37.530839903808314, -122.26862937211992, "V"], [37.53111429408127, -122.26869642734526, "W"], [37.53078460022024, -122.26885735988615, "X"], [37.53033791589017, -122.26784616708755, "Y"], [37.53007628525456, -122.26748406887054, "Z"], [37.52946155600351, -122.26741164922713, "A1"], [37.529331802815086, -122.26783275604248, "B1"], [37.529172269897025, -122.26822704076768, "C1"], [37.52964235925031, -122.26781934499739, "D1"], [37.529129727727906, -122.26862400770186, "E1"], [37.52878088102598, -122.26820290088653, "F1"], [37.52849584653403, -122.26789981126784, "G1"], [37.528415015658965, -122.26751357316971, "H1"], [37.528623474053134, -122.26681619882585, "I1"], [37.528989338397686, -122.26710855960846, "J1"], [37.529293514945884, -122.26747334003448, "K1"], [37.53038258444355, -122.26718366146087, "L1"], [37.530944129689814, -122.26686179637909, "M1"], [37.53133550720979, -122.26656675338743, "N1"], [37.53169710418014, -122.26654529571533, "O1"], [37.53236073641161, -122.26635217666626, "P1"], [37.5326202320244, -122.26611077785492, "Q1"], [37.53286271071543, -122.26561725139618, "R1"], [37.53315198250858, -122.2653865814209, "S1"], [37.533296617984405, -122.26491451263426, "T1"], [37.53315198250858, -122.26427078247069, "U1"], [37.53314347453068, -122.26463019847868, "V1"], [37.533147728519744, -122.26510763168335, "W1"], [37.532905250755384, -122.26361632347107, "X1"], [37.532786138582395, -122.26366996765135, "Y1"], [37.53293928276986, -122.26463019847868, "Z1"], [37.53307966466549, -122.26523637771605, "A2"], [37.53279039259184, -122.26532220840452, "B2"], [37.53273934446239, -122.26462483406067, "C2"], [37.532496865370255, -122.26390063762663, "D2"], [37.53215654250778, -122.26298332214354, "E2"], [37.532552167688735, -122.2632998228073, "F2"], [37.53270105834234, -122.26321935653685, "G2"], [37.532369244478815, -122.26266145706175, "H2"], [37.53215654250778, -122.26265609264372, "I2"], [37.532194828907336, -122.26202845573425, "J2"], [37.532041683191196, -122.26140618324278, "K2"], [37.53255642171154, -122.26136863231657, "L2"], [37.53235222834346, -122.26206064224242, "M2"], [37.53265001015175, -122.26086974143982, "N2"], [37.532224607204526, -122.26080536842345, "O2"], [37.53173964488493, -122.26104140281676, "P2"], [37.53134826948564, -122.26085364818574, "Q2"], [37.53099943315963, -122.26098239421844, "R2"], [37.530561258389596, -122.26089119911192, "S2"], [37.53035280541092, -122.26036012172697, "T2"], [37.5308122520194, -122.26074635982513, "U2"], [37.53009755607221, -122.2601670026779, "V2"], [37.52969766368533, -122.26013481616974, "W2"], [37.52934881963955, -122.26004898548127, "X2"], [37.52896168592272, -122.25995779037474, "Y2"], [37.52887660132001, -122.26045668125152, "Z2"], [37.528842567451775, -122.26180851459502, "A3"], [37.52899359262369, -122.26177901029588, "B3"], [37.529059533095825, -122.26051032543182, "C3"], [37.52937009066465, -122.26178973913193, "D3"], [37.52968915531338, -122.26179778575897, "E3"], [37.529612579922166, -122.26112455129622, "F3"], [37.530046506099644, -122.26149469614027, "G3"], [37.53035067833671, -122.2617843747139, "H3"], [37.53006564984346, -122.26209551095961, "I3"], [37.52975934935296, -122.26251393556595, "J3"], [37.52934881963955, -122.26246029138563, "K3"], [37.53054636891043, -122.26266413927077, "L3"], [37.53086330146787, -122.26299941539764, "M3"], [37.53112280229066, -122.26261317729948, "N3"], [37.530910096764934, -122.26237177848814, "O3"], [37.53130998265152, -122.26177901029588, "P3"], [37.53172262860592, -122.2630450129509, "Q3"], [37.53149503550104, -122.26323008537294, "R3"], [37.53103984720778, -122.26275533437729, "S3"], [37.53063357867464, -122.2633373737335, "T3"], [37.53049531924505, -122.26354926824568, "U3"], [37.53070164476121, -122.26393014192581, "V3"], [37.53110365881818, -122.26365655660629, "W3"], [37.53088031794293, -122.26379603147508, "X3"], [37.531035593098466, -122.26406961679457, "Y3"], [37.53135465062275, -122.26395964622497, "Z3"], [37.5315014166256, -122.26422786712645, "A4"], [37.53194383993015, -122.26402670145033, "B4"], [37.53139293743393, -122.26428687572479, "C4"], [37.531112167028766, -122.26441025733948, "D4"], [37.53079310846723, -122.26462215185165, "E4"], [37.530284739006014, -122.26479113101958, "F4"], [37.530174130965555, -122.26436734199524, "G4"], [37.530357059559165, -122.26422250270842, "H4"], [37.53053998770418, -122.26504057645796, "I4"], [37.53107600712705, -122.26498693227768, "J4"], [37.530910096764934, -122.26498693227768, "K4"], [37.531112167028766, -122.26529538631439, "L4"], [37.530612308009836, -122.26538121700287, "M4"], [37.531860885760444, -122.26515054702757, "N4"], [37.53256067573408, -122.26503521203993, "O4"], [37.531894918251496, -122.26550728082657, "P4"], [37.53040385517385, -122.26562261581421, "Q4"], [37.530325153441424, -122.26548314094542, "R4"], [37.530003964429156, -122.26555287837981, "S4"], [37.53006139567858, -122.26592570543288, "T4"], [37.5299444060497, -122.26612150669096, "U4"], [37.5302421974714, -122.26591765880583, "V4"], [37.5305633854578, -122.26618319749832, "W4"], [37.52968490112705, -122.26557433605194, "X4"], [37.52967639275364, -122.26509690284729, "Y4"], [37.529855068391356, -122.26497888565063, "Z4"], [37.52941688689855, -122.26559042930603, "A5"], [37.529199922293934, -122.26562261581421, "B5"], [37.529199922293934, -122.26606249809265, "C5"], [37.52956578381105, -122.26607322692871, "D5"], [37.52953175025726, -122.26662576198578, "E5"], [37.52874897423399, -122.2660517692566, "F5"], [37.528714940307516, -122.26651847362518, "G5"], [37.52878726238273, -122.26493060588836, "H5"], [37.528851075920294, -122.26361632347107, "I5"], [37.52889361824831, -122.26260781288147, "J5"], [37.528446922593794, -122.26362168788908, "K5"], [37.52839587149152, -122.26408302783966, "L5"], [37.52838310871049, -122.26465165615082, "M5"], [37.528310786243416, -122.26619124412536, "N5"], [37.528025749955105, -122.2663253545761, "O5"], [37.527825798475995, -122.2673338651657, "P5"], [37.52695366341691, -122.2663629055023, "Q5"], [37.52639634250274, -122.26579964160918, "R5"], [37.525830508612735, -122.26492524147033, "S5"], [37.52449035859553, -122.26436197757721, "T5"], [37.52708129357465, -122.26566016674042, "U5"], [37.52697493512503, -122.26539731025694, "V5"], [37.52722594082278, -122.26478040218353, "W5"], [37.52703024153775, -122.2641795873642, "X5"], [37.52729826434169, -122.26400256156921, "Y5"], [37.5275662861826, -122.26463019847868, "Z5"], [37.52813636118139, -122.26468920707702, "A6"], [37.52822570089826, -122.26485550403595, "B6"], [37.52811508980447, -122.26501107215881, "C6"], [37.52758755771602, -122.26507008075712, "D6"], [37.52723444947572, -122.26559042930603, "E6"]]

//when dragable marker dropped find appropriate closest node to drop position to load street view (could probably be optimized better)
function findclose(lat, long){
	var shortest = 100000;
	var j = 0;
	var i;
	for (i = 0; i < pictureLocations.length; i ++){
		var distance = Math.pow(Math.pow(pictureLocations[i][0]-lat, 2) + Math.pow(pictureLocations[i][1]-long, 2), 1/2);
		if(distance < shortest){
			j = i;
			shortest = distance;
		}
	}
	var newlat = pictureLocations[j][0];
	var newlong = pictureLocations[j][1];
	return pictureLocations[j];
}

//if user hits x on streetview bring back map and close street view
function closePicture() {
	document.getElementById("closePic").style = "visibility: hidden";
	document.getElementById("picture").style = "visibility: hidden";
	document.getElementById("map").style = "visibility: visible";
}
