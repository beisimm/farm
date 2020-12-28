/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_csBtn extends fgui.GButton {

	public m_button:fgui.Controller;
	public m_n3:fgui.GImage;
	public m_n2:fgui.GImage;
	public static URL:string = "ui://cu1uq9ugb03x6g";

	public static createInstance():UI_csBtn {
		return <UI_csBtn>(fgui.UIPackage.createObject("com", "csBtn"));
	}

	protected onConstruct():void {
		this.m_button = this.getController("button");
		this.m_n3 = <fgui.GImage>(this.getChild("n3"));
		this.m_n2 = <fgui.GImage>(this.getChild("n2"));
	}
}