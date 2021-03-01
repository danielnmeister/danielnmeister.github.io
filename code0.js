gdjs.IntroCode = {};
gdjs.IntroCode.GDBackgroundObjects1= [];
gdjs.IntroCode.GDBackgroundObjects2= [];
gdjs.IntroCode.GDNewObjectObjects1= [];
gdjs.IntroCode.GDNewObjectObjects2= [];
gdjs.IntroCode.GDControlsObjects1= [];
gdjs.IntroCode.GDControlsObjects2= [];
gdjs.IntroCode.GDNewObject2Objects1= [];
gdjs.IntroCode.GDNewObject2Objects2= [];
gdjs.IntroCode.GDBottomArrowRoundButtonObjects1= [];
gdjs.IntroCode.GDBottomArrowRoundButtonObjects2= [];
gdjs.IntroCode.GDLeftArrowRoundButtonObjects1= [];
gdjs.IntroCode.GDLeftArrowRoundButtonObjects2= [];
gdjs.IntroCode.GDRightArrowRoundButtonObjects1= [];
gdjs.IntroCode.GDRightArrowRoundButtonObjects2= [];
gdjs.IntroCode.GDTopArrowRoundButtonObjects1= [];
gdjs.IntroCode.GDTopArrowRoundButtonObjects2= [];
gdjs.IntroCode.GDLeftObjects1= [];
gdjs.IntroCode.GDLeftObjects2= [];
gdjs.IntroCode.GDRightObjects1= [];
gdjs.IntroCode.GDRightObjects2= [];
gdjs.IntroCode.GDUpObjects1= [];
gdjs.IntroCode.GDUpObjects2= [];
gdjs.IntroCode.GDDownObjects1= [];
gdjs.IntroCode.GDDownObjects2= [];
gdjs.IntroCode.GDMovementObjects1= [];
gdjs.IntroCode.GDMovementObjects2= [];
gdjs.IntroCode.GDShootObjects1= [];
gdjs.IntroCode.GDShootObjects2= [];
gdjs.IntroCode.GDSpaceBarObjects1= [];
gdjs.IntroCode.GDSpaceBarObjects2= [];
gdjs.IntroCode.GDSpaceObjects1= [];
gdjs.IntroCode.GDSpaceObjects2= [];
gdjs.IntroCode.GDCheatObjects1= [];
gdjs.IntroCode.GDCheatObjects2= [];

gdjs.IntroCode.conditionTrue_0 = {val:false};
gdjs.IntroCode.condition0IsTrue_0 = {val:false};
gdjs.IntroCode.condition1IsTrue_0 = {val:false};


gdjs.IntroCode.eventsList0 = function(runtimeScene) {

{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1", true);
}}

}


};

gdjs.IntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IntroCode.GDBackgroundObjects1.length = 0;
gdjs.IntroCode.GDBackgroundObjects2.length = 0;
gdjs.IntroCode.GDNewObjectObjects1.length = 0;
gdjs.IntroCode.GDNewObjectObjects2.length = 0;
gdjs.IntroCode.GDControlsObjects1.length = 0;
gdjs.IntroCode.GDControlsObjects2.length = 0;
gdjs.IntroCode.GDNewObject2Objects1.length = 0;
gdjs.IntroCode.GDNewObject2Objects2.length = 0;
gdjs.IntroCode.GDBottomArrowRoundButtonObjects1.length = 0;
gdjs.IntroCode.GDBottomArrowRoundButtonObjects2.length = 0;
gdjs.IntroCode.GDLeftArrowRoundButtonObjects1.length = 0;
gdjs.IntroCode.GDLeftArrowRoundButtonObjects2.length = 0;
gdjs.IntroCode.GDRightArrowRoundButtonObjects1.length = 0;
gdjs.IntroCode.GDRightArrowRoundButtonObjects2.length = 0;
gdjs.IntroCode.GDTopArrowRoundButtonObjects1.length = 0;
gdjs.IntroCode.GDTopArrowRoundButtonObjects2.length = 0;
gdjs.IntroCode.GDLeftObjects1.length = 0;
gdjs.IntroCode.GDLeftObjects2.length = 0;
gdjs.IntroCode.GDRightObjects1.length = 0;
gdjs.IntroCode.GDRightObjects2.length = 0;
gdjs.IntroCode.GDUpObjects1.length = 0;
gdjs.IntroCode.GDUpObjects2.length = 0;
gdjs.IntroCode.GDDownObjects1.length = 0;
gdjs.IntroCode.GDDownObjects2.length = 0;
gdjs.IntroCode.GDMovementObjects1.length = 0;
gdjs.IntroCode.GDMovementObjects2.length = 0;
gdjs.IntroCode.GDShootObjects1.length = 0;
gdjs.IntroCode.GDShootObjects2.length = 0;
gdjs.IntroCode.GDSpaceBarObjects1.length = 0;
gdjs.IntroCode.GDSpaceBarObjects2.length = 0;
gdjs.IntroCode.GDSpaceObjects1.length = 0;
gdjs.IntroCode.GDSpaceObjects2.length = 0;
gdjs.IntroCode.GDCheatObjects1.length = 0;
gdjs.IntroCode.GDCheatObjects2.length = 0;

gdjs.IntroCode.eventsList0(runtimeScene);
return;

}

gdjs['IntroCode'] = gdjs.IntroCode;
