gdjs.Testing_32SceneCode = {};
gdjs.Testing_32SceneCode.GDFiniteBlackSmokeEmitter2Objects1= [];
gdjs.Testing_32SceneCode.GDFiniteBlackSmokeEmitter2Objects2= [];
gdjs.Testing_32SceneCode.GDFiniteBlackSmokeEmitter2Objects3= [];
gdjs.Testing_32SceneCode.GDFiniteWhiteSmokeEmitter2Objects1= [];
gdjs.Testing_32SceneCode.GDFiniteWhiteSmokeEmitter2Objects2= [];
gdjs.Testing_32SceneCode.GDFiniteWhiteSmokeEmitter2Objects3= [];
gdjs.Testing_32SceneCode.GDFiniteYellowSmokeEmitterObjects1= [];
gdjs.Testing_32SceneCode.GDFiniteYellowSmokeEmitterObjects2= [];
gdjs.Testing_32SceneCode.GDFiniteYellowSmokeEmitterObjects3= [];
gdjs.Testing_32SceneCode.GDFinitePinkSmokeEmitterObjects1= [];
gdjs.Testing_32SceneCode.GDFinitePinkSmokeEmitterObjects2= [];
gdjs.Testing_32SceneCode.GDFinitePinkSmokeEmitterObjects3= [];
gdjs.Testing_32SceneCode.GDFiniteCyanSmokeEmitterObjects1= [];
gdjs.Testing_32SceneCode.GDFiniteCyanSmokeEmitterObjects2= [];
gdjs.Testing_32SceneCode.GDFiniteCyanSmokeEmitterObjects3= [];
gdjs.Testing_32SceneCode.GDFiniteOrangeSmokeEmitterObjects1= [];
gdjs.Testing_32SceneCode.GDFiniteOrangeSmokeEmitterObjects2= [];
gdjs.Testing_32SceneCode.GDFiniteOrangeSmokeEmitterObjects3= [];
gdjs.Testing_32SceneCode.GDFiniteGreenSmokeEmitterObjects1= [];
gdjs.Testing_32SceneCode.GDFiniteGreenSmokeEmitterObjects2= [];
gdjs.Testing_32SceneCode.GDFiniteGreenSmokeEmitterObjects3= [];
gdjs.Testing_32SceneCode.GDFiniteRedSmokeEmitterObjects1= [];
gdjs.Testing_32SceneCode.GDFiniteRedSmokeEmitterObjects2= [];
gdjs.Testing_32SceneCode.GDFiniteRedSmokeEmitterObjects3= [];
gdjs.Testing_32SceneCode.GDFinitePurpleSmokeEmitterObjects1= [];
gdjs.Testing_32SceneCode.GDFinitePurpleSmokeEmitterObjects2= [];
gdjs.Testing_32SceneCode.GDFinitePurpleSmokeEmitterObjects3= [];
gdjs.Testing_32SceneCode.GDBlackSmokeEmitterObjects1= [];
gdjs.Testing_32SceneCode.GDBlackSmokeEmitterObjects2= [];
gdjs.Testing_32SceneCode.GDBlackSmokeEmitterObjects3= [];
gdjs.Testing_32SceneCode.GDGreenEnemyObjects1= [];
gdjs.Testing_32SceneCode.GDGreenEnemyObjects2= [];
gdjs.Testing_32SceneCode.GDGreenEnemyObjects3= [];
gdjs.Testing_32SceneCode.GDMushroomObjects1= [];
gdjs.Testing_32SceneCode.GDMushroomObjects2= [];
gdjs.Testing_32SceneCode.GDMushroomObjects3= [];

gdjs.Testing_32SceneCode.conditionTrue_0 = {val:false};
gdjs.Testing_32SceneCode.condition0IsTrue_0 = {val:false};
gdjs.Testing_32SceneCode.condition1IsTrue_0 = {val:false};
gdjs.Testing_32SceneCode.condition2IsTrue_0 = {val:false};


gdjs.Testing_32SceneCode.mapOfGDgdjs_46Testing_9532SceneCode_46GDGreenEnemyObjects2Objects = Hashtable.newFrom({"GreenEnemy": gdjs.Testing_32SceneCode.GDGreenEnemyObjects2});gdjs.Testing_32SceneCode.mapOfGDgdjs_46Testing_9532SceneCode_46GDMushroomObjects2Objects = Hashtable.newFrom({"Mushroom": gdjs.Testing_32SceneCode.GDMushroomObjects2});gdjs.Testing_32SceneCode.mapOfGDgdjs_46Testing_9532SceneCode_46GDGreenEnemyObjects1Objects = Hashtable.newFrom({"GreenEnemy": gdjs.Testing_32SceneCode.GDGreenEnemyObjects1});gdjs.Testing_32SceneCode.mapOfGDgdjs_46Testing_9532SceneCode_46GDMushroomObjects1Objects = Hashtable.newFrom({"Mushroom": gdjs.Testing_32SceneCode.GDMushroomObjects1});gdjs.Testing_32SceneCode.eventsList0x70d10c = function(runtimeScene) {

{

gdjs.Testing_32SceneCode.GDGreenEnemyObjects2.createFrom(gdjs.Testing_32SceneCode.GDGreenEnemyObjects1);

gdjs.Testing_32SceneCode.GDMushroomObjects2.createFrom(runtimeScene.getObjects("Mushroom"));

gdjs.Testing_32SceneCode.condition0IsTrue_0.val = false;
gdjs.Testing_32SceneCode.condition1IsTrue_0.val = false;
{
gdjs.Testing_32SceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Testing_32SceneCode.mapOfGDgdjs_46Testing_9532SceneCode_46GDGreenEnemyObjects2Objects, gdjs.Testing_32SceneCode.mapOfGDgdjs_46Testing_9532SceneCode_46GDMushroomObjects2Objects, false, runtimeScene, false);
}if ( gdjs.Testing_32SceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Testing_32SceneCode.GDGreenEnemyObjects2.length;i<l;++i) {
    if ( gdjs.Testing_32SceneCode.GDGreenEnemyObjects2[i].getVariableString(gdjs.Testing_32SceneCode.GDGreenEnemyObjects2[i].getVariables().getFromIndex(1)) == "left" ) {
        gdjs.Testing_32SceneCode.condition1IsTrue_0.val = true;
        gdjs.Testing_32SceneCode.GDGreenEnemyObjects2[k] = gdjs.Testing_32SceneCode.GDGreenEnemyObjects2[i];
        ++k;
    }
}
gdjs.Testing_32SceneCode.GDGreenEnemyObjects2.length = k;}}
if (gdjs.Testing_32SceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Testing_32SceneCode.GDGreenEnemyObjects2 */
{for(var i = 0, len = gdjs.Testing_32SceneCode.GDGreenEnemyObjects2.length ;i < len;++i) {
    gdjs.Testing_32SceneCode.GDGreenEnemyObjects2[i].setY(gdjs.Testing_32SceneCode.GDGreenEnemyObjects2[i].getY() - (10));
}
}{for(var i = 0, len = gdjs.Testing_32SceneCode.GDGreenEnemyObjects2.length ;i < len;++i) {
    gdjs.Testing_32SceneCode.GDGreenEnemyObjects2[i].returnVariable(gdjs.Testing_32SceneCode.GDGreenEnemyObjects2[i].getVariables().getFromIndex(0)).setString("right");
}
}{for(var i = 0, len = gdjs.Testing_32SceneCode.GDGreenEnemyObjects2.length ;i < len;++i) {
    gdjs.Testing_32SceneCode.GDGreenEnemyObjects2[i].returnVariable(gdjs.Testing_32SceneCode.GDGreenEnemyObjects2[i].getVariables().getFromIndex(1)).setString("right");
}
}}

}


{

/* Reuse gdjs.Testing_32SceneCode.GDGreenEnemyObjects1 */
gdjs.Testing_32SceneCode.GDMushroomObjects1.createFrom(runtimeScene.getObjects("Mushroom"));

gdjs.Testing_32SceneCode.condition0IsTrue_0.val = false;
gdjs.Testing_32SceneCode.condition1IsTrue_0.val = false;
{
gdjs.Testing_32SceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Testing_32SceneCode.mapOfGDgdjs_46Testing_9532SceneCode_46GDGreenEnemyObjects1Objects, gdjs.Testing_32SceneCode.mapOfGDgdjs_46Testing_9532SceneCode_46GDMushroomObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Testing_32SceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Testing_32SceneCode.GDGreenEnemyObjects1.length;i<l;++i) {
    if ( gdjs.Testing_32SceneCode.GDGreenEnemyObjects1[i].getVariableString(gdjs.Testing_32SceneCode.GDGreenEnemyObjects1[i].getVariables().getFromIndex(1)) == "right" ) {
        gdjs.Testing_32SceneCode.condition1IsTrue_0.val = true;
        gdjs.Testing_32SceneCode.GDGreenEnemyObjects1[k] = gdjs.Testing_32SceneCode.GDGreenEnemyObjects1[i];
        ++k;
    }
}
gdjs.Testing_32SceneCode.GDGreenEnemyObjects1.length = k;}}
if (gdjs.Testing_32SceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Testing_32SceneCode.GDGreenEnemyObjects1 */
{for(var i = 0, len = gdjs.Testing_32SceneCode.GDGreenEnemyObjects1.length ;i < len;++i) {
    gdjs.Testing_32SceneCode.GDGreenEnemyObjects1[i].setY(gdjs.Testing_32SceneCode.GDGreenEnemyObjects1[i].getY() - (10));
}
}{for(var i = 0, len = gdjs.Testing_32SceneCode.GDGreenEnemyObjects1.length ;i < len;++i) {
    gdjs.Testing_32SceneCode.GDGreenEnemyObjects1[i].returnVariable(gdjs.Testing_32SceneCode.GDGreenEnemyObjects1[i].getVariables().getFromIndex(1)).setString("left");
}
}{for(var i = 0, len = gdjs.Testing_32SceneCode.GDGreenEnemyObjects1.length ;i < len;++i) {
    gdjs.Testing_32SceneCode.GDGreenEnemyObjects1[i].returnVariable(gdjs.Testing_32SceneCode.GDGreenEnemyObjects1[i].getVariables().getFromIndex(0)).setString("left");
}
}}

}


}; //End of gdjs.Testing_32SceneCode.eventsList0x70d10c
gdjs.Testing_32SceneCode.mapOfGDgdjs_46Testing_9532SceneCode_46GDGreenEnemyObjects1Objects = Hashtable.newFrom({"GreenEnemy": gdjs.Testing_32SceneCode.GDGreenEnemyObjects1});gdjs.Testing_32SceneCode.mapOfGDgdjs_46Testing_9532SceneCode_46GDMushroomObjects1Objects = Hashtable.newFrom({"Mushroom": gdjs.Testing_32SceneCode.GDMushroomObjects1});gdjs.Testing_32SceneCode.eventsList0x70c41c = function(runtimeScene) {

{

/* Reuse gdjs.Testing_32SceneCode.GDGreenEnemyObjects1 */
gdjs.Testing_32SceneCode.GDMushroomObjects1.createFrom(runtimeScene.getObjects("Mushroom"));

gdjs.Testing_32SceneCode.condition0IsTrue_0.val = false;
{
gdjs.Testing_32SceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Testing_32SceneCode.mapOfGDgdjs_46Testing_9532SceneCode_46GDGreenEnemyObjects1Objects, gdjs.Testing_32SceneCode.mapOfGDgdjs_46Testing_9532SceneCode_46GDMushroomObjects1Objects, false, runtimeScene, false);
}if (gdjs.Testing_32SceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Testing_32SceneCode.GDGreenEnemyObjects1 */
{for(var i = 0, len = gdjs.Testing_32SceneCode.GDGreenEnemyObjects1.length ;i < len;++i) {
    gdjs.Testing_32SceneCode.GDGreenEnemyObjects1[i].returnVariable(gdjs.Testing_32SceneCode.GDGreenEnemyObjects1[i].getVariables().getFromIndex(0)).setString("down");
}
}{for(var i = 0, len = gdjs.Testing_32SceneCode.GDGreenEnemyObjects1.length ;i < len;++i) {
    gdjs.Testing_32SceneCode.GDGreenEnemyObjects1[i].setX(gdjs.Testing_32SceneCode.GDGreenEnemyObjects1[i].getX() - (10));
}
}}

}


}; //End of gdjs.Testing_32SceneCode.eventsList0x70c41c
gdjs.Testing_32SceneCode.mapOfGDgdjs_46Testing_9532SceneCode_46GDGreenEnemyObjects1Objects = Hashtable.newFrom({"GreenEnemy": gdjs.Testing_32SceneCode.GDGreenEnemyObjects1});gdjs.Testing_32SceneCode.mapOfGDgdjs_46Testing_9532SceneCode_46GDMushroomObjects1Objects = Hashtable.newFrom({"Mushroom": gdjs.Testing_32SceneCode.GDMushroomObjects1});gdjs.Testing_32SceneCode.eventsList0x7021cc = function(runtimeScene) {

{

/* Reuse gdjs.Testing_32SceneCode.GDGreenEnemyObjects1 */
gdjs.Testing_32SceneCode.GDMushroomObjects1.createFrom(runtimeScene.getObjects("Mushroom"));

gdjs.Testing_32SceneCode.condition0IsTrue_0.val = false;
{
gdjs.Testing_32SceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Testing_32SceneCode.mapOfGDgdjs_46Testing_9532SceneCode_46GDGreenEnemyObjects1Objects, gdjs.Testing_32SceneCode.mapOfGDgdjs_46Testing_9532SceneCode_46GDMushroomObjects1Objects, false, runtimeScene, false);
}if (gdjs.Testing_32SceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Testing_32SceneCode.GDGreenEnemyObjects1 */
{for(var i = 0, len = gdjs.Testing_32SceneCode.GDGreenEnemyObjects1.length ;i < len;++i) {
    gdjs.Testing_32SceneCode.GDGreenEnemyObjects1[i].returnVariable(gdjs.Testing_32SceneCode.GDGreenEnemyObjects1[i].getVariables().getFromIndex(0)).setString("down");
}
}{for(var i = 0, len = gdjs.Testing_32SceneCode.GDGreenEnemyObjects1.length ;i < len;++i) {
    gdjs.Testing_32SceneCode.GDGreenEnemyObjects1[i].setX(gdjs.Testing_32SceneCode.GDGreenEnemyObjects1[i].getX() + (10));
}
}}

}


}; //End of gdjs.Testing_32SceneCode.eventsList0x7021cc
gdjs.Testing_32SceneCode.eventsList0x5b6e18 = function(runtimeScene) {

{

gdjs.Testing_32SceneCode.GDGreenEnemyObjects1.createFrom(runtimeScene.getObjects("GreenEnemy"));

gdjs.Testing_32SceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Testing_32SceneCode.GDGreenEnemyObjects1.length;i<l;++i) {
    if ( gdjs.Testing_32SceneCode.GDGreenEnemyObjects1[i].getVariableString(gdjs.Testing_32SceneCode.GDGreenEnemyObjects1[i].getVariables().getFromIndex(0)) == "down" ) {
        gdjs.Testing_32SceneCode.condition0IsTrue_0.val = true;
        gdjs.Testing_32SceneCode.GDGreenEnemyObjects1[k] = gdjs.Testing_32SceneCode.GDGreenEnemyObjects1[i];
        ++k;
    }
}
gdjs.Testing_32SceneCode.GDGreenEnemyObjects1.length = k;}if (gdjs.Testing_32SceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Testing_32SceneCode.GDGreenEnemyObjects1 */
{for(var i = 0, len = gdjs.Testing_32SceneCode.GDGreenEnemyObjects1.length ;i < len;++i) {
    gdjs.Testing_32SceneCode.GDGreenEnemyObjects1[i].addPolarForce(90, 300, 0);
}
}
{ //Subevents
gdjs.Testing_32SceneCode.eventsList0x70d10c(runtimeScene);} //End of subevents
}

}


{

gdjs.Testing_32SceneCode.GDGreenEnemyObjects1.createFrom(runtimeScene.getObjects("GreenEnemy"));

gdjs.Testing_32SceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Testing_32SceneCode.GDGreenEnemyObjects1.length;i<l;++i) {
    if ( gdjs.Testing_32SceneCode.GDGreenEnemyObjects1[i].getVariableString(gdjs.Testing_32SceneCode.GDGreenEnemyObjects1[i].getVariables().getFromIndex(0)) == "right" ) {
        gdjs.Testing_32SceneCode.condition0IsTrue_0.val = true;
        gdjs.Testing_32SceneCode.GDGreenEnemyObjects1[k] = gdjs.Testing_32SceneCode.GDGreenEnemyObjects1[i];
        ++k;
    }
}
gdjs.Testing_32SceneCode.GDGreenEnemyObjects1.length = k;}if (gdjs.Testing_32SceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Testing_32SceneCode.GDGreenEnemyObjects1 */
{for(var i = 0, len = gdjs.Testing_32SceneCode.GDGreenEnemyObjects1.length ;i < len;++i) {
    gdjs.Testing_32SceneCode.GDGreenEnemyObjects1[i].addPolarForce(0, 300, 0);
}
}
{ //Subevents
gdjs.Testing_32SceneCode.eventsList0x70c41c(runtimeScene);} //End of subevents
}

}


{

gdjs.Testing_32SceneCode.GDGreenEnemyObjects1.createFrom(runtimeScene.getObjects("GreenEnemy"));

gdjs.Testing_32SceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Testing_32SceneCode.GDGreenEnemyObjects1.length;i<l;++i) {
    if ( gdjs.Testing_32SceneCode.GDGreenEnemyObjects1[i].getVariableString(gdjs.Testing_32SceneCode.GDGreenEnemyObjects1[i].getVariables().getFromIndex(0)) == "left" ) {
        gdjs.Testing_32SceneCode.condition0IsTrue_0.val = true;
        gdjs.Testing_32SceneCode.GDGreenEnemyObjects1[k] = gdjs.Testing_32SceneCode.GDGreenEnemyObjects1[i];
        ++k;
    }
}
gdjs.Testing_32SceneCode.GDGreenEnemyObjects1.length = k;}if (gdjs.Testing_32SceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Testing_32SceneCode.GDGreenEnemyObjects1 */
{for(var i = 0, len = gdjs.Testing_32SceneCode.GDGreenEnemyObjects1.length ;i < len;++i) {
    gdjs.Testing_32SceneCode.GDGreenEnemyObjects1[i].addPolarForce(180, 300, 0);
}
}
{ //Subevents
gdjs.Testing_32SceneCode.eventsList0x7021cc(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Testing_32SceneCode.eventsList0x5b6e18


gdjs.Testing_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Testing_32SceneCode.GDFiniteBlackSmokeEmitter2Objects1.length = 0;
gdjs.Testing_32SceneCode.GDFiniteBlackSmokeEmitter2Objects2.length = 0;
gdjs.Testing_32SceneCode.GDFiniteBlackSmokeEmitter2Objects3.length = 0;
gdjs.Testing_32SceneCode.GDFiniteWhiteSmokeEmitter2Objects1.length = 0;
gdjs.Testing_32SceneCode.GDFiniteWhiteSmokeEmitter2Objects2.length = 0;
gdjs.Testing_32SceneCode.GDFiniteWhiteSmokeEmitter2Objects3.length = 0;
gdjs.Testing_32SceneCode.GDFiniteYellowSmokeEmitterObjects1.length = 0;
gdjs.Testing_32SceneCode.GDFiniteYellowSmokeEmitterObjects2.length = 0;
gdjs.Testing_32SceneCode.GDFiniteYellowSmokeEmitterObjects3.length = 0;
gdjs.Testing_32SceneCode.GDFinitePinkSmokeEmitterObjects1.length = 0;
gdjs.Testing_32SceneCode.GDFinitePinkSmokeEmitterObjects2.length = 0;
gdjs.Testing_32SceneCode.GDFinitePinkSmokeEmitterObjects3.length = 0;
gdjs.Testing_32SceneCode.GDFiniteCyanSmokeEmitterObjects1.length = 0;
gdjs.Testing_32SceneCode.GDFiniteCyanSmokeEmitterObjects2.length = 0;
gdjs.Testing_32SceneCode.GDFiniteCyanSmokeEmitterObjects3.length = 0;
gdjs.Testing_32SceneCode.GDFiniteOrangeSmokeEmitterObjects1.length = 0;
gdjs.Testing_32SceneCode.GDFiniteOrangeSmokeEmitterObjects2.length = 0;
gdjs.Testing_32SceneCode.GDFiniteOrangeSmokeEmitterObjects3.length = 0;
gdjs.Testing_32SceneCode.GDFiniteGreenSmokeEmitterObjects1.length = 0;
gdjs.Testing_32SceneCode.GDFiniteGreenSmokeEmitterObjects2.length = 0;
gdjs.Testing_32SceneCode.GDFiniteGreenSmokeEmitterObjects3.length = 0;
gdjs.Testing_32SceneCode.GDFiniteRedSmokeEmitterObjects1.length = 0;
gdjs.Testing_32SceneCode.GDFiniteRedSmokeEmitterObjects2.length = 0;
gdjs.Testing_32SceneCode.GDFiniteRedSmokeEmitterObjects3.length = 0;
gdjs.Testing_32SceneCode.GDFinitePurpleSmokeEmitterObjects1.length = 0;
gdjs.Testing_32SceneCode.GDFinitePurpleSmokeEmitterObjects2.length = 0;
gdjs.Testing_32SceneCode.GDFinitePurpleSmokeEmitterObjects3.length = 0;
gdjs.Testing_32SceneCode.GDBlackSmokeEmitterObjects1.length = 0;
gdjs.Testing_32SceneCode.GDBlackSmokeEmitterObjects2.length = 0;
gdjs.Testing_32SceneCode.GDBlackSmokeEmitterObjects3.length = 0;
gdjs.Testing_32SceneCode.GDGreenEnemyObjects1.length = 0;
gdjs.Testing_32SceneCode.GDGreenEnemyObjects2.length = 0;
gdjs.Testing_32SceneCode.GDGreenEnemyObjects3.length = 0;
gdjs.Testing_32SceneCode.GDMushroomObjects1.length = 0;
gdjs.Testing_32SceneCode.GDMushroomObjects2.length = 0;
gdjs.Testing_32SceneCode.GDMushroomObjects3.length = 0;

gdjs.Testing_32SceneCode.eventsList0x5b6e18(runtimeScene);
return;

}

gdjs['Testing_32SceneCode'] = gdjs.Testing_32SceneCode;
