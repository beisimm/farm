/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_wyBtn extends fgui.GButton {

	public m_button:fgui.Controller;
	public m_n0:fgui.GImage;
	public static URL:string = "ui://cu1uq9ugtyh3g2";

	public static createInstance():UI_wyBtn {
		return <UI_wyBtn>(fgui.UIPackage.createObject("com", "wyBtn"));
	}

	protected onConstruct():void {
		this.m_button = this.getController("button");
		this.m_n0 = <fgui.GImage>(this.getChild("n0"));
	}
}