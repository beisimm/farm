/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_tcBtn extends fgui.GButton {

	public m_button:fgui.Controller;
	public m_n0:fgui.GImage;
	public static URL:string = "ui://cu1uq9ugb03x1l";

	public static createInstance():UI_tcBtn {
		return <UI_tcBtn>(fgui.UIPackage.createObject("com", "tcBtn"));
	}

	protected onConstruct():void {
		this.m_button = this.getController("button");
		this.m_n0 = <fgui.GImage>(this.getChild("n0"));
	}
}