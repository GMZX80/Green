
gdjs.evtsExt__Enemy__Crawler = gdjs.evtsExt__Enemy__Crawler || {};

/**
 * Behavior generated from 
 * @class Crawler
 * @extends gdjs.RuntimeBehavior
 * @constructor
 */
gdjs.evtsExt__Enemy__Crawler.Crawler = function(runtimeScene, behaviorData, owner)
{
    gdjs.RuntimeBehavior.call(this, runtimeScene, behaviorData, owner);
    this._runtimeScene = runtimeScene;

    this._behaviorData = {};
    
    this._behaviorData.Direction = behaviorData.Direction !== undefined ? behaviorData.Direction : "";
    this._behaviorData.Speed = behaviorData.Speed !== undefined ? behaviorData.Speed : Number("") || 0;
    this._behaviorData.LastHDirection = behaviorData.LastHDirection !== undefined ? behaviorData.LastHDirection : "";
    this._behaviorData.LastVDirection = behaviorData.LastVDirection !== undefined ? behaviorData.LastVDirection : "";
    this._behaviorData.ExecuteOnce = Number("1") || 0;
};

gdjs.evtsExt__Enemy__Crawler.Crawler.prototype = Object.create( gdjs.RuntimeBehavior.prototype );
gdjs.registerBehavior("Enemy::Crawler", gdjs.evtsExt__Enemy__Crawler.Crawler);

// Properties:
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.onCreatedContext = {};
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.onCreatedContext.GDObjectObjects2= [];

gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.onCreatedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.onCreatedContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.onCreatedContext.eventsList0x5b7298 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.onCreatedContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));
{for(var i = 0, len = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.onCreatedContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.onCreatedContext.GDObjectObjects1[i].getVariables().get("Direction")).setString("Down");
}
}{for(var i = 0, len = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.onCreatedContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.onCreatedContext.GDObjectObjects1[i].getVariables().get("Speed")).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("CurrentSpeed")));
}
}{for(var i = 0, len = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.onCreatedContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.onCreatedContext.GDObjectObjects1[i].getVariables().get("LastHDirection")).setString("Left");
}
}{for(var i = 0, len = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.onCreatedContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.onCreatedContext.GDObjectObjects1[i].getVariables().get("LastVDirection")).setString("Down");
}
}{for(var i = 0, len = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.onCreatedContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.onCreatedContext.GDObjectObjects1[i].getVariables().get("ExecuteOnce")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.onCreatedContext.GDObjectObjects1[i].resetTimer("GoDown");
}
}{for(var i = 0, len = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.onCreatedContext.GDObjectObjects1[i].resetTimer("GoLeft");
}
}{for(var i = 0, len = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.onCreatedContext.GDObjectObjects1[i].resetTimer("GoRight");
}
}}

}


}; //End of gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.onCreatedContext.eventsList0x5b7298


gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.onCreated = function(parentEventsFunctionContext) {
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

gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.onCreatedContext.eventsList0x5b7298(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects2= [];

gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.eventsList0x8a754c = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1 */

gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariableString(gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariables().get("Direction")) != "Down" ) {
        gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariables().get("Direction")).setString("Down");
}
}}

}


}; //End of gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.eventsList0x8a754c
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.eventsList0x85edd4 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1 */

gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariableString(gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariables().get("Direction")) != "Left" ) {
        gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariables().get("Direction")).setString("Left");
}
}}

}


}; //End of gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.eventsList0x85edd4
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.eventsList0x85f194 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1 */

gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariableString(gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariables().get("Direction")) != "Right" ) {
        gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariables().get("Direction")).setString("Right");
}
}}

}


}; //End of gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.eventsList0x85f194
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.eventsList0x5b7298 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[i].getY() > 850 ) {
        gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariables().get("Direction")).setString("Up");
}
}}

}


{

gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[i].getY() < 1 ) {
        gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariables().get("Direction")).setString("Down");
}
}}

}


{

gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[i].getX() < 1 ) {
        gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariables().get("Direction")).setString("Right");
}
}}

}


{

gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[i].getX() > 600 ) {
        gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariables().get("Direction")).setString("Left");
}
}}

}


{

gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariableString(gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariables().get("Direction")) == "Down" ) {
        gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[i].setY(gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[i].getY() + ((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariables().get("Speed")))));
}
}}

}


{

gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariableString(gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariables().get("Direction")) == "Up" ) {
        gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[i].setY(gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[i].getY() - ((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariables().get("Speed")))));
}
}}

}


{

gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariableString(gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariables().get("Direction")) == "Right" ) {
        gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[i].setX(gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[i].getX() + ((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariables().get("Speed")))));
}
}}

}


{

gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariableString(gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariables().get("Direction")) == "Left" ) {
        gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[i].setX(gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[i].getX() - ((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariables().get("Speed")))));
}
}}

}


{



}


{

gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[i].timerElapsedTime("GoDown", gdjs.random(7) + 5) ) {
        gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[i].resetTimer("GoDown");
}
}
{ //Subevents
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.eventsList0x8a754c(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[i].timerElapsedTime("GoLeft", gdjs.random(7) + 5) ) {
        gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[i].resetTimer("GoLeft");
}
}
{ //Subevents
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.eventsList0x85edd4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[i].timerElapsedTime("GoRight", gdjs.random(7) + 5) ) {
        gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1[i].resetTimer("GoRight");
}
}
{ //Subevents
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.eventsList0x85f194(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


}; //End of gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.eventsList0x5b7298


gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
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

gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.doStepPreEventsContext.eventsList0x5b7298(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext = {};
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1= [];
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects2= [];
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDMushroomObjects1= [];
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDMushroomObjects2= [];

gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.eventsList0x85feb4 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1 */

gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].getVariableString(gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].getVariables().get("LastHDirection")) == "Left" ) {
        gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[k] = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].getVariables().get("Direction")).setString("Right");
}
}{for(var i = 0, len = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].getVariables().get("LastHDirection")).setString("Right");
}
}{for(var i = 0, len = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].getVariables().get("ExecuteOnce")).setNumber(1);
}
}}

}


}; //End of gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.eventsList0x85feb4
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.eventsList0x85fd8c = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1 */

gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].getVariableString(gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].getVariables().get("Direction")) == "Down" ) {
        gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[k] = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].setY(gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].getY() - ((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].getVariables().get("Speed")))));
}
}
{ //Subevents
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.eventsList0x85feb4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


}; //End of gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.eventsList0x85fd8c
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.eventsList0x86055c = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1 */

gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].getVariableString(gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].getVariables().get("LastHDirection")) == "Right" ) {
        gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[k] = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].getVariables().get("Direction")).setString("Left");
}
}{for(var i = 0, len = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].getVariables().get("LastHDirection")).setString("Left");
}
}{for(var i = 0, len = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].getVariables().get("ExecuteOnce")).setNumber(1);
}
}}

}


}; //End of gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.eventsList0x86055c
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.eventsList0x86041c = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1 */

gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].getVariableString(gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].getVariables().get("Direction")) == "Down" ) {
        gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[k] = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].setY(gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].getY() - ((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].getVariables().get("Speed")))));
}
}
{ //Subevents
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.eventsList0x86055c(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


}; //End of gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.eventsList0x86041c
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.eventsList0x885adc = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1 */

gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].getVariableString(gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].getVariables().get("Direction")) == "Right" ) {
        gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[k] = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].setX(gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].getX() - ((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].getVariables().get("Speed")))));
}
}{for(var i = 0, len = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].getVariables().get("LastHDirection")).setString("Right");
}
}{for(var i = 0, len = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].getVariables().get("Direction")).setString("Down");
}
}{for(var i = 0, len = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].getVariables().get("ExecuteOnce")).setNumber(1);
}
}}

}


}; //End of gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.eventsList0x885adc
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.eventsList0x6c0fa4 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1 */

gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].getVariableString(gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].getVariables().get("Direction")) == "Left" ) {
        gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[k] = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].setX(gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].getX() + ((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].getVariables().get("Speed")))));
}
}{for(var i = 0, len = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].getVariables().get("LastHDirection")).setString("Left");
}
}{for(var i = 0, len = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].getVariables().get("Direction")).setString("Down");
}
}{for(var i = 0, len = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].getVariables().get("ExecuteOnce")).setNumber(1);
}
}}

}


}; //End of gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.eventsList0x6c0fa4
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.eventsList0x85db44 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1 */

gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].getVariableString(gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].getVariables().get("LastHDirection")) == "Right" ) {
        gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[k] = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].getVariables().get("Direction")).setString("Left");
}
}{for(var i = 0, len = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].getVariables().get("LastHDirection")).setString("Left");
}
}{for(var i = 0, len = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].getVariables().get("ExecuteOnce")).setNumber(1);
}
}}

}


}; //End of gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.eventsList0x85db44
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.eventsList0x866604 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1 */

gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].getVariableString(gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].getVariables().get("Direction")) == "Up" ) {
        gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[k] = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].setY(gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].getY() + ((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].getVariables().get("Speed")))));
}
}
{ //Subevents
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.eventsList0x85db44(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


}; //End of gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.eventsList0x866604
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.eventsList0x85f084 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1 */

gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].getVariableString(gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].getVariables().get("LastHDirection")) == "Left" ) {
        gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[k] = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].getVariables().get("Direction")).setString("Right");
}
}{for(var i = 0, len = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].getVariables().get("LastHDirection")).setString("Right");
}
}{for(var i = 0, len = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].getVariables().get("ExecuteOnce")).setNumber(1);
}
}}

}


}; //End of gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.eventsList0x85f084
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.eventsList0x85ef44 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1 */

gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].getVariableString(gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].getVariables().get("Direction")) == "Up" ) {
        gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[k] = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].setY(gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].getY() + ((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].getVariables().get("Speed")))));
}
}
{ //Subevents
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.eventsList0x85f084(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


}; //End of gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.eventsList0x85ef44
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.eventsList0x5b7298 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].getVariables().get("ExecuteOnce")) != 1 ) {
        gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[k] = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.eventsList0x85fd8c(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].getVariables().get("ExecuteOnce")) != 1 ) {
        gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[k] = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.eventsList0x86041c(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].getVariables().get("ExecuteOnce")) != 1 ) {
        gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[k] = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.eventsList0x885adc(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].getVariables().get("ExecuteOnce")) != 1 ) {
        gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[k] = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.eventsList0x6c0fa4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].getVariables().get("ExecuteOnce")) != 1 ) {
        gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[k] = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.eventsList0x866604(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].getVariables().get("ExecuteOnce")) != 1 ) {
        gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[k] = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.eventsList0x85ef44(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


{
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));
{for(var i = 0, len = gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1[i].getVariables().get("ExecuteOnce")).setNumber(0);
}
}}

}


}; //End of gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.eventsList0x5b7298


gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collision = function(Mushroom, parentEventsFunctionContext) {
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Mushroom": Mushroom
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

gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDMushroomObjects1.length = 0;
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.GDMushroomObjects2.length = 0;

gdjs.evtsExt__Enemy__Crawler.Crawler.prototype.collisionContext.eventsList0x5b7298(runtimeScene, eventsFunctionContext);
return;
}


// Methods:

gdjs.evtsExt__Enemy__Crawler.Crawler.prototype._getDirection = function() {
    return this._behaviorData.Direction !== undefined ? this._behaviorData.Direction : "";
};
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype._setDirection = function(newValue) {
    this._behaviorData.Direction = newValue;
};
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype._getSpeed = function() {
    return this._behaviorData.Speed !== undefined ? this._behaviorData.Speed : Number("") || 0;
};
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype._setSpeed = function(newValue) {
    this._behaviorData.Speed = newValue;
};
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype._getLastHDirection = function() {
    return this._behaviorData.LastHDirection !== undefined ? this._behaviorData.LastHDirection : "";
};
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype._setLastHDirection = function(newValue) {
    this._behaviorData.LastHDirection = newValue;
};
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype._getLastVDirection = function() {
    return this._behaviorData.LastVDirection !== undefined ? this._behaviorData.LastVDirection : "";
};
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype._setLastVDirection = function(newValue) {
    this._behaviorData.LastVDirection = newValue;
};
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype._getExecuteOnce = function() {
    return this._behaviorData.ExecuteOnce !== undefined ? this._behaviorData.ExecuteOnce : Number("1") || 0;
};
gdjs.evtsExt__Enemy__Crawler.Crawler.prototype._setExecuteOnce = function(newValue) {
    this._behaviorData.ExecuteOnce = newValue;
};
