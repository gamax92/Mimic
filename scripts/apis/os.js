
//
//  os.js
//  GravityScore and 1lann
//



var osAPI = {};



//
//    Computer Information
//


osAPI.getComputerID = function(L) {
	var computer = core.getActiveComputer();
	C.lua_pushnumber(L, computer.id);
	return 1;
}


osAPI.getComputerLabel = function(L) {
	var computer = core.getActiveComputer();
	if (computer.label) {
		C.lua_pushstring(L, computer.label);
		return 1;
	} else {
		return 0;
	}
}


osAPI.computerLabel = osAPI.getComputerLabel;
osAPI.computerID = osAPI.getComputerID;


osAPI.setComputerLabel = function(L) {
	var computer = core.getActiveComputer();
	var str = C.luaL_checkstring(L, 1);
	computer.label = str;

	return 0;
}



//
//    Time
//


osAPI.clock = function(L) {
	var computer = core.getActiveComputer();
	var diff = Date.now() - computer.startClock;
	var retDiff = Math.floor(diff * 0.02) / 20;
	C.lua_pushnumber(L, retDiff);

	return 1;
}


osAPI.time = function(L) {
	var computer = core.getActiveComputer();
	var ticks = (Date.now() - computer.startClock) * 20;
	C.lua_pushnumber(L, ticks % 24000 / 1000);

	return 1;
}


osAPI.day = function(L) {
	var computer = core.getActiveComputer();
	var ticks = (Date.now() - computer.startClock) * 20;
	C.lua_pushnumber(L, 1 + Math.floor(ticks / 24000));

	return 1;
}


osAPI.startTimer = function(L) {
	var computer = core.getActiveComputer();
	var time = C.luaL_checknumber(L, 1);
	
	time = Math.ceil(time*20)/20;
	if (time < 0.05)
		time = 0.05;

	computer.lastTimerID++;

	var timerID = computer.lastTimerID;
	setTimeout(function() {
		computer.eventStack.push(["timer", timerID]);
		computer.resume();
	}, time * 1000 - (Date.now() - computer.startClock) * 0.02 % 1 * 50 + 5);

	C.lua_pushnumber(L, timerID);

	return 1;
}


osAPI.setAlarm = function(L) {
	var hour = C.luaL_checknumber(L, 1);
	if (hour < 0 || hour >= 24) {
		C.lua_pushstring(L, "Number out of range");
		C.lua_error(L);
	}
}



//
//    Event Handling
//


osAPI.queueEvent = function(L) {
	var computer = core.getActiveComputer();
	var queueObject = [];
	queueObject.push(C.luaL_checkstring(L, 1));

	var top = C.lua_gettop(L);
	for (var i = 1; i <= top; i++) {
		var t = C.lua_type(L, i);
		if (t == C.LUA_TSTRING) {
			queueObject.push(C.lua_tostring(L, i));
		} else if (t == C.LUA_TBOOLEAN) {
			queueObject.push(C.lua_toboolean(L, i) ? true : false);
		} else if (t == C.LUA_TNUMBER) {
			queueObject.push(C.lua_tonumber(L, i));
		} else {
			queueObject.push(null);
		}
	}

	computer.eventStack.push(queueObject);
	return 0;
}


osAPI.shutdown = function(L) {
	var computer = core.getActiveComputer();
	computer.shouldShutdown = true;
	return 0;
}


osAPI.reboot = function(L) {
	var computer = core.getActiveComputer();
	computer.shouldReboot = true;
	return 0;
}
