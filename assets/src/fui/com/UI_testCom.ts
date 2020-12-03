/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_testCom extends fgui.GComponent {

	public m_abc:fgui.GTextField;
	public static URL:string = "ui://cu1uq9ugh4et0";

	public static createInstance():UI_testCom {

		return <UI_testCom>(fgui.UIPackage.createObject("com", "testCom"));
	}

	 onConstruct():void {
		console.log("onConstruct",this)
		this.m_abc = <fgui.GTextField>(this.getChildAt(4));
	}
}
