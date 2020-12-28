/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_zmBtn extends fgui.GButton {

	public m_button:fgui.Controller;
	public m_n0:fgui.GImage;
	public m_n1:fgui.GImage;
	public static URL:string = "ui://cu1uq9ugb03x6k";

	public static createInstance():UI_zmBtn {
		return <UI_zmBtn>(fgui.UIPackage.createObject("com", "zmBtn"));
	}

	protected onConstruct():void {
		this.m_button = this.getController("button");
		this.m_n0 = <fgui.GImage>(this.getChild("n0"));
		this.m_n1 = <fgui.GImage>(this.getChild("n1"));
	}
}