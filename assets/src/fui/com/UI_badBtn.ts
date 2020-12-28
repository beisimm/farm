/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_badBtn extends fgui.GButton {

	public m_button:fgui.Controller;
	public m_n0:fgui.GImage;
	public static URL:string = "ui://cu1uq9ugb03x1g";

	public static createInstance():UI_badBtn {
		return <UI_badBtn>(fgui.UIPackage.createObject("com", "badBtn"));
	}

	protected onConstruct():void {
		this.m_button = this.getController("button");
		this.m_n0 = <fgui.GImage>(this.getChild("n0"));
	}
}