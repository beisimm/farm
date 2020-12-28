/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_jysBtn extends fgui.GButton {

	public m_button:fgui.Controller;
	public m_n0:fgui.GImage;
	public static URL:string = "ui://cu1uq9ugb03x1j";

	public static createInstance():UI_jysBtn {
		return <UI_jysBtn>(fgui.UIPackage.createObject("com", "jysBtn"));
	}

	protected onConstruct():void {
		this.m_button = this.getController("button");
		this.m_n0 = <fgui.GImage>(this.getChild("n0"));
	}
}