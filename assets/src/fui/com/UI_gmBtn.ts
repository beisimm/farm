/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_gmBtn extends fgui.GButton {

	public m_button:fgui.Controller;
	public m_n1:fgui.GImage;
	public m_n2:fgui.GImage;
	public static URL:string = "ui://cu1uq9ugb03x6q";

	public static createInstance():UI_gmBtn {
		return <UI_gmBtn>(fgui.UIPackage.createObject("com", "gmBtn"));
	}

	protected onConstruct():void {
		this.m_button = this.getController("button");
		this.m_n1 = <fgui.GImage>(this.getChild("n1"));
		this.m_n2 = <fgui.GImage>(this.getChild("n2"));
	}
}