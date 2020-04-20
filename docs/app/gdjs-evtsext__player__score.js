
gdjs.evtsExt__Player__Score = gdjs.evtsExt__Player__Score || {};

/**
 * Behavior generated from Text that keeps score
 * @class Score
 * @extends gdjs.RuntimeBehavior
 * @constructor
 */
gdjs.evtsExt__Player__Score.Score = function(runtimeScene, behaviorData, owner)
{
    gdjs.RuntimeBehavior.call(this, runtimeScene, behaviorData, owner);
    this._runtimeScene = runtimeScene;

    this._behaviorData = {};
    
    this._behaviorData.Score = behaviorData.Score !== undefined ? behaviorData.Score : Number("") || 0;
};

gdjs.evtsExt__Player__Score.Score.prototype = Object.create( gdjs.RuntimeBehavior.prototype );
gdjs.registerBehavior("Player::Score", gdjs.evtsExt__Player__Score.Score);

// Properties:
gdjs.evtsExt__Player__Score.Score.prototype.CoinCollisionContext = {};
gdjs.evtsExt__Player__Score.Score.prototype.CoinCollisionContext.GDObjectObjects1= [];
gdjs.evtsExt__Player__Score.Score.prototype.CoinCollisionContext.GDObjectObjects2= [];
gdjs.evtsExt__Player__Score.Score.prototype.CoinCollisionContext.GDCoinObjects1= [];
gdjs.evtsExt__Player__Score.Score.prototype.CoinCollisionContext.GDCoinObjects2= [];
gdjs.evtsExt__Player__Score.Score.prototype.CoinCollisionContext.GDExplosionObjects1= [];
gdjs.evtsExt__Player__Score.Score.prototype.CoinCollisionContext.GDExplosionObjects2= [];

gdjs.evtsExt__Player__Score.Score.prototype.CoinCollisionContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Player__Score.Score.prototype.CoinCollisionContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Player__Score.Score.prototype.CoinCollisionContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__Player__Score.Score.prototype.CoinCollisionContext.mapOfGDgdjs_46evtsExt_95_95Player_95_95Score_46Score_46prototype_46CoinCollisionContext_46GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Player__Score.Score.prototype.CoinCollisionContext.GDObjectObjects1});gdjs.evtsExt__Player__Score.Score.prototype.CoinCollisionContext.mapOfGDgdjs_46evtsExt_95_95Player_95_95Score_46Score_46prototype_46CoinCollisionContext_46GDCoinObjects1Objects = Hashtable.newFrom({"Coin": gdjs.evtsExt__Player__Score.Score.prototype.CoinCollisionContext.GDCoinObjects1});gdjs.evtsExt__Player__Score.Score.prototype.CoinCollisionContext.mapOfGDgdjs_46evtsExt_95_95Player_95_95Score_46Score_46prototype_46CoinCollisionContext_46GDExplosionObjects1Objects = Hashtable.newFrom({"Explosion": gdjs.evtsExt__Player__Score.Score.prototype.CoinCollisionContext.GDExplosionObjects1});gdjs.evtsExt__Player__Score.Score.prototype.CoinCollisionContext.eventsList0x5b7298 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__Player__Score.Score.prototype.CoinCollisionContext.GDCoinObjects1.createFrom(eventsFunctionContext.getObjects("Coin"));
gdjs.evtsExt__Player__Score.Score.prototype.CoinCollisionContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Player__Score.Score.prototype.CoinCollisionContext.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__Player__Score.Score.prototype.CoinCollisionContext.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.evtsExt__Player__Score.Score.prototype.CoinCollisionContext.mapOfGDgdjs_46evtsExt_95_95Player_95_95Score_46Score_46prototype_46CoinCollisionContext_46GDObjectObjects1Objects, gdjs.evtsExt__Player__Score.Score.prototype.CoinCollisionContext.mapOfGDgdjs_46evtsExt_95_95Player_95_95Score_46Score_46prototype_46CoinCollisionContext_46GDCoinObjects1Objects, false, runtimeScene, false);
}if (gdjs.evtsExt__Player__Score.Score.prototype.CoinCollisionContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Player__Score.Score.prototype.CoinCollisionContext.GDCoinObjects1 */
/* Reuse gdjs.evtsExt__Player__Score.Score.prototype.CoinCollisionContext.GDObjectObjects1 */
gdjs.evtsExt__Player__Score.Score.prototype.CoinCollisionContext.GDExplosionObjects1.length = 0;

{gdjs.evtTools.sound.playSound(runtimeScene, "impactMetal_light_001.ogg", false, 100, 1);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__Player__Score.Score.prototype.CoinCollisionContext.mapOfGDgdjs_46evtsExt_95_95Player_95_95Score_46Score_46prototype_46CoinCollisionContext_46GDExplosionObjects1Objects, (( gdjs.evtsExt__Player__Score.Score.prototype.CoinCollisionContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Player__Score.Score.prototype.CoinCollisionContext.GDObjectObjects1[0].getX()) + 8, (( gdjs.evtsExt__Player__Score.Score.prototype.CoinCollisionContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Player__Score.Score.prototype.CoinCollisionContext.GDObjectObjects1[0].getY()) + 8, "");
}{runtimeScene.getVariables().get("Score").add(1);
}{for(var i = 0, len = gdjs.evtsExt__Player__Score.Score.prototype.CoinCollisionContext.GDCoinObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Player__Score.Score.prototype.CoinCollisionContext.GDCoinObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


}; //End of gdjs.evtsExt__Player__Score.Score.prototype.CoinCollisionContext.eventsList0x5b7298


gdjs.evtsExt__Player__Score.Score.prototype.CoinCollision = function(Coin, Explosion, parentEventsFunctionContext) {
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Coin": Coin
, "Explosion": Explosion
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

gdjs.evtsExt__Player__Score.Score.prototype.CoinCollisionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Player__Score.Score.prototype.CoinCollisionContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Player__Score.Score.prototype.CoinCollisionContext.GDCoinObjects1.length = 0;
gdjs.evtsExt__Player__Score.Score.prototype.CoinCollisionContext.GDCoinObjects2.length = 0;
gdjs.evtsExt__Player__Score.Score.prototype.CoinCollisionContext.GDExplosionObjects1.length = 0;
gdjs.evtsExt__Player__Score.Score.prototype.CoinCollisionContext.GDExplosionObjects2.length = 0;

gdjs.evtsExt__Player__Score.Score.prototype.CoinCollisionContext.eventsList0x5b7298(runtimeScene, eventsFunctionContext);
return;
}


// Methods:

gdjs.evtsExt__Player__Score.Score.prototype._getScore = function() {
    return this._behaviorData.Score !== undefined ? this._behaviorData.Score : Number("") || 0;
};
gdjs.evtsExt__Player__Score.Score.prototype._setScore = function(newValue) {
    this._behaviorData.Score = newValue;
};
