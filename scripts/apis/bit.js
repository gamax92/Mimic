
//
//  bit.js
//  GravityScore and 1lann
//



var bitAPI = {};


bitAPI.bnot = function(L) {
	var num = C.luaL_checknumber(L, 1);
	if (num > 0xFFFFFFFF) {
		C.lua_pushstring(L, "number is too large (maximum allowed: 2^32-1)");
		C.lua_error(L);
	}
	var result = ~num;
	if (result < 0)
		result += 0x100000000;
	C.lua_pushnumber(L, result);

	return 1;
}


bitAPI.band = function(L) {
	var first = C.luaL_checknumber(L, 1);
	var second = C.luaL_checknumber(L, 2);
	if (first > 0xFFFFFFFF || second > 0xFFFFFFFF) {
		C.lua_pushstring(L, "number is too large (maximum allowed: 2^32-1)");
		C.lua_error(L);
	}
	var result = first & second;
	if (result < 0)
		result += 0x100000000;
	C.lua_pushnumber(L, result);

	return 1;
}


bitAPI.bor = function(L) {
	var first = C.luaL_checknumber(L, 1);
	var second = C.luaL_checknumber(L, 2);
	if (first > 0xFFFFFFFF || second > 0xFFFFFFFF) {
		C.lua_pushstring(L, "number is too large (maximum allowed: 2^32-1)");
		C.lua_error(L);
	}
	var result = first | second;
	if (result < 0)
		result += 0x100000000;
	C.lua_pushnumber(L, result);

	return 1;
}


bitAPI.bxor = function(L) {
	var first = C.luaL_checknumber(L, 1);
	var second = C.luaL_checknumber(L, 2);
	if (first > 0xFFFFFFFF || second > 0xFFFFFFFF) {
		C.lua_pushstring(L, "number is too large (maximum allowed: 2^32-1)");
		C.lua_error(L);
	}
	var result = ~(first & second) & ~(~first & ~second);
	if (result < 0)
		result += 0x100000000;
	C.lua_pushnumber(L, result);

	return 1;
}


bitAPI.brshift = function(L) {
	var first = C.luaL_checknumber(L, 1);
	var amount = C.luaL_checknumber(L, 2);
	if (first > 0xFFFFFFFF || amount > 0xFFFFFFFF) {
		C.lua_pushstring(L, "number is too large (maximum allowed: 2^32-1)");
		C.lua_error(L);
	}
	var result = first >> amount;
	if (result < 0)
		result += 0x100000000;
	C.lua_pushnumber(L, result);

	return 1;
}


bitAPI.blogic_rshift = function(L) {
	var first = C.luaL_checknumber(L, 1);
	var amount = C.luaL_checknumber(L, 2);
	if (first > 0xFFFFFFFF || amount > 0xFFFFFFFF) {
		C.lua_pushstring(L, "number is too large (maximum allowed: 2^32-1)");
		C.lua_error(L);
	}
	var result = first >>> amount;
	C.lua_pushnumber(L, result);

	return 1;
}


bitAPI.blshift = function(L) {
	var first = C.luaL_checknumber(L, 1);
	var amount = C.luaL_checknumber(L, 2);
	if (first > 0xFFFFFFFF || amount > 0xFFFFFFFF) {
		C.lua_pushstring(L, "number is too large (maximum allowed: 2^32-1)");
		C.lua_error(L);
	}
	var result = first << amount;
	if (result < 0)
		result += 0x100000000;
	C.lua_pushnumber(L, result);

	return 1;
}
