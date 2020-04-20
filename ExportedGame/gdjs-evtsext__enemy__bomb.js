
gdjs.evtsExt__Enemy__Bomb = gdjs.evtsExt__Enemy__Bomb || {};

/**
 * Behavior generated from 
 * @class Bomb
 * @extends gdjs.RuntimeBehavior
 * @constructor
 */
gdjs.evtsExt__Enemy__Bomb.Bomb = function(runtimeScene, behaviorData, owner)
{
    gdjs.RuntimeBehavior.call(this, runtimeScene, behaviorData, owner);
    this._runtimeScene = runtimeScene;

    this._behaviorData = {};
    
};

gdjs.evtsExt__Enemy__Bomb.Bomb.prototype = Object.create( gdjs.RuntimeBehavior.prototype );
gdjs.registerBehavior("Enemy::Bomb", gdjs.evtsExt__Enemy__Bomb.Bomb);

// Properties:
gdjs.evtsExt__Enemy__Bomb.Bomb.prototype.onCreatedContext = {};
gdjs.evtsExt__Enemy__Bomb.Bomb.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__Enemy__Bomb.Bomb.prototype.onCreatedContext.GDObjectObjects2= [];

gdjs.evtsExt__Enemy__Bomb.Bomb.prototype.onCreatedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Enemy__Bomb.Bomb.prototype.onCreatedContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Enemy__Bomb.Bomb.prototype.onCreatedContext.eventsList0x5b7298 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.evtsExt__Enemy__Bomb.Bomb.prototype.onCreatedContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));
{for(var i = 0, len = gdjs.evtsExt__Enemy__Bomb.Bomb.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Bomb.Bomb.prototype.onCreatedContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Enemy__Bomb.Bomb.prototype.onCreatedContext.GDObjectObjects1[i].getVariables().get("Speed")).setNumber(5);
}
}}

}


}; //End of gdjs.evtsExt__Enemy__Bomb.Bomb.prototype.onCreatedContext.eventsList0x5b7298


gdjs.evtsExt__Enemy__Bomb.Bomb.prototype.onCreated = function(parentEventsFunctionContext) {
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

gdjs.evtsExt__Enemy__Bomb.Bomb.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Enemy__Bomb.Bomb.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Enemy__Bomb.Bomb.prototype.onCreatedContext.eventsList0x5b7298(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__Enemy__Bomb.Bomb.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__Enemy__Bomb.Bomb.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__Enemy__Bomb.Bomb.prototype.doStepPreEventsContext.GDObjectObjects2= [];

gdjs.evtsExt__Enemy__Bomb.Bomb.prototype.doStepPreEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Enemy__Bomb.Bomb.prototype.doStepPreEventsContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Enemy__Bomb.Bomb.prototype.doStepPreEventsContext.eventsList0x5b7298 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.evtsExt__Enemy__Bomb.Bomb.prototype.doStepPreEventsContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));
{for(var i = 0, len = gdjs.evtsExt__Enemy__Bomb.Bomb.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Bomb.Bomb.prototype.doStepPreEventsContext.GDObjectObjects1[i].setY(gdjs.evtsExt__Enemy__Bomb.Bomb.prototype.doStepPreEventsContext.GDObjectObjects1[i].getY() + ((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__Enemy__Bomb.Bomb.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariables().get("Speed")))));
}
}}

}


}; //End of gdjs.evtsExt__Enemy__Bomb.Bomb.prototype.doStepPreEventsContext.eventsList0x5b7298


gdjs.evtsExt__Enemy__Bomb.Bomb.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
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

gdjs.evtsExt__Enemy__Bomb.Bomb.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Enemy__Bomb.Bomb.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Enemy__Bomb.Bomb.prototype.doStepPreEventsContext.eventsList0x5b7298(runtimeScene, eventsFunctionContext);
return;
}


// Methods:

