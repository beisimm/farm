/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_yesBtn extends fgui.GButton {

	public m_button:fgui.Controller;
	public m_c1:fgui.Controller;
	public m_n0:fgui.GImage;
	public m_n1:fgui.GTextField;
	public m_n2:fgui.GTextField;
	public m_n3:fgui.GTextField;
	public static URL:string = "ui://cu1uq9ugtyh380";

	public static createInstance():UI_yesBtn {
		return <UI_yesBtn>(fgui.UIPackage.createObject("com", "yesBtn"));
	}

	protected onConstruct():void {
		this.m_button = this.getController("button");
		this.m_c1 = this.getController("c1");
		this.m_n0 = <fgui.GImage>(this.getChild("n0"));
		this.m_n1 = <fgui.GTextField>(this.getChild("n1"));
		this.m_n2 = <fgui.GTextField>(this.getChild("n2"));
		this.m_n3 = <fgui.GTextField>(this.getChild("n3"));
	}
}