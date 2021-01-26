/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_oneKeyAddBtn extends fgui.GButton {

	public m_button:fgui.Controller;
	public m_n0:fgui.GImage;
	public static URL:string = "ui://cu1uq9ugtyh37w";

	public static createInstance():UI_oneKeyAddBtn {
		return <UI_oneKeyAddBtn>(fgui.UIPackage.createObject("com", "oneKeyAddBtn"));
	}

	protected onConstruct():void {
		this.m_button = this.getController("button");
		this.m_n0 = <fgui.GImage>(this.getChild("n0"));
	}
}