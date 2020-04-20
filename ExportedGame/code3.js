gdjs.OpeningSceneCode = {};
gdjs.OpeningSceneCode.GDBackgroundObjects1= [];
gdjs.OpeningSceneCode.GDBackgroundObjects2= [];
gdjs.OpeningSceneCode.GDBackgroundObjects3= [];
gdjs.OpeningSceneCode.GDFiniteGreenSmokeEmitterObjects1= [];
gdjs.OpeningSceneCode.GDFiniteGreenSmokeEmitterObjects2= [];
gdjs.OpeningSceneCode.GDFiniteGreenSmokeEmitterObjects3= [];
gdjs.OpeningSceneCode.GDLoopedGreenSmokeEmitterObjects1= [];
gdjs.OpeningSceneCode.GDLoopedGreenSmokeEmitterObjects2= [];
gdjs.OpeningSceneCode.GDLoopedGreenSmokeEmitterObjects3= [];
gdjs.OpeningSceneCode.GDTitleObjects1= [];
gdjs.OpeningSceneCode.GDTitleObjects2= [];
gdjs.OpeningSceneCode.GDTitleObjects3= [];
gdjs.OpeningSceneCode.GDCodingbyObjects1= [];
gdjs.OpeningSceneCode.GDCodingbyObjects2= [];
gdjs.OpeningSceneCode.GDCodingbyObjects3= [];
gdjs.OpeningSceneCode.GDMusicbyObjects1= [];
gdjs.OpeningSceneCode.GDMusicbyObjects2= [];
gdjs.OpeningSceneCode.GDMusicbyObjects3= [];
gdjs.OpeningSceneCode.GDSoundByObjects1= [];
gdjs.OpeningSceneCode.GDSoundByObjects2= [];
gdjs.OpeningSceneCode.GDSoundByObjects3= [];
gdjs.OpeningSceneCode.GDGraphicsByObjects1= [];
gdjs.OpeningSceneCode.GDGraphicsByObjects2= [];
gdjs.OpeningSceneCode.GDGraphicsByObjects3= [];
gdjs.OpeningSceneCode.GDGrahamObjects1= [];
gdjs.OpeningSceneCode.GDGrahamObjects2= [];
gdjs.OpeningSceneCode.GDGrahamObjects3= [];
gdjs.OpeningSceneCode.GDKennyObjects1= [];
gdjs.OpeningSceneCode.GDKennyObjects2= [];
gdjs.OpeningSceneCode.GDKennyObjects3= [];
gdjs.OpeningSceneCode.GDSoundimageObjects1= [];
gdjs.OpeningSceneCode.GDSoundimageObjects2= [];
gdjs.OpeningSceneCode.GDSoundimageObjects3= [];
gdjs.OpeningSceneCode.GDControlsObjects1= [];
gdjs.OpeningSceneCode.GDControlsObjects2= [];
gdjs.OpeningSceneCode.GDControlsObjects3= [];
gdjs.OpeningSceneCode.GDContrlsObjects1= [];
gdjs.OpeningSceneCode.GDContrlsObjects2= [];
gdjs.OpeningSceneCode.GDContrlsObjects3= [];
gdjs.OpeningSceneCode.GDIntroMillyObjects1= [];
gdjs.OpeningSceneCode.GDIntroMillyObjects2= [];
gdjs.OpeningSceneCode.GDIntroMillyObjects3= [];
gdjs.OpeningSceneCode.GDIntroSpidyObjects1= [];
gdjs.OpeningSceneCode.GDIntroSpidyObjects2= [];
gdjs.OpeningSceneCode.GDIntroSpidyObjects3= [];
gdjs.OpeningSceneCode.GDIntroPlayerObjects1= [];
gdjs.OpeningSceneCode.GDIntroPlayerObjects2= [];
gdjs.OpeningSceneCode.GDIntroPlayerObjects3= [];
gdjs.OpeningSceneCode.GDStarringObjects1= [];
gdjs.OpeningSceneCode.GDStarringObjects2= [];
gdjs.OpeningSceneCode.GDStarringObjects3= [];
gdjs.OpeningSceneCode.GDSpidyLegsObjects1= [];
gdjs.OpeningSceneCode.GDSpidyLegsObjects2= [];
gdjs.OpeningSceneCode.GDSpidyLegsObjects3= [];
gdjs.OpeningSceneCode.GDBartyIntroObjects1= [];
gdjs.OpeningSceneCode.GDBartyIntroObjects2= [];
gdjs.OpeningSceneCode.GDBartyIntroObjects3= [];
gdjs.OpeningSceneCode.GDMilIntroObjects1= [];
gdjs.OpeningSceneCode.GDMilIntroObjects2= [];
gdjs.OpeningSceneCode.GDMilIntroObjects3= [];
gdjs.OpeningSceneCode.GDIntroMushObjects1= [];
gdjs.OpeningSceneCode.GDIntroMushObjects2= [];
gdjs.OpeningSceneCode.GDIntroMushObjects3= [];
gdjs.OpeningSceneCode.GDPresskeytostartObjects1= [];
gdjs.OpeningSceneCode.GDPresskeytostartObjects2= [];
gdjs.OpeningSceneCode.GDPresskeytostartObjects3= [];

gdjs.OpeningSceneCode.conditionTrue_0 = {val:false};
gdjs.OpeningSceneCode.condition0IsTrue_0 = {val:false};
gdjs.OpeningSceneCode.condition1IsTrue_0 = {val:false};


gdjs.OpeningSceneCode.eventsList0x6c44ac = function(runtimeScene) {

{


gdjs.OpeningSceneCode.condition0IsTrue_0.val = false;
{
gdjs.OpeningSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) > 0;
}if (gdjs.OpeningSceneCode.condition0IsTrue_0.val) {
gdjs.OpeningSceneCode.GDBackgroundObjects2.createFrom(runtimeScene.getObjects("Background"));
{runtimeScene.getVariables().getFromIndex(0).sub(1);
}{for(var i = 0, len = gdjs.OpeningSceneCode.GDBackgroundObjects2.length ;i < len;++i) {
    gdjs.OpeningSceneCode.GDBackgroundObjects2[i].setOpacity(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)));
}
}}

}


{


{
}

}


}; //End of gdjs.OpeningSceneCode.eventsList0x6c44ac
gdjs.OpeningSceneCode.eventsList0x6c0574 = function(runtimeScene) {

{


gdjs.OpeningSceneCode.condition0IsTrue_0.val = false;
{
gdjs.OpeningSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) < 255;
}if (gdjs.OpeningSceneCode.condition0IsTrue_0.val) {
gdjs.OpeningSceneCode.GDBackgroundObjects1.createFrom(runtimeScene.getObjects("Background"));
{runtimeScene.getVariables().getFromIndex(1).add(1);
}{for(var i = 0, len = gdjs.OpeningSceneCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.OpeningSceneCode.GDBackgroundObjects1[i].setOpacity(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)));
}
}{gdjs.evtTools.sound.setSoundOnChannelVolume(runtimeScene, 1, gdjs.evtTools.sound.getSoundOnChannelVolume(runtimeScene, 1) - (0.5));
}}

}


}; //End of gdjs.OpeningSceneCode.eventsList0x6c0574
gdjs.OpeningSceneCode.eventsList0x743ea4 = function(runtimeScene) {

{


gdjs.OpeningSceneCode.condition0IsTrue_0.val = false;
{
gdjs.OpeningSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}if (gdjs.OpeningSceneCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(2).setNumber(2);
}}

}


}; //End of gdjs.OpeningSceneCode.eventsList0x743ea4
gdjs.OpeningSceneCode.eventsList0x5b7028 = function(runtimeScene) {

{


gdjs.OpeningSceneCode.condition0IsTrue_0.val = false;
{
gdjs.OpeningSceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.OpeningSceneCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(3);
}{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(2);
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(3);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(2).setNumber(1);
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Cyber-Rain.mp3", 1, false, 100, 1);
}}

}


{


gdjs.OpeningSceneCode.condition0IsTrue_0.val = false;
{
gdjs.OpeningSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 1;
}if (gdjs.OpeningSceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.OpeningSceneCode.eventsList0x6c44ac(runtimeScene);} //End of subevents
}

}


{


gdjs.OpeningSceneCode.condition0IsTrue_0.val = false;
{
gdjs.OpeningSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 2;
}if (gdjs.OpeningSceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.OpeningSceneCode.eventsList0x6c0574(runtimeScene);} //End of subevents
}

}


{


gdjs.OpeningSceneCode.condition0IsTrue_0.val = false;
{
gdjs.OpeningSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 255;
}if (gdjs.OpeningSceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Testing Scene", false);
}}

}


{


gdjs.OpeningSceneCode.condition0IsTrue_0.val = false;
{
gdjs.OpeningSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 0;
}if (gdjs.OpeningSceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.OpeningSceneCode.eventsList0x743ea4(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.OpeningSceneCode.eventsList0x5b7028


gdjs.OpeningSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.OpeningSceneCode.GDBackgroundObjects1.length = 0;
gdjs.OpeningSceneCode.GDBackgroundObjects2.length = 0;
gdjs.OpeningSceneCode.GDBackgroundObjects3.length = 0;
gdjs.OpeningSceneCode.GDFiniteGreenSmokeEmitterObjects1.length = 0;
gdjs.OpeningSceneCode.GDFiniteGreenSmokeEmitterObjects2.length = 0;
gdjs.OpeningSceneCode.GDFiniteGreenSmokeEmitterObjects3.length = 0;
gdjs.OpeningSceneCode.GDLoopedGreenSmokeEmitterObjects1.length = 0;
gdjs.OpeningSceneCode.GDLoopedGreenSmokeEmitterObjects2.length = 0;
gdjs.OpeningSceneCode.GDLoopedGreenSmokeEmitterObjects3.length = 0;
gdjs.OpeningSceneCode.GDTitleObjects1.length = 0;
gdjs.OpeningSceneCode.GDTitleObjects2.length = 0;
gdjs.OpeningSceneCode.GDTitleObjects3.length = 0;
gdjs.OpeningSceneCode.GDCodingbyObjects1.length = 0;
gdjs.OpeningSceneCode.GDCodingbyObjects2.length = 0;
gdjs.OpeningSceneCode.GDCodingbyObjects3.length = 0;
gdjs.OpeningSceneCode.GDMusicbyObjects1.length = 0;
gdjs.OpeningSceneCode.GDMusicbyObjects2.length = 0;
gdjs.OpeningSceneCode.GDMusicbyObjects3.length = 0;
gdjs.OpeningSceneCode.GDSoundByObjects1.length = 0;
gdjs.OpeningSceneCode.GDSoundByObjects2.length = 0;
gdjs.OpeningSceneCode.GDSoundByObjects3.length = 0;
gdjs.OpeningSceneCode.GDGraphicsByObjects1.length = 0;
gdjs.OpeningSceneCode.GDGraphicsByObjects2.length = 0;
gdjs.OpeningSceneCode.GDGraphicsByObjects3.length = 0;
gdjs.OpeningSceneCode.GDGrahamObjects1.length = 0;
gdjs.OpeningSceneCode.GDGrahamObjects2.length = 0;
gdjs.OpeningSceneCode.GDGrahamObjects3.length = 0;
gdjs.OpeningSceneCode.GDKennyObjects1.length = 0;
gdjs.OpeningSceneCode.GDKennyObjects2.length = 0;
gdjs.OpeningSceneCode.GDKennyObjects3.length = 0;
gdjs.OpeningSceneCode.GDSoundimageObjects1.length = 0;
gdjs.OpeningSceneCode.GDSoundimageObjects2.length = 0;
gdjs.OpeningSceneCode.GDSoundimageObjects3.length = 0;
gdjs.OpeningSceneCode.GDControlsObjects1.length = 0;
gdjs.OpeningSceneCode.GDControlsObjects2.length = 0;
gdjs.OpeningSceneCode.GDControlsObjects3.length = 0;
gdjs.OpeningSceneCode.GDContrlsObjects1.length = 0;
gdjs.OpeningSceneCode.GDContrlsObjects2.length = 0;
gdjs.OpeningSceneCode.GDContrlsObjects3.length = 0;
gdjs.OpeningSceneCode.GDIntroMillyObjects1.length = 0;
gdjs.OpeningSceneCode.GDIntroMillyObjects2.length = 0;
gdjs.OpeningSceneCode.GDIntroMillyObjects3.length = 0;
gdjs.OpeningSceneCode.GDIntroSpidyObjects1.length = 0;
gdjs.OpeningSceneCode.GDIntroSpidyObjects2.length = 0;
gdjs.OpeningSceneCode.GDIntroSpidyObjects3.length = 0;
gdjs.OpeningSceneCode.GDIntroPlayerObjects1.length = 0;
gdjs.OpeningSceneCode.GDIntroPlayerObjects2.length = 0;
gdjs.OpeningSceneCode.GDIntroPlayerObjects3.length = 0;
gdjs.OpeningSceneCode.GDStarringObjects1.length = 0;
gdjs.OpeningSceneCode.GDStarringObjects2.length = 0;
gdjs.OpeningSceneCode.GDStarringObjects3.length = 0;
gdjs.OpeningSceneCode.GDSpidyLegsObjects1.length = 0;
gdjs.OpeningSceneCode.GDSpidyLegsObjects2.length = 0;
gdjs.OpeningSceneCode.GDSpidyLegsObjects3.length = 0;
gdjs.OpeningSceneCode.GDBartyIntroObjects1.length = 0;
gdjs.OpeningSceneCode.GDBartyIntroObjects2.length = 0;
gdjs.OpeningSceneCode.GDBartyIntroObjects3.length = 0;
gdjs.OpeningSceneCode.GDMilIntroObjects1.length = 0;
gdjs.OpeningSceneCode.GDMilIntroObjects2.length = 0;
gdjs.OpeningSceneCode.GDMilIntroObjects3.length = 0;
gdjs.OpeningSceneCode.GDIntroMushObjects1.length = 0;
gdjs.OpeningSceneCode.GDIntroMushObjects2.length = 0;
gdjs.OpeningSceneCode.GDIntroMushObjects3.length = 0;
gdjs.OpeningSceneCode.GDPresskeytostartObjects1.length = 0;
gdjs.OpeningSceneCode.GDPresskeytostartObjects2.length = 0;
gdjs.OpeningSceneCode.GDPresskeytostartObjects3.length = 0;

gdjs.OpeningSceneCode.eventsList0x5b7028(runtimeScene);
return;

}

gdjs['OpeningSceneCode'] = gdjs.OpeningSceneCode;
