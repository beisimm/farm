/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_LVPB extends fgui.GProgressBar {

	public m_n0:fgui.GImage;
	public m_bar:fgui.GImage;
	public static URL:string = "ui://cu1uq9ugb03x1t";

	public static createInstance():UI_LVPB {
		return <UI_LVPB>(fgui.UIPackage.createObject("com", "LVPB"));
	}

	protected onConstruct():void {
		this.m_n0 = <fgui.GImage>(this.getChild("n0"));
		this.m_bar = <fgui.GImage>(this.getChild("bar"));
	}
}