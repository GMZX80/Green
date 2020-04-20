
gdjs.evtsExt__Enemy__Insect = gdjs.evtsExt__Enemy__Insect || {};

/**
 * Behavior generated from 
 * @class Insect
 * @extends gdjs.RuntimeBehavior
 * @constructor
 */
gdjs.evtsExt__Enemy__Insect.Insect = function(runtimeScene, behaviorData, owner)
{
    gdjs.RuntimeBehavior.call(this, runtimeScene, behaviorData, owner);
    this._runtimeScene = runtimeScene;

    this._behaviorData = {};
    
    this._behaviorData.Replay = behaviorData.Replay !== undefined ? behaviorData.Replay : Number("20") || 0;
    this._behaviorData.Again = behaviorData.Again !== undefined ? behaviorData.Again : Number("0") || 0;
    this._behaviorData.StartUp = behaviorData.StartUp !== undefined ? behaviorData.StartUp : Number("1") || 0;
    this._behaviorData.Horizontal = behaviorData.Horizontal !== undefined ? behaviorData.Horizontal : "";
    this._behaviorData.Vertical = behaviorData.Vertical !== undefined ? behaviorData.Vertical : "";
    this._behaviorData.Speed = behaviorData.Speed !== undefined ? behaviorData.Speed : Number("") || 0;
};

gdjs.evtsExt__Enemy__Insect.Insect.prototype = Object.create( gdjs.RuntimeBehavior.prototype );
gdjs.registerBehavior("Enemy::Insect", gdjs.evtsExt__Enemy__Insect.Insect);

// Properties:
gdjs.evtsExt__Enemy__Insect.Insect.prototype.onCreatedContext = {};
gdjs.evtsExt__Enemy__Insect.Insect.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__Enemy__Insect.Insect.prototype.onCreatedContext.GDObjectObjects2= [];

gdjs.evtsExt__Enemy__Insect.Insect.prototype.onCreatedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Enemy__Insect.Insect.prototype.onCreatedContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Enemy__Insect.Insect.prototype.onCreatedContext.eventsList0x5b7298 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.evtsExt__Enemy__Insect.Insect.prototype.onCreatedContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));
{for(var i = 0, len = gdjs.evtsExt__Enemy__Insect.Insect.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Insect.Insect.prototype.onCreatedContext.GDObjectObjects1[i].setPosition(0,0);
}
}{for(var i = 0, len = gdjs.evtsExt__Enemy__Insect.Insect.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Insect.Insect.prototype.onCreatedContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Enemy__Insect.Insect.prototype.onCreatedContext.GDObjectObjects1[i].getVariables().get("Again")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__Enemy__Insect.Insect.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Insect.Insect.prototype.onCreatedContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Enemy__Insect.Insect.prototype.onCreatedContext.GDObjectObjects1[i].getVariables().get("Replay")).setNumber(20);
}
}{for(var i = 0, len = gdjs.evtsExt__Enemy__Insect.Insect.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Insect.Insect.prototype.onCreatedContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Enemy__Insect.Insect.prototype.onCreatedContext.GDObjectObjects1[i].getVariables().get("StartUp")).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__Enemy__Insect.Insect.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Insect.Insect.prototype.onCreatedContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Enemy__Insect.Insect.prototype.onCreatedContext.GDObjectObjects1[i].getVariables().get("Horizontal")).setString("Right");
}
}{for(var i = 0, len = gdjs.evtsExt__Enemy__Insect.Insect.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Insect.Insect.prototype.onCreatedContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Enemy__Insect.Insect.prototype.onCreatedContext.GDObjectObjects1[i].getVariables().get("Vertical")).setString("Down");
}
}{for(var i = 0, len = gdjs.evtsExt__Enemy__Insect.Insect.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Insect.Insect.prototype.onCreatedContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Enemy__Insect.Insect.prototype.onCreatedContext.GDObjectObjects1[i].getVariables().get("Speed")).setNumber(5);
}
}{for(var i = 0, len = gdjs.evtsExt__Enemy__Insect.Insect.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Insect.Insect.prototype.onCreatedContext.GDObjectObjects1[i].resetTimer("Pause");
}
}}

}


}; //End of gdjs.evtsExt__Enemy__Insect.Insect.prototype.onCreatedContext.eventsList0x5b7298


gdjs.evtsExt__Enemy__Insect.Insect.prototype.onCreated = function(parentEventsFunctionContext) {
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

gdjs.evtsExt__Enemy__Insect.Insect.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Enemy__Insect.Insect.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Enemy__Insect.Insect.prototype.onCreatedContext.eventsList0x5b7298(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects3= [];

gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.eventsList0x890534 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2.createFrom(gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1);


gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariableString(gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("Vertical")) == "Down" ) {
        gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;}if (gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2[i].setY((gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2[i].getY()) + (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("Speed"))));
}
}}

}


{

gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2.createFrom(gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1);


gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariableString(gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("Horizontal")) == "Right" ) {
        gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;}if (gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2[i].setX((gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2[i].getX()) + gdjs.random((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("Speed"))) * 2));
}
}}

}


{

gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2.createFrom(gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1);


gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariableString(gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("Horizontal")) == "Left" ) {
        gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;}if (gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2[i].setX((gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2[i].getX()) - gdjs.random((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("Speed"))) * 2));
}
}}

}


{

gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2.createFrom(gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1);


gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2[i].getX() > 600 ) {
        gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;}if (gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("Horizontal")).setString("Left");
}
}}

}


{

gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2.createFrom(gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1);


gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2[i].getY() > 930 ) {
        gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;}if (gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("Vertical")).setString("Up");
}
}}

}


{

gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2.createFrom(gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1);


gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariableString(gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("Vertical")) == "Up" ) {
        gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;}if (gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2[i].setY((gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2[i].getY()) - (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("Speed"))));
}
}}

}


{

gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2.createFrom(gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1);


gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2[i].getX() < 2 ) {
        gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;}if (gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("Horizontal")).setString("Right");
}
}}

}


{

gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2.createFrom(gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1);


gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2[i].getY() < 1 ) {
        gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;}if (gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("Vertical")).setString("Down");
}
}}

}


{

/* Reuse gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1 */

gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1[i].timerElapsedTime("Pause", 4 + gdjs.random(2)) ) {
        gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariables().get("StartUp")).setNumber(3);
}
}{for(var i = 0, len = gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1[i].resetTimer("Pause");
}
}}

}


}; //End of gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.eventsList0x890534
gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.eventsList0x86646c = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1 */

gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1[i].timerElapsedTime("Pause", 1 + gdjs.random(2)) ) {
        gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariables().get("StartUp")).setNumber(2);
}
}{for(var i = 0, len = gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariables().get("Vertical")).setString("Down");
}
}}

}


}; //End of gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.eventsList0x86646c
gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.eventsList0x5b7298 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariables().get("Again")) == (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariables().get("Replay"))) ) {
        gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "back_003.ogg", false, (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1[0].getVariables()).get("Replay"))), 1);
}{for(var i = 0, len = gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariables().get("Again")).setNumber(0);
}
}}

}


{


{
gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));
{for(var i = 0, len = gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariables().get("Again")).add(1);
}
}}

}


{

gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariables().get("StartUp")) == 1 ) {
        gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1[i].setPosition(0,0);
}
}{for(var i = 0, len = gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariables().get("StartUp")).setNumber(2);
}
}}

}


{

gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariables().get("StartUp")) == 2 ) {
        gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.eventsList0x890534(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariables().get("StartUp")) == 3 ) {
        gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.eventsList0x86646c(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


}; //End of gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.eventsList0x5b7298


gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEvents = function(parentEventsFunctionContext) {
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

gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__Enemy__Insect.Insect.prototype.doStepPostEventsContext.eventsList0x5b7298(runtimeScene, eventsFunctionContext);
return;
}


// Methods:

gdjs.evtsExt__Enemy__Insect.Insect.prototype._getReplay = function() {
    return this._behaviorData.Replay !== undefined ? this._behaviorData.Replay : Number("20") || 0;
};
gdjs.evtsExt__Enemy__Insect.Insect.prototype._setReplay = function(newValue) {
    this._behaviorData.Replay = newValue;
};
gdjs.evtsExt__Enemy__Insect.Insect.prototype._getAgain = function() {
    return this._behaviorData.Again !== undefined ? this._behaviorData.Again : Number("0") || 0;
};
gdjs.evtsExt__Enemy__Insect.Insect.prototype._setAgain = function(newValue) {
    this._behaviorData.Again = newValue;
};
gdjs.evtsExt__Enemy__Insect.Insect.prototype._getStartUp = function() {
    return this._behaviorData.StartUp !== undefined ? this._behaviorData.StartUp : Number("1") || 0;
};
gdjs.evtsExt__Enemy__Insect.Insect.prototype._setStartUp = function(newValue) {
    this._behaviorData.StartUp = newValue;
};
gdjs.evtsExt__Enemy__Insect.Insect.prototype._getHorizontal = function() {
    return this._behaviorData.Horizontal !== undefined ? this._behaviorData.Horizontal : "";
};
gdjs.evtsExt__Enemy__Insect.Insect.prototype._setHorizontal = function(newValue) {
    this._behaviorData.Horizontal = newValue;
};
gdjs.evtsExt__Enemy__Insect.Insect.prototype._getVertical = function() {
    return this._behaviorData.Vertical !== undefined ? this._behaviorData.Vertical : "";
};
gdjs.evtsExt__Enemy__Insect.Insect.prototype._setVertical = function(newValue) {
    this._behaviorData.Vertical = newValue;
};
gdjs.evtsExt__Enemy__Insect.Insect.prototype._getSpeed = function() {
    return this._behaviorData.Speed !== undefined ? this._behaviorData.Speed : Number("") || 0;
};
gdjs.evtsExt__Enemy__Insect.Insect.prototype._setSpeed = function(newValue) {
    this._behaviorData.Speed = newValue;
};
