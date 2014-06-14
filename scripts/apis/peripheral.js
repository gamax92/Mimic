
//
//  peripheral.js
//  GravityScore and 1lann
//



var peripheralAPI = {};


peripheralAPI.isPresent = function(L) {
	var side = C.luaL_checkstring(L, 1);

	return 0;
}


peripheralAPI.getType = function(L) {
	var side = C.luaL_checkstring(L, 1);

	return 0;
}


peripheralAPI.getMethods = function(L) {
	var side = C.luaL_checkstring(L, 1);

	return 0;
}


peripheralAPI.call = function(L) {
	var side = C.luaL_checkstring(L, 1);
	var method = C.luaL_checkstring(L, 2);

	return 0;
}
