/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_settingBtn1 extends fgui.GComponent {

	public m_c1:fgui.Controller;
	public m_n17:fgui.GImage;
	public m_n19:fgui.GImage;
	public m_n20:fgui.GImage;
	public m_n18:fgui.GImage;
	public m_n21:fgui.GImage;
	public static URL:string = "ui://cu1uq9ugtyh3fk";

	public static createInstance():UI_settingBtn1 {
		return <UI_settingBtn1>(fgui.UIPackage.createObject("com", "settingBtn1"));
	}

	protected onConstruct():void {
		this.m_c1 = this.getController("c1");
		this.m_n17 = <fgui.GImage>(this.getChild("n17"));
		this.m_n19 = <fgui.GImage>(this.getChild("n19"));
		this.m_n20 = <fgui.GImage>(this.getChild("n20"));
		this.m_n18 = <fgui.GImage>(this.getChild("n18"));
		this.m_n21 = <fgui.GImage>(this.getChild("n21"));
	}
}