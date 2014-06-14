
//
//  redstone.js
//  GravityScore and 1lann
//



var redstoneAPI = {};


redstoneAPI.getSides = function(L) {
	C.lua_newtable(L);
	for (var i in globals.sides) {
		C.lua_pushnumber(L, parseInt(i) + 1);
		C.lua_pushstring(L, globals.sides[i].toString());
		C.lua_rawset(L, -3);
	}

	return 1;
}


redstoneAPI.getInput = function(L) {
	var side = C.luaL_checkstring(L, 1);

	return 0;
}


redstoneAPI.setOutput = function(L) {
	var side = C.luaL_checkstring(L, 1);
	var value = C.luaL_checknumber(L, 2);

	return 0;
}


redstoneAPI.getOutput = function(L) {
	var side = C.luaL_checkstring(L, 1);

	return 0;
}


redstoneAPI.getAnalogInput = function(L) {
	var side = C.luaL_checkstring(L, 1);

	return 0;
}


redstoneAPI.getAnalogOutput = function(L) {
	var side = C.luaL_checkstring(L, 1);

	return 0;
}


redstoneAPI.setAnalogOutput = function(L) {
	var side = C.luaL_checkstring(L, 1);
	var value = C.luaL_checknumber(L, 2);

	return 0;
}


redstoneAPI.getAnalogueInput = function(L) {
	var side = C.luaL_checkstring(L, 1);

	return 0;
}


redstoneAPI.getAnalogueOutput = function(L) {
	var side = C.luaL_checkstring(L, 1);

	return 0;
}


redstoneAPI.setAnalogueOutput = function(L) {
	var side = C.luaL_checkstring(L, 1);
	var value = C.luaL_checknumber(L, 2);

	return 0;
}


redstoneAPI.getBundledInput = function(L) {
	var side = C.luaL_checkstring(L, 1);

	return 0;
}


redstoneAPI.getBundledOutput = function(L) {
	var side = C.luaL_checkstring(L, 1);

	return 0;
}


redstoneAPI.setBundledOutput = function(L) {
	var side = C.luaL_checkstring(L, 1);
	var value = C.luaL_checknumber(L, 2);

	return 0;
}


redstoneAPI.testBundledInput = function(L) {
	var side = C.luaL_checkstring(L, 1);
	var color = C.luaL_checknumber(L, 2);

	return 0;
}
