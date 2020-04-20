
gdjs.evtsExt__Player__Control = gdjs.evtsExt__Player__Control || {};

/**
 * Behavior generated from 
 * @class Control
 * @extends gdjs.RuntimeBehavior
 * @constructor
 */
gdjs.evtsExt__Player__Control.Control = function(runtimeScene, behaviorData, owner)
{
    gdjs.RuntimeBehavior.call(this, runtimeScene, behaviorData, owner);
    this._runtimeScene = runtimeScene;

    this._behaviorData = {};
    
    this._behaviorData.BulletDelay = behaviorData.BulletDelay !== undefined ? behaviorData.BulletDelay : Number("1") || 0;
    this._behaviorData.AvailableBullets = behaviorData.AvailableBullets !== undefined ? behaviorData.AvailableBullets : Number("100") || 0;
};

gdjs.evtsExt__Player__Control.Control.prototype = Object.create( gdjs.RuntimeBehavior.prototype );
gdjs.registerBehavior("Player::Control", gdjs.evtsExt__Player__Control.Control);

// Properties:
gdjs.evtsExt__Player__Control.Control.prototype.onCreatedContext = {};
gdjs.evtsExt__Player__Control.Control.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__Player__Control.Control.prototype.onCreatedContext.GDObjectObjects2= [];

gdjs.evtsExt__Player__Control.Control.prototype.onCreatedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Player__Control.Control.prototype.onCreatedContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Player__Control.Control.prototype.onCreatedContext.eventsList0x5b7298 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.evtsExt__Player__Control.Control.prototype.onCreatedContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));
{for(var i = 0, len = gdjs.evtsExt__Player__Control.Control.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Player__Control.Control.prototype.onCreatedContext.GDObjectObjects1[i].setPosition(350,960);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "BulletTime");
}{for(var i = 0, len = gdjs.evtsExt__Player__Control.Control.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Player__Control.Control.prototype.onCreatedContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Player__Control.Control.prototype.onCreatedContext.GDObjectObjects1[i].getVariables().get("BulletDelay")).setNumber(0.1);
}
}}

}


}; //End of gdjs.evtsExt__Player__Control.Control.prototype.onCreatedContext.eventsList0x5b7298


gdjs.evtsExt__Player__Control.Control.prototype.onCreated = function(parentEventsFunctionContext) {
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    if (objectName === "Object") { return thisObjectList; }    var objectsList = eventsFunctionContext._objectsMap[objectName];
    return objectsList ? gdjs.objectsListsToArray(objectsList) : [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      return parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
    }
    return null;
  },
  getArgument: function(argName) {
    return "";
  }
};

gdjs.evtsExt__Player__Control.Control.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Player__Control.Control.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Player__Control.Control.prototype.onCreatedContext.eventsList0x5b7298(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.GDObjectObjects2= [];

gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.eventsList0x8a62ac = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.GDObjectObjects1[i].setX(gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.GDObjectObjects1[i].getX() - (5));
}
}}

}


}; //End of gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.eventsList0x8a62ac
gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.eventsList0x8a655c = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.GDObjectObjects1[i].setX(gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.GDObjectObjects1[i].getX() + (5));
}
}}

}


}; //End of gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.eventsList0x8a655c
gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.eventsList0x6cb564 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if (gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.GDObjectObjects1[i].setY(gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.GDObjectObjects1[i].getY() - (10));
}
}}

}


}; //End of gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.eventsList0x6cb564
gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.eventsList0x86011c = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if (gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.GDObjectObjects1[i].setY(gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.GDObjectObjects1[i].getY() + (10));
}
}}

}


}; //End of gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.eventsList0x86011c
gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.eventsList0x5b7298 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.GDObjectObjects1[i].getX() > 0 ) {
        gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.eventsList0x8a62ac(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.GDObjectObjects1[i].getX() < 615 ) {
        gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.eventsList0x8a655c(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.GDObjectObjects1[i].getY() > 800 ) {
        gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.eventsList0x6cb564(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.GDObjectObjects1[i].getY() < 900 ) {
        gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.eventsList0x86011c(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("AvailableBullets")) < 400;
}if (gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("AvailableBullets").add(1);
}}

}


}; //End of gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.eventsList0x5b7298


gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    if (objectName === "Object") { return thisObjectList; }    var objectsList = eventsFunctionContext._objectsMap[objectName];
    return objectsList ? gdjs.objectsListsToArray(objectsList) : [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      return parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
    }
    return null;
  },
  getArgument: function(argName) {
    return "";
  }
};

gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Player__Control.Control.prototype.doStepPreEventsContext.eventsList0x5b7298(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__Player__Control.Control.prototype.fireProjectileContext = {};
gdjs.evtsExt__Player__Control.Control.prototype.fireProjectileContext.GDObjectObjects1= [];
gdjs.evtsExt__Player__Control.Control.prototype.fireProjectileContext.GDObjectObjects2= [];
gdjs.evtsExt__Player__Control.Control.prototype.fireProjectileContext.GDObjectObjects3= [];
gdjs.evtsExt__Player__Control.Control.prototype.fireProjectileContext.GDProjectileObjects1= [];
gdjs.evtsExt__Player__Control.Control.prototype.fireProjectileContext.GDProjectileObjects2= [];
gdjs.evtsExt__Player__Control.Control.prototype.fireProjectileContext.GDProjectileObjects3= [];
gdjs.evtsExt__Player__Control.Control.prototype.fireProjectileContext.GDEffectObjects1= [];
gdjs.evtsExt__Player__Control.Control.prototype.fireProjectileContext.GDEffectObjects2= [];
gdjs.evtsExt__Player__Control.Control.prototype.fireProjectileContext.GDEffectObjects3= [];

gdjs.evtsExt__Player__Control.Control.prototype.fireProjectileContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Player__Control.Control.prototype.fireProjectileContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Player__Control.Control.prototype.fireProjectileContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__Player__Control.Control.prototype.fireProjectileContext.condition2IsTrue_0 = {val:false};


gdjs.evtsExt__Player__Control.Control.prototype.fireProjectileContext.mapOfGDgdjs_46evtsExt_95_95Player_95_95Control_46Control_46prototype_46fireProjectileContext_46GDEffectObjects1Objects = Hashtable.newFrom({"Effect": gdjs.evtsExt__Player__Control.Control.prototype.fireProjectileContext.GDEffectObjects1});gdjs.evtsExt__Player__Control.Control.prototype.fireProjectileContext.mapOfGDgdjs_46evtsExt_95_95Player_95_95Control_46Control_46prototype_46fireProjectileContext_46GDProjectileObjects2Objects = Hashtable.newFrom({"Projectile": gdjs.evtsExt__Player__Control.Control.prototype.fireProjectileContext.GDProjectileObjects2});gdjs.evtsExt__Player__Control.Control.prototype.fireProjectileContext.eventsList0x85a2a4 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__Player__Control.Control.prototype.fireProjectileContext.GDObjectObjects2.createFrom(gdjs.evtsExt__Player__Control.Control.prototype.fireProjectileContext.GDObjectObjects1);


gdjs.evtsExt__Player__Control.Control.prototype.fireProjectileContext.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__Player__Control.Control.prototype.fireProjectileContext.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__Player__Control.Control.prototype.fireProjectileContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__Player__Control.Control.prototype.fireProjectileContext.GDObjectObjects2[0].getVariables()).get("BulletDelay"))), "BulletTime");
}if (gdjs.evtsExt__Player__Control.Control.prototype.fireProjectileContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Player__Control.Control.prototype.fireProjectileContext.GDObjectObjects2 */
gdjs.evtsExt__Player__Control.Control.prototype.fireProjectileContext.GDProjectileObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__Player__Control.Control.prototype.fireProjectileContext.mapOfGDgdjs_46evtsExt_95_95Player_95_95Control_46Control_46prototype_46fireProjectileContext_46GDProjectileObjects2Objects, (( gdjs.evtsExt__Player__Control.Control.prototype.fireProjectileContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Player__Control.Control.prototype.fireProjectileContext.GDObjectObjects2[0].getX()) + 8, (( gdjs.evtsExt__Player__Control.Control.prototype.fireProjectileContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Player__Control.Control.prototype.fireProjectileContext.GDObjectObjects2[0].getY()) - 10, "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "BulletTime");
}{gdjs.evtTools.sound.playSound(runtimeScene, "laser5.ogg", false, 10, 1);
}{runtimeScene.getGame().getVariables().get("AvailableBullets").sub(20);
}}

}


}; //End of gdjs.evtsExt__Player__Control.Control.prototype.fireProjectileContext.eventsList0x85a2a4
gdjs.evtsExt__Player__Control.Control.prototype.fireProjectileContext.eventsList0x85a134 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Player__Control.Control.prototype.fireProjectileContext.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__Player__Control.Control.prototype.fireProjectileContext.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("AvailableBullets")) > 0;
}if (gdjs.evtsExt__Player__Control.Control.prototype.fireProjectileContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__Player__Control.Control.prototype.fireProjectileContext.eventsList0x85a2a4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


gdjs.evtsExt__Player__Control.Control.prototype.fireProjectileContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__Player__Control.Control.prototype.fireProjectileContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__Player__Control.Control.prototype.fireProjectileContext.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("AvailableBullets")) > -(150);
}if ( gdjs.evtsExt__Player__Control.Control.prototype.fireProjectileContext.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__Player__Control.Control.prototype.fireProjectileContext.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("AvailableBullets")) < 0;
}}
if (gdjs.evtsExt__Player__Control.Control.prototype.fireProjectileContext.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("AvailableBullets").sub(20);
}}

}


}; //End of gdjs.evtsExt__Player__Control.Control.prototype.fireProjectileContext.eventsList0x85a134
gdjs.evtsExt__Player__Control.Control.prototype.fireProjectileContext.eventsList0x5b7298 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Player__Control.Control.prototype.fireProjectileContext.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__Player__Control.Control.prototype.fireProjectileContext.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if (gdjs.evtsExt__Player__Control.Control.prototype.fireProjectileContext.condition0IsTrue_0.val) {
gdjs.evtsExt__Player__Control.Control.prototype.fireProjectileContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));
gdjs.evtsExt__Player__Control.Control.prototype.fireProjectileContext.GDEffectObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__Player__Control.Control.prototype.fireProjectileContext.mapOfGDgdjs_46evtsExt_95_95Player_95_95Control_46Control_46prototype_46fireProjectileContext_46GDEffectObjects1Objects, (( gdjs.evtsExt__Player__Control.Control.prototype.fireProjectileContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Player__Control.Control.prototype.fireProjectileContext.GDObjectObjects1[0].getX()) + 10, (( gdjs.evtsExt__Player__Control.Control.prototype.fireProjectileContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Player__Control.Control.prototype.fireProjectileContext.GDObjectObjects1[0].getY()) - 20, "");
}
{ //Subevents
gdjs.evtsExt__Player__Control.Control.prototype.fireProjectileContext.eventsList0x85a134(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


}; //End of gdjs.evtsExt__Player__Control.Control.prototype.fireProjectileContext.eventsList0x5b7298


gdjs.evtsExt__Player__Control.Control.prototype.fireProjectile = function(Projectile, Effect, parentEventsFunctionContext) {
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Projectile": Projectile
, "Effect": Effect
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    if (objectName === "Object") { return thisObjectList; }    var objectsList = eventsFunctionContext._objectsMap[objectName];
    return objectsList ? gdjs.objectsListsToArray(objectsList) : [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      return parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
    }
    return null;
  },
  getArgument: function(argName) {
    return "";
  }
};

gdjs.evtsExt__Player__Control.Control.prototype.fireProjectileContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Player__Control.Control.prototype.fireProjectileContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Player__Control.Control.prototype.fireProjectileContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__Player__Control.Control.prototype.fireProjectileContext.GDProjectileObjects1.length = 0;
gdjs.evtsExt__Player__Control.Control.prototype.fireProjectileContext.GDProjectileObjects2.length = 0;
gdjs.evtsExt__Player__Control.Control.prototype.fireProjectileContext.GDProjectileObjects3.length = 0;
gdjs.evtsExt__Player__Control.Control.prototype.fireProjectileContext.GDEffectObjects1.length = 0;
gdjs.evtsExt__Player__Control.Control.prototype.fireProjectileContext.GDEffectObjects2.length = 0;
gdjs.evtsExt__Player__Control.Control.prototype.fireProjectileContext.GDEffectObjects3.length = 0;

gdjs.evtsExt__Player__Control.Control.prototype.fireProjectileContext.eventsList0x5b7298(runtimeScene, eventsFunctionContext);
return;
}


// Methods:

gdjs.evtsExt__Player__Control.Control.prototype._getBulletDelay = function() {
    return this._behaviorData.BulletDelay !== undefined ? this._behaviorData.BulletDelay : Number("1") || 0;
};
gdjs.evtsExt__Player__Control.Control.prototype._setBulletDelay = function(newValue) {
    this._behaviorData.BulletDelay = newValue;
};
gdjs.evtsExt__Player__Control.Control.prototype._getAvailableBullets = function() {
    return this._behaviorData.AvailableBullets !== undefined ? this._behaviorData.AvailableBullets : Number("100") || 0;
};
gdjs.evtsExt__Player__Control.Control.prototype._setAvailableBullets = function(newValue) {
    this._behaviorData.AvailableBullets = newValue;
};
