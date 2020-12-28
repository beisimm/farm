/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_MaxBtn extends fgui.GButton {

	public m_button:fgui.Controller;
	public m_n0:fgui.GImage;
	public static URL:string = "ui://cu1uq9ugb03x68";

	public static createInstance():UI_MaxBtn {
		return <UI_MaxBtn>(fgui.UIPackage.createObject("com", "MaxBtn"));
	}

	protected onConstruct():void {
		this.m_button = this.getController("button");
		this.m_n0 = <fgui.GImage>(this.getChild("n0"));
	}
}