
gdjs.evtsExt__Enemy__DropBomb = gdjs.evtsExt__Enemy__DropBomb || {};

/**
 * Behavior generated from 
 * @class DropBomb
 * @extends gdjs.RuntimeBehavior
 * @constructor
 */
gdjs.evtsExt__Enemy__DropBomb.DropBomb = function(runtimeScene, behaviorData, owner)
{
    gdjs.RuntimeBehavior.call(this, runtimeScene, behaviorData, owner);
    this._runtimeScene = runtimeScene;

    this._behaviorData = {};
    
};

gdjs.evtsExt__Enemy__DropBomb.DropBomb.prototype = Object.create( gdjs.RuntimeBehavior.prototype );
gdjs.registerBehavior("Enemy::DropBomb", gdjs.evtsExt__Enemy__DropBomb.DropBomb);

// Properties:
gdjs.evtsExt__Enemy__DropBomb.DropBomb.prototype.ReleaseBombContext = {};
gdjs.evtsExt__Enemy__DropBomb.DropBomb.prototype.ReleaseBombContext.GDObjectObjects1= [];
gdjs.evtsExt__Enemy__DropBomb.DropBomb.prototype.ReleaseBombContext.GDObjectObjects2= [];
gdjs.evtsExt__Enemy__DropBomb.DropBomb.prototype.ReleaseBombContext.GDTypeOfBombObjects1= [];
gdjs.evtsExt__Enemy__DropBomb.DropBomb.prototype.ReleaseBombContext.GDTypeOfBombObjects2= [];
gdjs.evtsExt__Enemy__DropBomb.DropBomb.prototype.ReleaseBombContext.GDEffectObjects1= [];
gdjs.evtsExt__Enemy__DropBomb.DropBomb.prototype.ReleaseBombContext.GDEffectObjects2= [];

gdjs.evtsExt__Enemy__DropBomb.DropBomb.prototype.ReleaseBombContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Enemy__DropBomb.DropBomb.prototype.ReleaseBombContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Enemy__DropBomb.DropBomb.prototype.ReleaseBombContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__Enemy__DropBomb.DropBomb.prototype.ReleaseBombContext.mapOfGDgdjs_46evtsExt_95_95Enemy_95_95DropBomb_46DropBomb_46prototype_46ReleaseBombContext_46GDTypeOfBombObjects1Objects = Hashtable.newFrom({"TypeOfBomb": gdjs.evtsExt__Enemy__DropBomb.DropBomb.prototype.ReleaseBombContext.GDTypeOfBombObjects1});gdjs.evtsExt__Enemy__DropBomb.DropBomb.prototype.ReleaseBombContext.mapOfGDgdjs_46evtsExt_95_95Enemy_95_95DropBomb_46DropBomb_46prototype_46ReleaseBombContext_46GDEffectObjects1Objects = Hashtable.newFrom({"Effect": gdjs.evtsExt__Enemy__DropBomb.DropBomb.prototype.ReleaseBombContext.GDEffectObjects1});gdjs.evtsExt__Enemy__DropBomb.DropBomb.prototype.ReleaseBombContext.eventsList0x6d4d1c = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Enemy__DropBomb.DropBomb.prototype.ReleaseBombContext.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__Enemy__DropBomb.DropBomb.prototype.ReleaseBombContext.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("ChanceOfBomb")) >= gdjs.random(20);
}if (gdjs.evtsExt__Enemy__DropBomb.DropBomb.prototype.ReleaseBombContext.condition0IsTrue_0.val) {
gdjs.evtsExt__Enemy__DropBomb.DropBomb.prototype.ReleaseBombContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));
gdjs.evtsExt__Enemy__DropBomb.DropBomb.prototype.ReleaseBombContext.GDEffectObjects1.length = 0;

gdjs.evtsExt__Enemy__DropBomb.DropBomb.prototype.ReleaseBombContext.GDTypeOfBombObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__Enemy__DropBomb.DropBomb.prototype.ReleaseBombContext.mapOfGDgdjs_46evtsExt_95_95Enemy_95_95DropBomb_46DropBomb_46prototype_46ReleaseBombContext_46GDTypeOfBombObjects1Objects, (( gdjs.evtsExt__Enemy__DropBomb.DropBomb.prototype.ReleaseBombContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Enemy__DropBomb.DropBomb.prototype.ReleaseBombContext.GDObjectObjects1[0].getX()) + 8, (( gdjs.evtsExt__Enemy__DropBomb.DropBomb.prototype.ReleaseBombContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Enemy__DropBomb.DropBomb.prototype.ReleaseBombContext.GDObjectObjects1[0].getY()) + 20, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__Enemy__DropBomb.DropBomb.prototype.ReleaseBombContext.mapOfGDgdjs_46evtsExt_95_95Enemy_95_95DropBomb_46DropBomb_46prototype_46ReleaseBombContext_46GDEffectObjects1Objects, (( gdjs.evtsExt__Enemy__DropBomb.DropBomb.prototype.ReleaseBombContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Enemy__DropBomb.DropBomb.prototype.ReleaseBombContext.GDObjectObjects1[0].getX()) + 8, (( gdjs.evtsExt__Enemy__DropBomb.DropBomb.prototype.ReleaseBombContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Enemy__DropBomb.DropBomb.prototype.ReleaseBombContext.GDObjectObjects1[0].getY()) + 20, "");
}}

}


}; //End of gdjs.evtsExt__Enemy__DropBomb.DropBomb.prototype.ReleaseBombContext.eventsList0x6d4d1c
gdjs.evtsExt__Enemy__DropBomb.DropBomb.prototype.ReleaseBombContext.eventsList0x5b7298 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Enemy__DropBomb.DropBomb.prototype.ReleaseBombContext.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__Enemy__DropBomb.DropBomb.prototype.ReleaseBombContext.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5 + gdjs.random(1), "BombTime");
}if (gdjs.evtsExt__Enemy__DropBomb.DropBomb.prototype.ReleaseBombContext.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "BombTime");
}
{ //Subevents
gdjs.evtsExt__Enemy__DropBomb.DropBomb.prototype.ReleaseBombContext.eventsList0x6d4d1c(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


}; //End of gdjs.evtsExt__Enemy__DropBomb.DropBomb.prototype.ReleaseBombContext.eventsList0x5b7298


gdjs.evtsExt__Enemy__DropBomb.DropBomb.prototype.ReleaseBomb = function(TypeOfBomb, Effect, parentEventsFunctionContext) {
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "TypeOfBomb": TypeOfBomb
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

gdjs.evtsExt__Enemy__DropBomb.DropBomb.prototype.ReleaseBombContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Enemy__DropBomb.DropBomb.prototype.ReleaseBombContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Enemy__DropBomb.DropBomb.prototype.ReleaseBombContext.GDTypeOfBombObjects1.length = 0;
gdjs.evtsExt__Enemy__DropBomb.DropBomb.prototype.ReleaseBombContext.GDTypeOfBombObjects2.length = 0;
gdjs.evtsExt__Enemy__DropBomb.DropBomb.prototype.ReleaseBombContext.GDEffectObjects1.length = 0;
gdjs.evtsExt__Enemy__DropBomb.DropBomb.prototype.ReleaseBombContext.GDEffectObjects2.length = 0;

gdjs.evtsExt__Enemy__DropBomb.DropBomb.prototype.ReleaseBombContext.eventsList0x5b7298(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__Enemy__DropBomb.DropBomb.prototype.onCreatedContext = {};
gdjs.evtsExt__Enemy__DropBomb.DropBomb.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__Enemy__DropBomb.DropBomb.prototype.onCreatedContext.GDObjectObjects2= [];

gdjs.evtsExt__Enemy__DropBomb.DropBomb.prototype.onCreatedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Enemy__DropBomb.DropBomb.prototype.onCreatedContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Enemy__DropBomb.DropBomb.prototype.onCreatedContext.eventsList0x5b7298 = function(runtimeScene, eventsFunctionContext) {

{


{
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "BombTime");
}}

}


}; //End of gdjs.evtsExt__Enemy__DropBomb.DropBomb.prototype.onCreatedContext.eventsList0x5b7298


gdjs.evtsExt__Enemy__DropBomb.DropBomb.prototype.onCreated = function(parentEventsFunctionContext) {
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

gdjs.evtsExt__Enemy__DropBomb.DropBomb.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Enemy__DropBomb.DropBomb.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Enemy__DropBomb.DropBomb.prototype.onCreatedContext.eventsList0x5b7298(runtimeScene, eventsFunctionContext);
return;
}


// Methods:

