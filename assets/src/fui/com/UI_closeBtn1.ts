/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_closeBtn1 extends fgui.GButton {

	public m_button:fgui.Controller;
	public m_n0:fgui.GImage;
	public static URL:string = "ui://cu1uq9ugb03x5z";

	public static createInstance():UI_closeBtn1 {
		return <UI_closeBtn1>(fgui.UIPackage.createObject("com", "closeBtn1"));
	}

	protected onConstruct():void {
		this.m_button = this.getController("button");
		this.m_n0 = <fgui.GImage>(this.getChild("n0"));
	}
}