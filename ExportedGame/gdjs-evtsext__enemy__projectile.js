
gdjs.evtsExt__Enemy__Projectile = gdjs.evtsExt__Enemy__Projectile || {};

/**
 * Behavior generated from 
 * @class Projectile
 * @extends gdjs.RuntimeBehavior
 * @constructor
 */
gdjs.evtsExt__Enemy__Projectile.Projectile = function(runtimeScene, behaviorData, owner)
{
    gdjs.RuntimeBehavior.call(this, runtimeScene, behaviorData, owner);
    this._runtimeScene = runtimeScene;

    this._behaviorData = {};
    
    this._behaviorData.HitValue = behaviorData.HitValue !== undefined ? behaviorData.HitValue : Number("") || 0;
    this._behaviorData.Speed = behaviorData.Speed !== undefined ? behaviorData.Speed : Number("") || 0;
};

gdjs.evtsExt__Enemy__Projectile.Projectile.prototype = Object.create( gdjs.RuntimeBehavior.prototype );
gdjs.registerBehavior("Enemy::Projectile", gdjs.evtsExt__Enemy__Projectile.Projectile);

// Properties:
gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.onCreatedContext = {};
gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.onCreatedContext.GDObjectObjects2= [];

gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.onCreatedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.onCreatedContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.onCreatedContext.eventsList0x5b7298 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.onCreatedContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));
{for(var i = 0, len = gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.onCreatedContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.onCreatedContext.GDObjectObjects1[i].getVariables().get("Speed")).setNumber(20);
}
}}

}


}; //End of gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.onCreatedContext.eventsList0x5b7298


gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.onCreated = function(parentEventsFunctionContext) {
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

gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.onCreatedContext.eventsList0x5b7298(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.doStepPreEventsContext.GDObjectObjects2= [];

gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.doStepPreEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.doStepPreEventsContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.doStepPreEventsContext.eventsList0x5b7298 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.doStepPreEventsContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));
{for(var i = 0, len = gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.doStepPreEventsContext.GDObjectObjects1[i].setY(gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.doStepPreEventsContext.GDObjectObjects1[i].getY() - ((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariables().get("Speed")))));
}
}}

}


}; //End of gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.doStepPreEventsContext.eventsList0x5b7298


gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
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

gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.doStepPreEventsContext.eventsList0x5b7298(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.collisionContext = {};
gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.collisionContext.GDObjectObjects1= [];
gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.collisionContext.GDObjectObjects2= [];
gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.collisionContext.GDSceneObjectObjects1= [];
gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.collisionContext.GDSceneObjectObjects2= [];
gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.collisionContext.GDExplosionObjectObjects1= [];
gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.collisionContext.GDExplosionObjectObjects2= [];

gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.collisionContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.collisionContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.collisionContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.collisionContext.mapOfGDgdjs_46evtsExt_95_95Enemy_95_95Projectile_46Projectile_46prototype_46collisionContext_46GDExplosionObjectObjects1Objects = Hashtable.newFrom({"ExplosionObject": gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.collisionContext.GDExplosionObjectObjects1});gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.collisionContext.eventsList0x5b7298 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.collisionContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));
gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.collisionContext.GDSceneObjectObjects1.createFrom(eventsFunctionContext.getObjects("SceneObject"));
gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.collisionContext.GDExplosionObjectObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.collisionContext.mapOfGDgdjs_46evtsExt_95_95Enemy_95_95Projectile_46Projectile_46prototype_46collisionContext_46GDExplosionObjectObjects1Objects, (( gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.collisionContext.GDSceneObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.collisionContext.GDSceneObjectObjects1[0].getX()) + 15, (( gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.collisionContext.GDSceneObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.collisionContext.GDSceneObjectObjects1[0].getY()) + 25, "");
}{for(var i = 0, len = gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.collisionContext.GDSceneObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.collisionContext.GDSceneObjectObjects1[i].returnVariable(gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.collisionContext.GDSceneObjectObjects1[i].getVariables().get("HitCounter")).add(1);
}
}{for(var i = 0, len = gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.collisionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.collisionContext.GDObjectObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.collisionContext.GDSceneObjectObjects1.createFrom(eventsFunctionContext.getObjects("SceneObject"));

gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.collisionContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.collisionContext.GDSceneObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.collisionContext.GDSceneObjectObjects1[i].getVariableNumber(gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.collisionContext.GDSceneObjectObjects1[i].getVariables().get("HitCounter")) == (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.collisionContext.GDSceneObjectObjects1[i].getVariables().get("HitDefence"))) ) {
        gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.collisionContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.collisionContext.GDSceneObjectObjects1[k] = gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.collisionContext.GDSceneObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.collisionContext.GDSceneObjectObjects1.length = k;}if (gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.collisionContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.collisionContext.GDSceneObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.collisionContext.GDSceneObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.collisionContext.GDSceneObjectObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


}; //End of gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.collisionContext.eventsList0x5b7298


gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.collision = function(SceneObject, ExplosionObject, parentEventsFunctionContext) {
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "SceneObject": SceneObject
, "ExplosionObject": ExplosionObject
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

gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.collisionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.collisionContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.collisionContext.GDSceneObjectObjects1.length = 0;
gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.collisionContext.GDSceneObjectObjects2.length = 0;
gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.collisionContext.GDExplosionObjectObjects1.length = 0;
gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.collisionContext.GDExplosionObjectObjects2.length = 0;

gdjs.evtsExt__Enemy__Projectile.Projectile.prototype.collisionContext.eventsList0x5b7298(runtimeScene, eventsFunctionContext);
return;
}


// Methods:

gdjs.evtsExt__Enemy__Projectile.Projectile.prototype._getHitValue = function() {
    return this._behaviorData.HitValue !== undefined ? this._behaviorData.HitValue : Number("") || 0;
};
gdjs.evtsExt__Enemy__Projectile.Projectile.prototype._setHitValue = function(newValue) {
    this._behaviorData.HitValue = newValue;
};
gdjs.evtsExt__Enemy__Projectile.Projectile.prototype._getSpeed = function() {
    return this._behaviorData.Speed !== undefined ? this._behaviorData.Speed : Number("") || 0;
};
gdjs.evtsExt__Enemy__Projectile.Projectile.prototype._setSpeed = function(newValue) {
    this._behaviorData.Speed = newValue;
};
